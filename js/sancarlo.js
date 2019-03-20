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


 TweenMax.from("#mock-up-mac-slide", 1.2, {x:-600, opacity:0, ease:Power3.easeOut});

 var animationText = TweenMax.from("#text-opacity", 2, {opacity:0});
 animationText.delay(0.5)



var controller = new ScrollMagic.Controller();

var fadeInTimeline= new TimelineMax();
fadeInTimeline.from ("#home-opacity", 1.5, {y:500,opacity:0});

// ANIMAZIONE OPACITY HOMEPAGE //

new ScrollMagic.Scene({
  triggerElement:"#homepage",
  triggerHook:"onLeave",
  offset:-50,
})
.setTween(fadeInTimeline)
// .duration(300)
.reverse(false)
// .addIndicators()
.addTo(controller)

// ANIMAZIONE OPACITY PAGINA PRODOTTI //

var fadeInTimeline1= new TimelineMax();
fadeInTimeline1.from ("#pagina-prodotti-opacity", 1.5, {y:500,opacity:0});

new ScrollMagic.Scene({
  triggerElement:"#product-page",
  triggerHook:"onLeave",
  offset:-50,
})
.setTween(fadeInTimeline1)
// .duration(300)
.reverse(false)
// .addIndicators()
.addTo(controller)

// ANIMAZIONE OPACITY RICETTE //

var fadeInTimeline2= new TimelineMax();
fadeInTimeline2.from ("#pagina-ricette-opacity", 1.5, {y:500,opacity:0});

new ScrollMagic.Scene({
  triggerElement:"#recipes-page",
  triggerHook:"onLeave",
  offset:-50,
})
.setTween(fadeInTimeline2)
// .duration(300)
.reverse(false)
// .addIndicators()
.addTo(controller)

// ANIMAZIONE MOBILE //

var fadeInMobile = new TimelineMax();
fadeInMobile.from("#mock-up-mobile-slide", 1.2, {x:-600, opacity:0, ease:Power3.easeOut});

new ScrollMagic.Scene({
  triggerElement:"#mobile",
  triggerHook:"onLeave",
})
.setTween(fadeInMobile)
.reverse(false)
// .addIndicators()
.addTo(controller)

var fadeInTextMobile = new TimelineMax();
fadeInTextMobile.from("#text-mobile-opacity", 2.5, {opacity:0,});

new ScrollMagic.Scene({
  triggerElement:"#mobile",
  triggerHook:"onLeave",
})
.setTween(fadeInTextMobile)
.reverse(false)
// .addIndicators()
.addTo(controller)



})
