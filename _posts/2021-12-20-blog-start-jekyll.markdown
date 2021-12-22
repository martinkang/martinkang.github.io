---
layout: post
title:  "GitHub 블로그 시작하기 - Jekyll 시작하기."
date:   2021-12-20 18:10:00 +0900
categories: Git-Blog
---
 
 수정중... 아무도 안볼테니 일단.. 대충...

 
# Jekyll 이란?
Ruby 로 만들어진 정적 사이트 생성기이다. 보통 지킬 이라고 읽는다.  
참고로 Jekyll 을 설치하지 않아도 GitHub Blog 는 만들 수 있다.  

### Jekyll 은 왜 설치할까?  
웹 페이지를 수정하고 GitHub 에 Commit/Push 를 하면 바로 웹 사이트에 올라가게 된다.  
일반적으로 프로그래밍 언어나 Markdown 문법을 이용하여 수정된 내용을 확인하기 위해선   
GitHub 에 Commit/Push 를 하고 웹 사이트에 들어가야만 확인이 가능하다.  
그래서 수정한 내용을 웹 사이트에 올리기 전 Jekyll 을 깔아 의도한 대로 페이지가 작성됬는지 확인하는 작업이 필요하다.  


- ### 용어들 ###  
  - ***정적 웹페이지*** : 서버에서 미리 저장된 파일을 그대로 웹 페이지로 전달.  
    - GitHub Pages 는 적정 웹 페이지만을 지원한다.  
    - 동적 웹 페이지를 지원하고 싶으면, 호스팅을 추가로 해야한다.  
  - ***동적 웹페이지*** : 서버에 있는 데이터들을 가공처리한 후 웹페이지로 전달.  
  - ***Markdown 문법*** : 

# 소스 코드 편집기를 다운받자  
Jekyll 을 깔고 나면 본격적으로 페이지를 수정해야 하는데, 위에처럼 cmd 창에서 하기엔 너무 힘들다.  
이를 위해서 소스 코드 편집기가 존재하며, 아직 쓰는게 없다면  ***Visual Studio Code***  를 추천한다.  
무료이고 여러 언어에 맞는 툴이 존재하여 쓰기 편하다.  



# Jekyll 설치  
이 글을 보는사람이 대부분 비전공자 또는 초보 개발자일것이므로... 윈도우를 기준으로 쓴다.  
Jekyll 은 Ruby 의 패키지 매니저인 Gem 을 사용해서 설치할 수 있다.  
그리고 이 Gem 을 사용하기 위해선 Ruby 를 우선 설치해야 한다.  
<br>
Ruby 는 [RubyInstaller][Ruby-install-link] 에서 다운 가능하다.  
여기서 <span style="color:red">***꼭!꼭!꼭! Ruby-Devkit 2.6.6-1***</span> 로 다운받아야 한다. (그 이유는 아래 써놨다.)  
이제 구 버전이라 해당 페이지에서 안보이는데, 상단에 Archives 를 누르고 버전을 찾으면 나온다.   
다운받고 평소와 같이 next 를 누르다 보면 다음과 같이 MSYS2 를 설치하는 화면이 뜬다.  
***주의할점*** : 윈도우 ID 가 한글로 되어 있으면 문제 발생의 여지가 크다.  
한글 계정일 경우 영문으로 ID 를 바꾸고 해야 한다.

이 창에서 설치할 경우 직접 설치하는 것과 두가지가 다른데
1. 원하는 Path 에 설치가 불가능하다.
2. 제어판->프로그램 및 기능 에서 찾을 수 없다.

이게 싫다면 MSYS2 를 알아서 찾아 설치해야 한다.
즉 MSYS2 설치는 알아서 하면 된다.
### MSYS2 와 MINGW 는 뭐지?

- ### 용어들 ### 
  - RUBY : 단순함과 생산성에 초점을 둔 동적 오픈 소스 프로그래밍 언어

# Jekyll 시작  

### Jekyll 구성요소 살펴보기


### Jekyll 테마 입히기


# 의문점들

### 나는 Ruby 최신 버전으로 받고싶은데?? ###  
웹에서 자료를 찾다보면 Ruby 를 받으라 하지, 정확히 몇 버전이라고 안써있는 경우도 많다.  
그럼 보통 최신버전으로 받을텐데 ( 사실 처음에 내가 그랬다. ) 그러면 어떻게 될까?  
왜 굳이 2.6.6 을 받으라고 한걸까?  

최신 3.0 버전으로 받으면 위와같은 상황들이 벌어진다... (실제로 처음에 3.0을 받았다.)  
요즘프로그램들은 독립적으로 만들지 않고, 배포된 많은 오픈 소스들을 필요로 한다.  
이때 오픈 소스의 버전이 변하면, 내가 기존에 쓰던기능이 사라지거나 변경될 수 있는데  
이럴경우 내 소스가 동작하지 않을 수 있다.  
그래서 항상 최신 버전을 받으면 안되고, 용도에 맞게 적절한 버전을 받아야 한다.  


# 문제 해결
- [jekyll 실행시 `require': cannot load such file -- webrick (LoadError). 가 발생한다.][준호-link]  
  
# 다음 주제
- [GitHub 블로그 시작하기 - 기본 설정하기.][config-link]


# 참고
- 준호씨의 블로그 : [cannot load such file --webrick][준호-link]
- 두-번째저장소 : [GitHub Pages에 포트폴리오 호스팅하기][github-page-link]
- IT Technical Training : [Jekyll 기반의 GitHub Page 생성][it-tech-link]
- wikipedia : [Jekyll(software) 정의][jekyll-wiki-link]
- Jekyll : [Jekyll 공식사이트][jekyll-link]
- Ruby : [Ruby 한국어 공식 웹사이트][Ruby-link]



[준호-link]: https://junho85.pe.kr/1850
[github-page-link]: https://shxrecord.tistory.com/203
[it-tech-link]: https://moon9342.github.io/jekyll-start
[jekyll-link]: https://jekyllrb.com/
[jekyll-wiki-link]: https://en.wikipedia.org/wiki/Jekyll_(software)
[Ruby-link]: https://www.ruby-lang.org/ko/
[Ruby-install-link]: https://rubyinstaller.org/downloads/
[config-link]: /git-blog/2021/12/20/blog-start-github-config.html
