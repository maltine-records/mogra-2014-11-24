$(document).ready(function() {
  var docHeight, docWidth, i, moveDown, moveLeft, moveMethods, moveRight, moveSpeed, moveUp, ufoImages, videos, winHeight, winWidth, _i;
  $("body").pikapika({
    interval: 50
  });
  $("a").pikapika({
    interval: 50
  });
  $(".mogra-logo").kabuki().infinity_scroll();
  docWidth = $(document).width();
  docHeight = $(document).height();
  winWidth = $(window).width();
  winHeight = $(window).height();
  moveSpeed = 2500;
  moveUp = function(elm) {
    var limit, tout;
    tout = _.random(0, 50);
    limit = docHeight - elm.height();
    elm.css("top", limit);
    return elm.animate({
      top: 0
    }, moveSpeed, null, function() {
      return setTimeout(function() {
        return moveUp(elm);
      }, tout);
    });
  };
  moveDown = function(elm) {
    var limit, tout;
    tout = _.random(0, 50);
    limit = docHeight - elm.height();
    elm.css("top", "0px");
    return elm.animate({
      top: limit
    }, moveSpeed, null, function() {
      return setTimeout(function() {
        return moveDown(elm);
      }, tout);
    });
  };
  moveRight = function(elm) {
    var limit, tout;
    tout = _.random(0, 50);
    limit = docWidth - elm.width();
    elm.css("left", limit);
    return elm.animate({
      left: 0
    }, moveSpeed, null, function() {
      return setTimeout(function() {
        return moveRight(elm);
      }, tout);
    });
  };
  moveLeft = function(elm) {
    var limit, tout;
    tout = _.random(0, 50);
    limit = docWidth - elm.width();
    elm.css("left", "0px");
    return elm.animate({
      left: limit
    }, moveSpeed, null, function() {
      return setTimeout(function() {
        return moveLeft(elm);
      }, tout);
    });
  };
  moveMethods = [moveUp, moveDown, moveRight, moveLeft];
  ufoImages = [];
  for (i = _i = 0; _i <= 3; i = ++_i) {
    ufoImages.push({
      src: "img/nicotech_logo_tiny.png",
      width: 208,
      height: 27
    });
    ufoImages.push({
      src: "img/trlogo_s.gif",
      width: 200,
      height: 60
    });
    ufoImages.push({
      src: "img/akituki.gif",
      width: 200,
      height: 36
    });
    ufoImages.push({
      src: "img/DUCT.gif",
      height: 115,
      width: 175
    });
    ufoImages.push({
      src: "img/arduino-small.png",
      height: 273,
      width: 240
    });
    ufoImages.push({
      src: "img/rasppi.jpg",
      height: 134,
      width: 200
    });
  }
  _.each(ufoImages, function(val) {
    var img, moveMethod, posX, posY, tout;
    posX = _.random(0, docWidth - val.width);
    posY = _.random(0, docHeight - val.height);
    img = $("<img>");
    img.addClass("ufo_move");
    img.attr("src", val.src);
    $("div#ufo-wrap").append(img);
    img = $(img);
    img.css({
      width: val.width,
      height: val.height,
      position: "absolute",
      top: posY + "px",
      left: posX + "px"
    });
    moveMethod = moveMethods[_.random(0, moveMethods.length - 1)];
    tout = _.random(0, 1500);
    setTimeout(function() {
      img.css({
        display: "block"
      });
      return moveMethod(img);
    }, tout);
  });
  videos = {
    1: {
      src: "video/miku_mini.mp4",
      title: "Oculus Rift で 初音ミク と握手をしてみた",
      href: "https://www.youtube.com/watch?v=HnmgUgPKijc"
    },
    2: {
      src: "video/hikikomori_mini.mp4",
      title: "全力でスイッチをONするとOFFするロボットと戦ってみた",
      href: "http://www.nicovideo.jp/watch/sm19148403"
    },
    3: {
      src: "video/oppai.mp4",
      title: "おっぱいマウス作ってみた",
      href: "http://www.nicovideo.jp/watch/sm22397923"
    },
    4: {
      src: "video/hotaru.mp4",
      title: "鼻ホタル-Hana Hotaru- Firebug in your nose",
      href: "https://www.youtube.com/watch?v=CQJDa41mKwA"
    }
  };
  return _.each(videos, function(val) {
    var a, posX, posY, video;
    posX = _.random(0, docWidth - 250);
    posY = _.random(0, docHeight - 180);
    a = $("<a>");
    a.attr("target", "_blank");
    a.attr("href", val.href);
    video = $("<video>");
    video.addClass("nikogi");
    video.attr("src", val.src);
    video.attr("title", val.title);
    video.attr("type", "video/mp4");
    video.prop("controls", false);
    video.prop("autoplay", true);
    video.prop("loop", true);
    video.prop("muted", true);
    video.css({
      position: "absolute",
      top: posY + "px",
      width: "250px",
      height: "160px"
    });
    if (posY % 2) {
      video.css("left", "0px");
    } else {
      video.css("right", "0px");
    }
    a.append(video);
    return $(".body-wrap").append(a);
  });
});
