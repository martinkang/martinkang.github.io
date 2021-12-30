---
layout: post
title:  "Ruby 3.x 버전을 받으면 어떻게 될까?"
date:   2021-12-23 9:20:00 +0900
categories: Bugs
---

# Ruby 3.x 버전을 받으면 어떻게 될까?  

웹에서 GitHub Blog 만들기를 찾다보면 Ruby 를 받으라 하지,   
정확히 몇 버전이라고 안써있는 경우도 많다.  
( 친절하게 스샷엔 2.x 버전이 써있는데, 보통 화면 맨위에 있는걸 받는 스샷이다. )  
그럼 보통 최신버전으로 받을텐데 ( 내가 그랬다. ) 그러면 어떻게 될까?  
왜 굳이 2.6.6 을 받으라고 하고 ***3.x 버전 만큼은 받지 말라고*** 한것일까?

일단 Ruby3.2 를 깔고 Jekyll 테마까지 성공적으로 복사한 뒤
Jekyll 에서 요구하는 Gem 들을 설치 하기 위하여 아래 명령을 실행해보자.  
( 무슨말인지 모르겠다면 - ([GitHub 블로그 시작하기 - Jekyll 시작하기.][jekyll-link]) 를 먼저 읽자.)
```
bundle install
```
그럼 아래와 같은 에러가 발생할 것이다.  
에러메시지를 잘 보면 bundle 을 업데이트 하고 bundler 1.17.2 를 설치 하란게 보인다.  
( Ruby3.2 의 기본 Bundler 버전은 2.3.x 이다. )  
<span style="color:red">***<U>에러 메시지는 꼭 읽어보자.</U>***</span> 모든 문제 해결은 에러 메시지부터 시작한다.  

![need-17](/assets/img/post-img/jekyll-start/need-bundle-17.png)  
그래서 시키는대로 ***bundle update --bundler*** 후에 ***gem install bundler:1.17.2*** 를 수행해본다. 다행히 잘 깔린다.  
![need-17](/assets/img/post-img/jekyll-start/install-bundle-172.png)   
그럼 다시 ***bundle install*** 을 수행해 본다.  

![removed-32](/assets/img/post-img/jekyll-start/removed-32.png)   
테마마다 필요한 Gemfile 이 다르기 때문에 에러 메시지가 조금씩 다르겠지만   
Ruby3.2 에는 내가 필요한 pathname#untaint 가 없다고 한다.  
<br>
결국 적절한 버전을 안받으면 위와같은 상황들이 벌어진다...   
또한 어찌저찌 넘어가도 이후에 비슷한 문제들이 또 생길 가능성이 크다.  
이쯤에서 Ruby 버전을 낮추고 Ruby2.6 버전을 까는걸로 합의하자.  
(***Ruby 2.6.6.1*** 을 다운 받으라는건 이미 내가 성공했기 때문에... )  
<br>

꼭 프로그램 추가 제거에서 Ruby 를 찾아 3.x 버전대를 지우고 나서 2.x 버전을 받아야 한다.   
![removed-pro](/assets/img/post-img/jekyll-start/remove-prog.png)   
프로그램 추가/제거 창을 열었으면, 찾기창에서  Ruby 를 찾아 제거한다.  
![removed-ruby](/assets/img/post-img/jekyll-start/remove-ruby.png)   

<br>
보통 요즘 소프트웨어들은 독립적으로 만들지 않고, 배포된 많은 오픈 소스들을 필요로 한다.  
이때 오픈 소스의 버전이 변하면, 내가 기존에 쓰던기능이 사라지거나 변경될 수 있는데  
이럴경우 내 소스가 동작하지 않을 수 있다.  
그래서 항상 용도에 맞게 적절한 버전을 설치해야 한다.   
그리고 테마마다 필요한 Ruby 의 버전은 비슷할 것이다.  
(테마마다 서로 너무 다른 버전을 요구한다면 jekyll 이 지금처럼 널리 쓰이지 못할 것이다. )  
<br>
추측이지만 Ruby 2.x 에서 3.x 로 바뀌면서 큰 변화가 생겼고, jekyll 은 2.x 대를 유지하고 있기 때문에
Ruby 3.x 대를 쓰면 위와 같은 에러가 날 것으로 보인다.  
Jekyll 공식 문서에서 보면 Ruby version 은 2.5 이상을 쓰라고 하니 2.5 <= Ruby < 3.0 버전을 써야 할거 같다.  
<br>

# 의문점들 
### 1. 오픈소스 Dependency 는 어떻게확인하지 ? ###
보통 문제가 되는 오픈소스 버전을 google 에 쳐보자.   
오픈소스는 소스를 공개하고, 많은 사람들이 이용/발전을 목적으로 하기때문에  
이 소스를 이용하기 위해서 어떤 것들이 필요한지 항상 명시하고 있다.  
따라서 Google 에서 쉽게 찾을 수 있다.  
( 그런데 아쉽게도 최소 요구 버전은 나오는데 Max 버전 나오는건 거의 없다.  
Max 버전은 개발자도 알기 힘들고,   
오픈소스 업데이트 마다 내용을 확인하여 업데이트 하기도 한계가 있다. 그냥 삽질해보는수밖에... )  
<br>

[jekyll-link]: /git-blog/2021/12/20/blog-start-jekyll.html