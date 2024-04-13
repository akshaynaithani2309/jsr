
// Navbar
$(document).ready(function() {
  // jQuery code
  $("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });
    // Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
           $(".mobile-offcanvas").removeClass("show");
           $("body").removeClass("overlay-active");
        }
    });
    $(".btn-close, .screen-overlay").click(function(e){
      $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");

    });

}); // jquery end


// WOW
               new WOW().init();
               wow = new WOW(
               {
                boxClass: 'wow', // default
                animateClass: 'animated', // default
                offset: 0, // default
                mobile: true, // default
                live: true // default
               });
               wow.init();
               //# sourceURL=pen.js

// Slider

  window.console = window.console || function(t) {};
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
  /*---- Add to cart script ----*/
  function add_to_cart(p){
	// alert(p);
  $.ajax({
    url: 'order/add_to_cart',
    type: "POST",
    data: {"product_id":p},
    success:
     function(data){
       var result = JSON.parse(data);
       var cartnumber = result['in_cart'];
       $("#cart_number").html(cartnumber);
       $("#addOnModal").modal('show');
    },
    error: function(){}
  });
}

function add_cart(p){
	// alert(p);
  var q = $("#count"+p).val();
  $.ajax({
    url: 'order/add_to_cart',
    type: "POST",
    data: {"product_id":p,"q":q},
    success:function(data){

      var result = JSON.parse(data);
      var cartnumber = result['in_cart'];
      $("#cart_number").html(cartnumber);
      show_message(data);
    },
    error: function(){}
  });
}

function remove(u){
  $.ajax({
    url: 'order/remove_cart',
    type: "POST",
    data: {"id":u},
    success: function(data){
      var result = JSON.parse(data);
      var proid = result['product_id'];
      var sizeid = result['size_id'];
      var cartnumber = result['in_cart'];
      $("#cart_number").html(cartnumber);
      if(cartnumber > 0){
        $("#cart_value_ajax").load(" #cart_value_ajax");
      }else{
        location.reload();
      }
    },
    error: function(){}
  });
}

function quick_view(p){
  $.ajax({
    url: 'home/quick_view',
    type: "POST",
    data: {"id":p},
    success:
     function(data){
       $("#quick_view_ajax").html(data);
       $("#quick_view_modal").modal('show');
    },
    error: function(){}
  });
}

function show_message(data){
  var result = JSON.parse(data);
  //console.log(result['message']);
  if(result['success'] == '1'){
    console.log(result['message']);
    $("#flash_message").html('<div class="alert alert-success alert-dismissible fade show w-100" role="alert" style="position: fixed !important;z-index: 1050 !important;"><strong><i class="fa fa-check facc" style="font-size:14px"></i>&nbsp;&nbsp;Success!</strong> &nbsp;'+result['message']+'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
  }
  if(result['success'] == '0'){
    $("#flash_message").html('<div class="alert alert-danger alert-dismissible fade show w-100" role="alert" style="position: fixed !important;z-index: 1050 !important;"><strong><i class="fa fa-exclamation-triangle facc" style="font-size:14px"></i>&nbsp;&nbsp;Error!</strong> &nbsp;'+result['message']+'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
  }
  if(result['success'] == '2'){
    $("#flash_message").html('<div class="alert alert-info alert-dismissible fade show w-100" role="alert" style="position: fixed !important;z-index: 1050 !important;"><strong><i class="fa fa-info-circle facc" style="font-size:14px"></i>&nbsp;&nbsp;Info!</strong> &nbsp;'+result['message']+'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
  }
}
