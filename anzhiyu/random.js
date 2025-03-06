var posts=["2025/02/21/hello-world/","2025/03/05/插曲/","2025/02/18/关于本站（以后ver）/","2025/02/25/音乐球一则/","2025/09/01/奇点/","2025/03/10/关于本站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };