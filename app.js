$(window).scroll(function () {
  background_two_position = $( ".background_two" ).offset().top - $( document ).scrollTop()
  // console.log(background_two_position)
  if (background_two_position < 0) {
    $(".background_two").addClass("promoted")
    $(".background_one").hide()
    $(".container_one").hide()
  }

  document_position =  $( document ).scrollTop()
  // console.log(document_position)
  if (document_position == 0 && $(".promoted").length) {
    $(".background_two").removeClass("promoted")
    $(".background_one").show()
    $(".container_one").show()

    container_height = $(".container_one")[0].scrollHeight

    $("html, body").scrollTop(container_height * 2);

    // $("html, body").scrollTop(1728)
    console.log('happening')
  }

});
