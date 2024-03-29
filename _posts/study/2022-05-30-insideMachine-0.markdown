---
layout: post
title:  "[인사이드 머신] - 0. 개요와 목차"
description: "인사이드 머신을 공부하는 이유와 목차"
date:   2022-05-30 19:10:00 +0900
categories: study
tags: [inside-the-machine]
img-tag: study
---

# 인사이드 머신 선정 이유
**컴퓨터 구조**는 개발을 하면서 **꼭 알아야할 CS 지식**이다.  
컴퓨터 구조는 매우 다양한 변화를 걸쳐 매우 복잡한 구조를 가지고 있어 처음부터 보면 이해하기가 어렵다.   

하지만 이 책은 컴퓨터를 단순 입력값에 결과만 나타내는 계산기 모델부터    
저장장치를 추가하고, 캐시를 추가하고 한단계씩 컴퓨터의 프로세서가 발전한 과정을 보여준다.     

가장 단순한 계산기 구조부터 한 단계씩 발전하는 과정을 보여주기 때문에    
컴퓨터 구조에 대한 각 요소에 대한 이해를 하기 쉽다.   

<br>

그리고 항상 발전 과정마다 왜 이렇게 발전시켰을까? 왜 이런 방법을 사용했을까?    
를 생각할 수 있기 때문에 최신의 컴퓨터 구조에서 이책에 없는 새로운 요소를 보더라도,    
이 요소가 생긴 이유와 역할에 대해 쉽게 이해하기가 쉽다.

<br>

또한 하드웨서/소프트웨어 상관없이 성능 향상을 위한 방법은 대게 비슷한 양상을 보인다고 생각한다.   
CPU 와 메인 메모리간의 속도 격차를 해소하기 위하여 중간에 저장요소를 추가한다거나 ( 캐시와 같은 )   
처리자를 병렬화 시키는 방법 등을 사용한다.   
실제로 소프트웨어 개발에서도 속도 향상을 위한 방법으로 중간 버퍼나,   
멀티 쓰레딩을 이용한 병렬화 방싱등을 많이 사용되고 있다.
실제 소프트웨어 개발에서도 활용할 수 있을거라 생각한다.

<br>

# 목차
1. [[인사이드 머신] 컴퓨터 동작의 기본 개념][inside1]
2. [[인사이드 머신] 프로그램 실행의 원리][inside2]
3. [[인사이드 머신] 병렬화를 통한 성능 향상 - 파이프라인][inside3]
4. [[인사이드 머신] 파이프라인 병렬화 - 수퍼스칼랑 수행][inside4]
5. [[인사이드 머신] 캐시와 분기예측을 이용한 성능 향상][inside5]
6. [[인사이드 머신] 프론트엔드와 백엔드의 분리 - 스케쥴링][inside6]
7. [[인사이드 머신] 명령어 수준 병렬성 을 위한 노력 - 트레이스 캐시][inside7]
9. [[인사이드 머신] 캐시와 시스템 성능][inside8]
10. [[인사이드 머신] 프로세서의 병렬화 - 코어 듀오, 코어2 듀오의 등장][inside9]


# 보충
1. [[인사이드 머신] 마이크로아키텍쳐와 ISA][inside-ISA]
2. [[인사이드 머신] 파이프라인 해저드][inside-hazard]
2. [[인사이드 머신] 64비트 컴퓨터의 등장][inside-64]


[inside1]: /study/2022/05/30/insideMachine-1.html
[inside2]: /study/2022/05/30/insideMachine-2.html
[inside3]: /study/2022/05/30/insideMachine-3.html
[inside4]: /study/2022/05/30/insideMachine-4.html
[inside5]: /study/2022/05/30/insideMachine-5.html
[inside6]: /study/2022/05/30/insideMachine-6.html
[inside7]: /study/2022/05/30/insideMachine-7.html
[inside8]: /study/2022/05/30/insideMachine-8.html
[inside9]: /study/2022/05/30/insideMachine-9.html

[inside-ISA]: /study/2022/05/30/insideMachine-ISA.html
[inside-hazard]: /study/2022/05/30/insideMachine-hazard.html
[inside-64]: /study/2022/05/30/insideMachine-64bit.html