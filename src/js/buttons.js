$(document).ready(function() {

//global variables
  var $wholeThing = 'html, body';
//choices object to be filled
  var choices = {
    meats: [],
  }
  //step1

  $('#adventure').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    choices.veggie = true;
    choices.meat = true;
    choices.meats = ['beef', 'chicken', 'fish', 'pork'];
    choices.weight = 'either';
    choices.time = 'quickAndSlow';
    console.log(choices);
  })

  $('#picky').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step2').offset().top
    }, 500);
  })
//step2
  $('#veggie').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step4').offset().top
    }, 500);
    choices.veggie = true;
    choices.meat   = false;
    choices.meats = null;
    console.log(choices);
  })

  $('#meat').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step3').offset().top
    }, 500);
    choices.veggie = false;
    choices.meat = true;
    console.log(choices);
  })
//step3
  $('.meats').on('click', function() {
//not sure i need this yet
  })

  $('#beef').on('click', function() {
    choices.meats.push('beef');
    console.log(choices);
  })

  $('#chicken').on('click', function() {
    choices.meats.push('chicken');
    console.log(choices);
  })

  $('#fish').on('click', function() {
    choices.meats.push('fish');
    console.log(choices);
  })

  $('#pork').on('click', function() {
    choices.meats.push('pork');
    console.log(choices);
  })

  $('#onward').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step4').offset().top
    }, 500);
  })
//step4
  $('#light').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step5').offset().top
    }, 500);
    choices.weight = 'light';
  })

  $('#comfort').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step5').offset().top
    }, 500);
    choices.weight = 'comfort';
  })

  $('#non').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step5').offset().top
    }, 500);
    choices.weight = 'either';
  })
//step5
  $('#quick').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    choices.time = 'quick';
  })

  $('#slow').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    choices.time = 'slow';
  })

  $('#slowCooker').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#step6').offset().top
    }, 500);
    choices.time = 'slowCooker';
  })
//step6
  $('#yes').on('click', function() {
    choices.side = true;
    console.log(choices);
  })

  $('#no').on('click', function() {
    choices.side = false;
    console.log(choices);
  })
//submit
  $('#submit').on('click', function() {
    $($wholeThing).animate({
        scrollTop: $('#results').offset().top
    }, 500);
//run UserInput on var choices
  })













});