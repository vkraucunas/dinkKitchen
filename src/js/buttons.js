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
//run filterAll using var choices & entree cards
  })



  var filterMeat = function(userChoicesObj, trelloCards) {
    var result = [];
    if (userChoicesObj.veggie) {
      trelloCards.filter(function (card) {
        for ( var i = 0; i < card.labels.length; i++ ) {
          if (card.labels[i].name === 'Vegetarian') {
            result.push(card);
          }
        }
      });
    }
    if (userChoicesObj.meat) {
      trelloCards.filter(function (card) {
        for ( var i = 0; i < card.labels.length; i++ ) {
          for ( var j = 0; j < userChoicesObj.meats.length; j++) {
            if (userChoicesObj.meats[j] === 'beef' && card.labels[i].name === 'Beef') {
              result.push(card);
            }
            if (userChoicesObj.meats[j] ==='chicken' && card.labels[i].name === 'Chicken') {
              result.push(card);
            }
            if (userChoicesObj.meats[j] === 'pork' && card.labels[i].name === 'Pork') {
              result.push(card);
            }
            if (userChoicesObj.meats[j] === 'fish' && card.labels[i].name === 'Fish') {
              result.push(card);
            }
          }
        }
      })
    }
    return result;
  };

  var filterWeight = function(userChoicesObj, trelloCards) {
    var step1 = filterMeat(userChoicesObj, trelloCards);
    var result = [];
    step1.filter(function (card) {
      for ( var i = 0; i < card.labels.length; i++ ) {
        if (userChoicesObj.weight === 'light' && card.labels[i].name === 'Light') {
          result.push(card);
        }
        if (userChoicesObj.weight ==='comfort' && card.labels[i].name === 'Comfort') {
          result.push(card);
        }
      }
      if (userChoicesObj.weight === 'either') {
          result.push(card);
        }
    })
    return result;
  }

  var filterTime = function(userChoicesObj, trelloCards) {
    var step2 = filterWeight(userChoicesObj, trelloCards);
    var result = [];
    step2.filter(function (card) {
      for ( var i = 0; i < card.labels.length; i++ ) {
        if (userChoicesObj.time === 'quick' && card.labels[i].name === 'Quick') {
          result.push(card);
        }
        if (userChoicesObj.time ==='slow' && card.labels[i].name === 'Slow') {
          result.push(card);
        }
        if (userChoicesObj.time ==='slowCooker' && card.labels[i].name === 'slowCooker') {
          result.push(card);
        }
        if (userChoicesObj.time ==='quickAndSlow' && (card.labels[i].name == 'Slow' || card.labels[i].name === 'Quick')) {
          result.push(card);
        }
      }
    })
    console.log("total results:", result);
  }


//document.ready closer. no touchy.
});