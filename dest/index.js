$(document).ready(function() {
  var docHeight, docWidth, i, loadTweetButtons, loadTwitterWidgets, loadUfoImages, loadVideos, moveDown, moveLeft, moveMethods, moveRight, moveSpeedHorizontal, moveSpeedVartical, moveUp, ufoImages, videos, winHeight, winWidth, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
  $("body").pikapika({
    interval: 100
  });
  $("a").pikapika({
    interval: 100
  });
  $(".mogra-logo").kabuki().infinity_scroll();
  docWidth = $(document).width();
  docHeight = $(document).height();
  winWidth = $(window).width();
  winHeight = $(window).height();
  moveSpeedHorizontal = 2500;
  moveSpeedVartical = 5000;
  moveUp = function(elm) {
    var limit, tout;
    tout = _.random(0, 100);
    limit = docHeight - elm.height();
    elm.css("top", limit);
    return elm.animate({
      top: 0
    }, moveSpeedVartical, null, function() {
      return setTimeout(function() {
        return moveUp(elm);
      }, tout);
    });
  };
  moveDown = function(elm) {
    var limit, tout;
    tout = _.random(0, 100);
    limit = docHeight - elm.height();
    elm.css("top", "0px");
    return elm.animate({
      top: limit
    }, moveSpeedVartical, null, function() {
      return setTimeout(function() {
        return moveDown(elm);
      }, tout);
    });
  };
  moveRight = function(elm) {
    var limit, tout;
    tout = _.random(0, 100);
    limit = docWidth - elm.width();
    elm.css("left", limit);
    return elm.animate({
      left: 0
    }, moveSpeedHorizontal, null, function() {
      return setTimeout(function() {
        return moveRight(elm);
      }, tout);
    });
  };
  moveLeft = function(elm) {
    var limit, tout;
    tout = _.random(0, 100);
    limit = docWidth - elm.width();
    elm.css("left", "0px");
    return elm.animate({
      left: limit
    }, moveSpeedHorizontal, null, function() {
      return setTimeout(function() {
        return moveLeft(elm);
      }, tout);
    });
  };
  moveMethods = [moveUp, moveDown, moveRight, moveLeft];
  ufoImages = [];
  ufoImages.push({
    src: "img/tora.png",
    width: 500,
    height: 500
  });
  _ref = [0];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    i = _ref[_i];
    ufoImages.push({
      src: "img/pepper.jpg",
      width: 235,
      height: 228
    });
    ufoImages.push({
      src: "img/morphy_one.jpg",
      width: 320,
      height: 240
    });
  }
  _ref1 = [0, 1, 2, 3];
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    i = _ref1[_j];
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
  _ref2 = [0, 1, 2];
  for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
    i = _ref2[_k];
    ufoImages.push({
      src: "img/maltine-negate.png",
      width: 250,
      height: 27
    });
    ufoImages.push({
      src: "img/nicotech_logo_tiny.png",
      width: 258,
      height: 40
    });
  }
  loadUfoImages = function() {
    return _.each(ufoImages, function(val) {
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
      return setTimeout(function() {
        img.css({
          display: "block"
        });
        return moveMethod(img);
      }, tout);
    });
  };
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
  loadVideos = function() {
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
        width: "300px",
        height: "192px"
      });
      if (posY % 2) {
        video.css("left", "0px");
      } else {
        video.css("right", "0px");
      }
      a.append(video);
      return $(".body-wrap").append(a);
    });
  };
  loadTwitterWidgets = function() {
    return !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');;
  };
  loadTweetButtons = function(done) {
    var createButton, langList;
    langList = ["ja"];
    createButton = function(lang) {
      var button;
      button = $("<div class='twbtn'><a class='twitter-share-button' href='https://twitter.com/share'>Tweet</a></div>");
      button = button.find("a").attr({
        "data-url": "http://akiba-maker-club.cs8.biz/",
        "data-via": "tks",
        "data-related": "tks",
        "data-hashtags": "akimake",
        "data-size": "large",
        "data-lang": lang
      });
      return button;
    };
    return $.each(langList, function(idx, lang) {
      var button, button2;
      button = createButton(lang);
      console.log(button);
      $("#tweetbuttons1").append(button);
      button2 = createButton(lang);
      $("#tweetbuttons2").append(button2);
      if (idx === langList.length - 1) {
        loadTwitterWidgets();
        return $("#twitter-wjs").load(function() {
          $("#tweetbuttons1").find("iframe").css("transform", "scale(5,5)");
          $("#tweetbuttons2").find("iframe").css("transform", "scale(5,5)");
          return setTimeout(function() {
            return typeof done === "function" ? done() : void 0;
          }, 2000);
        });
      }
    });
  };
  return setTimeout(function() {
    return loadTweetButtons(function() {
      loadUfoImages();
      return loadVideos();
    });
  }, 100);
});
