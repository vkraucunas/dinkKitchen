$(document).ready(function() {

//global variables

//choices object to be filled
  var choices = {
    meats: [],
  }
  function navigateToStep(stepNumber) {
    navigateTo('step'+stepNumber);
  }

  function navigateTo(stepId) {
    $('html, body').animate({
        scrollTop: $('#'+stepId).offset().top
    }, 500);
  }

  //step1

  $('#adventure').on('click', function() {
    navigateToStep(6);
    choices.veggie = true;
    choices.meat = true;
    choices.meats = ['beef', 'chicken', 'fish', 'pork'];
    choices.weight = 'either';
    choices.time = 'quickAndSlow';
    console.log(choices);
  })

  $('#picky').on('click', function() {
    navigateToStep(2);
  })
//step2
  $('#veggie').on('click', function() {
    navigateToStep(4);
    choices.veggie = true;
    choices.meat   = false;
    choices.meats = null;
    console.log(choices);
  })

  $('#meat').on('click', function() {
    navigateToStep(3);
    choices.veggie = false;
    choices.meat = true;
    console.log(choices);
  })
//step3
  $('.meats').on('click', function() {
//not sure i need this yet
  })

  $('#beef').on('click', function() {
    choices.meats.push('Beef');
    console.log(choices);
  })

  $('#chicken').on('click', function() {
    choices.meats.push('Chicken');
    console.log(choices);
  })

  $('#fish').on('click', function() {
    choices.meats.push('Fish');
    console.log(choices);
  })

  $('#pork').on('click', function() {
    choices.meats.push('Pork');
    console.log(choices);
  })

  $('#onward').on('click', function() {
    navigateToStep(4);
  })
//step4
  $('#light').on('click', function() {
    navigateToStep(5);
    choices.weight = 'light';
  })

  $('#comfort').on('click', function() {
    navigateToStep(5);
    choices.weight = 'comfort';
  })

  $('#non').on('click', function() {
    navigateToStep(5);
    choices.weight = 'either';
  })
//step5
  $('#quick').on('click', function() {
    navigateToStep(6);
    choices.time = 'quick';
  })

  $('#slow').on('click', function() {
    navigateToStep(6);
    choices.time = 'slow';
  })

  $('#slowCooker').on('click', function() {
    navigateToStep(6);
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
    navigateTo('results');
    pickOutOne(choices, entreeCards, temp);
  })


//document.ready closer. no touchy.
});