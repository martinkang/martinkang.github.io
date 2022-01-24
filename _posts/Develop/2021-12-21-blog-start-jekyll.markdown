---
layout: post
title:  "[GitHub Blog - 3] Jekyll 시작하기 1"
description: "정적 사이트 생성기 Jekyll 을 설치하고, 내 Repository 를 다운받아 보자."
date:   2021-12-21 18:10:00 +0900
categories: develop
tags: [blog, jekyll, Front-End]
img-tag: jekyll
---
 
# Jekyll 이란?
Ruby 로 만들어진 <span class="tooltip" id="id-1">정적 사이트</span> 생성기이다. 보통 지킬 이라고 읽는다.  
참고로 Jekyll 을 설치하지 않아도 GitHub Blog 는 만들 수 있다.  


### Jekyll 은 왜 설치할까?  
웹 페이지를 수정하고 GitHub 에 <span class="tooltip" id="id-2">Commit</span>/<span class="tooltip" id="id-3">Push</span> 를 하면 GitHub Blog 에 반영이 된다.  
따라서 GitHub Blog 의 페이지를 수정하고 이 수정된 내용을 확인하기 위해선,    
GitHub 에 Push 후 해당 도메인에 들어가야만 확인이 가능하다.  
그래서 수정한 내용을 웹 사이트에 올리기 전 Jekyll 을 깔아 의도한 대로 페이지가 작성됬는지 확인하는 작업이 필요하다.  
즉 ***실제 웹 페이지에 올리기전에 내 로컬 컴퓨터에서 확인하기 위해*** 설치한다.

<br>


# Jekyll 설치  

### Ruby 설치
윈도우를 기준으로 쓴다.  
Jekyll 은 <span class="tooltip" id="id-4">Ruby</span> 의 패키지 매니저인 Gem 을 사용해서 설치할 수 있다.  
그리고 이 Gem 을 사용하기 위해선 Ruby 를 우선 설치해야 한다.  

<br>

Ruby 는 [RubyInstaller][Ruby-install-link] 에서 다운 가능하다.  
혹시 원하는 버전이 안보이면, 상단에 Archives 를 누르고 버전을 찾으면 나온다.   
![ruby-archive](/assets/img/post-img/jekyll-start/ruby-archive.png)      
<br>

다운받고 평소와 같이 next 를 누르다 보면 다음과 같이 
<span class="tooltip" id="id-5">MSYS2</span> 를 설치하는 화면이 뜬다.  

***주의할점*** : 윈도우 ID 가 한글로 되어 있으면 문제 발생의 여지가 크다.  
한글 계정일 경우 영문으로 ID 를 바꾸고 해야 한다.  
![MSYS2설치](/assets/img/post-img/jekyll-start/msys2-install.png){:class="lazyload" .img-w550}    

이 창에서 설치할 경우 MSYS2 를 직접 받아 설치하는 것과 두가지가 다른데
1. 원하는 Path 에 설치가 불가능하다.
2. 제어판->프로그램 및 기능 에서 찾을 수 없다.

<br>
이게 싫다면 MSYS2 를 인터넷서 개별적으로 찾아 설치해야 한다.  
나는 그냥 여기서 3번을 눌러 설치했다.  
( 1번을 선택하고, jekyll 실행시 <span class="tooltip" id="id-6">MinGW</span> 버전이 안맞다고 하면 그때 3번 해도 된다. )  
<br>

### Jekyll 과 Bundler 설치
Ruby 와 MSYS2 를 다 설치하였다면, 윈도우 좌하단에 검색창에서 Ruby 를 검색해보자.  
![ruby](/assets/img/post-img/jekyll-start/cmd-ruby.png){:class="lazyload" .img-w300}    
혹시 안나오면 검색창에 cmd 라 검색하면 cmd 또는  명령 프롬프트 라고도 나온다.  
```
gem install jekyll bundler
jekyll -v
```
 gem 패키지 매니저를 이용하여 jekyll 과 <span class="tooltip" id="id-7">bundler</span>를 install 하는 명령이다.  
jekyll -v 는 jekyll 버전을 확인하는 명령어인데 아래와 같이 나오면 jekyll 과 bundler 설치에 성공한 것이다.  
```
> jekyll -v
jekyll 4.2.1

> bundler -v
Bundler version 2.3.1
```
둘다 성공적으로 설치가 되었다!.  
<br>

# GitHub Page 시작을 위한 준비.

### GitHub Desktop 을 다운받자  
GitHub 를 제대로 사용하려면 Git 버전관리와 다양한 명령어에 대해서 알아야 한다.  
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


### GitHub 에서 내 Repository 를 다운받자
Blog 페이지를 추가/수정 하려면, 내가 작업할 로컬 장비에 Blog Repository 를 받아야 한다.    
( GitHub 홈페이지 내에서 Repository 에 추가/수정이 가능하지만, 추천하지 않는다. )   
위에서 다운받은 GitHub Desktop 을 실행시킨 후 로그인을 하자.  
그리고 나서 상단의 File 메뉴에서 Clone Repository 를 선택하자.   
![repo-list](/assets/img/post-img/jekyll-start/clone-repo.png){:class="lazyload" .img-w300}        

<br>

GitHub 를 로그인 한 뒤 좌 상단을 보면 아래와 같은 Repository 목록이 있다.  
그리고 내려받을 위치를 고른 뒤 Clone 을 누르자.  
그럼 내 블로그 코드가 내 로컬 장비에 다운로드 된다.  
![repo-list](/assets/img/post-img/jekyll-start/clone-repo2.png){:class="lazyload" .img-w500}  

앞으로 이 폴더에서 작업을 하면 된다.  
 
<br>


다음장에서 본격적으로 시작해보자.  

<br>

# 다음 주제
- [[GitHub Blog - 3] Jekyll 시작하기 2][jekyll-link2]
<hr>


# 참고
1. 두-번째저장소 : [GitHub Pages에 포트폴리오 호스팅하기][github-page-link]
2. IT Technical Training : [Jekyll 기반의 GitHub Page 생성][it-tech-link]
3. wikipedia : [Jekyll(software) 정의][jekyll-wiki-link]
4. wikipedia : [Markdown 정의][markdown-link]
5. Jekyll 공식 : [Jekyll][jekyll-link]
6. Ruby 공식: [Ruby 정의][Ruby-link]
7. Msys2 공식: [Msys2 정의][msys2-link]
8. GNU 공식: [GNU 공식][GNU-link]
9. 이수재 블로그: [Jekyll 이란?][이수재-link]

<hr>
<div class="tooltip-desc">
    <div class="tooltip-description" id="desc-1">
        서버에서 미리 저장된 파일을 그대로 웹 페이지로 전달.
        GitHub Pages 는 정적 웹 페이지만을 지원한다.
        동적 웹 페이지를 지원하고 싶으면, 호스팅을 추가로 해야한다.
    </div> 
    <div class="tooltip-description" id="desc-2">
    내 로컬 장비상에 의미있는 버전을 추가하는 작업. Commit 을 하면 버전이 변경되며, 이전 버전과의 차이를 기록하게 된다. 언제든 이런 Commit 순간 (버전) 으로 돌아올 수 있다.
    </div>
    <div class="tooltip-description" id="desc-3">
    내 로컬 장비의 Commit 된 변경분을 원격 저장소 (GitHub) 에 반영하는 작업.
    </div>
    <div class="tooltip-description" id="desc-4">
    단순함과 생산성에 초점을 둔 동적 오픈 소스 프로그래밍 언어
    </div>  
    <div class="tooltip-description" id="desc-5">
        Windows 소프트웨어를 구축, 설치 및 실행하기 위하여 사용하기 쉬운 환경을 제공하는 도구 및 라이브러리 모음
        Window 에서 MinGW, Ruby 등이 사용 가능한 환경을 제공.
        </div>
    <div class="tooltip-description" id="desc-6">
        GNU 소프트웨어 도구 모음이다. 
        MSYS2 환경에서 여러 오픈 소스들이 윈도우에서 실행할 수 있는 소프트웨어 도구 모음을 제공.
    </div> 
    <div class="tooltip-description" id="desc-7">
    정확히 필요한 gem과 그 gem의 버전을 설치하고, 추적하는 것으로 일관성 있는 Ruby 프로젝트를 제공하는 도구.
    </div>
</div>


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

[jekyll-link2]: /develop/2021/12/21/blog-start-jekyll2.html
