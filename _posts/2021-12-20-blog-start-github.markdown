---
layout: post
title:  "GitHub 블로그 시작하기 - GitHub Page 만들기"
date:   2021-12-20 18:00:00 +0900
categories: Git-Blog
---

지금 이 GitHub 블로그를 만드는 과정을 남길 예정이다.  
예상 독자? 는 나 또는 GitHub Blog 를 처음 만드는 코딩독학자.  
개발자이지만 비전공자이고, 이 분야를 한번도 해본적이 없어서  잊지 않기 위해 기록을 남긴다.  
<br>
사실 블로그 만드는 과정이야 인터넷에 널렸는데, 나는 그 중 실패한걸 위주로 남길 예정이다.  
대부분 만드는 과정이 위주이고 실패한 과정은 따로 따로 찾아봐야 하기 때문에,   
여기에 만드는 과정과 실패/해결을 같이 남긴다.  
그외에 만들면서 생긴 의문점들을 정리해볼 생각이다.  
<br>
이 글은 나중에 About 으로 옮길 것인데, 블로그 글을 순차적으로 쓰면서 같이 고치기 위햐여 일단 여기 남긴다.  
블로그 글과 함께 블로그를 점차 꾸밀 예정이다.  


# GitHub Page 생성
 GitHub Blog 를 만들기 위해선 우선 Repository 를 생성해야 한다.  
 Repository 를 생성하기 위해선 GitHub 에 로그인 한 뒤, 좌상단에 다음 버튼을 누르면 된다.  
![create-repo](/assets/img/post-img/start-github-github/create-repo.png)    

- ### 용어들 ###  
  - ***Repository*** : 저장소. GitHub 블로그의 자료들을 저장할 장소이다.  
<br>

그럼 다음과 같이 Repository Name 을 정할 수 있는데,   
이 Name 은 ***예외없이 Username.github.io*** 로 정해야 한다. ( 이유는 아래에 )  
즉 내 (임시)블로그의 Repository 이름은 martinmk63.github.io 가 된다.  
그외 아래 선택 옵션은 ***Public / Private*** 를 제외하곤 당장은 신경쓰지 않아도 된다.  
![create-new-repo](/assets/img/post-img/start-github-github/create-new-repo.png)  


### 생성 옵션들 ###
![create-repo2](/assets/img/post-img/start-github-github/create-repo2.png)  

- ***Public / Private***
  - Repository 의 공개여부이다. ***나중에도 변경 가능하다.***
  - Public 일 경우 누구나 나의 Repository 를 볼 수 있고, Download 도 가능하다.
  - 무료 호스팅은 Public 에서만 가능하며, ***무료 Private 는 호스팅을 지원하지 않는다.***
- Add a README file
  - README 파일을 추가할지 여부.
  - GitHub 에서 오픈 소스들을 찾아보면 README File 을 가장 먼저 볼 수 있는데, 보통 프로젝트나의 사용법이나 내용에 대해 적어둔다.
- Add .gitgnore
  - Git 버전 관리에서 제외할 파일 목록을 지정하는 파일이다.
  - Git 버전 관리가 필요없는 파일의 리스트를 여기에 추가하면, Git 이 추적을 하지 않는다.
    - 일반적으로 Git 은 프로젝트 내에 추가된 모든 파일을 추적하는데, .gitgnore 에 추가하면 파일 추적에서 제외된다.
- Choose a license
  - 내 Repository 에 License 를 추가한다.
  - 더 자세한 내용은 아래 참고링크.  

- ### 용어들 ###  
  - ***호스팅*** :서버 컴퓨터의 전체 또는 일정 공간을 이용할 수 있도록 임대해 주는 서비스  
  - ***버전 관리*** : 파일 변화를 시간에 따라 기록했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템.


# GitHub Page 확인하기
Repository 생성이 성공하면, 나의 새로운 GitHub Blog 의 주소는 https://username.github.io 가 된다.  
그럼 들어가서 확인해보자.  
![newblog](/assets/img/post-img/start-github-github/newblog.png)    

GitHub Blog 스타트 성공!.  
<br>

# 의문점들

### 왜 Repository 의 이름을 username.github.io 로 해야 하는가? ###
인터넷에 24시간 접속 가능한 홈페이지를 운영하기 위해서는   
인터넷에 24 시간 연결된 저장공간과, 그 홈페이지를 연결하는 주소(도메인)가 필요하다.  
<br>

GitHub Pages 는 이런 저장 공간과, 도메인을 제공하는 웹호스팅 서비스를 제공해준다.  
GitHub Pages 기본적으로 username.github.io 형식의 Repository 를 Root 로 호스팅 하고 있다. ( 즉 기본 설정값 )  
이로 인해 Repository 에 username.github.io 를 만들면,   
해당 Repository 를 Root 로 각 유저에게 할당된 도메인인 ***https://username.github.io/*** 로 연결되게 된다.  
***즉, GitHub Pages 에서 그렇게 정해놓은것이다.***  
- 해당 Repository 에서 폴더나 파일을 만들경우, username.github.io/폴더 or 파일 로 접근 가능해진다.  
  - username.github.io 에 Font 폴더를 만들면 ***https://username.github.io/Font*** 로 접근이 가능하다.  
- 개인 서버에 홈페이지를 올릴경우 도메인 주소에 Root 디렉토리를 마음대로 지정이 가능하다.  

- ### 용어들 ###
  - ***웹호스팅*** 
    - 일반적으로 웹(WWW) 공간을 임대(hosting)하는 것  
  - ***도메인***
    - 실제로 인터넷 사이트 주소는 127.0.0.1 과 같은 IP 주소를 가지는데, 이를 domain.com 과 같이 사람이 쉽게 기억할 수 있게 문자 형태로 표현하는 주소.
    - 실제 도메인 주소를 가지려면, 도메인 주소를 구매해야 한다.  
<br>

### username.github.io 가 아닌 다른 Repository 를 만들었다면? ###
예를들어 martinmk63.github.io 를 martinmk633.github.io 로 Repository 이름을 변경한다면  
아래 사진과 같이 ***http://username.github.io/Repository/*** 하위로 호스팅 하게 된다.  
이것도 왜 그러냐고 묻는다면... GitHub Pages 에서 설정을 그렇게 해놨겠지...?  
적어도 내가 공부한 바로는 그렇다.  
GitHub Pages 에서 제공한 username.github.io 도메인 주소는 바꿀 수 없다.  
( 개인 도메인을 구매하여 연결한다면 가능하다 )  
![page-setting](/assets/img/post-img/start-github-github/github-page-setting.png) 
<br>



### 내 username 은 어떻게 찾을까? ###
Username 을 모른다면 GitHub 우상단, 아래 그림의 빨간 네모를 클릭해보면 알 수 있다.    
![check-user-name](/assets/img/post-img/start-github-github/check-user-name.png) 


<br>

# 문제 해결 
- ***[GitHub 가입할때 잘못된 메일 주소를 써버렸다.][github-mail-error-link]***  
  - 실제로 스샷 찍기 위해 새 아이디 만들때 메일 주소를 잘못써 버렸다.  

- ***404 에러가 난다면*** 
  - 시키는 대로 다 했는데 404 에러로 홈페이지가 안나온다.
  - 한 3분 있다가 새로고침을 해보면 된다.  
  - Repository 를 수정하고 Commit 해보면 반영이 바로 안되고 2-3분 정도 걸리는 것을 알 수 있다.   
한 2분정도 기다리고 다시 들어가면 반영이 되어있다.  


- ***나중에 private 로 바꾸고 싶다면***  
  - setting 맨 아래에, 아래와 같은 Danger Zone 이 있다. 여기에서 아래 버튼을 누르면 가능하다.  
  - private 저장소를 호스팅하고 싶으면 ***GitHub Pro 이상의 계정*** 을 구매해야 한다.  
![change-private](/assets/img/post-img/start-github-github/change-private.png)  


  
# 다음 주제
- [GitHub 블로그 시작하기 - Jekyll 시작하기.][jekyll-link]
  
# 참고
- jetalog.net : [Jekyll을 이용해 GitHub에 블로그 만들기][jetalog-link]
- 𝝿번째 알파카의 개발 낙서장 : [Jekyll GitHub Pages를 이용해 나만의 블로그 만들기][알파카-link]
- Heee's Development Blog : [.gitignore 설정하기][gitignore-link]
- FlyingSquirrel : [Github license의 종류와 나에게 맞는 라이선스 선택하기][git-license-link]
- 코딩하는 락스타 : [저장소에 라이선스를 달아보자][corock-link]
- 두-번째저장소 : [GitHub Pages에 포트폴리오 호스팅하기] : [github-page-link]
- Dotname : [웹호스팅][webhosting-link]


[github-mail-error-link]: /Bugs/2021/12/20/github-join-email-error.html
[jetalog-link]: https://jetalog.net/86
[알파카-link]: https://blog.itcode.dev/posts/2021/06/06/jekyll-blog-prepare-git
[gitignore-link]: https://gmlwjd9405.github.io/2017/10/06/make-gitignore-file.html
[git-license-link]: https://flyingsquirrel.medium.com/github-license%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0-ae29925e8ff4
[corock-link]: https://corock.tistory.com/436
[github-page-link]: https://shxrecord.tistory.com/203
[webhosting-link]: https://www.dotname.co.kr/hosting/web/guide
[jekyll-link]: /git-blog/2021/12/20/blog-start-jekyll.html