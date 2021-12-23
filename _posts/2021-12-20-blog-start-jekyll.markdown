---
layout: post
title:  "GitHub 블로그 시작하기 - Jekyll 시작하기."
date:   2021-12-20 18:10:00 +0900
categories: Git-Blog
---
 
# Jekyll 이란?
Ruby 로 만들어진 정적 사이트([용어1](#용어)) 생성기이다. 보통 지킬 이라고 읽는다.  
참고로 Jekyll 을 설치하지 않아도 GitHub Blog 는 만들 수 있다.  


### Jekyll 은 왜 설치할까?  
웹 페이지를 수정하고 GitHub 에 Commit/Push 를 하면 바로 웹 사이트에 올라가게 된다.  
일반적으로 프로그래밍 언어나 Markdown([용어3](#용어)) 문법을 이용하여 수정된 내용을 확인하기 위해선   
GitHub 에 Commit/Push 를 하고 웹 사이트에 들어가야만 확인이 가능하다.  
그래서 수정한 내용을 웹 사이트에 올리기 전 Jekyll 을 깔아 의도한 대로 페이지가 작성됬는지 확인하는 작업이 필요하다.  
즉 ***실제 웹 페이지에 올리기전에 내 로컬 컴퓨터에서 확인하기 위해*** 설치한다.

<br>


# Jekyll 설치  

### Ruby 설치
이 글을 보는사람이 대부분 비전공자 또는 초보 개발자일것이므로... 윈도우를 기준으로 쓴다.  
Jekyll 은 Ruby([용어5](#용어)) 의 패키지 매니저인 Gem 을 사용해서 설치할 수 있다.  
그리고 이 Gem 을 사용하기 위해선 Ruby 를 우선 설치해야 한다.  
<br>
Ruby 는 [RubyInstaller][Ruby-install-link] 에서 다운 가능하다.  
여기서 <span style="color:red">***<U>꼭!꼭!꼭! Ruby-Devkit 2.6.6-1</U>***</span> 로 다운받아야 한다. ([의문점1](#의문점들))  
이제 구 버전이라 해당 페이지에서 안보이는데, 상단에 Archives 를 누르고 버전을 찾으면 나온다.   
다운받고 평소와 같이 next 를 누르다 보면 다음과 같이 MSYS2([용어6](#용어)) 를 설치하는 화면이 뜬다.  
***주의할점*** : 윈도우 ID 가 한글로 되어 있으면 문제 발생의 여지가 크다.  
한글 계정일 경우 영문으로 ID 를 바꾸고 해야 한다.  
![MSYS2설치](/assets/img/post-img/jekyll-start/msys2-install.png)  

이 창에서 설치할 경우 MSYS2 를 직접 받아 설치하는 것과 두가지가 다른데
1. 원하는 Path 에 설치가 불가능하다.
2. 제어판->프로그램 및 기능 에서 찾을 수 없다.

이게 싫다면 MSYS2 를 개별적으로 찾아 설치해야 한다.  
나는 그냥 여기서 3번을 눌러 설치했다.  
( 1번을 선택하고, jekyll 실행시 MinGW([용어7](#용어)) 버전이 안맞다고 하면 그때 3번 해도 된다. )  
<br>

### Jekyll 과 Bundler 설치
Ruby 와 MSYS2 를 다 설치하였다면, 윈도우 좌하단에 검색창에서 Ruby 를 검색해보자.  
![ruby](/assets/img/post-img/jekyll-start/cmd-ruby.png)  
혹시 안나오면 검색창에 cmd 라 검색하면 cmd 또는  명령 프롬프트 라고도 나온다.  
```
gem install jekyll bundler
jekyll -v
```
 gem 패키지 매니저를 이용하여 jekyll 과 bundler([용어9](#용어)) 를 install 하는 명령이다.  
jekyll -v 는 jekyll 버전을 확인하는 명령어인데 아래와 같이 나오면 jekyll 과 bundler 설치에 성공한 것이다.  
```
> jekyll -v
jekyll 4.2.1

> bundler -v
Bundler version 2.3.1
```
둘다 성공적으로 설치가 되었다!.  
<br>

# 본격 GitHub Page 시작

### GitHub 에서 내 Repository 를 다운받자
Blog 페이지를 추가/수정 하려면, 내가 작업할 장비의 로컬에 Blog Repository 를 받아야 한다.    
( GitHub 홈페이지 내에서 Repository 에 추가/수정이 가능하지만, 추천하지 않는다. )   
GitHub 를 로그인 한 뒤 좌 상단을 보면 다음과 같은 Repository 목록이 있다.  
![repo-list](/assets/img/post-img/jekyll-start/github-repository.png)  
여기 들어가면 아래와 같은 Code 버튼을 눌러 Download 를 하자.  
다운로드 방법은 참 다양한데, 윈도우 환경이고 GitHub 첫 사용이면 간단하게 Download 를 추천한다.   
![repo-list](/assets/img/post-img/jekyll-start/down-repo.png)  
다운을 다 받았으면 압축을 풀어본다.  
<br>

### GitHub Desktop 을 다운받자  
역시 GitHub 를 제대로 사용하려면 Git 버전관리와 다양한 명령어에 대해서 알아야 한다.  
하지만 이 글의 중점 소재가 아니고, 일단 시작하는 사람들을 위한 글이라 Git 버전 관리에 대해서 깊게 알 필요는 없다고 생각한다.  
Git 버전 관리를 윈도우에서 쉽게 사용하기 위해서 GitHub Desktop 이라는 프로그램이 존재하고, 일단 이걸 깔고 써보자. 사용법은 아래에.   
[GitHub Desktop 설치 및 사용][GitHub-Desktop-link]    
<br>

### 소스 코드 편집기를 다운받자  
Jekyll 을 깔고 나면 본격적으로 페이지를 수정해야 하는데, 위에처럼 cmd 창에서 하기엔 너무 힘들다.  
이를 위해서 소스 코드 편집기가 존재하며, 아직 쓰는게 없다면  ***Visual Studio Code ( VS Code )***  를 추천한다.  
무료이고 여러 언어에 맞는 툴들을 추가 설치가 가능하다.    

VS Code 설치 및 시작은 이 링크를 참고하면 좋을 것 같다. : [스타트코딩 작업실][스타트코딩 작업실-link]   
<br>

### Jekyll 을 시작해보자.
위의 작업들을 다 했으면, 위에서 jekyll 을 설치할때 썼던 명령 프롬프트를 이용하여 압축을 푼 폴더로 간다.   
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

```
bundle install
```
이 과정은 Bundle 이 Gemfile 에서 필요한 오픈 소스들을 찾아 설치해주는 명령이다.  
jekyll new 로 생긴 정적 웹 페이지를 표현하기 위한 필요한 오픈 소스들을 찾아 설치해준다.  

```
bundle exec jekyll serve
```
bundle exec jekyll serve 와 jekyll serve 둘다 가능하다.  
하지만 bundle 을 쓰는쪽이 편하다.  ([의문점들3](#의문점들))

jekyll 을 이용하여, 지금 이 프로젝트의 웹 사이틀을 내 로컬에 올려주는 명령이다.  
아래와 같은 로그가 나오면 성공적으로 정적 웹 페이지가 127.0.0.1:4000 이란 주소에 올라간 것을 뜻한다. ( 해당 주소는 내 로컬 컴퓨터를 뜻한다. )  
인터넷 주소창에 127.0.0.1:4000([용어10](#용어)) 라 치면 내 페이지에 접근할 수 있다.  

![jekyll-run](/assets/img/post-img/jekyll-start/jekyll-run.png)  

접속하면 다음과 같은 화면이 나올 것이다.  
![first-page](/assets/img/post-img/jekyll-start/first-page.png)  

<br>

### Jekyll 구성요소 살펴보기
![jekyll-list](/assets/img/post-img/jekyll-start/jekyll-first-list.png)  
- posts
- config.yml
- .gitignore
- 404.html
- about.markdown
- Gemfile
- Gemfile.lock
- index.markdown

<br>

### Jekyll 테마 입히기
jekyll 엔 정말 많은 테마가 존재한다.  
http://jekyllthemes.org/ 여기에 접속해서 맘에 드는 테마를 골라보자.  

테마 고를대 주의할 점은, 작은 기기 (스마트 폰같은)에도 최적화된 화면을 제공하고 싶으면,   
반응형 웹디자인([용어11](#용어)) 으로 생성된걸 찾는게 좋다.  
물론 일반 웹페이지를 찾고, 반응형 웹디자인으로 본인이 수정하면 된다. 


반응형인지 알기 제일 쉬운 방법은 아래 Demo 버튼을 누르고 창 크기를 줄여보자.  
![jekyll-list](/assets/img/post-img/jekyll-start/jekyll-theme.png)  

일반적으로 PC 에서의 화면이다.  
![jekyll-list](/assets/img/post-img/jekyll-start/theme-h.png)  

가로를 극단적으로 줄여보자. 어느순간 화면이 바뀌는걸 볼 수 있다.  
![jekyll-list](/assets/img/post-img/jekyll-start/theme-v.png)  


이 블로그는 Monos 를 선택하였다.  
<br>

테마를 새로 입혔으니, 필요한 기능들을 설치하기 위하여  
bundle 을 사용하여 다시 install 해야 한다.  
```
bundle install
```  

<span style="color:red">***Ruby 버전을 잘못 설치했을 경우 여기서 에러가 대차게 날것이다.***</span>

```
bundle exec jekyll serve
```  
다시 수행하면 테마가 이쁘게 입혀진걸 볼 수 있다.  
![jekyll-start](/assets/img/post-img/jekyll-start/jekyl-start-theme.png)   
jekyll 시작 성공!.  

<br>

# 의문점들

### 1. 나는 Ruby 최신 버전으로 받고싶은데?? ###  
웹에서 자료를 찾다보면 Ruby 를 받으라 하지, 정확히 몇 버전이라고 안써있는 경우도 많다.  
그럼 보통 최신버전으로 받을텐데 ( 사실 처음에 내가 그랬다. ) 그러면 어떻게 될까?  
왜 굳이 2.6.6 을 받으라고 한걸까?  

3.0 을 깔고 위에서 수행한 
```
bundle install
```
을 수행해 본다. 그럼 아래와 같은 에러가 발생할 것이다.  
에러메시지를 잘 보면 bundle 을 업데이트 하고 bundler 1.17.2 를 설치하란게 보인다.  
***에러 메시지는 꼭 읽어보자.*** 모든 문제 해결은 에러 메시지부터.  

![need-17](/assets/img/post-img/jekyll-start/need-bundle-17.png)  
그래서 시키는대로 ***bundle update --bundler*** 후에 ***gem install bundler:1.17.2*** 를 수행해본다. 다행히 잘 깔린다.  
![need-17](/assets/img/post-img/jekyll-start/install-bundle-172.png)   
그럼 다시 ***bundle install*** 을 수행해 본다.  

![removed-32](/assets/img/post-img/jekyll-start/removed-32.png)   
테마마다 다르겠지만 Ruby3.2 에는 내가 필요한 pathname#untaint 가 없다고 한다.  
대놓고 Ruby3.2 는 거부당했다.
<br>
결국 적절한 버전을 안받으면 위와같은 상황들이 벌어진다...   
또한 어찌저찌 넘어가도 이후에 비슷한 문제들이 또 생길 가능성이 크다.  
이쯤에서 Ruby 버전을 낮추고 Ruby2.6 버전을 까는걸로 합의하자.  
<br>
보통 요즘 소프트웨어들은 독립적으로 만들지 않고, 배포된 많은 오픈 소스들을 필요로 한다.  
이때 오픈 소스의 버전이 변하면, 내가 기존에 쓰던기능이 사라지거나 변경될 수 있는데  
이럴경우 내 소스가 동작하지 않을 수 있다.  
그래서 항상 용도에 맞게 적절한 버전을 받아야 한다.  
추측이지만 Ruby 2.x 에서 3.x 로 바뀌면서 큰 변화가 생겼고, jekyll 은 2.x 대를 유지하고 있기 때문에
Ruby 3.x 대를 쓰면 위와 같은 에러가 날 것으로 보인다.  
Jekyll 공식 문서에서 보면 Ruby version 은 2.5 이상을 쓰라고 하니 2.5 <= Ruby < 3.0 버전을 써야 할거 같다.  
<br>
***Ruby 2.6.6.1*** 을 다운 받으라는건 이미 내가 성공했기 때문에...  
<br>


### 2. 오픈소스 Dependency 는 어떻게확인하지 ? ###
보통 문제가 되는 오픈소스 버전을 google 에 쳐보자.   
오픈소스는 소스를 공개하고, 많은 사람들이 이용/발전을 목적으로 하기때문에  
이 소스를 이용하기 위해서 어떤 것들이 필요한지 항상 명시하고 있다.  
따라서 Google 에서 쉽게 찾을 수 있다.  
( 그런데 아쉽게도 최소 요구 버전은 나오는데 Max 버전 나오는건 거의 없다.  
Max 버전은 개발자도 알기 힘들고,   
오픈소스 업데이트 마다 내용을 확인하여 업데이트 하기도 한계가 있다. 그냥 삽질해보는수밖에... )  
Bundler 1.7.2 Dependency 는 [참고12](#참고)  
<br>

### 3. bundle exec jekyll serve VS jekyll serve 
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


### 4. Please check your Rails app for 'config.i18n.fallbacks = true'. 에러 ###
Bundle install 시 Bundle complete! 라고 뜬뒤 이런 문구가 뜨는 경우가 있다.  
install 성공했다 하고 찜찜해서 찾아보았다.  

> config.i18n.fallbacks sets fallback behavior for missing translations. Here are 3 usage examples for this option:


해당 내용은 RubyOnRails 공식 홈페이지에서 확인 가능하다.  
config.i18.error 가 발생한다면 여길 확인해보면 좋을 것 같다. - [[참고 11]](#참고)



# 문제 해결
- [jekyll 실행시 `require': cannot load such file -- webrick (LoadError). 가 발생한다.][준호-link]  
  
# 다음 주제
- [GitHub 블로그 시작하기 - 기본 설정하기.][config-link]


# 용어
1. ***정적 웹페이지*** : 서버에서 미리 저장된 파일을 그대로 웹 페이지로 전달.  
    - GitHub Pages 는 ***정적 웹 페이지만을 지원***한다.  
    - 동적 웹 페이지를 지원하고 싶으면, 호스팅을 추가로 해야한다.  
2. ***동적 웹페이지*** : 서버에 있는 데이터들을 가공처리한 후 웹페이지로 전달.  
3. ***Markdown*** :  일반 텍스트 기반 경량 마크업 언어. 
4. ***Markup 언어*** : 태그 등을 이용해서 문서나 데이터 구조를 표기하는 언어의 한 종류.
5. ***RUBY*** : 단순함과 생산성에 초점을 둔 동적 오픈 소스 프로그래밍 언어  
6. ***MSYS2*** : Windows 소프트웨어를 구축, 설치 및 실행하기 위하여 사용하기 쉬운 환경을 제공하는 도구 및 라이브러리 모음
    - Window 에서 MinGW, Ruby 등이 사용 가능한 환경을 제공.
7. ***MinGW*** 는 GNU 소프트웨어 도구 모음이다.  
    - MSYS2 환경에서 여러 오픈 소스들이 윈도우에서 실행할 수 있는 소프트웨어 도구 모음을 제공.
8. ***GNU*** : 리처드 스톨먼의 자유 소프트웨어 재단(Free Software Foundation)에서 진행하며 유지 중인 OS 프로젝트.  
9. ***Bundler*** :  Bundler는 정확히 필요한 gem과 그 gem의 버전을 설치하고, 추적하는 것으로 일관성 있는 Ruby 프로젝트를 제공하는 도구.
10. ***IP 와 Port*** : 웹 상에 연결된 장비에 접속하기 위한 주소이다. 
    - 127.0.0.1:4000 에서127.0.0.1 가 IP 이고 Port 가 4000 이란 뜻이다.
      - 127.0.0.1 은 자기 자신의 컴퓨터를 뜻한다.
    - IP 는 일종에 위치 주소로 '구로구 A아파트' 와 비슷한 의미를 가진다.
    - Port 는 해당 주소에서 들어갈 문과 같은 의미로 'A 아파트 301호' 를 뜻한다.
11. ***반응형 웹디자인*** : 하나의 웹사이트에서 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법.


# 참고
1. 준호씨의 블로그 : [cannot load such file --webrick][준호-link]
2. 두-번째저장소 : [GitHub Pages에 포트폴리오 호스팅하기][github-page-link]
3. IT Technical Training : [Jekyll 기반의 GitHub Page 생성][it-tech-link]
4. wikipedia : [Jekyll(software) 정의][jekyll-wiki-link]
5. wikipedia : [Markdown 정의][markdown-link]
6. Jekyll 공식 : [Jekyll][jekyll-link]
7. Ruby 공식: [Ruby 정의][Ruby-link]
8. Msys2 공식: [Msys2 정의][msys2-link]
9. GNU 공식: [GNU 공식][GNU-link]
10. 이수재 블로그: [Jekyll 이란?][이수재-link]
11. RubyOnRail 공식 : [RubyOnRail 가이드][RubyOnRail-link]
12. Rubyongems : [bundelr dependencies][bundler-link]
13. 루비 프로그래밍 언어 한국어 문서 : [Bundler란][Ruby-ko-link]
14. 나무위키 : [Dos 명령어][Dos-link]
15. frhyme.code : [왜 jekyll serve 가 안될까?][frhyme-link]
16. laravel 5 프로그래밍 : [의존성 지옥][의존성지옥-link]



[준호-link]: https://junho85.pe.kr/1850
[github-page-link]: https://shxrecord.tistory.com/203
[it-tech-link]: https://moon9342.github.io/jekyll-start
[markdown-link]: https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4
[jekyll-link]: https://jekyllrb.com/
[jekyll-wiki-link]: https://en.wikipedia.org/wiki/Jekyll_(software)
[Ruby-link]: https://www.ruby-lang.org/ko/
[Ruby-install-link]: https://rubyinstaller.org/downloads/
[스타트코딩 작업실-link]: https://startcoding0.tistory.com/9
[GitHub-Desktop-link]: https://boheeee.tistory.com/27
[이수재-link]: https://soojae.tistory.com/16
[msys2-link]: https://www.msys2.org/
[GNU-link]: http://korea.gnu.org/
[RubyOnRail-link]: https://guides.rubyonrails.org/v5.2.0/configuring.html
[config-link]: /git-blog/2021/12/20/blog-start-github-config.html
[bundler-link]: https://rubygems.org/gems/bundler/versions/1.17.2
[Dos-link]: https://namu.wiki/w/DOS/%EB%AA%85%EB%A0%B9%EC%96%B4
[frhyme-link]: https://frhyme.github.io/others/jekyll_serve_not_work/
[의존성지옥-link]: https://www.lesstif.com/laravelprog/dependency-hell-26083775.html