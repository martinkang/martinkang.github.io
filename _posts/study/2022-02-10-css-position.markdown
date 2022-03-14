---
layout: post
title:  "[CSS] - Position 속성"
description: "CSS 의 Position 속성에 대해 알아보자."
date:   2022-02-10 15:20:00 +0900
categories: study
tags: [css, Front-End]
img-tag: css
---

# Position 속성이란?
문서상에 요소(Element) 를 배치하는 방법을 지정.  
top, right, bottom, left, z-index 속성을 이용하여 요소의 배치를 결정.  

<br>

# 뷰포트( Viewport )
> 3차원 컴퓨터 그래픽스에서는 3차원 장면을 가상 카메라의 위치에 투사하기 위해 사용되는 2차원 직사각형을 의미한다. 
뷰포트는 전체 이미지가 표시될 부분을 보여주기 위해 사용되는 화면의 영역이다.  
가상 데스크톱에서 뷰포트는 시각화 장치보다 더 큰 2차원 영역의 보이는 부분을 의미한다.  
웹 브라우저에서 뷰포트는 전체 문서의 보이는 부분을 뜻한다. 문서가 뷰포트보다 더 크면 사용자는 스크롤링을 통해 주위의 뷰포트를 이동할 수 있다.  
-위키백과 뷰포트 ( 컴퓨터 과학 )

우리는 웹브라우저니, 전체 문서의 보이는 부분이다.  
![viewport](/assets/img/post-img/base-layout/viewport.png){:class="lazyload" .post-img .img-w400} 



# Position 속성별 특징

## static
- 요소를 일반적인 흐름에 따라 배치.
- ***top, right, bottom, left, z-index 속성은 아무런 영향을 주지 못한다.***
    - Two 에 Top:20, Left:20 속성을 주었다.  
    - 하지만 아무런 영향을 받지 않고 일반적으로 배치.  

<div class="box" id="one">One</div>
<div class="box box-position-static box-top-20 box-left-20" id="two">Two</div>
<div class="box" id="three">Three</div>

<br>

## relative
- 요소를 일반적인 문서 흐름에 따라 배치.  
- 자신 외의 요소에 영향을 주지 않는다.  
- 자기 자신을 기준으로 top, right, bottom, left의 값에 따라 오프셋을 적용.  
- Two 에 Top:20, Left:20 속성을 주었다.   

<br>

<div class="box" id="one">One</div>
<div class="box box-position-relative box-top-20 box-left-20" id="two">Two</div>
<div class="box" id="three">Three</div>

<br>

Two 박스는 원래 자기 자신이 가졌어야 할 위치를 기준으로 ( 즉 옆 One 박스 오른편 )   
Top 에서 20px, Left 에서 20px 움직인 곳에 위치한다.  
Two 를 제외한 다른 요소는 영향을 받지 않는다.  

![position-relative](/assets/img/post-img/base-layout/position-relative.png){:class="lazyload" .post-img .img-w400} 

<br>

## absolute
- ***요소는 일반적인 흐름에서 제외.*** 
    - 따라서 다른 요소는 해당 요소가 존재하지 않는 것처럼 배치.
- 절대적으로 배치된 요소는 가장 가까운 위치 지정 조상  
( position 속성이 static이 아닌 가장 가까운 조상)을 기준으로 배치.   
    - 만약 조상 중에 positin 이 relative, absolute, fixed 인 태그가 없다면   
    가장 위의 body 태그가 기준이 된다.   
- Two 에 Top:20, Left:20 속성을 주었다.  

<br>
스크롤을 아래로 내려 Two 의 변화를 보자. 

<div class="big-box box-position-relative">
    <div class="box" id="one">One</div>
    <div class="box box-position-absolute box-top-20 box-left-20" id="two">Two</div>
    <div class="box" id="three">Three</div>
    <br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<br>
 
위 그림을 보면 Two 박스는, 흐름에서 제거되어 Three 가 One 의 오른편에 위치하게 된다.  
Two 박스는 조상 ( 까만 점선 ) 으로부터 Top 으로부터 20px, Left 로부터 20px 에 위치하게 된다.  
스크롤을 내리면, ***자신의 조상을 기준으로 고정( 까만 점선 )***되기 때문에,  
Two 는 처음 위치 그대로 고정되어 사라지게 된다.   

<br>

![position-absolute](/assets/img/post-img/base-layout/position-absolute.png){:class="lazyload" .post-img .img-w400} 

<br>

## fixed    
- ***요소는 일반적인 흐름에서 제외.***
    - 따라서 다른 요소는 해당 요소가 존재하지 않는 것처럼 배치.
-  뷰포트(Viewport)의 초기 <span class="tooltip" id="id-1">컨테이닝 블록(containing block)</span>을 기준으로 배치. 
    - transform, perspective, filter 속성이 none이 아닌 조상이 있다면 그 조상이 컨테이닝 블록이 된다.   
        - 해당 요소가 없다면 뷰포트의 초기 컨테이닝 블록, 즉 ***웹 브라우저 전체 문서중 보이는 화면을 기준***으로 위치를 지정하게 된다.
        - [(CSS Transforms Spec 참조)][css-trans-link]. 
        - 따라서 스크롤에 관계 없이 화면의 특정 지점에 고정되는, "떠다니는"(floating) 요소를 생성할 수 있다.  
- Two 에 Top:20, Left:20 속성을 주었다.  

<br>
스크롤을 아래로 내려 Two 의 변화를 보자.  
<iframe src="/assets/html/base-layout/fixed.html" style="width:300px; height:150px"></iframe>


스크롤을 하더라도, Two 박스는 ***뷰포트를 기준으로 항상 같은 위치에 고정***된 채로 유지된다.   
즉 "떠다니는"(floating) 요소가 된다.

<br>
![position-fixed](/assets/img/post-img/base-layout/position-fixed.png){:class="lazyload" .post-img .img-w400} 
  

### fixed vs absolute
absolute 는 부모 요소를 기준으로 배치되기 때문에, 화면이 스크롤 되면 안보이게 된다.  
하지만 fixed 는 뷰포트, 즉 사용자가 보고있는 지금의 화면을 기준으로 위치를 정하기 때문에  
화면을 넘겨도 언제나 그자리에 고정된다.     
<br>
화면 스크롤 전 

![absolute-fixed](/assets/img/post-img/base-layout/absolute-fixed.png){:class="lazyload" .post-img .img-w500} 

<br>

화면 스크롤 후  
뷰포트가 내려가면서, fixed 요소는 뷰포트와 함께 고정된 위치를 차지하지만,   
absoulte 는 부모 요소에 대한 절대적인 위치를 차지하기 때문에 화면에서 보이지 않게 된다.  

![absolute-fixed2](/assets/img/post-img/base-layout/absolute-fixed2.png){:class="lazyload" .post-img .img-w500} 


## sticky
- 요소를 일반적인 문서 흐름에 따라 배치.  
- 테이블 관련 요소를 포함해 가장 가까운, 스크롤 되는 조상과,  
표 관련 요소를 포함한 컨테이닝 블록 ***(가장 가까운 블록 레벨 조상)*** 을 기준으로    
top, right, bottom, left의 값에 따라 오프셋을 적용.   
    - 오프셋은 다른 요소에는 영향을 주지 않는다.
- Two 에 Top:20, Left:20 속성을 주었다

<br>
스크롤을 아래로 내려 Two 의 변화를 보자.  
<iframe src="/assets/html/base-layout/sticky.html" style="width:300px; height:150px"></iframe>

기본적으로 요소를 일반적인 문서 흐름에 따라 배치하기 때문에,    
***스크롤 하기 전에는 문서 흐름에 따라 존재***한다.   
스크롤을 하게 되면 sticky 속성을 지정한 박스만 다르게 움직이는 것을 볼 수 있다.  
sticky 는 가장 가까운 블록 레벨 조상 ( 위 사진에서 검은 점선 )을 기준으로 잡기때문에   
조상과 거리가 지정한 위치 ( top, left 20px ) 보다 작거나 같아지면, 해당 값을 따르게 된다.  
따라서 Two 박스는 Top 기준으로 20px 떨어진곳에 위치한다.   
Two 박스는 의 Left 속성 값은 20px 인데 아래 사진을 보면 Two 의 위치는 부모 기준 20px 보다 훨씬 멀리 있다.  
이유는 ***sticky 요소는 일반적인 문서 흐름에 따르기 때문***에,   
블록 레벨 조상 ( 검은 점선 ) 에서 20px 를 떨어지려 하여도
바로 옆에 50px 크기의 One 박스가 존재하기 때문에, 이 네모의 오른편에 위치해야 한다.  
즉 ***Left: 20px 의 값은 무시되고, 원래의 요소 흐름에 위치***하게 된다.  
<br>
![position-sticky](/assets/img/post-img/base-layout/position-sticky.png){:class="lazyload" .post-img .img-w400} 

<br>

- Two 에 Top:20, Left:70 속성을 주었다.  
<iframe src="/assets/html/base-layout/sticky2.html" style="width:300px; height:150px"></iframe>


부모 ( 검은 점선 ) 기준으로 70px 는 원래 위치 ( One 의 오른편 ) 보다 더 오른편이므로,  
Left: 20px 때와는 다르게 Left 위치 변경한 것이 보인다.  


<br>

CSS 로 웹 페이지를 만들다 보면, 생각처럼 꾸며지지 않을때가 있다.  
disply, position 등 화면에 대한 속성을 이해하면 의도한 대로 꾸미기가 수월하다.  
필요할 때마다 참고해보자.     

<hr>

# 참조
- MDN Web Docs: [Viewport 란][viewport-link]
- MDN Web Docs: [position 문서][position-link]
- MDN Web Docs: [Containing Block 의 모든것][containing-block-link]

<hr>

<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    어떤 element의 위치와 사이즈를 정하는 기준이 된다. 일반적으로 부모 요소의 Content 영역이지만, position 속성에 따라 달라진다. 참조 링크 Containing Block 의 모든것에 식별 기준이 자세히 나온다.
    </div>
</div>


<style>
.box-left-20 { left: 20px; }
.box-left-70 { left: 70px; }
.box-top-20 { top: 20px; }
.box-position-static { position: static; }
.box-position-relative { position: relative; }
.box-position-absolute { position: absolute; }
.box-position-sticky { position: sticky; }
.box-perspective {  perspective: 1000px; }
#two { background: blue; }
    

.big-box {
    width: 300px;
    height: 150px;
    border: dashed black;
    overflow: scroll;
}

.box {
  display: inline-block;
  font-size: 0.5em;
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: red;
  color: white;
}

</style>


[css-trans-link]: https://www.w3.org/TR/css-transforms-1/#propdef-transform
[position-link]: https://developer.mozilla.org/ko/docs/Web/CSS/position
[containing-block-link]: https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block
[viewport-link]: https://developer.mozilla.org/ko/docs/Glossary/Viewport