// clock on webpage
var tday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tmonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function GetClock() {
  var d = new Date();
  var nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    ap;
  if (nhour == 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour == 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  }

  if (nmin <= 9) nmin = "0" + nmin;

  var clocktext =
    "" +
    tday[nday] +
    ", " +
    tmonth[nmonth] +
    " " +
    ndate +
    ", " +
    nyear +
    " " +
    nhour +
    ":" +
    nmin +
    ap +
    "";
  document.getElementById("clockbox").innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);
