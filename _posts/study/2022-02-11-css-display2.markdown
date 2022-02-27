---
layout: post
title:  "[CSS] - Display 속성 [flex]"
description: "CSS 의 Display 속성 flex 에 대해 알아보자."
date:   2022-02-11 17:20:00 +0900
categories: study
tags: [css, Front-End]
img-tag: css
---

<script defer src="/public/js/iframe.js"></script>

# flex 의 기본 개념
- flexbox 라고도 한다.
- flexbox 내의 아이템간 배치와, 정렬 기능을 제공하기 위한 1차원 레이아웃 모델
    - 1차원이란 의미는 하나의 flex box 는 row 아니면 colum 단위로 제공한다는 의미. 
- flexbox 는 container 와 item 으로 구성되어있다.
    - container :  flexbox가 놓여있는 영역을 말한다.


![flex-def](/assets/img/post-img/base-layout/flex-def.png){:class="lazyload" .post-img .img-w400} 

## flex, inline-flex
- block, inline-block 과 동일한 관계로 flex container 끼리 배치를 지정하는 값
    - inline 일경우, flex container 끼리 한줄로 배치가 되며, flex 는 한줄을 차지하게 된다.   

![flex-base](/assets/img/post-img/base-layout/flex.png){:class="lazyload" .post-img .img-w400} 


# flex container 속성
flexbox 의 flex container 설정값이다.

- display 속성값을 flex 로 설정하고, 다른 속성을 지정하지 않을 경우 기본값은 아래와 같다.  
    - flex-direction : row
        - 아이템들이 좌 -> 우 방향으로 배치된다.
    - item 은 주축의 시작 선에서 시작
        - 특별한 경우를 제외 :  좌측이 시작선 
        - 아랍어 : 우측이 시작선
    - item 은 주축 위에서 늘어나지는 않지만 줄어들 수 있음
        - item 들이 주축의 크기를 넘을 경우 item 의 크기가 줄어든다.
    - item 은 교차축의 크기를 채우기 위해 늘어남
        - 교차축 크기중 가장 큰 item 만큼 다른 item 의 크기도 늘어난다.
    - flex-basis : auto
        - 각 item 의 주축 크기 기본값. auto 일 경우 해당 item 의 컨텐츠 크기만큼.
    - flex-wrap : nowrap
        - item 들이 주축 크기를 넘어설 경우 넘치게 된다.

<br>

## flex-direction
아이템을 배치하는 방향을 지정.

### 주축
flex-direction 으로 지정 가능한 축으로, 아이템들이 배치되는 방향을 뜻한다.

- 주축 속성
    - row
    - row-reverse
    - column
    - column-reverse


### 교차축
- 주축과 수직으로 교차되는 축.

<br>

### flex-direction 이 row, row-reverse 일때 주축과 교차축
![flex-base](/assets/img/post-img/base-layout/flex-direction-row.png ){:class="lazyload" .post-img .img-w600} 

<br>

### flex-direction 이 column, column-reverse 일때 주축과 교차축
![flex-base](/assets/img/post-img/base-layout/flex-direction-column.png ){:class="lazyload" .post-img .img-w600} 


<br>

## flex-wrap
flexbox 는 기본적으로 1차원, 즉 한 축만을 표현하지만,   
이 item 을 여러 행 또는 열에 나열되도록 변경할 수 있다.   
이렇게 여러 행/열에 나열시킬 경우 각 행/열이 새로운 flex container 가 된다.   
공간 배분 속성은 각 행/열에서 독립적으로 이루어진다.

- 속성
    - wrap
        - item 들이 주축보다 커질 경우, 다음 행/열 에 배치
    - nowrap
        - item 들이 주축보다 커져도, 그 축에 그대로 배치.
            - 이 때 각 item 의 크기는 item 설정값에 따라 줄어들거나, 주축을 넘쳐흘러 안보이게 된다.  

<br>
아래 버튼을 눌러 직접 확인해보자.

<iframe class="code-box" src="/assets/html/base-layout/flex-wrap.html"></iframe>

<br>

## flex-flow : 축약형 속성
flex-direction 과 flex-wrap 속성을 flex-flow 의 속성값으로 축약시킬 수 있다.  
flex-flow 값의 첫번째 값은 direction 이고 두번째 값은 wrap 값을 나타낸다.  

<br>

예를들어 아래와 같은 속성값이 있을때  
```
flex-direction: row;
flex-wrap: wrap;
```
이 속성값은 아래와 같이 flex-flow 로 축약 가능하다
```
flex-flow: row wrap;
```

<br>

## flex container 의 item 정렬 속성

### align-items : 교차축 정렬
교차축을 따라 item 을 정렬하는 속성

- 속성
    - stretch
        - contianer 안의 item 이 최대 크기만큼 늘어난다.
            - item 의 height 값이 지정되있을 경우 늘어나지 않는다.
    - flex-start
        - 교차축의 시작지점부터 정렬.
            - 특별한 경우를 제외하곤 시작지점
                - flex-direction : row 일때 상측
                - flex-direction : column 일때 좌측
    - flex-end
        - 교차축의 끝 지점으로 정렬
    - center
        - 교차축의 중앙으로 정렬

<br>
아래 버튼을 눌러 직접 확인해보자.

<iframe class="code-box" src="/assets/html/base-layout/flex-align-item.html"></iframe>


### justify-content : 주축 정렬
교차축을 따라 item 을 정렬하는 속성

- 속성
     - flex-start
        - 주축의 시작지점부터 정렬.
            - 특별한 경우를 제외하곤 시작지점
                - flex-direction : row 일때 좌측
                - flex-direction : column 일때 상측
    - flex-end
        - 주축의 끝 지점으로 정렬
    - center
        - 주축의 중앙으로 정렬
    - space-around
        - 주축의 여유 공간을 각 item 좌우/상하 공간에 균등 배분
    - space-between
        - 주축의 여유 공간을 item 들 사이 공간 균등 배분.
    - space-evenly
        - 주축의 여유 공간을 시작, 끝, item 사이 모든 공간 균등 배분

<br>
아래 버튼을 눌러 직접 확인해보자.

<iframe class="code-box" src="/assets/html/base-layout/flex-justify-content.html" ></iframe>



# flex item 속성

## flex-basis 속성
각 item 에 지정하는 속성으로 item 의 주축방향 크기 기본값이다
- flex-direction : row 
    - 주축이 row 방향이므로 witdh 크기가 변경된다
- flex-direction : column
    - 주축이 column 방향이므로 height 크기가 변경된다

<br>
아래 버튼을 눌러 직접 확인해보자.
``` 
.flex-container { width: 500px; } // class 가 flex-container 인 아이템에 적용
.flex-item  // class 가 flex-item 인 아이템에 적용
{ 
    width: 50px; 
    height: 50px;
    flex-basis: 100px;
}
```

<iframe class="code-box" src="/assets/html/base-layout/flex-basis.html"></iframe>

## flex-grow 속성
flex-grow 값이 양수로 지정하면 flex 항목별로 주축 방향 크기가 flex-basis 값 이상으로 늘어날 수 있다. 
- 속성
    - 0 또는 음수 
        - flex-basis 값을 따른다
    - 1 또는 양수 
        - 주축 방향에 남은 공간에 따라 flex-basis 값 이상 늘어날 수 있다.
            - flex-basis 값으로 설정 시 100 px 공간이 남는다면, 이 100px 를 각 item 에 나누어 분배한다.
  



<br>

아래 버튼을 눌러 직접 확인해보자.
```
.flex-container { width: 500px; } // class 가 flex-container 인 아이템에 적용
.flex-item { flex-basis: 50px; } // class 가 flex-item 인 아이템에 적용
```

<iframe class="code-box" src="/assets/html/base-layout/flex-grow.html"></iframe>
모든 item 이 같은 flex-grow 값을 가질때, 0 또는 양수 값만이 의미를 가진다. 

<br>

flex-grow 의 값이 양수일때 각 item 마다 해당 값은 남은 공간을 배분할 비율을 나타낸다.
- flex-basis 값으로 설정 시 100 px 공간이 남았을 때, 
    - item1 의 flex-grow: 3
    - item2 의 felx-grow: 2     
  

위와 같은 상황에서 item1 은 60px 를 가져가고, item2 는 40px 를 가져간다.

<br>

그럼 아래와 같이 각 item 의 grow 값을 다음과 같이 했을때 아래 버튼을 눌러 직접 확인해보자.
```
.flex-container { width: 500px; } // class 가 flex-container 인 아이템에 적용
.flex-item { flex-basis: 50px; } // class 가 flex-item 에 적용되는 값
#item1 { flex-grow: 2; } // id 가 item1 인 item 적용되는 값
#item2 { flex-grow: 1; } // id 가 item2 인 item 적용되는 값
#item3 { flex-grow: 0; } // id 가 item3 인 item 적용되는 값
#item4 { flex-grow: 3; } // id 가 item4 인 item 적용되는 값
```
<iframe class="code-box" src="/assets/html/base-layout/flex-grow2.html"></iframe>
  

## flex-shrink 속성
주축의 공간이 부족할때 각 아이템의 사이즈를 줄이는 속성. 
flex 컨테이너가 flex 아이템을 모두 포함할만한 공간을 갖고 있지 않고   
flex-shrink 값이 양수이면 flex 아이템은 flex-basis에 지정된 크기보다 작아진다. 
flex-shrink 값이 클수록 아이템의 사이즈가 더 많이 줄어든다.

<br>
아래 버튼을 눌러 직접 확인해보자.
```
.flex-container { width: 500px; height: 400px; } // class 가 flex-container 인 아이템에 적용
.flex-item { flex-basis: 200px; }  // class 가 flex-item 인 아이템에 적용
#item1 { flex-shrink: 2; } // id 가 item1 인 item 적용되는 값
#item2 { flex-shrink: 1; } // id 가 item2 인 item 적용되는 값
#item3 { flex-shrink: 0; } // id 가 item3 인 item 적용되는 값
#item4 { flex-shrink: 3; } // id 가 item4 인 item 적용되는 값
```

<iframe class="code-box" src="/assets/html/base-layout/flex-shrink.html"></iframe>


## flex : 축약형 속성 
flex-grow, flex-shrink, flex-basis 속성을 flex 의 속성값으로 축약시킬 수 있다.  
( flex container 값과 다르게 각 item 에 지정해야 한다 )   
flex 의 값은 flex-grow, flex-shrink, flex-basis 순서로 지정된다.

<br>

예를들어 아래와 같은 속성값이 있을때  
```
flex-grow: 2;
flex-shrink: 1;
flex-basis: 200px;
```
이 속성값은 아래와 같이 flex 로 축약 가능하다
```
flex: 2 1 200px;
```

<br>


<br>

더 디테일하게 flex 를 사용하기 위해선 아래 참조 링크를 찾아가보자.  
<hr>

# 참조
- MDN Web Doc : [flexbox의 기본 개념][flex-box-link]
- MDN Web Doc : [display 문서][display-link]
- Naver D2 : [flexbox로 만들 수 있는 10가지 레이아웃][naver-flex-link]




[flex-box-link]: https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
[dom-link]: https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%84%9C_%EA%B0%9D%EC%B2%B4_%EB%AA%A8%EB%8D%B8
[display-link]: https://developer.mozilla.org/ko/docs/Web/CSS/display
[flex-link]: https://studiomeal.com/archives/197
[naver-flex-link]: https://d2.naver.com/helloworld/8540176
[display-1min-link]: https://studiomeal.com/archives/282
[Position-Flexbox-link]: https://beautifulcss.com/archives/2812
[base-page-link]: /develop/2022/01/15/blog-base-page.html
[config-link]: /develop/2022/01/20/blog-start-github-config.html
[jekyll-link2]: /develop/2021/12/21/blog-start-jekyll2.html

