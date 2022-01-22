---
layout: post
title:  "[GitHub Blog - 1] GitHub Bog 시작하기."
description: "GitHub 블로그 개발 순서와 목표. Front End 공부와 개발 포트폴리오를 만들어 보자."
date:   2021-12-19 19:10:00 +0900
categories: develop
tags: [blog, jekyll, Front-End]
img-tag: blog
---
# GitHub Blog 란
GitHub 에 대한 정의는 아래와 같다. 
>대표적인 무료 <span class="tooltip" id="id-1">Git</span> 저장소. 2008년 공개했다.<br> Git <span class="tooltip" id="id-2">호스팅</span> 기능 덕분에 GitHub는 자유 소프트웨어의 성지로 떠올랐다.
<br>

GitHub Blog 는 GitHub Page 에서 제공하는 서비스로,  
GitHub <span class="tooltip" id="id-3">Repository</span>
에 저장된 <span class="tooltip" id="id-4">정적 웹 페이지</span> 들을 무료로 
<span class="tooltip" id="id-5">웹호스팅</span>을 하여 만들어진 Blog 이다.



# 왜 GitHub Blog 일까?
블로그를 만들 수 있는 사이트가 많이 있지만,  
GitHub Blog 만큼 개발자가 직접 <span class="tooltip" id="id-6">Front End</span> 를 개발 할 수 있는 곳은 (아마)없다.  
이번에 Front End 를 공부하면서 직접 Front End 개발을 해보고 싶었고,  
이 블로그 자체가 나의 포트 폴리오가 될 것이란 판단도 있었다.  
그리고 개발 내용을 체계적으로 관리하고 싶어서 GitHub 를 사용하게 되었다.  
<br>
즉 아래와 같은 이점이 있어 GitHub Blog 를 선택하였다.
1. 직접 Front End 개발이 가능하여 개발 경험을 쌓을 수 있다.
2. 이 블로그 자체가 나의 Front End 개발 포트폴리오로 쓸 수 있다.
3. GitHub 를 사용하면, 내 소스 코드나 공부한 내용들을 체계적으로 정리가 가능하다.  



# 이 글을 읽는 사람은?
이후에 내가 필요할때 다시 보거나, 비전공자 또는 공부만 하고 실제 개발은 처음 하는 사람을 기준으로 글을 작성한다.  



# 목표
비전공자 또는 실제 개발을 처음 하는 사람이 순차적으로 따라만 하면 GitHub 블로그를 만들 수 있게 하는게 목표이다.    
소확행을 위해 각 글은 눈에 보이는 성과가 있는 한에서 최대한 짧게 쓰려고 한다.   
<br>
중간에 겪었던 모든 삽질과 궁금했던 점과   
관련된 개발 지식 등 필요한 내용을 짧게 쓸 예정이다.  
<br>
최단 기간으로 개발을 하기 위한 글이 아닌, 실패와 그 극복 과정을 주로 쓰려 하기 때문에 시간은 좀 걸릴 것 같다.  
하지만 꾸준히 쓸 예정이다.  



# 개발 순서
지금 이 블로그를 만드는 과정을 쓸 예정.  
각 기능의 완성 모습은 이 블로그를 보면 알 수 있다.  

 1. GitHub Page Repository 생성
 2. Jekyll 설치
 3. Jekyll 을 이용하여 로컬 테스트
 4. 블로그 기본 설정.
 5. Favicon
 6. Open Graph
 7. CSS 를 이용한 기본 레이아웃 변경
 8. 글씨체 적용
 9. Font Awesome 을 이용한 아이콘 사용
 10. CSS 를 이용한 반응형 레이아웃 변경
 11. JS 를 이용한 카테고리 기능
 12. JS 를 이용한 태그 기능
 13. JS 를 이용한 블로그 내 검색 기능
 14. 페이지 속도개선
 15. 팝업 각주 기능
 16. 블로그 Google 에 노출시키기
 17. 블로그 통계기능 추가

이 글을 쓰는 시점에는 15번까지 구현이 되어있다.  
글을 어느정도 쓰고 Google 에 노출시키고, 통계기능을 추가할 예정이다.  


# 준비물
정말 개발을 처음 하는걸 기준으로 쓸 예정이라, 아래와 같은 툴을 필요로 한다.  

### GitHub ID
GitHub Blog 를 만들기 위해선 GitHub 가입을 우선 해야한다.  
가입을 먼저 해두자.  


### Visual Studio Code
소스 코드 편집기이다.  
많은 소스 코드 편집기가 있는데 설명의 편의를 위해 내가 쓰는 툴을 기준으로 설명한다.  
따라서 소스 코드 편집기를 처음 사용 한다면, 이 툴을 쓰는게 글의 이해가 쉬울 것이다.  
사용법에 대해선, 실제 사용할때 필수적인 최소한의 부분만 잠깐잠깐 언급할 예정이다.     


### GitHub Desktop
Git 버전 관리를 윈도우에서 쉽게 사용하기 위한 툴.  
기본적으로 Git 의 명령어를 아는게 좋지만, 일단 처음이므로 쉽게 사용해보자.  
사용법은 실제 사용할때 언급할 예정이다. 


<br>

# 다음 주제
- [[GitHub Blog - 2] GitHub Page 만들기][start-github]

<hr>

# 참고
 - 나무위키 - [GitHub][github-namu]
 <br>
 <hr>

[start-github]: /develop/2021/12/20/blog-start-github.html
[github-namu]: https://namu.wiki/w/GitHub

<div class="tooltip-desc">
  <div class="tooltip-description" id="desc-1">리누스 토르발스가 개발한 분산형 버전 관리 시스템(VCS) 으로, 파일 변화를 시간에 따라 기록했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템</div>
  <div class="tooltip-description" id="desc-2">서버 컴퓨터의 전체 또는 일정 공간을 이용할 수 있도록 임대해 주는 서비스</div>
  <div class="tooltip-description" id="desc-3">GitHub 에서 제공하는 저장소</div>
  <div class="tooltip-description" id="desc-4">서버에서 미리 저장된 파일을 그대로 웹 페이지로 전달</div>
  <div class="tooltip-description" id="desc-5">일반적으로 웹(WWW) 공간을 임대(hosting)하는 것</div>
  <div class="tooltip-description" id="desc-6">서버에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분</div>
</div>