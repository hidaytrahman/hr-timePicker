# hr-timePicker 
### Very simple and easy plugin to implement Time Picker

- Custom Color Combination option
- LESS and SASS Compatible
- Responsive
- Custom Arrow
- Lightweight Plugin


#### HTML
Add required files:
```html
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="js/hr.timePicker.min.js"></script>
```

Copy and paste code below:
```html
        <div class="hr-time-picker">
            <div class="picked-time-wrapper">
                <input type="text" class="picked-time">
            </div>
            <div class="pick-time-now">
                <div class="hours hr-timer">
                    <div class="movable-area">
                        <ul></ul>
                    </div>
                </div>
                <div class="minutes hr-timer">
                    <ul></ul>
                </div>
            </div>
        </div>
        <!-- Time picker end here-->

```

#### jQuery
Add this in script
```javascript
$(".hr-time-picker").hrTimePicker({
                disableColor: "#989c9c", // red, green, #000
                enableColor: "#ff5722", // red, green, #000
                arrowTopSymbol: "&#9650;", // ▲ -- Enter html entity code
                arrowBottomSymbol: "&#9660;" // ▼ -- Enter html entity code
});
```

### Live Demo : [Click Here](http://hidaytrahman.github.io/hr-timePicker/example/)

If you :heart: work, [Buy me  :beer:](https://www.paypal.me/hidaytrahman/5)

