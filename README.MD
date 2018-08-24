 # Colorful Analog Trigonometry Clock
Hosted Here: https://codepen.io/jnavarr56/pen/JBZNVW

[![Image from Gyazo](https://i.gyazo.com/910fb515ecc07153f64437532e1eef62.gif)](https://gyazo.com/910fb515ecc07153f64437532e1eef62)


### Features
This pure CSS/pure JS analog clock:
- Tells time accurately
- Changes color ever second cycling through the rainbow
- Only shows the hour text when the second hand points to it
- Displays the angle between Minutes/Seconds and Hours/Minutes


### Code Highlights
The following functions convert units of time to degree's that correspond to the relevant
clock hand:
```javascript
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
```
