$(document).ready(function() {
   $('aside.left-panel nav.navigation > ul > li.has-submenu').on('click', function(){
      if($(this).hasClass('active')){
         $(this).removeClass('active')
      }
      else{
         $('aside.left-panel nav.navigation > ul > li.has-submenu').removeClass('active');
         $(this).addClass('active');   
      }
   });

   $("aside.left-panel").niceScroll({
      cursorcolor: '#8e909a',
      cursorborder: '0px solid #fff',
      cursoropacitymax: '0.5',
      cursorborderradius: '0px'
   });

   $(document).on('click', '.navbar-toggle', function () {
      $('aside.left-panel').toggleClass('collapsed');
   }); 

   if($(window).width() < 768){
      $('aside.left-panel').addClass('collapsed');
   };

   $(".select2").select2({
      theme: 'theme',
   });
});


