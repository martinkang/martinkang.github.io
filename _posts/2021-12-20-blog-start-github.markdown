---
layout: post
title:  "GitHub 블로그 시작하기 - GitHub Page 만들기"
date:   2021-12-20 18:00:00 +0900
categories: Git-Blog
---

GitHub 에서 GitHub Page 생성 과정을 남길 예정이다.  
사실 만드는 과정이야 인터넷에 널렸는데, 나는 그 중 실패한걸 위주로 남길 예정이다.  
대부분 만드는 과정이 위주이고 실패한 과정은 따로 따로 찾아봐야 하기 때문에,   
여기에 만드는 과정과 실패/해결을 같이 남긴다.  
그외에 만들면서 생긴 의문점들을 정리해볼 생각이다.  


# GitHub Page 생성
 GitHub Blog 를 만들기 위해선 우선 Repository 를 생성해야 한다.  
 Repository 는 저장소를 뜻하는데, GitHub Glog 의 자료들을 저장할 장소이다.    
 Repository 를 생성하기 위해선 GitHub 에 로그인 한 뒤, 좌상단에 다음 버튼을 누르면 된다.  
![create-repo](/assets/img/post-img/start-github-github/create-repo.png)  
<br>

그럼 다음과 같이 Repository Name 을 정할 수 있는데,   
이 Name 은 ***예외없이 Username.github.io*** 로 정해야 한다. ( 이유는 아래에 )  
즉 내 (임시)블로그의 Repository 이름은 martinmk63.github.io 가 된다.  
![create-new-repo](/assets/img/post-img/start-github-github/create-new-repo.png)  

### 생성 옵션들 ###
![create-repo2](/assets/img/post-img/start-github-github/create-repo2.png)  
***Public / Private*** 를 제외하곤 당장은 신경쓰지 않아도 된다.  
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
- Choose a license
  - 내 Repository 에 License 를 추가한다.
  - 더 자세한 내용은 아래 참조링크.


### 왜 Repository 의 이름을 username.github.io 로 해야 하는가? ###
작성중


***호스팅*** : 서버 컴퓨터의 전체 또는 일정 공간을 이용할 수 있도록 임대해 주는 서비스.  


### 내 username 은 어떻게 찾을까? ###
Username 을 모른다면 GitHub 우상단, 아래 그림의 빨간 네모를 클릭해보면 알 수 있다.    
![check-user-name](/assets/img/post-img/start-github-github/check-user-name.png) 





# GitHub Page 확인하기
Repository 생성이 성공하면, 나의 새로운 GitHub Blog 의 주소는 https://username.github.io 가 된다.  
그럼 들어가서 확인해보자.  
![newblog](/assets/img/post-img/start-github-github/newblog.png)    

GitHub Blog 스타트 성공!.  

<br>
***404 에러가 난다면*** 
- 한 3분 있다가 새로고침을 해보면 된다.  
- Repository 를 수정하고 Commit 해보면 반영이 바로 안되고 2-3분 정도 걸리는 것을 알 수 있다.   
한 2분정도 기다리고 다시 들어가면 반영이 되어있다.  


***나중에 private 로 바꾸고 싶다면***  
- setting 맨 아래에, 아래와 같은 Danger Zone 이 있다. 여기에서 아래 버튼을 누르면 가능하다.  
- private 저장소를 호스팅하고 싶으면 ***GitHub Pro 이상의 계정*** 을 구매해야 한다.  
![change-private](/assets/img/post-img/start-github-github/change-private.png)  




# 문제 해결 
- [GitHub 가입할때 잘못된 메일 주소를 써버렸다.][github-mail-error-link]  
  
# 다음 주제
- [GitHub 블로그 시작하기 - Jekyll 시작하기.][jekyll-link]
  
# 참고
- jetalog.net : [Jekyll을 이용해 GitHub에 블로그 만들기][jetalog-link]
- 𝝿번째 알파카의 개발 낙서장 : [Jekyll GitHub Pages를 이용해 나만의 블로그 만들기][알파카-link]
- Heee's Development Blog : [.gitignore 설정하기][gitignore-link]
- FlyingSquirrel : [Github license의 종류와 나에게 맞는 라이선스 선택하기][git-license-link]
- 코딩하는 락스타 : [저장소에 라이선스를 달아보자][corock-link]

[github-mail-error-link]: /Bugs/2021/12/20/github-join-email-error.html
[jekyll-link]: /git-blog/2021/12/20/blog-start-jekyll.html
[jetalog-link]: https://jetalog.net/86
[알파카-link]: https://blog.itcode.dev/posts/2021/06/06/jekyll-blog-prepare-git
[gitignore-link]: https://gmlwjd9405.github.io/2017/10/06/make-gitignore-file.html
[git-license-link]: https://flyingsquirrel.medium.com/github-license%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0-ae29925e8ff4
[corock-link]: https://corock.tistory.com/436
 