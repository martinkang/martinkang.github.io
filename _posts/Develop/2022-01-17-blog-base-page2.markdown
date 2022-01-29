---
layout: post
title:  "[GitHub Blog - 4] - 기본페이지 만들기 2"
description: "기본 페이지를 만들어 보자."
date:   2022-01-17 19:20:00 +0900
categories: develop
tags: [blog, jekyll, Front-End]
img-tag: jekyll
---

# Ruby 테마를 일반 테마로 변경하자
테마를 다운받아 압축을 풀었으면 상관이 없다.  
그런데 jekyll new 와 같이 테마를 Ruby gem 으로 받았다면,  
이 테마를 내 루트 폴더 ( index.md 가 있는 )로 전부 복사 붙여 넣기 하자.  
지난 페이지에서 본  .../ruby/gems/3.0.0/gems/minima-2.5.1 과 같이,  
ruby 폴더에 있는걸 고쳐봤자, 실제 GitHub Blog 에는 적용이 안된다.  

( GitHub Blog 에 적용이 되려면, 실제 수정 내역이 GitHub 에 올라가야 한다.   
기존 Ruby 폴더 위치는 내 GitHub 상의 Repositrory 가 아닌  
Ruby 의 라이브러리 중 하나일 뿐이다. )

<br>
다 옮겼으면 몇가지를 설정해줘야 한다.  
우선 _config.yml 에 아래 theme 를 삭제해 준다.   
```
theme: minima
```

그리고 Gemfile 로 간다. 여긴 전에 말했듯이 필요한 Gem 들의 리스트이다.  
```
gem "minima", "~> x.x"
```

가 있다. 우린 Ruby Gem 기반 에서 테마를 가져올것이 아니기 때문에 해당 부분을 삭제해 준다.  
그리고 아래 다음과 같이 작성해 준다.  
```
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.6"
end
```

아마 group :jekyll_plugins do 가 이미 있을 수 있다.   
이미 적혀있다면 그걸 제외하고 없는걸 추가해주자.  

<br>
사실 검색엔진 최적화(SEO; Search Engine Optimization) 는 당장은 추가할 필요가 없지만,  
기본 jekyll 테마에 적용된걸 굳이 뺄 필요 없으니 plugin 을 추가해주고 나중에 사용할 예정이다.  

<br>

# 다음 주제
- [[GitHub Blog - 5] - 기본 정보 설정하기][config-link]
<br>


<div class="tooltip-desc">
</div>

[config-link]: /develop/2022/01/20/blog-start-github-config.html