// コンテンツフワッと表示
$(function(){
  $('.animation').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = jQuery(window).height(),
       topWindow = jQuery(window).scrollTop();
   $('.animation').each(function(){
    var targetPosition = jQuery(this).offset().top;
    if(topWindow > targetPosition - windowHeight + 100){
     jQuery(this).addClass("fadeInDown");
    }
   });
  });
});

// スクロールホイール
$(function(){
  $('header, main, footer').inertiaScroll({
    parent: $("#wrap")
    //オプションを追加する場合はここに追記
  });
});

// ぼかし
$(function() {
  $('.meigen').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('img-blur');
    } else {
    //表示領域から出た時
      // $(this).removeClass('img-blur');
    }
  });
});

// 画面内リンク
$(function(){
  $('.first').click(function(){
    var adjust = 200;
    var speed = 900;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function(){
  $('.second').click(function(){
    var adjust = 250;
    var speed = 900;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function(){
  $('.third').click(function(){
    var adjust = 320;
    var speed = 900;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function(){
  $('.fourth').click(function(){
    var adjust = 380;
    var speed = 900;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function(){
  $('.fifth').click(function(){
    var adjust = 380;
    var speed = 900;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
$(function(){
  $('.sixth').click(function(){
    var adjust = 450;
    var speed = 900;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



// スクロールダウン
$(function(){
  var topBtn=$('#scrolldown');
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>600){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeOut();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeIn();
    }
  });
});

$(function(){
  var topBtn=$('#page-top');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>600){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});


