---
layout: post
title:  "[CSS] CSS Box Model 와 box-sizing 속성"
description: "CSS Box Model 의 정의와 이 Box 의 크기 기준을 정하는 box-sizing 에 대해 알아보자"
date:   2022-03-14 13:20:00 +0900
categories: study
tags: [css, Front-End]
img-tag: css
---
<script defer src="/public/js/iframe.js"></script>


# CSS Box Model
>문서의 레이아웃을 계산할 때, 브라우저의 렌더링 엔진은 표준 CSS 기본 박스 모델에 따라 각각의 요소를 사각형 박스로 표현합니다.   
CSS는 박스의 크기, 위치, 속성(색, 배경, 테두리 모양 등)을 결정합니다.
<cite>MDN Web Docs- CSS 기본 박스 모델 입문</cite>

<br>

즉 CSS Box Model 은 각각의 요소를 박스로 표현하는 Model 이다.  
각 요소는 하나의 CSS Box 가 된다.   
이 CSS Box Mode 은 네가지 영역으로 나뉜다.   
- Content 영역
    - 글이나 그림등 실제 내용
- Paddign 영역
    - 안쪽 여백
- Border 영역
    - 바깥 테두리
- Margin 영역
    - 테두리 바깥의 여백


![css-box-model](/assets/img/post-img/base-layout/css-box-model.png){:class="lazyload" .post-img .img-w400}

<br> 

요소의 크기는 보통 Content + Padding + Border 까지를 뜻한다.  
( Margin 은 요소끼리의 여백이므로 요소의 크기에 포함이 안된다. )  
아래 그림에서 가장 안쪽의 하늘색 박스가 Content 영역이다.  


# box-sizing
box-sizing 은 box 의 크기 기준을 어디에 둘지 정하는 속성이다.  
속성값으로는 다음과 같다.   
- content-box
    - 기본값
    - Content 영역을 기준으로 크기를 정함
- border-box 
    - border 즉 테두리 기준으로 크기를 정함
- inherit
    - 부모 요소에 상속 받음

<br>
아래에 각각 속성값에 대한 요소의 width, height 값 변화와 예제를 보자.  

<br>

### content-box 
***width 와 height 속성값은 Content 의 너비와 높이가 된다.***  
즉 요소의 width 와 heignt 는 다음값을 나타낸다.    
요소의 width  : Content width   
요소의 height : Content height 

### border-box
***width 와 height 속성값은 테두리까지의 너비와 높이가 된다.***  
즉 요소의 width 와 heignt 는 다음값을 나타낸다.  
요소의 width  : Content width + Padding + Border   
요소의 height : Content height + Padding + Border  


### inherit
부모의 box-sizing 값을 따라간다.  



# 예제
```
<body>
   <div class="box-block">
        <div class="box" id="box"> box-sizing 예제 박스 </div>
    </div>
</body>


<style>
    .box-block {
        box-sizing: border-box;
        width: 400px;
        height: 400px;
    }

    .box-block .box {
        background-color: black;
        color: white;
        width: 250px;
        height: 250px;
        border: 20px solid blue;
        margin : 15px;
        padding: 40px;
    }
</style>
```
아래 예제에서 각 속성값에 따른 크기 변화를 보자.  
<iframe class="code-box" src="/assets/html/base-layout/box-sizing.html"></iframe>

## content-box

***width 와 height 속성값은 Content 의 너비와 높이가 된다.***   
즉 예제에서 box 의 width 와 heignt 는 250px 로 지정했기 때문에  
Content 영역의 width 는 250px (빨강)  
Padding 영역의 width 는 각 40px (흰)    
Border 영역의 width 는 각 20px (노랑)    

<br>
요소의 너비 =  Content width + 2(좌우 padding ) + 2(좌우 border)   
            =  250px + (2 * 40px) +  (2 * 20px) = 370px   
즉 요소의 width 는 370px 가 된다.   
(height 역시 동일한 값으로 지정했으므로 370px 이다.)    
![content-box](/assets/img/post-img/base-layout/content-box.png){:class="lazyload" .post-img .img-w400}  


## border-box

***width 와 height 속성값은 Content + Padding + Border 영역의 너비와 높이가 된다.***    
즉 예제에서 box 의 width 와 heignt 는 250px 로 지정했기 때문에  
요소의 width 는 250px (검정)
Padding 영역의 width 는 각 40px (흰)    
Border 영역의 width 는 각 20px (노랑)    
Content 영역의 width = 요소 width -  (2 * Padding) - (2 * Border)   
                     = 250px - (2 * 40px) - (2 * 20px) = 130px   

<br>
요소의 너비 =  witdh = 250px    
즉 요소의 width 는 처음 지정한 250px 가 된다.   
(height 역시 동일한 값으로 지정했으므로 25px 이다.)    
![border-box](/assets/img/post-img/base-layout/border-box.png){:class="lazyload" .post-img .img-w400}


### inherit
예제에서 부모 (box-block) 는 border-box 이므로 border-box 와 동일하다.  

<br>
기본값인 Content-box 는 직관적인 크기와는 조금 다를 수 있다.  
width 를 250px 로 지정하였을 경우 실제 요소의 width 는 250 + α 이므로  
원하는 크기보다 훨씬 커질 수 있다.  
이점을 확실히 알고 써야한다.    


# 참조
- Mdn Web Docs: [CSS 기본 박스 모델 입문][box-model-link]




[box-model-link]: https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model


