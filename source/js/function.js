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

   $(function() {
      $('#daterange-multi').daterangepicker({
         timePicker: false,
         autoApply: true,
         opens:'right',
         locale: {
             format: 'MM/DD/YYYY'
         }
      });
   });

   $(function() {
      $('#daterange').daterangepicker({
         timePicker: false,
         autoApply: false,
         opens:'right',
         singleDatePicker: true,
         locale: {
             format: 'MM/DD/YYYY',
             cancelLabel: 'Clear'
         }
      });
   });
   
   $(function() {
      $('#daterange-time').daterangepicker({
         timePicker: true,
         autoApply: true,
         opens:'right',
         singleDatePicker: true,
         locale: {
            format: 'MM/DD/YYYY h:mm A'
         }
      });
   });

   $('.sorted_table').sortable({
      containerSelector: 'table',
      itemPath: '> tbody',
      itemSelector: 'tr',
      placeholder: '<tr class="placeholder"/>',
      handle: 'i.fa-bars',
   });

   $('#js-add-sales-setting').on('click',function(e){
        var clone = $('#js-agent-sales-setting tbody tr:first').clone();
        $(clone).insertBefore( $(this).parent().parent().parent());
        e.preventDefault();
    });

});


