!function(){var e=new Vimeo.Player("vimeo-player");console.log(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds),e.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds).then((function(e){})).catch((function(e){e.name})),e.on("timeupdate",(function(e){console.log(e),localStorage.setItem("videoplayer-current-time",JSON.stringify(e))})),e.getVideoTitle().then((function(e){console.log("title:",e)}))}();
//# sourceMappingURL=02-video.912bcfd5.js.map
