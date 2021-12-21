---
layout: post
title:  "Open Graph 를 설정해보자."
date:   2021-12-20 20:10:00 +0900
categories: Git-Blog
---
블로그를 꾸미기 앞서, 블로그의 깨알 디테일을 살려줄 수 있는 Open Graph 설정을 해본다.  
 

# Open Graph 

### Open Graph 란?

![open-graph-detail](https://ourcodeworld.com/public-media/articles/articleocw-56d1a6901b773.png) 
   

*** Open Graph Size ***  
  

### Open Graph 설정
  

*** Open Graph 설정 Before ***  
![before-OG](/assets/img/post-img/open-graph/before-OG.png)  

  
*** Open Graph 설정 After ***  
![after-OG](/assets/img/post-img/open-graph/after-OG.png)   


### Jinja 를 이용한 Open Graph 동적 Description 설정  

  
*** Open Graph 동적 Description 설정 Before ***   
![after-OG2-1](/assets/img/post-img/open-graph/after-OG2-1.png)   
주소에 상관없이 Description 에 정해진 문구만 나온다.

*** Open Graph 동적 Description 설정 After ***  
![after-OG2-2](/assets/img/post-img/open-graph/after-OG2-2.png)   
이제 Description 에 해당 페이지의 제목이 나온다!  

 

jinja2 를 이용한 동적 Description 설정  


# 문제 해결
- [og 태그 (카카오톡, 페이스북 미리보기) + 수정 적용 안될때 초기화하기][og-초기화-link]  

# 다음 주제
- 테마 꾸미기.

# 참조
- The Open Graph protocol : [Open Graph][og-link]
- LANCE BLOG : [Open Graph 동적 타이틀 할당][og-동적타이틀-link]
- newmon : [open graph tag 초기화][og-초기화-link]
- Jekyllrb : [jekyll 변수 목록][jekyll-변수-link]
- 준스파파 : [홈 바로가기][홈바로가기-link]
- 코드로그 : [ico, png 확장자 차이][ico vs png-link]


[og-link]: https://ogp.me/
[og-동적타이틀-link]: https://lanace.github.io/articles/what-is-open-graph/
[og-초기화-link]: https://infinitt.tistory.com/285
[jekyll-변수-link]: http://jekyllrb-ko.github.io/docs/variables/