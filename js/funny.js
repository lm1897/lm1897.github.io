<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         <!-- $('[rel="icon"]').attr('href', "/img/trhx2.png"); -->
         document.title = "stO送走神仙Orz";
         clearTimeout(titleTime);
     }
     else {
         <!-- $('[rel="icon"]').attr('href', "/img/trhx2.png"); -->
         document.title = "stO迎接神仙Orz";
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });