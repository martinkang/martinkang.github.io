---
layout: post
title:  "GitHub 블로그 시작하기 - Jekyll 시작하기 2."
description: "Jekyll 을 이용하여 GitHub Blog 를 시작해보자."
date:   2021-12-20 19:10:00 +0900
categories: develop
tags: [blog, jekyll]
img-tag: jekyll
---
 
# Jekyll 을 시작해보자.
앞선 작업들을 다 했으면, 위에서 jekyll 을 설치할때 썼던 명령 프롬프트를 이용하여 압축을 푼 폴더로 간다.   
혹시 Dos 명령어를 모른다면 [Dos 명령어][Dos-link] 를 참고해보자.  
만약 D:\study\git\ 폴더라면  아래와 같은 명령어로 이동 가능하다.  
```
> D:
> cd study
> cd git
```
VS Code 를 깔았다면 폴더 열기로 열면 된다.  
그리고 아래에 터미널 창을 누르거나 상단에 터미널 메뉴에서 새 터미널 메뉴를 누르자.  
![new-ter-menu](/assets/img/post-img/jekyll-start/new-ter.png)  

위에서 실행시킨 명령창과 동일한 창이 아래와 같이 생긴다.  
![new-ter2](/assets/img/post-img/jekyll-start/new-ter2.png)  


이제 여기에 아래와 같은 명령어를 수행한다.
```
jekyll new ./
```  
여기에 jekyll 을 새로 시작하게 하는 명령어이다. (./ 는 현재 폴더를 뜻한다. )  
해당 명령어를 치면 jekyll 로 정적 사이트를 만들기 위한 기본 파일과 설정 등이 깔리게 된다.  
혹시라도 안에 파일이 있을경우 overwrite 될 수 있다는 에러가 발생하는데,  
그때는 에러메시지 처럼 --force 옵션을 추가하자.  
***jekyll new ./ --force***  
<br>
해당 명령어를 치면 새로운 파일과 폴더들이 생긴것을 볼 수 있다.  
***jekyll 프로젝트 구성요소 살펴보기*** - [의문점들3](#의문점들)  

<br>

```
bundle install
```
이 과정은 Bundle 이 Gemfile 에서 필요한 오픈 소스들을 찾아 설치해주는 명령이다.  
jekyll new 로 생긴 정적 웹 페이지를 표현하기 위한 필요한 오픈 소스들을 찾아 설치해준다.  

```
bundle exec jekyll serve
```  
jekyll 을 이용하여, 지금 이 프로젝트의 웹 사이틀을 내 로컬에 올려주는 명령이다.  
아래와 같은 로그가 나오면 성공적으로 정적 웹 페이지가 127.0.0.1:4000 이란 주소에 올라간 것을 뜻한다. ( 해당 주소는 내 로컬 컴퓨터를 뜻한다. )  
인터넷 주소창에 127.0.0.1:4000([용어1](#용어)) 라 치면 내 페이지에 접근할 수 있다.  

![jekyll-run](/assets/img/post-img/jekyll-start/jekyll-run.png)  

접속하면 다음과 같은 화면이 나올 것이다.  
![first-page](/assets/img/post-img/jekyll-start/first-page.png)  

<br>
명령어는 bundle exec jekyll serve 와 jekyll serve 둘다 가능하다.  
하지만 bundle 을 쓰는쪽이 편하다.  ([의문점들1](#의문점들))
<br>

### Jekyll 테마 입히기
jekyll 엔 정말 많은 테마가 존재한다.  
***[Jekyll Themes][jekyll-themes-link]*** 여기에 접속해서 맘에 드는 테마를 골라보자.  

테마 고를대 주의할 점은, 작은 기기 (스마트 폰같은)에도 최적화된 화면을 제공하고 싶으면,   
반응형 웹디자인([용어2](#용어)) 으로 생성된걸 찾는게 좋다.  
물론 일반 웹페이지를 찾고, 반응형 웹디자인으로 본인이 수정해도 된다. 

<br>
반응형인지 알기 제일 쉬운 방법은 아래 Demo 버튼을 누르고 창 크기를 줄여보자.  
![jekyll-list](/assets/img/post-img/jekyll-start/jekyll-theme.png)  

일반적으로 PC 에서의 화면이다.  
![jekyll-list](/assets/img/post-img/jekyll-start/theme-h.png)  

<br>

가로를 극단적으로 줄여보자. 어느순간 화면이 바뀌는걸 볼 수 있다.  
반응형이 아니면, 사이즈에 상관없이 같은 디자인을 가진다.  
![jekyll-list](/assets/img/post-img/jekyll-start/theme-v.png)  


이 블로그는 Monos 를 선택하였다.  
<br>

Download 를 하고 ***jekyll new ./***  한 폴더에 덮어 씌우자.   
그리고 테마를 새로 입혔으니, 이 테마에 필요한 기능들을 설치하기 위하여  
bundle 을 사용하여 다시 install 해야 한다.  
```
bundle install
```  

<span style="color:red">***Ruby 버전을 잘못 설치했을 경우 여기서 에러가 대차게 날것이다.***</span>  -> ***[해결하기][install-lastest-ruby-link]***
```
bundle exec jekyll serve
```  
다시 수행하면 테마가 이쁘게 입혀진걸 볼 수 있다.  
![jekyll-start](/assets/img/post-img/jekyll-start/jekyl-start-theme.png)   
하지만 웹 페이지 주소를 보면 127.0.0.1:4000 이다.  
즉 내 로컬 서버에서만 동작하는 블로그이다.  
내 로컬에서 홈페이지가 잘 구동하는걸 봣으니 진짜로 GitHub 에 올려보자.  

<br>

# GitHub 로 업로드 하자.
위의 작업은 내 로컬 에서 블로그 페이지를 만들고 수정한 것이고, 실제로 웹상에는 올라가 있지 않다.  
내 로컬의 변경 내역을 GitHub 에 올려야 GitHub 에서 변경된 정보를 반영하여    
실제 https://username.github.io 에 블로그가 올라가게 된다.  
<br>
이전에 다운받은 GitHub Desktop 을 찾아서 실행시켜 보자.  
![github-desk](/assets/img/post-img/jekyll-start/github-desktop.png)   
아래와 같이 add repository 를 선택하자. ( new 가 아니다. )  
![add-repo](/assets/img/post-img/jekyll-start/add-repo.png)   
<br>

그리고 여태것 작업한 폴더를 선택한다. 그러면 다음과 같은 화면이 나온다.  
![github-page](/assets/img/post-img/jekyll-start/github-page.png)    

좌측 창은 추가/변경 된 파일 리스트이고 오른쪽은 파일에서 추가/변경 된 내용이다.  

파일 리스트에서 초록 + 는 새로 추가된 파일이고,   
노랑 점 찍힌 네모는 수정된 파일이다.  

<br>

만약 여기서 GitHub 로 올리고 싶지 않은 파일이 있다면 좌측에 체크를 해제하면 된다.  


GitHub 를 사용하려면 간단하게 몇가지 명령어에 대해선 알아야 한다.  
( 개발자라면 GitHub 사용법을 꼭 숙지하는걸 추천한다. )  
이 사이트에서 매우 자세히 설명한다. - [Git 문서][git-scm-link]

![github-page](/assets/img/post-img/jekyll-start/commit.png)    
아래 Commit 버튼이 있는데 여기에 메시지를 적고 Commit 하자.  

***Commit 은 내 로컬 저장소에 Repository 추가/변경 사항을 기록하는 것이다.***  
이 Commit 메시지는 의미있는게 좋다.  
혹시 이전 시점으로 소스를 돌려야 할때, 과거의 Commit 시점으로 되돌릴 수 있는데 이 메시지를 보고 돌려야 한다.  
![github-page](/assets/img/post-img/jekyll-start/commit-history.png)    

ABCD 이런식으로 Commit 하면 나중에 찾기 곤란하다.  
<br>

참고로 Commit 후 파일을 변경했는데, 변경한걸 마지막 Commit 으로 되돌리고 싶다면 Discard 시키면 된다.  
![github-page](/assets/img/post-img/jekyll-start/discard.png)   


Commit 을 다했으면 상단에 Push 를 누르자.  
![github-page](/assets/img/post-img/jekyll-start/push.png)   
***push 는 내 로컬에 Commit 된 것을 GitHub 서버의 내 Repository 에 반영해준다.***  
GitHub 서버의 내 Repository 에 반영을 해야 실제 웹에 올라가게 된다.  

![github-page](/assets/img/post-img/jekyll-start/start-web.png) 


진짜로 웹에 블로그 올리기 성공!.   

<br>




다음엔 블로그의 기본 설정을 바꿔보자.  

<br>

# 다음 주제
- [GitHub 블로그 시작하기 - 기본 설정하기.][config-link]


<br>
<br>
<br>
<br>


# 의문점들

### 1. bundle exec jekyll serve VS jekyll serve 
jekyll serve 로 실행이 가능하지만 bundle exec 를 앞에 붙이는걸 추천한다.  
이유는 jekyll serve 만 수행할 경우 아래와 비슷한 에러가 날 확률이 매우 크다.  
![bundle-exec](/assets/img/post-img/jekyll-start/bundle-exec.png)  
에러 메시지는 다 다르겠지만, 말하고자 하는건 버전이 꼬였다 정도로 생각하면 된다.  
A 버전이 필요하지만 나는 다른 버전인 B 버전을 쓰고 있다던가...  
소프트웨어가 커지고 복잡해질수록 여러 외부 라이브러리들을 쓰게 되는데,  
이 외부 라이브러리들 역시 다른 외부 라이브러리를 쓰게된다.  
( A 라이브러리가 B 라이브러리를 쓰고있다면 A 라이브러리가 B 라이브러리에 ***의존성*** 을 가지고 있다고 한다. )  
문제는 A 라이브러리와 B 라이브러리 모두 C 라이브러리를 쓰는데,  
서로 쓰는 버전이 달라 문제가 생길 수 있다.  
소프트웨어 크고 복잡할수록 이런 문제가 잘 발생하는데 이를 ***의존성 지옥*** 이라고 한다.
Bundle 은 정확하고 필요한 버전을 추적 설치하기 때문에  
Bundle exec jekyll serve 로 수행하면, 이런 의존성 지옥 문제를 해결하고 실행이 가능해지는 것이다.  
더 자세히 알고싶다면 [laravel 5프로그래밍][의존성지옥-link] 여기로.  


### 2. Please check your Rails app for 'config.i18n.fallbacks = true'. 메시지
Bundle install 시 Bundle complete! 라고 뜬뒤 이런 문구가 뜨는 경우가 있다.  
install 성공했다 하고 찜찜해서 찾아보았다.  

> config.i18n.fallbacks sets fallback behavior for missing translations. Here are 3 usage examples for this option:  

누락된 번역에 대해 대체 동작을 설정한다고 한다. 3가지 옵션이 가능한데  
해당 내용은 RubyOnRails 공식 홈페이지에서 확인 가능하다.  
config.i18.error 가 발생한다면 여길 확인해보면 좋을 것 같다. - [[참고 3]](#참고)  
사실 읽고보니 크게 중요한 내용은 아닌거 같아서 지금은 넘기고 나중에 잘 알게되면 적겠다.  

<br>

### 3. Jekyll 구성요소 살펴보기
정리해서 적으려 했는데, jekyll 공식 한글 사이트가 잘나와 있어 링크로 남긴다.  - [Jekyll 구조][jekyll-docu-link]  
<br>


# 문제 해결
- [jekyll 실행시 `require': cannot load such file -- webrick (LoadError). 가 발생한다.][준호-link]  
  - 이 에러메시지가 나오면 Ruby3.0 버전 이상을 깔았단 거다. Ruby3.x 를 지우고 2.5 이상 버전을 받자.  
  




# 용어
1. ***IP 와 Port*** : 웹 상에 연결된 장비에 접속하기 위한 주소이다. 
    - 127.0.0.1:4000 에서127.0.0.1 가 IP 이고 Port 가 4000 이란 뜻이다.
      - 127.0.0.1 은 자기 자신의 컴퓨터를 뜻한다.
    - IP 는 일종에 위치 주소로 '구로구 A아파트' 와 비슷한 의미를 가진다.
    - Port 는 해당 주소에서 들어갈 문과 같은 의미로 'A 아파트 301호' 를 뜻한다.
2. ***반응형 웹디자인*** : 하나의 웹사이트에서 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법.
3. ***Gem*** : 루비 프로젝트에 포함시킬 수 있는 코드. 
    - 기능들을 패키지화 해서 다른 사람들이나 프로젝트에 공유할 수 있게 함.
4. ***Locale*** : 사용자의 언어, 국가뿐 아니라 사용자 인터페이스에서 사용자가 선호하는 사항을 지정한 매개 변수의 모임.


# 참고
1. 준호씨의 블로그 : [cannot load such file --webrick][준호-link]
2. 두-번째저장소 : [GitHub Pages에 포트폴리오 호스팅하기][github-page-link]
3. RubyOnRail 공식 : [RubyOnRail 가이드][RubyOnRail-link]
4. Rubyongems : [bundelr dependencies][bundler-link]
5. 나무위키 : [Dos 명령어][Dos-link]
6. frhyme.code : [왜 jekyll serve 가 안될까?][frhyme-link]
7. laravel 5 프로그래밍 : [의존성 지옥][의존성지옥-link]
8. 위키백과 : [로케일][로케일-link]
9. Negabaro`s Blog : [Rails I18n에 대해서]: [I18-link]
10. jekyll 테마 사이트 : [jekyll themes]:[jekyll-themes-link]
11. Git : [Git-Ebook]:[git-scm-link]
12. jekyll 도뷰먼트 : [jekyll structure][jekyll-docu-link]


[준호-link]: https://junho85.pe.kr/1850
[github-page-link]: https://shxrecord.tistory.com/203
[RubyOnRail-link]: https://guides.rubyonrails.org/v5.2.0/configuring.html
[bundler-link]: https://rubygems.org/gems/bundler/versions/1.17.2
[Dos-link]: https://namu.wiki/w/DOS/%EB%AA%85%EB%A0%B9%EC%96%B4
[의존성지옥-link]: https://www.lesstif.com/laravelprog/dependency-hell-26083775.html
[로케일-link]: https://ko.wikipedia.org/wiki/%EB%A1%9C%EC%BC%80%EC%9D%BC
[I18-link]: https://negabaro.github.io/archive/i18n
[jekyll-themes-link]: http://jekyllthemes.org/
[git-scm-link]: https://git-scm.com/book/ko/v2
[jekyll-docu-link]: https://jekyllrb-ko.github.io/docs/structure/

[config-link]: /git-blog/2021/12/20/blog-start-github-config.html
[install-lastest-ruby-link]: /bugs/2021/12/23/install-lastest-ruby.html