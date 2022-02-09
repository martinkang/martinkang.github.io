---
layout: post
title:  "[GitHub Blog - 7] Open Graph 를 설정해보자"
description: "주소창 입력시 나오는 OpenGraph 를 설정하여 블로그 디테일을 높이자."
date:   2022-01-29 21:10:00 +0900
categories: develop
tags: [blog, html, Front-End]
img-tag: html
---

# Open Graph 란
Open Graph 는 어떠한 인터넷 웹사이트의 HTML 문서에서 head -> meta 태그 중   
"og:XXX"가 있는 태그들을 찾아내어 보여주는 <span class="tooltip" id="id-1">프로토콜</span>이다.  

<br>

즉 og 라 써있는 데이터를 찾아 보여주겠다는 약속 ( 프로토콜 ) 이다.  
OG ( Open Graph ) 설정을 하면 링크전송시 아래와 같이 나온다.  
![og](/assets/img/post-img/favicon/og.png){:class="lazyload" .post-img .img-w300}    

모든 사이트에서 가능한건 아니고 OG 를 지원하는 사이트에서만 가능하다.  
카카오톡, Facebook, Linkedin, Twitter 등이 있다.  


### 사이트별 Open Graph  
- Facebook, Linkedin, 카카오톡
- 최적의 사이즈는 1200 * 630 즉 1.19 : 1 비율의 이미지 이다.  

![open-graph-Facebook](https://ourcodeworld.com/public-media/articles/articleocw-56d1a6901b773.png){:class="lazyload" .post-img .post-img .img-w400}      



- Twitter   
- 최적의 사이즈는 200 * 200 픽셀 즉 1:1 비율의 이미지 이다.  

![open-graph-twitter](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/twitter-cards-implementation-with-websites/Images/summary_card_tweet.png){:class="lazyload" .post-img .img-w400}    
   


###  Open Graph Size 종류
![open-graph-size](https://en.ryte.com/magazine/wp-content/uploads/2020/03/og-image-size-guide.png "오픈 그래프 사이즈 - https://en.ryte.com/magazine/open-grap"){:class="lazyload" .post-img .img-w600}     
  
 

<br>

# Open Graph 설정
OG 도 Favicon 과 같이 \<head> 에 설정해주면 된다.  
각 항목들은 ( meta="twitter:url" ) 일종의 약속 ( 프로토콜 ) 이기 때문에,  
이해하는건 의미가 없다. 그냥 복붙하면 된다.   
내가 쓰는 것 의외에도 많은 항목을 설정할 수 있는데,  
다른 타입의 OG 나 각 세부 항목 정보가 필요하면 아래 링크들을 참조하자.    
<br>

FaceBook, LinkedIn 에 들어갈 Open Graph 는 [이 문서][og-link]를,   
Twitter 에 들어갈 Open Graph ( Twitter Card 라고도 한다 ) 에 대해선 [이 문서][twitter-card-link]를 참고하자.   

<br>
다만 한가지 편의를 위해 _config.yml 에 설정해줄게 있다.  
아마 기본테마라면 url: 항목이 이미 있을것이다.    
없다면 아무데나 url: https://username.github.io 로 지정하자.  
```
url: "https://martinmk63.github.io"
```


### Root URL 설정
Open Graph 설정시에 Favicon 처럼 내 Root 를 기준으로 이미지 경로를 설정하면   
Twitter 에서 인식을 하지 못한다.    
( 내 Repository 내에선 모두가 Root 주소를 알고있기 때문에 / 로 시작하면 Root 를 뜻한다.   
하지만 사이트마다 예외가 있고, Twitter 는 인식 못하는걸 직접 확인하였다.  
따라서 직접 전체 주소를 써줘야 한다. )  
따라서 이미지 경로를 전부 써줘야 하는데, 이를 위해서 _config.yml 에 설정을 해주자.  


### \<head> 에 Open Graph 를 넣어주자  
아래 코드를 \<head> \</head> 사이에 넣어주자.  
각 항목이 어떻게 보이는지 알고 싶으면 위에 ***싸이트별 Open Graph*** 를 확인 해보자.  
각 항목 이름만으로도 어느정도 유추가 가능할 것이다.  

{% raw %}  
```
<!-- Open Graph (Facebook, Linkedin) https://ogp.me/#types -->
<!-- https://ourcodeworld.com/public-media/articles/articleocw-56d1a6901b773.png -->
<meta property="og:type" content="website" />
<meta property="og:title" content="코딩독학 - 느려도 꾸준히" /> 
<meta property="og:description" content="느려도 꾸준히" />
<meta property="og:image" content="{{ site.url }}/assets/img/infos/kobugi-left-small.png" />
<meta property="og:url" content="{{ site.url }}" />

<!-- Twitter card (Twitter) -->
<!-- https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/twitter-cards-implementation-with-websites/Images/summary_card_tweet.png -->
<!-- Card 종류 : Summary, Photo, Player -->
<meta name="twitter:card" content="Summary" />    
<meta name="twitter:title" content="코딩독학 - 느려도 꾸준히" /> 
<meta name="twitter:description" content="느려도 꾸준히" />
<meta name="twitter:image" content="{{ site.url }}/assets/img/infos/kobuk.png" />
<meta name="twitter:url" content="{{ site.url }}" />
```  
{% endraw %}  


- image 에 {% raw %}{{site.url}}{% endraw %}  은 무엇일까?
    - Facebook 이나 카카오등은 괜찮지만, Twitter 에서는 이미지의 전체 주소를 입력해줘야 한다.  
    이때 위 _config.yml 에 url 이란 변수로 내 홈페이지 Root 주소를 적어놨다.  
    따라서 {% raw %}{{site.url}}{% endraw %} 을 써두면, 내가 지정한 나의 Root 주소값이 /assets 앞에 붙게 된다.  
    따라서 내가 지정한 이미지의 전체 경로가 완성이 된다.  
  
<br>

# Open Graph 설정전

### 카카오톡
![before-OG](/assets/img/post-img/open-graph/before-OG.png){:class="lazyload" .post-img .img-w400}   

### 페이스북
![before-OG-facebook](/assets/img/post-img/open-graph/before-og-facebook.png){:class="lazyload" .post-img .img-w400}    

### 트위터
트위터는 아래 사이트서 미리보기가 가능하다.   
[이 사이트][twitter-card-val-link]에서 자신의 GitHub Blog 주소를 치면 된다.  
![before-OG-twitter](/assets/img/post-img/open-graph/before-og-twitter.png){:class="lazyload" .post-img .img-w400}  

  
<br>

# Open Graph 설정후  

### 카카오톡
![after-OG](/assets/img/post-img/open-graph/after-OG.png){:class="lazyload" .post-img .img-w400}    

### 페이스북
![after-OG-facebook](/assets/img/post-img/open-graph/after-og-facebook.png){:class="lazyload" .post-img .img-w400}     

### 트위터
![after-OG-twitter](/assets/img/post-img/open-graph/after-og-twitter.png){:class="lazyload" .post-img .img-w400}  

<br>

이제 어디 링크보내기가 그럴싸해졌다.  
이제 본격적으로 페이지를 꾸며보자.  

# 다음 주제
- [[GitHub Blog - 8] - 기본 레이아웃 꾸미기][layout-link]

<hr>

# 부록 
- ***[홈페이지 메타 정보를 바꿔도 카카오톡에서 링크 정보가 바뀌지 않는다면][og-초기화-link]***
    - 위 링크를 참조해보자 


# 참조
- The Open Graph protocol : [Open Graph Type][og-link]
- LANCE BLOG : [Open Graph 동적 타이틀 할당][og-동적타이틀-link]
- newmon : [open graph tag 초기화][og-초기화-link]
- Jekyllrb : [jekyll 변수 목록][jekyll-변수-link]
- 준스파파 : [홈 바로가기][홈바로가기-link]
- 코드로그 : [ico, png 확장자 차이][ico vs png-link]
- MDN Web Doc : [프로토콜][protocol-link]
- Ryte Magagine : [OG Size][OG-size-link]
- 리뷰나라 : [jekyll 내에서 이중 중괄호 쓰기][raw-link]



<hr>

<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    프로토콜은 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계.
    </div>
</div>

[og-link]: https://ogp.me/#types 
[twitter-card-link]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
[twitter-card-val-link]: https://cards-dev.twitter.com/validator
[og-동적타이틀-link]: https://lanace.github.io/articles/what-is-open-graph/
[og-초기화-link]: https://infinitt.tistory.com/285
[protocol-link]: https://developer.mozilla.org/ko/docs/Glossary/Protocol
[OG-size-link]: https://en.ryte.com/magazine/open-graph
[kakao-link]: /bugs/2022/01/21/kakao-link.html

[jekyll-변수-link]: http://jekyllrb-ko.github.io/docs/variables/
[raw-link]: http://daplus.net/markdown-jekyll%EC%9D%98-%EB%A7%88%ED%81%AC-%EB%8B%A4%EC%9A%B4-%EC%BD%94%EB%93%9C-%EB%B8%94%EB%A1%9D-%EB%82%B4%EC%97%90%EC%84%9C-%EC%9D%B4%EC%A4%91-%EC%A4%91%EA%B4%84%ED%98%B8-%EC%9D%B4%EC%8A%A4/

[layout-link]: /develop/2022/02/07/blog-base-layout.html