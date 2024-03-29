---
layout: post
title:  "[인사이드 머신] - 4. 파이프라인 병렬화 - 수퍼스칼랑 수행"
description: "코드처리의 병렬화를 통한 처리 성능 향상원리를 알아본다."
date:   2022-05-30 19:50:00 +0900
categories: study
sub-categories: 컴퓨터구조
keyword: [컴퓨터구조, pipeline, super-scalar]
tags: [inside-the-machine, pipeline, super-scalar]
img-tag: study
---
# 수퍼스칼라
[3. 병렬화를 통한 성능 향상 - 파이프라인][inside3] 에서는    
fetch-execute cycle 의 병렬화 하는 과정을 보았다.  
이번에는 코드를 병렬로 처리해서 컴퓨터의 처리 속도를 올려주는 방법에 대해 알아본다.    


# 수퍼스칼라 컴퓨터

## 정의
- 하나의 칩에 여러 개의 ALU 를 탑재해서, 코드를 병렬로 처리할 수 있는 컴퓨터.
    - 반도체의 <span class="tooltip" id="id-1">집적도</span>가 높아짐에 따라   
    하나의 칩에 집적될 수 있는 트랜지스터의 수가 기하급수적으로 증가.  
    - 이로 인해 하나의 칩에 여러 ALU 를 탑재하여 동시에 1개 이상의 스칼라 연산(정수 연산) 가능. 
- 2개 이상의 ALU 를 가지고 있기 때문에 **2개 이상의 정수 연산을 병렬적으로 실행 가능**하다.
    - **n-way 수퍼스칼라** 라고도 한다.


![n-way](/assets/img/study-img/inside-machine/n-way-super.png ){:class="lazyload" .post-img .img-w400 }
*2-Way 수퍼스칼라*

- n 개의 ALU 는 레지스터 파일을 공유한다.
- 그림을 보면 **n-way 와 관계없이** 메인메모리에는 **코드, 명령어, 결과 스트림이 1개씩만 존재**한다.


<br>

## 디스패치( dispatch )
- 2 개 이상의 명령어가 병렬로 처리도리 수 있는지 판단하는 과정.


![dispather](/assets/img/study-img/inside-machine/2-way-dispather.png ){:class="lazyload" .post-img .img-w400 }
*2-way 수퍼스칼라의 파이프라인*


### 기존의 파이프라인 디코드가 디코드/디스패치로 변경.
- 이전 디코드 단계에서 2개 이상의 명령어가 병렬로 처리될 수 있는지 판단하는 과정이 추가됨.
    - **디코드와 디스코드 두 과정이 1클럭 안에 처리**할 수 있으므로 하나의 스테이지로 표기.
- 만약 2개 이상의 명령어가 병렬로 수행될 수 있다고 판단되면,  
**디스패치 유닛은 각 명령어를 서로 다른 ALU 에서 병렬로 처리**되도록 한다.   
    - 아닌 경우에는 2개의 명령어가 본래 명령어 순서대로 순차 처리.
- 병렬 처리를 하게 되더라도( 내부적인 프로세서의 구성이 완전히 달라지더라도 )   
프로그래머는 동일한 인터페이스를 사용해서 프로그램을 작성.
    - **수퍼스칼라 CPU 역시 순차 수행 모델을 철저히 준수**해야 한다.


# 수퍼스칼라 수행과 IPC
- 수퍼스칼라 컴퓨터를 사용하면 클럭당 1개 이상의 명령어를 완료할 수 있다.
    - 기존 파이프라인 프로세서에서 이론상 최대 명령어 산출량은 클럭당 1개.
- n-웨이 수퍼스칼라의 경우 **이론상 클럭당 n개의 명령어를 완료**할 수 있다.


![super-scalar-pipeline](/assets/img/study-img/inside-machine/super-scalar-pipeline.png ){:class="lazyload" .post-img .img-w600 }
*2-way 수퍼스칼라의 프로세서의 파이프라인*

- 프로세서가 n개의 명령어를 동시에 수행하기 위해서는,   
 n개의 명령어를 한꺼번에 페치하고 디코드 할 수 있어야 한다.
    - ex) 명령어의 크기가 2바이트일때
        1. 2-way 수퍼스칼라 프로세서는 **매 클럭 사이클마다 2개의 명령어를 메모리에서 페치**해온다.
        2. 2개의 명령어를 디코드, 디스패치 한다.
        3. 프로그램 카운터를 **4바이트 증가**시킨다.
- 그러면 n-way 수퍼스칼라는 항상 성능을 향상시킬까?   
이에 대해서는 아래 **[병렬처리와 해저드][inside-hazard]**에서 다룬다.

<br>

# 파이프라인 및 수퍼스칼라 설계에 따른 변화
- 두 명령어가 동시에 **병렬적으로 수행되지 못한 경우** 이런 조건을 **해저드**라고 한다.
    -  **[병렬처리와 해저드][inside-hazard]를 보자. 꼭 보자.**

<br>

# 다음 주제
[[인사이드 머신] 캐시와 분기예측을 이용한 성능 향상][inside5]

<hr>

# 부록 - 수퍼스칼라의 수행 유닛

### 수행유닛( execution unit )
    - 프로세서의 백엔드에 있는 하드웨어.
    - 특정 형태의 명령어를 실제로 수행하는 하드웨어.


### 기본적인 숫자 포맷과 산술 연산
- 현대 마이크로프로세서가 처리하는 숫자의 종류는 크게 다음과 같다
    - 정수( fixed point, 고정 소수점 )
        - 정수 관련 산술, 논리 연산들은 마이크로프로세서에서 **가장 빨리 처리**할 수 있는 단순한 연산들이다.
    - <span class="tooltip" id="id-2">부동</span>소수점( floating point )
        - 유리수를 십진수로 나타낸 것.
        - 부동소수점 수로 나타낼 수 있는 수의 정확도는 제한되어 있음.
            - 많은 경우 부동소수점 표현은 **실제값의 근사치**.
        - **정수 연산에 비해 복잡하고 느리다**.
- 정수와 부동소수점 수는 각각 다시 벡터와 스칼라로 나뉨.
    - Scalar - Scalar
        - 하나의 수만을 가진 형태.
    - Vector - 벡터
        - 순열이나 배열에서 자주 볼 수 있는 여러 숫자가 합쳐진 형태
- 데이터는 위의 4가지 형태( 정수 스칼라, 부동소수 스칼라, 정수 벡터, 부동 소수 벡터 )로 나눌 수 있다.
    - 코드는 위의 4가지 형태를 처리하는 명령어들로 나눌 수 있다.
    - 4종류의 데이터 연산은 산술 연산과 논리 연산으로 나눌 수 있다.
        - 산술 연산
            - 덧셈, 뺄셈, 곳셈, 나눗셈과 같이 숫자들에 관해서 수행되는 연산
        - 논리 연산
            - AND, OR, NOT, XOR 그리고 비트 쉬프트와 같은 연산들.
            - 이 연산들은 정수 스칼라, 정수 벡터, 특수 레지스터( PSW ) 에 적용된다.

![type](/assets/img/study-img/inside-machine/type.png ){:class="lazyload" .post-img .img-w450 }
*숫자 형식과 연산 현태 분류*

<br>

### 산술 논리 유닛
- 마이크로프로세서 초기에는 모든 산술 연산과 논리 연산이 1 개의 ALU 에 의해서 처리되었다.
- 부동소수점 연산은 산술 보조 처리기( arithmetic coprocesser ) 라고 하는 별도의 칩에서 처리되었지만,   
시간이 지남에 따라 부동 소수연산 부분은 CPU 의 수행 유닛으로 통합되었다.


![pentium](/assets/img/study-img/inside-machine/intel-pentium.png ){:class="lazyload" .post-img .img-w400 }
*부동소수점 유닛이 추가된 컴퓨터*

<br>


- 일반적으로 ALU 는 모든 데이터 타입을 처리하는 수행유닛이고,  
 특정 형태의 명령어를 처리하는 ALU 를 나타낼 때는 별도의 이름을 사용한다.
    - 정수 수행 유닛 ( IU : Integer Unit  )
        - SIU ( Simple IU ), CIU ( Complex IU )
    - 부동소수점 수행 유닛 ( FPU : Floating Point Unit )

### 메모리 접근 유닛
- 로드 스토어 유닛 ( LSU : Load Store Unit )
    - 메모리 주소 생성과 로드와 스토어 명령어 처리를 담당.
    - 보통 LSU 에는 메모리 주소를 빠르게 계산할 수 있도록 별도의 정수 가산기가 있다.
        - 메모리 주소는 정수이므로.
- 분기 수행 유닛 ( BEU : Branch Execution Unit )
    - 조건 분기와 무조건 분기를 담당.
    - 대부분 BEU 역시 주소 생성 유닛을 가지고 있다.





<hr>

<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    한 개의 집적 회로에 편성되어 있는 소자의 수.
    </div>
    <div class="tooltip-description" id="desc-2">
    소수점의 위치가 물에 떠다니는 것 처럼 고정되어 있지 않다는 뜻.
    </div>
</div>

[inside-hazard]: /study/2022/05/30/insideMachine-hazard.html
[inside3]: /study/2022/05/30/insideMachine-3.html
[inside5]: /study/2022/05/30/insideMachine-5.html
