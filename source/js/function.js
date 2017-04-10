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

   $('.js-course-add-sales-setting').on('click',function(e){
        var template = '';
        template+='<tr>'
        template+='<td><select class="form-control select2"><option>バスツアー</option><option>バスツアー</option><option>バスツアー</option></select></td>'
        template+='<td><div class="form-group"><input class="form-control sm inline" type="text"><span>%</span>'                
        template+='<a class="btn-trash js-btn-remove-agent-setting" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>'                 
        template+='</div></td></tr>'
        $(template).insertBefore( $(this).closest('tr'));
        $(".select2").select2({
          theme: 'theme',
       });
        e.preventDefault();
    });

    $(document).on('click', '.js-btn-remove-agent-setting', function(e) {
      var parent = $(this).closest('tbody');
      console.log(parent.children().length);
      if(parent.children().length > 2){
        $(this).closest('tr').remove();
        e.preventDefault();
      }
      else{
        return false;
      }
    });

     $('.js-course-add-area').on('click',function(e){
        var template = '';
        template+='<tr><td class="text-right">都道府県</td>'
        template+='<td><select class="form-control select2"><option>バスツアー</option><option>バスツアー</option><option>バスツアー</option></select></td>'
        template+='<td><div class="form-group"><input class="form-control sm inline" type="text"><span>%</span>'                
        template+='<a class="btn-trash js-btn-remove-agent-setting" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>'                 
        template+='</div></td></tr>'
        $(template).insertBefore( $(this).closest('tr'));
        $(".select2").select2({
          theme: 'theme',
       });
        e.preventDefault();
    });

    $(document).on('click', '.js-course-remove-area', function(e) {
      var parent = $(this).closest('tbody');
      console.log(parent.children().length);
      if(parent.children().length > 2){
        $(this).closest('tr').remove();
        e.preventDefault();
      }
      else{
        return false;
      }
    });

    $("input.js-input-tags").tagsinput('items')

});


