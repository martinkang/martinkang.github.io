---
layout: post
title:  "[GitHub Blog - 4] - 기본페이지 만들기 1"
description: "jekyll 의 페이지 생성 과정을 알아보자."
date:   2022-01-15 19:20:00 +0900
categories: develop
tags: [blog, jekyll, html, Front-End]
img-tag: jekyll
---

# 기본 페이지 index.html  

지난 글에서 만든 블로그에 접속해보자.   
```
https://martinmk63.github.io/
```
난 아무것도 꾸민적이 없는데 아래와 같이 화면이 구성되어 있다.  
그런데 내 <span class="tooltip" id="id-1">Repository</span> 를 찾아봐도 비슷한 화면이 전혀 보이지 않든다.  
내 블로그에 접속하면 나오는 이 기본페이지는 어떻게 만들고 구성할까?    
그리고 이 파일들은 어디에 있을까?   
![index](/assets/img/post-img/base-page/index.png){:class="lazyload" .post-img .img-w750}


<br>

일단 기본 페이지가 무엇인지 알아보자.  
만약 따로 설정하지 않는다면 ( GitHub Blog 는 따로 설정을 할 수 없다. )  
<span class="tooltip" id="id-2">Root</span> 폴더 내에  index.html 이 첫 페이지가 된다.  
```
https://martinmk63.github.io/index.html
```
로 접속해보자. 처음 접속한 주소와 동일한 페이지가 보인다.  
<br>

그런데 내 Repository 안에 index.html 은 보이지 않는다.  
대신 index.md ( 또는 markdown ) 파일이 있다.  
jekyll 에선 ( index.html 이 없다면 ) *.md 를 *.html 로 생성시켜준다.  
실제 생성된 페이지는 _site 폴더 아래에 있다.  
( jekyll 을 serve 시켜야 실제 웹 페이지들을 만들어 _site 에 저장한다. )  

<br>

### 실제 웹페이지 파일 index.html 을 찾아보자

이제 내 Root 에 있는 index.md 파일을 다시 보자. 아래와 같을 것이다.  
잘 모르겠지만 내가 본 웹페이지랑 많이 달라보이지 않은가?  
![index-md](/assets/img/post-img/base-page/indexmd.png){:class="lazyload" .post-img .img-w750}  

<br>

이제 index.md 로 만든 _site/index.html 파일을 보자.   
한눈에 봐도 엄청 다르지 않은가?  
이 index.html 은 어떻게 만들어 진 것일까?  
![index-md](/assets/img/post-img/base-page/indexhtml.png){:class="lazyload" .post-img .img-w750}
<br>


# Ruby 테마를 찾아보자  
만약 Jekyll 테마를 인터넷 zip 파일을 통해 풀었다면 넘어가도 된다.  

<br>

우리가 jekyll 을 통해 설치한 테마는 사실 레이아웃과 조각파일,   
스타일시트의 기본값이 <span class="tooltip" id="id-3">Ruby</span> <span class="tooltip" id="id-4">Gem</span> 에서 가져오고 있다.  
( 압축파일을 받아 풀었다면 내 Repository 에 있다 )  

<br>
만약 기본 테마를 유지할거면 따로 작업할 것은 없지만,  
우리는 변경할 것이니 (jekyll 명령어를 통해 설치했다면 ) 기본 테마를 찾아가보자.  
내 Repository 에서 아래 명령을 터미널에 쳐보자.  
( 설치된 gem 의 위치를 찾는 명령어. 기본 테마의 이름이 minima 이다. )  
```
 bundle info --path minima
```
그럼 아래와 같이 내가 쓰는 테마의 경로가 나타날 것이다.
```
C:/Ruby30-x64/lib/ruby/gems/3.0.0/gems/minima-2.5.1
```  

이 경로를 찾아가보자.  
그러면 실제 https://martinmk63.github.io/ 에서 쓰인 레이아웃이나 내용이 아래 폴더에 있다.  

![minima](/assets/img/post-img/base-page/minima.png){:class="lazyload" .post-img .img-w500}  

<br>

# Jekyll 의 기본 페이지 구조 파악하기

이전에 읽었을 수도 있겠지만, jekyll 의 기본 구조이다.   
각자에 대한 내용은 사용할때 자세하게 하고 간단히는 아래와 같다.  
- include : 재사용을 하기 위한 파일을 담는 디렉토리 이다.
- layouts : 포스트를 포장할때 쓰는 <span class="tooltip" id="id-5">템플릿</span> 이다.
- sass : 사이트의 스타일을 정하는 파일들을 모아둔다.
- assets : 사이트에 사용되는 사진, 자료 등을 모아둔다.

<br>

### index.md 파일 분석

테마를 압축파일을 받아 풀었다면, 자신의 Repository 에서 찾으면 되고,   
기본 테마를 사용하고 있다면 위에서 찾은 폴더안에서 찾으면 된다.  
<br>

다시 아래 ***index.md*** 파일을 보자.   
 --- 표시 사이에 ***layout: home*** 이라 써있다.   
페이지 제일 위 --- 표시 사이에 내용들을 머릿말 이라고 한다.     
여기서 layout: home 이란 뜻은 layout 폴더에 home.html 을   
레이아웃 템플릿으로 사용한단 의미이다.    
즉 첫 페이지인 ***index.md 는 layout 의 home.html 파일을 불러다가 포장***하게 된다.   
![index-md2](/assets/img/post-img/base-page/indexmd.png){:class="lazyload" .post-img .img-w750}  

<br>

### _layouts/home.html 분석

그럼 이제 첫페이지 ***index.md 의 layout 인 _layouts/home.html*** 을 봐보자.
![home](/assets/img/post-img/base-page/home.png){:class="lazyload" .post-img .img-w750}  
- 파란색 네모 : layout 의 default 를 템플릿으로 사용한다는 의미이다.
- 빨간색 네모 : {content} 해당 파일 (home.html) 을 레이아웃 템플릿으로 쓴 파일이 이 위치에 들어간다. 
즉 위에서 index.md 에 뭔가를 쓴다면 이 {content} 에 들어가게 된다.  
- 초록색 네모 : jekyll 에서 사용하는 Liquid 라는 <span class="tooltip" id="id-6">템플릿 언어</span>인데, 나중에 알아보자.  

<br>

### _layouts/defualt.html 분석

이제 ***home.html 의 layout 인 _layouts/defualt.html*** 도 봐보자.  
![home](/assets/img/post-img/base-page/default.png){:class="lazyload" .post-img .img-w750}   
- 피란색 네모 : _include 안에 있는 head.html 을 여기에 붙여넣는다.
- 초록색 네모 : _include 안에 header.html 을 여기에 붙여넣는다.
- 빨간색 네모 : 이 파일을 layout 으로 지정한 home.html 을 여기 붙여 넣는다.  

<br>

참고로 _include 안에 있어서 include xxx.html 이 아니다.  
_data 폴더 안에 있다고 data xxx.html 하면 불러지지 않는다.   
include 자체가 정해진 명령어이다.  


<br>
즉 _site/index.html 은 사실 아래와 같은 많은 파일들을 합쳐서 만든다.  
![makeindex](/assets/img/post-img/base-page/makeindexhtml.png){:class="lazyload" .post-img .img-w750}

<br>

# 왜 이런 구조를 가질까?  

왜 이렇게 복잡한 구조로 만드는 것일까?  
다음에 자세히 나오겠지만, 기본적으로 웹 페이지는 \<head> 와 \<body> 로 이루어져 있다.  
\<head> 는 실제 사용자 눈에는 잘 안보이는 페이지에 대한 정보와 설정 등 즉 <span class="tooltip" id="id-7">MetaData</span> 를 나타내고,  
\<body> 는 실제 사용자 눈에 보이는 웹 페이지를 나타낸다.  

<br>

각 웹페이지마다 \<head> 구조를 가져야 하는데,  
이런 \<head> 를 매 페이지마다 새로 치기엔 너무 번거롭다.  
따라서 이렇게 자주쓰이고 재사용 될만한 페이지는 _inlucde 에 넣고,  
필요할때 include xxx.html 로 불러오면 재사용이 가능하다.  
<br>

그리고 보통 비슷한 종류의 페이지마다 비슷한 layout 을 가진다.  
포스트는 A 레이아웃, 앨범페이지는 B 레이아웃 이런식으로.  
역시 매 페이지마다 이런 레이아웃을 작성해줘야 하는데  
한번만 작성해두고 필요할때 액자마냥 가져와서 씌울 수 있다.  

<br>
즉 편의와 재사용율을 높여 페이지 제작 효율성을 높이기 위한 방식이다.  

<br>
이제 기본 구조를 알았으니, 다음엔 간단한 기본 페이지를 만들어보자.  


# 다음 주제
- [[GitHub Blog - 4] - 기본페이지 만들기 2][base-link]

<hr>

# 참고
- jekyll 한글 번역 문서 : [jekyll 구조][jekyll-docu-link]
- 위키백과 : [Metadata][meta-link]

<hr>

<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">GitHub 에서 제공하는 저장소이다</div>
    <div class="tooltip-description" id="desc-2">여기선 최상위 폴더를 뜻한다</div>
    <div class="tooltip-description" id="desc-3">
    단순함과 생산성에 초점을 둔 동적 오픈 소스 프로그래밍 언어
    </div>
    <div class="tooltip-description" id="desc-4">
    Ruby 에서 제공하는 패키지 시스템으로 라이브러리를 뜻한다
    </div>    
    <div class="tooltip-description" id="desc-5">
    어떤 특정한 모양을 만들기 위해 만들어진 틀
    </div>
    <div class="tooltip-description" id="desc-6">
    문장 안에 코드가 있는 언어
    </div>
    <div class="tooltip-description" id="desc-7">
    다른 데이터를 설명해 주는 데이터이다. 대량의 정보 가운데에서 찾고 있는 정보를 효율적으로 찾아내서 이용하기 위해 일정한 규칙에 따라 콘텐츠에 대하여 부여되는 데이터
    </div>
</div>

[meta-link]:https://ko.wikipedia.org/wiki/%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0
[jekyll-docu-link]: https://jekyllrb-ko.github.io/docs/structure/
[base-link]: /develop/2022/01/17/blog-base-page2.html