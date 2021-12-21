---
layout: post
title:  "Favicon 과 Open Graph"
date:   2021-12-20 18:00:00 +0900
categories: Git-Blog
---
  
  
# Favicon

### Favicon 이란?
웹 브라우저의 주소창에 표시되는 웹사이트나 웹페이지를 대표하는 아이콘이다.  
![favicon-def](/assets/img/post-img/favicon.png)


### Jekyll 에 Favicon 설정
  

*** Favicon 설정 Before ***  
![before-favicon](/assets/img/post-img/before-favicon.png)  


*** Favicon 설정 After ***  
![after-favicon](/assets/img/post-img/after-favicon.png)    

깨알 디테일이 생겼다.

# Open Graph 

### Open Graph 란?

![open-graph-detail](https://ourcodeworld.com/public-media/articles/articleocw-56d1a6901b773.png) 
   

*** Open Graph Size ***  
  

### Open Graph 설정
  

*** Open Graph 설정 Before ***  
![before-OG](/assets/img/post-img/before-OG.png)  

  
*** Open Graph 설정 After ***  
![after-OG](/assets/img/post-img/after-OG.png)   


### Jinja 를 이용한 Open Graph 동적 Description 설정  

  
*** Open Graph 동적 Description 설정 Before ***   
![after-OG2-1](/assets/img/post-img/after-OG2-1.png)   
주소에 상관없이 Description 에 정해진 문구만 나온다.

*** Open Graph 동적 Description 설정 After ***  
![after-OG2-2](/assets/img/post-img/after-OG2-2.png)   
이제 Description 에 해당 페이지의 제목이 나온다!  

 

jinja2 를 이용한 동적 Description 설정  


# 문제 해결
- [og 태그 (카카오톡, 페이스북 미리보기) + 수정 적용 안될때 초기화하기][og-초기화-link]  

# 다음 주제
- 테마 꾸미기.

# 참조
- [favicon 정의][favicon-wiki-link]
- [나의 favicon 그림 출처][그림출처-링크]  
- [ICO Converter][icoconvert-link]
- [Open Graph][og-link]
- [Open Graph 동적 타이틀 할당][og-동적타이틀-link]
- [jekyll 변수 목록][jekyll-변수-link]



[favicon-wiki-link]: https://ko.wikipedia.org/wiki/%ED%8C%8C%EB%B9%84%EC%BD%98
[그림출처-링크]: https://www.pngwing.com/ko/free-png-xmupn
[icoconvert-link]: https://icoconvert.com/
[파피콘만드는방법-link]: https://ux.stories.pe.kr/106
[og-link]: https://ogp.me/
[og-동적타이틀-link]: https://lanace.github.io/articles/what-is-open-graph/
[og-초기화-link]: https://infinitt.tistory.com/285
[jekyll-변수-link]: http://jekyllrb-ko.github.io/docs/variables/