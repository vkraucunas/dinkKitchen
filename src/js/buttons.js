$(document).ready(function() {
  //step1
  var $wholeThing = 'html, body'
  $('#adventure').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    return false;
  })

  $('#picky').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step2').offset().top
    }, 500);
    return false;
  })
//step2
  $('#veggie').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step4').offset().top
    }, 500);
    return false;
  })

  $('#meat').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step3').offset().top
    }, 500);
    return false;
  })
//step3
  $('.meats').on('click', function() {

  })

  $('#beef').on('click', function() {

  })

  $('#chicken').on('click', function() {

  })

  $('#fish').on('click', function() {

  })

  $('#pork').on('click', function() {

  })
//if all 4 pushed, same as pushing go
  $('#onward').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step4').offset().top
    }, 500);
    return false;
  })
//step4
  $('#light').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step5').offset().top
    }, 500);
    return false;
  })

  $('#comfort').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step5').offset().top
    }, 500);
    return false;
  })

  $('#non').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step5').offset().top
    }, 500);
    return false;
  })
//step5
  $('#quick').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    return false;
  })

  $('#slow').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    return false;
  })

  $('#slowCooker').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    return false;
  })
//step6
  $('#yes').on('click', function() {

  })

  $('#no').on('click', function() {

  })
//submit
  $('#submit').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#results').offset().top
    }, 500);
    return false;
  })


});