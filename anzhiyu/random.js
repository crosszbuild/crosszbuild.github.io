var posts=["2025/04/03/人月神话(1)/","2025/02/18/关于本站（以后ver）/","2024/09/01/恍如昨日/","2025/03/10/关于本站/","2025/03/05/插曲/","2025/02/20/音乐球一则/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };