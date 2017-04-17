

function scrollRightGallery(selector) {
  selector = $(selector);
    if($(document).all) {
      selector.find("img:first-child").fadeOut().appendTo(selector);
      selector.find("img:first-child").fadeIn();
    } else{
      selector.find("img:first-child").animate({"opacity":"0"}, 300, function(){
      selector.find("img:first-child").remove().css("opacity","1").appendTo(selector);
      });
    }
}

function scrollLeftGallery(selector) {
  selector = $(selector);
    if($(document).all) {
      selector.find("img:first-child").fadeOut().appendTo(selector);
      selector.find("img:first-child").fadeIn();
    } else{
      selector.find("img:first-child").animate({"opacity":"0"}, 300, function(){
        var firstChild = selector.find("img:first-child");
      	var prevChild = firstChild.prev();
        prevChild.remove().css("opacity","1").prependTo(selector);
      	firstChild.remove().css("opacity","1").appendTo(selector);
        
    });
    }
}

function defineHeight(mainBlock, topBlock, order) {
    mainBlock.css('height', function() {
        var arr = [];
        var blocks = topBlock;
        for (var i = 0; i < blocks.length; i++) {
            arr.push(blocks[i].clientHeight);
        };
        var maxHeight = Math.max.apply(Math, arr);
        var btnHeight = order.height();
        var totalHeight = maxHeight+btnHeight;
        return totalHeight;
    });
}



$(document).ready(function () {

   $('#searchsubmit').attr("value","");

   $('#scroll-right').click(function(event) {
   		event.preventDefault();
   		scrollRightGallery('.gallery');
   	});

   $('#scroll-left').click(function(event) {
   		event.preventDefault();
   		scrollLeftGallery('.gallery');
   	});

  setInterval(function() {
    scrollRightGallery('.gallery');
  }, 2000);

   $("#menu-icon").click(function(event) {
      var menu = $(".menu");
      event.preventDefault();
       menu.slideToggle();
       $(window).resize(function() {
       var wid = $(window).width();
       if (wid>760&&menu.is(":hidden")) {
       menu.removeAttr("style");
      };
    });
  });

   $('.livraison-choice-item').click(function(event){ 
      event.preventDefault();
      var radioBtn = $(this).find(":radio");
      var attr = radioBtn.attr("checked");
      if(attr == "checked") {
        radioBtn.removeAttr("checked");
        $(this).find(".livraison-radiobtn-active").addClass("livraison-radiobtn-ic").removeClass("livraison-radiobtn-active");
      } else {
        radioBtn.attr("checked","checked");
        $(this).find(".livraison-radiobtn-ic").addClass("livraison-radiobtn-active").removeClass("livraison-radiobtn-ic");
      };
    });

    $('.category-arrow-down').click(function(e){
            e.preventDefault();
            var oldInputValue = $(this).parent().parent().find('input').val();
            oldInputValue = parseInt(oldInputValue);
            if(!oldInputValue && oldInputValue <= 1){
                return;
            }
            $(this).parent().parent().find('input').val(oldInputValue - 1);
        });
    $('.category-arrow-top').click(function(e){
            e.preventDefault();
            var oldInputValue = $(this).parent().parent().find('input').val();
            oldInputValue = parseInt(oldInputValue);
            if(!oldInputValue){
              oldInputValue=0;
            }
            $(this).parent().parent().find('input').val(oldInputValue + 1);
        });  
    $('.arrow-down').click(function(e){
            e.preventDefault();
            var oldInputValue = $(this).parent().parent().find('input').val();
            oldInputValue = parseInt(oldInputValue);
            if(!oldInputValue && oldInputValue <= 1){
                return;
            }
            $(this).parent().parent().find('input').val(oldInputValue - 1);
        });
    $('.arrow-top').click(function(e){
            e.preventDefault();
            var oldInputValue = $(this).parent().parent().find('input').val();
            oldInputValue = parseInt(oldInputValue);
            if(!oldInputValue){
              oldInputValue=0;
            }
            $(this).parent().parent().find('input').val(oldInputValue + 1);
        });  
  // $(function(){
  //           $("#datepicker1").datepicker();
  //           $("#datepicker2").datepicker();
  //           $("#datepicker3").datepicker();
  //           $("#datepicker4").datepicker();
  //      });
 // defineHeight($('.products-item'), $('.top-block'), $('.order'));
 // defineHeight($('.category-products-item'), $('.category-top-block'), $('.category-order'));

  $(window).resize(function() {
    $('.products-item').css('height', function() {
      defineHeight($('.products-item'), $('.top-block'), $('.order'));
    });
     $('.category-products-item').css('height', function() {
      defineHeight($('.category-products-item'), $('.category-top-block'), $('.category-order'));
    });
    
  });

    $(window).load(function() {
        $('.products-item').css('height', function() {
            defineHeight($('.products-item'), $('.top-block'), $('.order'));
        });
        $('.category-products-item').css('height', function() {
            defineHeight($('.category-products-item'), $('.category-top-block'), $('.category-order'));
        });

    });
    

  
  // function defineHeight() {
  //   $('.products-item').css('height', function() {
  //     var arr = [];
  //     var blocks = $('.top-block');
  //     for (var i = 0; i < blocks.length; i++) {
  //       arr.push(blocks[i].clientHeight);
  //     };
  //     var maxHeight = Math.max.apply(Math, arr);
  //     var btnHeight = $('.order').height();
  //     var totalHeight = maxHeight+btnHeight;
  //     return totalHeight;
  //     });
  // }



});


