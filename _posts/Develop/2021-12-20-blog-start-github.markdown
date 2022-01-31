---
layout: post
title:  "[GitHub Blog - 2] GitHub Page 만들기"
description: "GitHub Repository 를 생성하고 Blog를 시작해보자."
date:   2021-12-20 18:00:00 +0900
categories: develop
tags: [blog, github, Front-End]
img-tag: github
---

# GitHub Repository 생성
 GitHub Blog 를 시작하기 위해선 우선 
 <span class="tooltip" id="id-1">Repository</span> 를 생성해야 한다.  
 Repository 를 생성하기 위해선 GitHub 에 로그인 한 뒤, 좌상단에 다음 버튼을 누르면 된다.  
![create-repo](/assets/img/post-img/start-github-github/create-repo.png){:class="lazyload" .post-img .img-w300}


그럼 다음과 같이 Repository Name 을 정할 수 있는데,   
이 Name 은 ***예외없이 username.github.io*** 로 정해야 한다.   
([GitHub Blog Repository 는 왜 지정되어 있는가?][repository-link])  
<br>
즉 username 이 martinmk63 라면 Repository 이름은 martinmk63.github.io 가 된다.  
그 외 아래 선택 옵션은 ***Public / Private*** 를 제외하곤 당장은 신경쓰지 않아도 된다.  
![create-new-repo](/assets/img/post-img/start-github-github/create-new-repo.png){:class="lazyload" .post-img .img-w600}  


### 생성 옵션들 ###
![create-repo2](/assets/img/post-img/start-github-github/create-repo2.png){:class="lazyload" .post-img .img-w600}  

- ***Public / Private***
  - Repository 의 공개여부이다. ***나중에도 변경 가능하다.***
  - Public 일 경우 누구나 나의 Repository 를 볼 수 있고, Download 도 가능하다.
  - 무료 <span class="tooltip" id="id-2">호스팅</span> 은 Public 에서만 가능하며, ***무료 Private 는 호스팅을 지원하지 않는다.***
- Add a README file
  - README 파일을 추가할지 여부.
  - GitHub 에서 오픈 소스들을 찾아보면 README File 을 가장 먼저 볼 수 있는데,    
   보통 여기에 프로젝트의 사용법이나 내용에 대해 적어둔다.
- Add .gitgnore
  - Git
  <span class="tooltip" id="id-3">버전 관리</span> 에서 제외할 파일 목록을 지정하는 파일이다.
  - Git 버전 관리가 필요없는 파일의 리스트를 여기에 추가하면, Git 이 추적을 하지 않는다.
    - 일반적으로 Git 은 프로젝트 내에 추가된 모든 파일을 추적하는데, .gitgnore 에 추가하면 파일 추적에서 제외된다.
- Choose a license
  - 내 Repository 에 License 를 추가한다.
  - 더 자세한 내용은 : FlyingSquirrel - [Github license의 종류와 나에게 맞는 라이선스 선택하기][git-license-link]  
<br>

# GitHub Page 확인하기
Repository 생성이 성공하면, 나의 새로운 GitHub Blog 의 주소는 https://username.github.io 가 된다.  
그럼 들어가서 확인해보자.  
![newblog](/assets/img/post-img/start-github-github/newblog.png){:class="lazyload" .post-img .img-w400}      

GitHub Blog 스타트 성공!.  
<br>


# 다음 주제
- [[GitHub Blog - 3] Jekyll 시작하기 1][jekyll-link]  
<hr>

# 부록

- ***[GitHub Blog Repository 는 왜 지정되어 있는가?][repository-link]***
  - GitHub Blog Repository 는 왜 username.github.io 인가? 잘못 만들면 어떻게 할까?
  

- ***[GitHub 가입할때 잘못된 메일 주소를 써버렸다.][github-mail-error-link]***  
  - 실제로 스샷 찍기 위해 새 아이디 만들때 메일 주소를 잘못써 버렸다.  


- ***404 에러가 난다면*** 
  - 시키는 대로 다 했는데 404 에러로 홈페이지가 안나온다.
  - 한 3분 있다가 새로고침을 해보면 된다.  
    - Repository 를 수정하고 Commit 해보면 반영이 바로 안되고 2-5분 정도 걸리는 것을 알 수 있다.   
    한 5분정도 기다리고 다시 들어가면 반영이 되어있다.  
  - 그래도 안나온다면 Repository 이름을 username.github.io 로 설정했는지 확인해보자.


- ***나중에 private 로 바꾸고 싶다면***  
  - setting 맨 아래에, 아래와 같은 Danger Zone 이 있다. 여기에서 아래 버튼을 누르면 가능하다.  
  - private 저장소를 호스팅하고 싶으면 ***GitHub Pro 이상의 계정*** 을 구매해야 한다.   
  ![change-private](/assets/img/post-img/start-github-github/change-private.png){:class="lazyload" .post-img .img-w550}  



- ***내 username 은 어떻게 찾을까?***
  - Username 을 모른다면 GitHub 우상단, 아래 그림의 빨간 네모를 클릭해보면 알 수 있다.    
  ![check-user-name](/assets/img/post-img/start-github-github/check-user-name.png){:class="lazyload" .post-img .img-w200}

<br>

  
  
# 참고
- jetalog.net : [Jekyll을 이용해 GitHub에 블로그 만들기][jetalog-link]
- 𝝿번째 알파카의 개발 낙서장 : [Jekyll GitHub Pages를 이용해 나만의 블로그 만들기][알파카-link]
- Heee's Development Blog : [.gitignore 설정하기][gitignore-link]
- FlyingSquirrel : [Github license의 종류와 나에게 맞는 라이선스 선택하기][git-license-link]
- 코딩하는 락스타 : [저장소에 라이선스를 달아보자][corock-link]
- 두-번째저장소 : [GitHub Pages에 포트폴리오 호스팅하기] : [github-page-link]
- Dotname : [웹호스팅][webhosting-link]
<br>

<hr>
<div class="tooltip-desc">
  <div class="tooltip-description" id="desc-1">GitHub 에서 제공하는 저장소이다</div>
  <div class="tooltip-description" id="desc-2">서버 컴퓨터의 전체 또는 일정 공간을 이용할 수 있도록 임대해 주는 서비스</div>
  <div class="tooltip-description" id="desc-3">파일 변화를 시간에 따라 기록했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템</div>
</div>

[github-mail-error-link]: /bugs/2021/12/20/github-join-email-error.html
[jetalog-link]: https://jetalog.net/86
[알파카-link]: https://blog.itcode.dev/posts/2021/06/06/jekyll-blog-prepare-git
[gitignore-link]: https://gmlwjd9405.github.io/2017/10/06/make-gitignore-file.html
[git-license-link]: https://flyingsquirrel.medium.com/github-license%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0-ae29925e8ff4
[corock-link]: https://corock.tistory.com/436
[github-page-link]: https://shxrecord.tistory.com/203
[webhosting-link]: https://www.dotname.co.kr/hosting/web/guide

[jekyll-link]: /develop/2021/12/21/blog-start-jekyll.html
[repository-link]: /study/2021/12/20/github-repository.html