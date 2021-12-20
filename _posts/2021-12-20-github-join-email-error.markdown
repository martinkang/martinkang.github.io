---
layout: post
title:  "GitHub 가입시 잘못된 메일 주소를 써버렸다."
date:   2021-12-20 19:50:00 +0900
categories: Bugs
---
  
GitHub 회원가입시 아래와 같은 lanch code 를 물어본다.  
![launchcode](/assets/img/bugs-img/launchcode.jpg){: width="500px" height="270px"}  
문제는 회원 가입시 ***잘못된 email 을 입력한 경우***, 이 코드를 어떻게 할까?  
의도하지 않았지만, GitHub 만들기 포스트를 쓰는 과정에 새로운 Git 아이디를 만들면서 Email 주소를 잘못 썼다.    
다시 가입을 해볼까 했지만, 방법이 있을꺼 같아 해결을 시도해 보았다.  
<br>

위 사진을 보면, 빨간 네모 표시를 한 **update your email address** 가 나온다.  
눌러보면 아래와 같은 setting 에 email 페이지가 나온다.  
( 또는 github 홈페이지로 들어가서 가입한 email 로 로그인 후 우상단에 profile 을 찾아 ***setting*** 을 누른다. )   
![setting](/assets/img/bugs-img/profile.jpg){: width="120px" height="40px"} 
<br>
  
그리고 아래와 같이 **Unverified** 되어 있음을 알 수 있다. ( launch code 를 입력 안해서 )    
기존 이메일 버튼 옆에 쓰레기통 표시가 있는데, 눌러봤자 반응이 없다.    
<br>
![emailsetting](/assets/img/bugs-img/emailsetting.jpg){: width="800px" height="400px"}  

<br>
잘못된 이메일 주소를 지우기 위해선, 아래 ***Add 버튼으로 제대로 된 Email 주소를 입력*** 해서 등록한 뒤   
기존 Email 을 지우고  Resend 버튼을 누르면, 해당 Email 로 코드와 Open GitHub 버튼이 있다.  
이 버튼을 누르면, Launch code 입력이 가능하고, 입력을 하면 Verified 가 된 것을 볼 수 있다.  
<br>
참고로 로그인은 ***verified 받은 email 주소***로 해야한다. ( 가입시 쓴 email 아니고 )