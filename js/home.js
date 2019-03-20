 //$(".sancarlo").on("mouseover",function(){$("#slide")toggleClass("active");})

$(document).ready(function(){
// CURSORE //
  $(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 100);
  })
  
TweenMax.from("#work-list", 1, {opacity:0, ease:Power1.easeIn})

var controller = new ScrollMagic.Controller();

var fromLeftTimeline = new TimelineMax();
fromLeftTimeline.from("#left", 1, {x: -800, opacity:0});

new ScrollMagic.Scene ({
  triggerElement: "#about-me",
  triggerHook:"onCenter",

})
.setTween( fromLeftTimeline)
.duration(400)
.reverse(false)
// .addIndicators()
.addTo(controller)

var fromRightTimeline = new TimelineMax();
fromRightTimeline.from("#right", 1, {x: 800, opacity:0});

new ScrollMagic.Scene ({
  triggerElement: "#about-me",
  triggerHook:"onCenter",
  offset:50,

})
.setTween(fromRightTimeline)
.duration(400)
.reverse(false)
// .addIndicators()
.addTo(controller)
})
