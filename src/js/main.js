var entreeCards;
var temp;
var sideCards;



$(document).on('ready', function() {

  $('#entreeRecipe').hide();
  $('#sideRecipe').hide();

  var getFunction = function(url, key) {
    return new Promise(function (resolve, reject) {
      $.get(url)
      .done(function (response) {
        resolve(response[key]);
      })
      .fail(function (error){
        reject(error);
      });
    });
  };



  getFunction('http://jsonip.com', 'ip').then(function(ip) {
    var IP = ip;
    var newURL = "https://freegeoip.net/json/"+IP;
    return getFunction(newURL, 'city');
  }, function() {
    console.log('hit the error handler!');
    var IP = '128.177.172.220';
    var newURL = "https://freegeoip.net/json/"+IP;
    return getFunction(newURL, 'city');
  }).then(function(city) {
    var City = city;
    var lastURL = 'http://api.openweathermap.org/data/2.5/weather?q='+City+'&units=imperial&APPID=f708ff06c29d9c50b54499dfec6a5a05';
    return getFunction(lastURL, 'main').then(function (main) {
      temp = Math.floor(main.temp);
      console.log("Temp variable", temp);
    });
  });

  var Trello = $.ajax({
    url: "https://api.trello.com/1/boards/56a997d37317034310b39031/lists?cards=open&card_fields=all&fields=name&key=c08e97c955fd88aba5f367ed9c47c0d4&token=9767918595f60e414fe3c1db21b106abc15fe9f3228609b9e68c265e12b9595c",
    method: "GET",
    success: function(data) {
      var entreeList = data[0];
      var sideList = data[1];
      entreeCards = entreeList.cards;

      entreeCardLabels = entreeCards.labels;
      sideCards = sideList.cards;
      console.log(entreeCards);
      console.log(sideCards);
    }
  });



//document.ready closer. no touchy.
});
