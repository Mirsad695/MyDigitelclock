function updatedate(){
  
  var mydate = new Date();
  
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'sturdy'];
  
  var months = ['January', 'February', 'march', 'April', 'may', 'june', 'july', 'August', 'September', 'October', 'November', 'December'];
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var year = mydate.getFullYear();
  var date= mydate.getDate();
  
  var mydate = days[day] + ' ' + (date) + '  ' + months[month] + '  ' + year;
  
  document.getElementById('date').innerHTML = mydate;

};
updatedate();

function updatetime(){
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  
   var ampm = hrs >= 12 ? 'PM' : 'AM';
  
  if(hrs > 12){
    hrs = hrs - 12;
  }
  if( hrs == 0){
    hrs = 12;
  }
  /*
  hrs = (hrs < 10) ? '0' + hrs : hrs;*/
  
  if( hrs < 10 ){
     hrs = '0' + hrs;
  }
  if( min < 10 ){
     min = '0' + min;
  }
  if( sec < 10 ){
     sec = '0' + sec;
  }
  
  
  var period = document.getElementById('period').innerHTML = ampm;
  document.getElementById("hours"
  ).innerHTML = hrs;
  document.getElementById("minutes"
  ).innerHTML = min;
  document.getElementById("seconds"
  ).innerHTML = sec;
  
}
setInterval(updatetime, 500);

