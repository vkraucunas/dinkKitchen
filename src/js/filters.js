var filteredArray = [];

var filterMeat = function(userChoicesObj, trelloCards) {
    var result = [];
    if (userChoicesObj.veggie) {
      trelloCards.filter(function (card) {
        var trelloLabels = card.labels;
        for ( var i = 0; i < card.labels.length; i++ ) {
          if (trelloLabels[i].name === 'Vegetarian') {
            result.push(card);
          }
        }
      });
    }
    if (userChoicesObj.meat) {
      trelloCards.filter(function (card) {
        var trelloLabels = card.labels;
        var userMeats = userChoicesObj.meats;
        for ( var i = 0; i < trelloLabels.length; i++ ) {
          for ( var j = 0; j < userMeats.length; j++) {
            if (userMeats[j].toLowerCase() === 'beef' && trelloLabels[i].name.toLowerCase() === 'beef') {
              result.push(card);
            }
            if (userMeats[j].toLowerCase() ==='chicken' && trelloLabels[i].name.toLowerCase() === 'chicken') {
              result.push(card);
            }
            if (userMeats[j].toLowerCase() === 'pork' && trelloLabels[i].name.toLowerCase() === 'pork') {
              result.push(card);
            }
            if (userMeats[j].toLowerCase() === 'fish' && trelloLabels[i].name.toLowerCase() === 'fish') {
              result.push(card);
            }
          }
        }
      });
    }
    console.log("filterMeat results:", result);
    return result;
  };

  var filterWeight = function(userChoicesObj, trelloCards) {
    var step1 = filterMeat(userChoicesObj, trelloCards);
    var result = [];
    step1.filter(function (card) {
      var trelloLabels = card.labels;
      for ( var i = 0; i < card.labels.length; i++ ) {
        if (userChoicesObj.weight === 'light' && trelloLabels[i].name === 'Light') {
          result.push(card);
        }
        if (userChoicesObj.weight ==='comfort' && trelloLabels[i].name === 'Comfort') {
          result.push(card);
        }
      }
      if (userChoicesObj.weight === 'either') {
          result.push(card);
        }
    });
    console.log("filterWeight results:", result);
    return result;
  };

  var filterTime = function(userChoicesObj, trelloCards) {
    var step2 = filterWeight(userChoicesObj, trelloCards);
    var result = [];
    step2.filter(function (card) {
      var trelloLabels = card.labels;
      for ( var i = 0; i < trelloLabels.length; i++ ) {
        if (userChoicesObj.time === 'quick' && trelloLabels[i].name === 'Quick') {
          result.push(card);
        }
        if (userChoicesObj.time ==='slow' && trelloLabels[i].name === 'Slow') {
          result.push(card);
        }
        if (userChoicesObj.time ==='slowCooker' && trelloLabels[i].name === 'slowCooker') {
          result.push(card);
        }
        if (userChoicesObj.time ==='quickAndSlow' && (trelloLabels[i].name == 'Slow' || trelloLabels[i].name === 'Quick')) {
          result.push(card);
        }
      }
    });
    console.log("filterTime results:", result);
    return result;
  };

  var filterTemp = function(userChoicesObj, trelloCards, temperature) {
    var step3 = filterTime(userChoicesObj, trelloCards);
    var result = [];
    result = step3.filter(function (card) {
       var trelloLabels = card.labels.map(function(value){return value.name;});
       function isWinterFood(value) {
        return trelloLabels.includes("weatherCool");
        }
       function isSummerFood(value) {
        return trelloLabels.includes("weatherHot");
        }
       if (temperature < 65) {
         return isWinterFood(card);
       } else {
         return isSummerFood(card);
       }
    });
    console.log("filterTemp results:", result);
    return result;
  };

  var pickOutOne = function(userChoicesObj, trelloCards, temperature) {
    var step4 = filterTemp(userChoicesObj, trelloCards, temperature);
    var endResult = step4[Math.floor(Math.random()*step4.length)];
    $('#entreeResult').html(endResult.name);
    $('#entreeRecipe').attr('href', endResult.desc);

    if (choices.side) {
      $('#sideRecipe').show();
      var sideInfo = chooseSide(endResult, userChoicesObj);
      var sideRun = filterTemp(sideInfo, sideCards, temp);
      var sideResult = sideRun[Math.floor(Math.random()*sideRun.length)];
      console.log("sideResult is", sideResult);
      $('#sideResult').html(sideResult.name);
      $('#sideRecipe').attr('href', sideResult.desc);
    }

  };

 function chooseSide(entreeInfo, obj) {
  var side = {
    meats: []
  };
  console.log("entreeInfo: ",entreeInfo);
  console.log("userChoicesObj: ", obj);
  if (obj.meats === null) {
    side.veggie = true;
    side.meat = false;
  } else {
    side.veggie = false;
    side.meat = true;
    var entreeLabels = entreeInfo.labels;
    entreeLabels.filter(function (label) {
      for (var i=0; i < entreeLabels.length; i++) {
          if (label.name.toLowerCase() === "beef") {
            side.meats.push('beef');
          }
          if (label.name.toLowerCase() === "chicken") {
            side.meats.push('chicken');
          }
          if (label.name.toLowerCase() === "fish") {
            side.meats.push('fish');
          }
          if (label.name.toLowerCase() === "pork") {
            side.meats.push('pork');
          }
      }
    });
    console.log("side meats is a thing", side.meats);
  }
  side.weight = obj.weight;
  side.time = obj.time;
  console.log("side object is", side);
  return side;
  }
















