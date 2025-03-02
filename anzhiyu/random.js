var posts=["2025/02/21/hello-world/","2025/03/10/关于本站/","2025/09/01/奇点/","2025/03/10/对于手上一些工具的看法/","2025/03/10/初来乍到/","2025/02/23/臭打游戏的，没想很多/","2025/02/23/音乐球一则/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };