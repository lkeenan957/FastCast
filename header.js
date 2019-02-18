$(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
        } else {
          $('nav').removeClass('shrink');
        }
      });
   $(document).ready(function(){
     var options = [
    {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
    {selector: '#jen', offset: 300, callback: 'Materialize.fadeInImage("#jen")' }
  ];
  Materialize.scrollFire(options);
     $('.collapsible').collapsible();
   	 $(".button-collapse").sideNav({closeOnClick: true});
     $(".dropdown-trigger").dropdown();
// TODO this was broken, why?
/*      scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    */
});