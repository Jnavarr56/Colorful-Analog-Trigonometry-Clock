let lastHr = document.createElement("DIV");
let masterColorIndex = -1;
let masterColorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let secondToDegree = (secondInt) => {
  var degrees = ((secondInt*360)/60)-90;
  document.getElementById("secondHand").style.transform = `rotate(${degrees}deg)`;
  return degrees;
}
let minuteToDegree = (minuteInt) => {
  var degrees = ((minuteInt*360)/60)-90;
  document.getElementById("minuteHand").style.transform = `rotate(${degrees}deg)`;
  return degrees;
}
let hourToDegree = (hourInt) => {
   if (hourInt >= 12) {
    hourInt -= 12;
  }
  var degrees = ((hourInt*360)/12)-90;
  document.getElementById("hourHand").style.transform = `rotate(${degrees}deg)`;
  return degrees;
}
let angleDecider = (secDegree) => {
  var hourObjs = [];
  for (var x = 0; x < 12; x++) {
    var degree = ((x*360)/12)-90;
    var hour = x;
    if (hour === 0) {
      hour = 12;
    }
    var hourObj = {hour: hour, degree: degree};
    hourObjs.push(hourObj);
 } 
  var hoursEls = document.getElementsByTagName("h1");
  for (var x = 0; x < hourObjs.length; x++) {
    if (hourObjs[x].degree === secDegree) {
      console.log(hourObjs[x]);
      for (var y = 0; y < hoursEls.length; y++) {
        if (Number(hoursEls[y].innerText) === hourObjs[x].hour) {
          hoursEls[y].style.opacity = "1";
          lastHr = hoursEls[y];
        }
        else {
          hoursEls[y].style.opacity = "0";
        }
      }
    }
  }
}
setInterval(()=>{
  lastHr.style.opacity = 0;
  masterColorIndex++;
  if (masterColorIndex === masterColorArray.length) {
    masterColorIndex = 0;
  }
  document.getElementById("clock").style.backgroundColor = masterColorArray[masterColorIndex];
  var today = new Date();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var hours = today.getHours();
  var secondDegrees = secondToDegree(seconds);
  var minuteDegrees = minuteToDegree(minutes);
  var hourDegrees = hourToDegree(hours);
  if (secondDegrees > minuteDegrees) {
    var msDiff = secondDegrees - minuteDegrees;
  }
  else {
    var msDiff = 360 - (minuteDegrees - secondDegrees);
  }
  if (hourDegrees > minuteDegrees) {
    var  hmDiff = minuteDegrees - hourDegrees;
  }
  else {
    var hmDiff = 360 - (hourDegrees - minuteDegrees);
  }
  angleDecider(secondDegrees);
  if (hours > 12) {
    hours -= 12;
  }
  document.getElementById("display-msDiff").innerText = `Angle between Minute and Seconds: ${Math.abs(msDiff)}`;
  document.getElementById("display-mHDiff").innerText = `Angle between Hour and Minutes: ${Math.abs(hmDiff)}`;
},1000);