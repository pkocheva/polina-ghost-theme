$.getJSON("https://nomadlist.com/@polinakocheva.json", function(data) {

  nextCity = data.location.next.city + ', ' + data.location.next.country;
  if(data.location.now.city && data.location.now.country) {
    currentCity = data.location.now.city + ', ' + data.location.now.country;
    $('#current-city').html(currentCity); 
  }

  if(data.location.next.city && data.location.next.country) {
    nextCity = data.location.next.city + ', ' + data.location.next.country;
    $('#next-city').html(nextCity); 
  }

  if(data.location.next.date_start) {
    var currentDate = moment();
    var fromDate = moment(data.location.next.date_start, 'YYYY-MM-DD').toDate();
    var remainingDays = Math.abs(currentDate.diff(fromDate, 'days'));
  
    $('#next-city-time').html(remainingDays);
  }

});