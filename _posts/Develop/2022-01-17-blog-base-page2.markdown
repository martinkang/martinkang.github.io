---
layout: post
title:  "[GitHub Blog - 4] - 기본페이지 만들기 2"
description: "기본 페이지를 만들어 보자."
date:   2022-01-17 19:20:00 +0900
categories: develop
tags: [blog, jekyll, html, Front-End]
img-tag: jekyll
---

# Ruby 테마를 일반 테마로 변경하자
테마를 다운받아 압축을 풀었으면 상관이 없다.  
그런데 jekyll new 와 같이 테마를 Ruby gem 으로 받았다면,  
이전시간에 찾았던 내 테마 gem 의 위치로 간다.   
그리고 이 gem 테마의 모든 파일과 폴더를 내 루트 폴더 ( index.md 가 있는 )로 전부 복사 붙여 넣기 하자.  

Ruby Gem 폴더인 .../ruby/gems/3.0.0/gems/minima-2.5.1 에서 고쳐봤자    
실제 GitHub Blog 에는 적용이 안된다.  

<br>

( GitHub Blog 에 적용이 되려면, 실제 수정 내역이 GitHub 에 올라가야 한다.   
기존 Ruby 폴더 위치는 내 GitHub 상의 Repositrory 가 아닌  
Ruby 의 라이브러리 중 하나일 뿐이다. )

<br>

### 설정에서 Ruby 테마를 빼주자

다 옮겼으면 설정에서 Ruby 테마 사용을 제거 해줘야 한다.  
Ruby 테마를 내 Repository 에 옮겼으니, 이제 Ruby Gem 이 아닌  
내 Repository 의 내용을 쓰면 된다.  

우선 Root 폴더의 <span class="tooltip" id="id-1">_config.yml</span> 에 아래 theme 를 삭제해 준다.   
```
theme: minima
```

그리고 Root 폴더의 <span class="tooltip" id="id-2">Gemfile</span> 로 간다. 여긴 필요한 Gem 들의 리스트이다.  
```
gem "minima", "~> x.x"
```

우린 Ruby Gem 기반 에서 테마를 가져올것이 아니기 때문에   
Config 에 minima 테마를 나타낼 필요도,   
gem 의 "minima" x.x 버전이 필요하지 않다.  
따라서 해당 부분을 삭제해 준다.  

<br>

그리고 아래 다음과 같이 작성해 준다.  
```
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.6"
end
```

추가하는 이유는 기존 minima 테마를 복사해오면서,   
해당 기능 ( feed 와 seo ) 이 포함된 코드들이 있다.  
이게 기존 Ruby Gem 에서 복사하여 내 Repository 로 옮겼으므로,   
이 기능을 온전히 쓰려면 저 기능들을 가져와야 한다.   

<br> 

아마 group :jekyll_plugins do 가 이미 있을 수 있다.   
이미 적혀있다면 그걸 제외하고 없는걸 추가해주자.  

<br>

사실 검색엔진 최적화(SEO; Search Engine Optimization) 는 당장은 추가할 필요가 없지만,  
기본 jekyll 테마에 적용된걸 굳이 뺄 필요 없으니 plugin 을 추가해주고 나중에 사용할 예정이다.  

<br>

### jekyll 을 이용하여 확인해보자  

jekyll 을 이미 serve 했다면 취소를 해주고   
( 터미널 창에서 ctrl + c 를 눌러주자 )  
터미널 창에서 아래와 같이 쳐주자.  
```
bundle install
bundle update
```
_config.yml 이나 Gemfile 을 수정하면,   
jekyll 을 정지한 후 위의 명령어를 수행시켜 라이브러리를 인스톨 & 업데이트 해줘야 한다.  

```
bundle exec jekyll serve
```
위 명령을 실행해보자. 실행이 안되면 뭔가 덜뺐거나 덜 넣은 거다.  
위에 내용을 다시 차분히 보고 다시 수행해 보자.

<br>

이제 내 폴더에 layout 등을 변경하면, 웹 상에 내 페이지도 반영이 될 것이다.  

<br>


# 기본 Layout 구조

기존 웹 페이지는 다음과 같이 크게 3등분으로 나눠 볼 수 있다.  

![layout](/assets/img/post-img/base-page/layout.png){:class="lazyload" .post-img .img-w700}  
Layout 구조
- 빨간 네모 : Navigation Bar ( 일명 네비바 ) 로 불린다. 
  - 웹 사이트를 탐색하기 위한 링크를 가지고 있다.   
  - 위치에 따라 Side bar, Bottom bar, Top bar 등으로도 불린다.
  - 보통은 사이트 내에서 화면이 전환되도 계속 보인다.
- 파랑 네모 : 실제 볼 페이지의 내용이 들어가는 부분이다.
- 초록 네모 : Footer 라고 한다. 보통 회사 주소나, 연락처 등을 적는다.  
 
<br>

# 나만의 기본 페이지를 만들어 보자
디자인은 생각하지 말고, 간단한 기본 페이지 구성만 만들어 보자.  
해당 파일들에 기존 내용들이 있다면 내용을 다 지우고 새로 작성해 보자.   

<br>

아직 <span class="tooltip" id="id-3">HTML</span> 도 <span class="tooltip" id="id-4">Liquid</span> 도 모르니 간단한 변경만 해보자.  
네비바의 제목을 바꾸고 파란 네모 실제 페이지 부분은 간단한 인사말을 쓰고,      
아래 Footer 에는 간단한 연락처를 써보자.  

<br>

### 전체 페이지 default.html 을 만들자
기본 레이아웃은 보통 모든 페이지를 나타내는 레이아웃이다.  
일단 _layout/default.html 안에 내용을 다 지워보자.  
그리고 아래와 같이 html 을 쳐보자. 그럼 아래와 같이 선택란이 뜰 것이다.

![html5](/assets/img/post-img/base-page/html5.png){:class="lazyload" .post-img .img-w700}  

html:5 에서 Tab 키를 눌러보자.  
그럼 아래와 같이 기본 웹페이지가 생성된다.  
( 혹시 html 을 쳤는데 아래와 같이 선택 기능이 나오지 않는다면 [여기](#부록) )  
![html-base](/assets/img/post-img/base-page/html-base.png){:class="lazyload" .post-img .img-w700}   

이 웹페이지를 효율적으로 쪼개보자.  

### head.html 을 만들자

위의 사진에서 \<head> \</head> 안에 내용을 전부 _include/head.html 내용과 바꿔주자.  

![head](/assets/img/post-img/base-page/head.png){:class="lazyload" .post-img .img-w700}   

그리고 default.html 에 head 가 있던 자리를 include 를 이용하여 불러오자.    
이제 어느 페이지를 만들어도 head.html 파일이 저 위치에 붙여질 것이다.  
꼭 아래 사진과 같이 똑같이 써야 한다.  
![head-2](/assets/img/post-img/base-page/head-2.png){:class="lazyload" .post-img .img-w700}   
    

### header.html 을 만들자
네비바는 보통  header 태그로 많이 쓴다. ( 아니여도 된다 )
일단 _include 에 기존 header.html 내용을 전부 지우자.  
일단 여기에 아래처럼 쓰자.  
```
<header class="클래스 이름"> 홈페이지 이름</header> 
```

![header](/assets/img/post-img/base-page/header.png){:class="lazyload" .post-img .img-w700}  

그리고 default.html 에 body 바로 아래 header.html 를 include 추가 해주자. 

![default-header](/assets/img/post-img/base-page/default-header.png){:class="lazyload" .post-img .img-w700}  



### 실제 페이지 내용인 content 를 붙이자
이제 첫 페이지에 들어갈 내용을 index.markdown ( 또는 md ) 에 써보자.  
기본 첫 페이지 layout 은 _layout/default.html 이므로,  
아래와 같이 머릿말 layout: default 를 적고 그 아래 실제 들어갈 내용을 쓰자.  
이 페이지에 내용은 _layout/defualt.html 에 {content} 부위에 들어갈 것이다.  
```
---
layout: default
---
첫 페이지 내용
```
--- 이거 위아래로 빼먹음 안된다.  

<br>

![default-index](/assets/img/post-img/base-page/default-index.png){:class="lazyload" .post-img .img-w700}  

<br>

이제 이 첫 페이지가 들어갈 default.html 에 아래와 같이 넣어주자.  
보통 \<header> 밑에 실제 내용을 붙어넣자.  


![default-content](/assets/img/post-img/base-page/default-content.png){:class="lazyload" .post-img .img-w700}  


\<main class="클래스 이름">  \</main> 을 위아래로 꼭 쓰자.  
header, content 등 각 부분을 구분하기 위하여 main 클래스를 넣는다.  
이는 html 부분에서 다룬다.  

<br>



### footer.html 을 만들자
위와 동일하게 작업을 하자.  
_include/footer.html 안에 내용을 전부 제거하고,   
_include/footer.html 에 아래와 같이 쓰자.  
```
<footer class="클래스 이름"> 연락처 </footer>
```

![footer](/assets/img/post-img/base-page/footer.png){:class="lazyload" .post-img .img-w700}  

<br>
역시 _layout/default.html 에 \</main> 바로 아래에 넣어주자.   
```
include footer.html
```    

![default-footer](/assets/img/post-img/base-page/default-footer.png){:class="lazyload" .post-img .img-w700}  

<br>


### 이제 jekyll 로 실행해보자  
아래 명령어로 페이지를 실행시키고, 127.0.0.1:4000 으로 접속해 보자.  

```
bundle exec jekyll serve
```
![first-page](/assets/img/post-img/base-page/first-page.png){:class="lazyload" .post-img .img-w700}   

<br>
페이지가 변경된 것을 확인할 수 있다.  
아직 투박하지만, 점점 바꿔 나갈 것이다.  
<br>


### 실제로 만들어진 index.html 을 살펴보자
위에서 jekyll serve 를 하였으면 _site/index.html 이 생겼을 것이다.  
실제 내가 작업한 내용이 어떻게 변했는지 보면   
작동 원리를 이해하는데 조금 도움이 될 것이다.  

![index-com](/assets/img/post-img/base-page/index-com.png){:class="lazyload" .post-img .img-w700}  

여러 파일로 쪼개 만든 작업들이,   
index.html 이 한파일에 모인 것을 볼 수 있다.  


<br>

# 실제 GitHub Blog 에 올리자

이제 GitHub Desktop 에서 Commit & Push 를 하여 실제 내 페이지에 적용해보자.  

Commit & Push 가 기억이 안나면   
[[GitHub Blog - 3] Jekyll 시작하기 2][jekyll-link2] 여기를 다시 읽어보자. 

<br>

다음엔 기본 설정을 고쳐보자.  

# 다음 주제
- [[GitHub Blog - 5] - 기본 정보 설정하기][config-link]
<hr>

# 부록
- ***html 을 눌렀는데 Emmet 기능이 뜨지 않는다.***
  - Emmet 기능은 VSCode 에서 html, css 등 웹 관련 몇 파일들에 대해서 자동 완성해주는 기능이다.
  - File -> Preference -> Settings -> Extension -> Emmet 으로 가서 Trigger On Tab 을 체크해주자.
    - 파일 -> 기본 설정 -> 설정 -> 확장 -> Emmet 
  ![lang-html](/assets/img/post-img/base-page/emmet.png){:class="lazyload" .post-img .img-w700}  
  
  - 위에 설정을 해도 안되면 좌하단에 언어 설정을 보자.  
    - 좌하단이 지금 내가 수정하는 파일의 확장자와 같은지 보자.
    - Html 파일을 수정하는데 DJango Html 등으로 보인다면 Html 로 변경해주자.  
  ![lang-html](/assets/img/post-img/base-page/lang-html.png){:class="lazyload" .post-img .img-w500}  
<hr>

<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
    Jekyll 의 환경 설정 파일
    </div>
    <div class="tooltip-description" id="desc-2">
    Gem 은 루비 프로젝트에 포함시킬 수 있는 코드이며 기능들을 패키지화 해서 다른 사람들이나 프로젝트에 공유할 수 있게 함.
    Gemfile 은 해당 프로젝트에서 필요한 Gem 들의 목록을 기록한 파일이다.
    </div>
    <div class="tooltip-description" id="desc-3">
    Hyper Text Markup Languag. 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공
    </div>
    <div class="tooltip-description" id="desc-4">
    Ruby 기반의 오픈소스 HTML 템플릿 언어
    </div>
</div>

[base-page-link]: /develop/2022/01/15/blog-base-page.html
[config-link]: /develop/2022/01/20/blog-start-github-config.html
[jekyll-link2]: /develop/2021/12/21/blog-start-jekyll2.html