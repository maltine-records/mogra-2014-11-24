$(document).ready ->
  $("body").pikapika({interval:100})
  $("a").pikapika({interval:100})
  $(".mogra-logo").kabuki().infinity_scroll()

  docWidth = $(document).width()
  docHeight = $(document).height()
  winWidth = $(window).width()
  winHeight = $(window).height()

  moveSpeedHorizontal = 2500
  moveSpeedVartical = 5000
  moveUp = (elm)->
    tout = _.random(0,100)
    limit = docHeight - elm.height()
    elm.css("top", limit)
    elm.animate {top:0}, moveSpeedVartical, null, ->
      setTimeout ->
        moveUp elm
      , tout
  moveDown = (elm)->
    tout = _.random(0,100)
    limit = docHeight - elm.height()
    elm.css("top", "0px")
    elm.animate {top:limit}, moveSpeedVartical, null, ->
      setTimeout ->
        moveDown elm
      , tout
  moveRight = (elm)->
    tout = _.random(0,100)
    limit = docWidth - elm.width()
    elm.css("left", limit)
    elm.animate {left:0}, moveSpeedHorizontal, null, ->
      setTimeout ->
        moveRight elm
      , tout
  moveLeft = (elm)->
    tout = _.random(0,100)
    limit = docWidth - elm.width()
    elm.css("left", "0px")
    elm.animate {left:limit}, moveSpeedHorizontal, null, ->
      setTimeout ->
        moveLeft elm
      , tout
  moveMethods = [moveUp, moveDown, moveRight, moveLeft]

  ufoImages = []
  ufoImages.push
    src: "img/tora.png"
    width: 500
    height: 500
  for i in [0]
    ufoImages.push
      src: "img/pepper.jpg"
      width: 235
      height: 228
    ufoImages.push
      src: "img/morphy_one.jpg"
      width: 320
      height: 240
  for i in [0,1,2,3]
    ufoImages.push
      src: "img/arduino-small.png"
      height: 273
      width: 240
    ufoImages.push
      src: "img/rasppi.jpg"
      height: 134
      width: 200
  for i in [0,1,2]
    ufoImages.push
      src: "img/maltine-negate.png"
      width: 250
      height: 27
    ufoImages.push
      src: "img/nicotech_logo_tiny.png"
      width: 258
      height: 40
  loadUfoImages = ->
    _.each ufoImages, (val)->
      posX = _.random(0, docWidth-val.width)
      posY = _.random(0, docHeight-val.height)
      img = $("<img>")
      img.addClass "ufo_move"
      img.attr "src", val.src
      $("div#ufo-wrap").append img
      img = $(img)
      img.css
        width: val.width
        height: val.height
        position: "absolute"
        top: posY+"px"
        left: posX+"px"
      moveMethod = moveMethods[_.random(0,moveMethods.length-1)]
      tout = _.random(0,1500)
      setTimeout ->
        img.css
          display: "block"
        moveMethod img
      , tout

  videos =
    1:
      src: "video/miku_mini.mp4"
      title: "Oculus Rift で 初音ミク と握手をしてみた"
      href: "https://www.youtube.com/watch?v=HnmgUgPKijc"
    2:
      src: "video/hikikomori_mini.mp4"
      title: "全力でスイッチをONするとOFFするロボットと戦ってみた"
      href: "http://www.nicovideo.jp/watch/sm19148403"
    3:
      src: "video/oppai.mp4"
      title: "おっぱいマウス作ってみた"
      href: "http://www.nicovideo.jp/watch/sm22397923"
    4:
      src: "video/hotaru.mp4"
      title: "鼻ホタル-Hana Hotaru- Firebug in your nose"
      href: "https://www.youtube.com/watch?v=CQJDa41mKwA"
  loadVideos = ->
    _.each videos, (val)->
      posX = _.random(0, docWidth-250)
      posY = _.random(0, docHeight-180)
      a = $("<a>")
      a.attr "target", "_blank"
      a.attr "href", val.href
      video = $("<video>")
      video.addClass("nikogi")
      video.attr "src", val.src
      video.attr "title", val.title
      video.attr "type", "video/mp4"
      video.prop "controls", false
      video.prop "autoplay", true
      video.prop "loop", true
      video.prop "muted", true
      video.css
        position: "absolute"
        top: posY+"px"
        #width: "250px"
        #height: "180px"
        width: "300px"
        height: "192px"
      if posY%2
        video.css("left", "0px")
      else
        video.css("right", "0px")
      a.append video
      $(".body-wrap").append a




  loadTwitterWidgets = ->
    `!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');`
  loadTweetButtons = (done)->
    langList = [
      "ja"
    ]
    createButton = (lang)->
      button = $("<div class='twbtn'><a class='twitter-share-button' href='https://twitter.com/share'>Tweet</a></div>")
      button = button.find("a").attr
        "data-url":"http://akiba-maker-club.cs8.biz/",
        "data-via":"tks",
        "data-related":"tks",
        "data-hashtags":"akimake",
        "data-size":"large",
        "data-lang":lang,
      return button
    $.each langList, (idx, lang)->
      button = createButton(lang)
      console.log button
      $("#tweetbuttons1").append(button)
      button2 = createButton(lang)
      $("#tweetbuttons2").append(button2)
      if idx == langList.length-1
        loadTwitterWidgets()
        $("#twitter-wjs").load ->
          $("#tweetbuttons1").find("iframe").css("transform", "scale(5,5)")
          $("#tweetbuttons2").find("iframe").css("transform", "scale(5,5)")
          setTimeout ->
            done?()
          , 2000
  setTimeout ->
    loadTweetButtons ->
        loadUfoImages()
        loadVideos()
  , 100


