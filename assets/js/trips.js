$.getJSON("https://spreadsheets.google.com/feeds/list/1-eierzHfP9pVOdppzcaR7BBsKWMCS41VOB5ZQF8GmPA/od6/public/values?alt=json", function(data) {
  arr = data.feed.entry;
  var currentCity = '';
  var nextCity = '';
  var nextCityFound = false;
  var nextDate;
  var currentDate = new Date();

  for(var i=0; i<arr.length; i++) {
      var from = [];
      from['day'] = arr[i].gsx$from.$t.substr(0, 2);   
      from['month'] = arr[i].gsx$from.$t.substr(3, 2) - 1; 
      from['year'] = arr[i].gsx$from.$t.substr(6, 7);

      var to = [];
      to['day'] = arr[i].gsx$to.$t.substr(0, 2);   
      to['month'] = arr[i].gsx$to.$t.substr(3, 2); 
      to['year'] = arr[i].gsx$to.$t.substr(6, 7);

      var fromDate = new Date(from['year'], from['month'], from['day']);
      var toDate = new Date(to['year'], to['month'], to['day']);

      //console.log("in " + arr[i].gsx$city.$t + " from: " + fromDate + " to: " + toDate);
      
      if( currentDate > fromDate && !nextCityFound ) {
          nextCityFound = true;
          currentCity = arr[i].gsx$city.$t;
          nextCity = arr[i-1].gsx$city.$t;
          nextDate = new Date(arr[i-1].gsx$from.$t.substr(6, 7), arr[i-1].gsx$from.$t.substr(3, 2)-1, arr[i-1].gsx$from.$t.substr(0, 2))
      }
  }

  dateDiff = Math.round( (nextDate-currentDate)/(1000*60*60*24) );

  if(currentCity) {
      $('#current-city').html(currentCity); 
  }

  if(nextCity) {
      $('#next-city').html(nextCity);
      $('#next-city-time').html(dateDiff);
  } else {
      $('#leaving-for').html('');
  }
  
});