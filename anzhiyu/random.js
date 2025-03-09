var posts=["2025/02/18/关于本站（以后ver）/","2024/09/01/恍如昨日/","2025/03/05/插曲/","2025/02/20/音乐球一则/","2025/01/01/关于本站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };