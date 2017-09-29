function ifScroll(div, scrollBegin, scrollEnd,scroll) {

    if (scroll > scrollBegin && scroll < scrollEnd) {
      // console.log(flag)
        $(".lexicon-block").css("color", "lightgrey");
        // $(".lexicon-block").animate({ color: "lightgrey" }, 2000);

        // $(".lexicon-p").css("color", "lightgrey");
        $(".italic-" + div).css("color", "#998888");
        // $(".italic-" + div).css("color", "black");
        $(".lexicon-annotation").hide();
        $(".italic-" + div +" .lexicon-annotation").show();
        $(".italic-" + div +" .lexicon-p").css("z-index","99");


        //try an animate or fadeIn, the problem is that it keeps running the animationneed to make it do it once with a flag
        // console.log($(div))
    }
}
function scrolling(){
  // console.log("starttttt")
  window.scrollBy(1, 0); // horizontal and vertical scroll increments
  scrolldelay = setTimeout('scrolling()', 100); // scrolls every 100 milliseconds
}


function myStopFunction() {
  console.log("stoppppp")
    clearTimeout(scrolldelay);
}



$(document).ready(function() {

       $(document).on('scroll', function() {
           if( $(this).scrollLeft() >= 480 ) {
               console.log("hide title")
               $(".about-div").hide();
               $(document).off('scroll');

           }
       });
  // $(".about").mouseover(function() {
  //     $(".about").css("color", "lightgrey");
  //     $(this).css("color", "#998888");
  // });
  // $(".about").mouseout(function() {
  //     $(".about").css("color", "lightgrey");
  // });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollLeft();
    // console.log(scroll)
    if (document.body.scrollLeft > 5153) {
        document.body.scrollLeft = 1
    }
    ifScroll("1", 1, 320,scroll);
    ifScroll("2", 320, 620,scroll);
    ifScroll("3", 620, 920,scroll);
    ifScroll("4", 920, 1220,scroll);
    ifScroll("5", 1220, 1520,scroll);
    ifScroll("6", 1520, 1820,scroll);
    if (scroll > 1520) {
      $(".ramp").animate({
            marginLeft: "50px",
            marginTop:"600px",
            width:"600px",
            opacity:0
        }, 50000 );
      }
      //on completion show about
    ifScroll("7", 1820, 2120,scroll);
    ifScroll("8", 2120, 2420,scroll);
    ifScroll("9", 2420, 2720,scroll);
    ifScroll("10", 2720, 3020,scroll);
    ifScroll("11", 3020, 3320,scroll);
    ifScroll("12", 3320, 3920,scroll);
    ifScroll("13", 3620, 4000,scroll);
    ifScroll("14", 3820, 4340,scroll);
    ifScroll("15", 4340, 4640,scroll);
    ifScroll("16", 4640, 4940,scroll);
    // Do something
});
  $(".down-triangle").on( "click",function() {
    myStopFunction()
      $(this).parent().parent().css("color","lightgrey")
      $(this).parent().css("color","#000033")
      $(this).parent().find(".up-triangle").show();
      $(this).hide();

      $(this).parent().find(".complete").fadeIn(3000);
      $(this).parent().find(".ellipsis").hide();


  });
  // $( "#dataTable tbody tr" ).on( "click", function() {
  $(".up-triangle").on( "click",function() {
      $(this).parent().find(".more").show();
      $(this).parent().find(".complete").hide();
      $(this).parent().find(".down-triangle").show();
      $(this).hide();
      $(this).parent().find(".ellipsis").show();
      // $(this).parent().parent().find(".lexicon-p").css("color","black")
      $(this).parent().css("color","grey")
      scrolling()
  });

    $(function() {
        var $svgi = $('#line-left').clone();
        $('#line-right').html($svgi);

    });
    $(function() {
        var $svgi = $('#line-left').clone();
        $('#line-before').html($svgi);
    });
  //   $(".annotation-button").on("click", function() {
  //       $(this).parent().find('.lexicon-annotation').toggle( "slow", function() {
  //   // Animation complete.
  // });
  // $(".annotation-button").click(function() {
  //   // evt.stopPropagation();
  //     $(this).parent().find('.lexicon-annotation').show( "slow", function() {
  //
  //       // Animation complete.
  //     });
  //     $(this).hide()
  //       // $('.annotation-button').hide();
  //   });
  //   $(".annotation-button-x").click(function() {
  //     // evt.stopPropagation();
  //       $(this).parent().parent().find('.annotation-button').show( "slow", function() {
  //         // Animation complete.
  //       });
  //       $(this).parent().hide( "slow", function() {
  //         // Animation complete.
  //       });
  //         // $('.annotation-button').hide();
  //     });
      scrolling()


    // $(".about-more:first").click(function() {
    //   console.log($(".about-more").eq(1).text())
    //   $(".about-more").closest().css("color","red");
    // });



});
// window.onresize = resize;
