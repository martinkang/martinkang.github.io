---
layout: post
title:  "[CSS] - Display 속성 flex [flex item]"
description: "CSS 의 Display 속성 flex 의 flex item 속성에 대해 알아보자."
date:   2022-02-12 17:20:00 +0900
categories: study
tags: [css, Front-End]
img-tag: css
---

<script defer src="/public/js/iframe.js"></script>

# flex item 속성
flex container 내의 flex item 에 각각 지정하는 속성이다.  
flex container 속성을 잘 모른다면 [[CSS] - Display 속성 flex [flex container]][display2-link] 를 읽어보자.  


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

<br>
<iframe class="code-box" src="/assets/html/base-layout/flex-basis.html"></iframe>


### flex-direction: row
주축이 row 방향이므로 flex-basis 값은 width 값으로 적용이 된다.  
따라서 width 값이 50px 이지만 flex-basis 값이 100px 이므로 width 값은 100px 가 된다.  

![basis-row](/assets/img/post-img/base-layout/basis-row.png ){:class="lazyload" .post-img .img-w700} 


### flex-direction: column
주축이 column 방향이므로 flex-basis 값은 height 값으로 적용이 된다.  
따라서 height 값이 50px 이지만 flex-basis 값이 100px 이므로 height 값은 100px 가 된다.   

![basis-column](/assets/img/post-img/base-layout/basis-column.png ){:class="lazyload" .post-img .img-w700} 




## flex-grow 속성
flex-grow 값이 양수로 지정하면 flex 항목별로 주축 방향 크기가 flex-basis 값 이상으로 늘어날 수 있다.  
- 속성
    - 0 또는 음수 
        - flex-basis 값을 따른다
    - 1 또는 양수 
        - 주축 방향에 남은 공간에 따라 flex-basis 값 이상 늘어날 수 있다.
            - flex-basis 값으로 배치시 주축 공간으로 100 px 공간이 남는다면, 이 100px 를 각 item 에 나누어 분배한다.
  



<br>

### 같은 flex container 안의 flex-item 의 flex-grow 값이 모두 같을 때

아래 버튼을 눌러 직접 확인해보자.
```
.flex-container { width: 500px; } // class 가 flex-container 인 아이템에 적용
.flex-item { flex-basis: 50px; } // class 가 flex-item 인 아이템에 적용
```

<iframe class="code-box" src="/assets/html/base-layout/flex-grow.html"></iframe>
<br>

주축이 row 일때 각 flex-item 의 flex-basis 는 50px, flex-container 의 width 는 500px 이므로  
flex-grow 값이 0 또는 음수이면 남은 공간은 아래와 같이 300px 가 된다.   

![grow0](/assets/img/post-img/base-layout/grow.png ){:class="lazyload" .post-img .img-w700}   

각 flex-item 의 flex-grow 값을 1 또는 양수로 지정할 경우 ( flex-item 모두 동일한 값으로 )  
남은 공간 300px 를 item 갯수만큼 나눈 값 (***75px***) 를   
추가로 flex-item 마다 배분하여 주축방향을 모두 채우게 된다.   

![grow1](/assets/img/post-img/base-layout/grow-2.png ){:class="lazyload" .post-img .img-w700} 

<br>

### 같은 flex container 안의 flex-item 의 flex-grow 값이 서로 다를때

flex-grow 의 값이 양수일때 이 값은 각 item 마다 해당 값은 남은 공간을 배분할 비율을 나타낸다.
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


주축이 row 일때 각 flex-item 의 flex-basis 는 50px, flex-container 의 width 는 500px 이므로    
flex-grow 값이 0 또는 음수이면 남은 공간은 300px 가 된다.    
flex-grow 는 비율이므로, 0 인 item3을 제외하고 모두 더하면 6 이며,     
***각 item 의 flex-grow/6 만큼 남은 공간을 가져가 배분***한다.     

<br>
- item1 은 남은 공간 300px 중 2/6 만큼 (100px) 를 가져가 150px 가 된다.
- item2 은 남은 공간 300px 중 1/6 만큼 (50px) 를 가져가 100px 가 된다.
- item3 은 flex-grow 가 0 이므로 원래 크기 50px 가 된다.  
- item4 은 남은 공간 300px 중 3/6 만큼 (150px) 를 가져가 200px 가 된다.


![grow2](/assets/img/post-img/base-layout/grow-3.png ){:class="lazyload" .post-img .img-w700} 
  

## flex-shrink 속성
주축의 공간이 부족할때 각 아이템의 사이즈를 줄이는 속성이다.   
flex container 가 flex-item 을 모두 포함할 만큼 크지 않을때,     
flex-shrink 값이 양수이면 flex 아이템은 flex-basis에 지정된 크기보다 작아진다.   
flex-shrink 값은 비율로, 비율이 커질수록 아이템의 사이즈가 더 많이 줄어든다.    
  
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

주축 방향이 row 일때 flex-basis 가 200px 이므로 총 크기는 800px 이다.    
하지만 flex-container 의 크기는 500px 이므로 300px 가 모자르다.   
flex-grow 는 비율이므로, 0 인 item3을 제외하고 모두 더하면 6 이며,    
***각 item 의 flex-shrink/6 만큼 해당 item 의 크기를 줄인다***.    

<br>

- item1 은 부족한 공간 300px 중 2/6 만큼 (100px) 를 가져가 100px 가 된다.  
- item2 은 남은 공간 300px 중 1/6 만큼 (50px) 를 가져가 150px 가 된다.  
- item3 은 flex-shrink 가 0 이므로 원래 크기 200px 가 된다.    
- item4 은 남은 공간 300px 중 3/6 만큼 (150px) 를 가져가 50px 가 된다.  


![shrink](/assets/img/post-img/base-layout/shrink.png ){:class="lazyload" .post-img .img-w700} 

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
- MDN Web Docs: [flexbox의 기본 개념][flex-box-link]
- MDN Web Docs: [display 문서][display-link]
- Naver D2 : [flexbox로 만들 수 있는 10가지 레이아웃][naver-flex-link]




[flex-box-link]: https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
[display-link]: https://developer.mozilla.org/ko/docs/Web/CSS/display
[naver-flex-link]: https://d2.naver.com/helloworld/8540176

[display2-link]: /study/2022/02/11/css-display2.html

