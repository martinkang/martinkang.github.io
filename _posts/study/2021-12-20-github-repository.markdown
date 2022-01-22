---
layout: post
title:  "GitHub Blog Repository 는 왜 지정되어 있는가?"
description: "GitHub Blog Repository 는 왜 username.github.io 인가?, 만약 잘못 만들었다면?"
date:   2021-12-20 20:50:00 +0900
categories: study
tags: [github]
img-tag: github
---

# GitHub Repository 는 왜 지정되어 있는가?
왜 <span class="tooltip" id="id-1">Repository</span> 이름이 정해져 있을까? 하는 의문에 찾아본 내용을 정리해 보았다.

<br>

# 왜 Repository 의 이름을 username.github.io 로 해야 하는가? ###
인터넷에 24시간 접속 가능한 홈페이지를 운영하기 위해서는   
인터넷에 24 시간 연결된 저장공간과, 그 홈페이지를 연결하는 주소가 필요하다.  
GitHub Pages 는 이런 저장 공간과, 주소(
<span class="tooltip" id="id-2">도메인</span> )를 제공하는 
<span class="tooltip" id="id-3">웹호스팅</span> 서비스이다. 

<br>
GitHub Pages 기본적으로 https://username.github.io 형태의  
도메인을 각 계정마다 제공하고 있다.  
그리고 이 도메인에 동일한 이름(username.github.io)의  
 Repository 를 <span class="tooltip" id="id-4">Root</span> 디렉토리로 지정 하고 있다.  
 <br>
즉 https://username.github.io/ 라는 주소는  
 Username.github.io 인 Repository 를 가르키게 된다.  
따라서 저 도메인 주소를 이용하고 싶으면 username.github.io 라는  
 이름으로 Repository 를 만들어야 접근이 가능하다.  
 <br>

- 해당 Repository 에서 폴더나 파일을 만들경우  
 username.github.io/폴더 or 파일 로 접근 가능해진다.  
    - username.github.io 에 Font 폴더를 만들면  
     ***https://username.github.io/Font*** 로 접근이 가능하다.  
- 호스팅시 (아마도)관리와 편의성을 위해 시스템 적으로 일괄 적용 시킨 것인데,  
 개인 서버에 홈페이지를 올릴경우 어떤 이름이든 마음대로 지정이 가능하다.
<br>



# Username.github.io 가 아닌 다른 Repository 를 만들었다면? #
예를들어 username 이 martinmk63 인 유저가  
 martinmk633.github.io 로 Repository 이름을 만들었다면   
아래 사진과 같이  
 ***https://martinmk63.github.io/martinmk633.github.io/***   
 로 접근이 가능하다!.  
즉 사실은 username.github.io 로 Repository 를 만들지 않아도   
GitHub Blog 만드는건 가능하다!. ( 하지만 불편하다 )   
<br>
위에서 언급하듯이 Root 주소(http://martinmk63.github.io) 는   
username.github.io 인 Repository 를 가르키기 때문에,  
그 외 주소는    

***https://username.github.io/Repository/***  
와 같이 호스팅이 된다.  
이 역시 시스템상 설정값이며, 개인 서버를 가질경우 마음대로 지정 가능하다.  
(참고로 해당 주소에 접근 가능한 웹 페이지가 없다면 저 주소로 들어가도 아무것도 없다.)  
![page-setting](/assets/img/post-img/start-github-github/github-page-setting.png){:class="lazyload" .img-w600} 

<br>


# 도메인 이름을 바꾸고 싶은데? #
기본적으로 GitHub Pages 에서 제공한  
https://username.github.io  이 도메인 주소는 바꿀 수 없다.  
그래도 바꾸고 싶으면 2가지 방법이 있다.  
1. username 을 변경한다.
2. 개인 도메인을 구매한다. 

<br>


# 참조
- 본인. 

<hr>
<div class="tooltip-desc">
  <div class="tooltip-description" id="desc-1">GitHub 에서 제공하는 저장소이다</div>
  <div class="tooltip-description" id="desc-2">실제로 인터넷 사이트 주소는 127.0.0.1 과 같은 IP 주소를 가지는데, 이를 domain.com 과 같이 사람이 쉽게 기억할 수 있게 문자 형태로 표현하는 주소.
  실제 도메인 주소를 가지려면, 도메인 주소를 구매해야 한다.</div>
  <div class="tooltip-description" id="desc-3">일반적으로 웹(WWW) 공간을 임대(hosting)하는 것</div> 
  <div class="tooltip-description" id="desc-4">여기선 최상위 폴더를 뜻한다</div>
</div>
