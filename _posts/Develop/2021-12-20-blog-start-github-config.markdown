---
layout: post
title:  "GitHub 블로그 시작하기 - 기본 정보 설정하기."
description: "Jekyll 의 _config.yml 을 수정하여 블로그 기본 정보를 설정해보자."
date:   2021-12-20 19:20:00 +0900
categories: develop
tags: [blog, jekyll]
img-tag: jekyll
---


# GitHub 블로그 업로드 예정.
지난번에 블로그 시작에 성공하였다.  
본격적으로 블로그 꾸미기를 시작할건데 기본설정 주제로는 다음과 같이 할 예정이다.  
- Title 및 Description 설정
- 테마 수정
- Favicon 설정  
- Open Graph 설정  

이게 다 끝나면 다음과 같은 기능을 추가로 넣는걸 쓰려고 한다.  
- 블로그 댓글, 통계 기능 추가.
- 블로그 태그 기능 추가.
- 블로그 방문 카운팅 추가.
- 블로그 내 검색기능 추가.
- 블로그 Google 검색에 노출시키기.  
  
  <br>


# Title 및 Description 수정.  

그런데 현재 주소창 페이지 이름, 사이드바에 Monos 그리고 카테고리 등이 테마 초기값이다.  
이 값들을 내가 원하는 이름과 구성으로 바꿀 예정이다.  

![github-page](/assets/img/post-img/start-config/first-theme.webp)  


### _config.yml    
jekyll 은 정적 사이트 생성을 위해 다양한 옵션을 제공한다.  
이 옵션은 루트 경로에 있는 _config.yml 파일을 설정하면 설정할 수 있다.  
해당 설정에 대해선 이 [링크][jekyll-config-link] 를 참고하면 좋다.  
이 _config.yml 을 통해 설정한 값을 ***전역적인 site 변수를 통해 사용***할 수 있다.  
기본적으로 내용을 수정할 경우 브라우저 새로고침만 하면 반영 되지만,  
_config.yml 파일은 서버 시작시 한번만 읽기 때문에  
 ***꼭 jekyll 을 종료한 뒤 재시작***을 해줘야 해당 변수 값이 적용 된다.


<br> 

### _config.yml 수정.
그럼 아래 _config.yml 을 살펴보자.  
이 _config.yml 은 고를 테마마다 조금씩 다르다. 쓰는 값들이 달라서인데,  
일단 기본적인 정보 Title, Description 등을 먼저 수정해보자.  
![config-yml](/assets/img/post-img/start-config/config-yml.webp)  


그럼 이 title 값이 어디 쓰이나 찾아보자.  
인터넷 창에 Monos 라 표기되는거 보니 title 이 Monos 로 되어있나 보다.  
위 사진과 같이 Monos 가 sidebar 에 표기되는걸 보니 sidebar 에 해당 변수가 적용되는 것 같다.  
_includes 에 sidebar.html 에 가보자.  
sidebar.html 를 보니 site.title 과 site.description 을 테마에 직접 쓰고 있다.     
( 테마마다 다르다. )  
![sidebar-title](/assets/img/post-img/start-config/sidebar-title.webp)  
<br> 

그럼 config.yml 에서 고쳐보자. 우선 기본적인 Title, Email, Description, github_username 을 변경해보자.
Title 과 Description 을 제외하곤 필수적은 아니다.   
하지만 이런 정보는 Footer 를 가지고 있는 테마일 경우 쓰는게 좋다.  
이런 정보는 아래 사이트와 같이 보통 Footer 를 쓸때나 개인 페이지를 나타날때 쓰인다.  
![footer](/assets/img/post-img/start-config/footer.webp)  

값을 바꿔주었으면, jekyll 을 재시작 해야한다.  
변수값이 바뀐걸 재할당 해줘야 하기 때문에 꼭 재시작을 해야 해당 변수들이 적용된다.  
( _config.yml 을 제외하곤, 수정사항을 저장한 뒤 웹 페이지 새로고침하면 바로 반영된다. )   
터미널 창에서 Ctrl - C 를 누르면 종료가 되고, 다시 bundle exec jekyll server 를 수행하자.  
![config-title-modi](/assets/img/post-img/start-config/config-title-modify.webp)   
재시작을 하고 화면을 보면 다음과 같이 바뀌어 있다.  
![main-title-modi](/assets/img/post-img/start-config/main-title-modify.webp)   

글자크기와 정렬등이 맞지 않지만, 일단 변경은 성공이다.  
테마 수정에서 이어서 고쳐보자.  



jekyll 에서 기본적으로 제공하는 변수는 다음과 같다. - [지킬 변수][jekyll-var-link]   
테마를 원하는 대로 바꾸려면 해당 페이지를 알아두는 것이 좋다.  
이 jekyll 의 변수를 수정하기 위해선 _config.tml 파일에서 고쳐야 한다.  
![config-yml](/assets/img/post-img/start-config/config-yml.webp)  




  
# 다음 주제

  
<br>
<br>
<br>
<br>

# 의문점들

### Title, Description 을 head.html 에서 수정하는 것과는 뭐가 다를까?
기본적으로 head.html 에서 바꿀 수 있다.  
다만 이럴경우 jekyll 에서 전역적으로 사용하는 전역 변수에 값 할당이 안된다.    
만약 head.html 에서 바꾸면 이 jekyll 의 전역 변수에 할당이 안되서 다음과 같이 바뀐다.  
![head-title](/assets/img/post-img/start-config/head-modify.webp)  
외부적으로 바꾼 이름 (코딩독학) 으로 보이지만, 내부적으로 jekyll 변수로 선언된 title 값은 변경되지 않는다.  
<br>

이 테마는 자주 쓰일만한 값들을 테마에 직접 보이게 해놨다.  
만약 자주 쓰이는 값을 변수가 아닌, 직접 head.html 에서 고친것처럼 고치면 어떻게 될 까?  
예를들어 사이트 이름이 바뀔때마다, 쓰인 곳마다 찾아서 값을 바꿔줘야 할 것이다.  
하지만 이런 값을 변수에 두고 쓰면 ( site.title 같이 ),  
site.title 값만 바꿔주면 알아서 모든 페이지의 title 이 변경된다!!.  

 코드블럭 테마를 설정할 수 있다. - [미리보기 사이트][theme-view-link]

- [favicon 을 설정해보자][favicon-link]


<br> 
# 참고
- 취미로 코딩하는 개발자 : [GitHub 블로그 기본 설정하기][github-config-link]
- jekyll 번역 : [jekyll 공식페이지][jekyll-link]
- spsarolkar.github.io : [블로그 Theme 미리보기][theme-view-link]
 

[favicon-link]: /git-blog/2021/12/20/favicon.html
[github-config-link]: https://devinlife.com/howto%20github%20pages/blog-config/
jekyll-var-link]: https://jekyllrb-ko.github.io/
[jekyll-var-link]: https://jekyllrb-ko.github.io/docs/variables/
[jekyll-config-link]:https://jekyllrb-ko.github.io/docs/configuration/
[theme-view-link]: https://spsarolkar.github.io/rouge-theme-preview/
[favicon-link]: /git-blog/2021/12/20/favicon.html
