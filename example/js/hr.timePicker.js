//     HR Time Picker
//     (c) 2017 Md Hidaytullah Rahmani
//     HR Time Picker may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/hidaytrahman/hr-timePicker
$.fn.hrTimePicker = function(option) {
	var custom = $.extend({
		disableColor : "#989c9c", // red, green, #000
		enableColor : "#ff5722", // red, green, #000
		arrowTopSymbol : "&#9650;", // ▲ -- Enter html entity code
		arrowBottomSymbol : "&#9660;", // ▼ -- Enter html entity code
		hoursPos : 684 // To disable top arrow scroller
	},option)
	
	// Get Hours and Minutes
	var date, hours, minutes;
		date = new Date();
		hours = date.getHours();
		minutes = date.getMinutes();
	$(".picked-time").val(hours+":"+minutes);
	
	// Selector Div's
	var mainWrap, eachTimer, mainEachTimer, hoursSel, minutesSel;
		mainWrap = ".hr-time-picker";
		eachTimer = ".hr-timer";
		mainEachTimer = mainWrap+" "+eachTimer;
		hoursSel = ".hours";
		minutesSel = ".minutes";
	
	$(".picked-time-wrapper .picked-time").on("click", function(){
		$(this).parent().next().slideToggle();
	});
	
	$(mainEachTimer+hoursSel).prepend('<span class="time-type" title="Current Hours : '+hours+'">HH</span>');
	$(mainEachTimer+minutesSel).prepend('<span class="time-type" title="Current Minutes : '+minutes+'">MM</span>');
	
	$(".pick-time-now").append('<div class="set-time-wrapper"><a href="#">Set It</a></div>');
	$(".set-time-wrapper a").on("click", function(){
		$(this).parents(".pick-time-now").hide();
	});
	
	var addZero;
	// Hour 
	var currentHour ;
	for(var i = 0; i<=23; i++){
		addZero = ((i<=9) ? "0" : "");
		(hours==i) ? currentHour = "current-hour" : currentHour = "normal-hour";
		$(hoursSel+" ul").append("<li class='"+currentHour+"' data-value='"+i+"'>"+addZero+i+"</li>");
	}
	// Minutes
	var currentMinutes ;
	var minStep = 15;
	for(var i = 0; i<=59; i=i+10){
		addZero = ((i<=9) ? "0" : "");
		(hours==i) ? currentMinutes = "current-minutes" : currentMinutes = "normal-minutes";
		$(minutesSel+" ul").append("<li class='"+currentMinutes+"' data-value='"+addZero+(i)+"'>"+addZero+(i)+"</li>");
	}
	// Add Arrow top and Bottom
	var arrowT, arrowB;
		arrowT = "arrow-top";
		arrowB = "arrow-bottom";
	
	$(eachTimer+hoursSel+" .movable-area").before('<span class="'+arrowT+'">'+custom.arrowTopSymbol+'</span>')
	$(eachTimer+hoursSel+" .movable-area").after('<span class="'+arrowB+'">'+custom.arrowBottomSymbol+'</span>')
	
	// Apply selected color
	$("."+arrowT+",."+arrowB).css("color", custom.enableColor);
	
	var currentHeight = 0;
	
	$(mainEachTimer+" span").on("click", function(){
		var liHeight = $(mainEachTimer+".hours li").innerHeight();
		// Disable when content end
		(currentHeight==0) ? $("."+arrowB).css({"color" : custom.disableColor, "cursor" : "not-allowed"}) :  $("."+arrowB).css({"color" : custom.enableColor, "cursor" : "pointer"});
		(currentHeight==custom.hoursPos) ? $("."+arrowT).css({"color" : custom.disableColor, "cursor" : "not-allowed"}) :  $("."+arrowT).css({"color" : custom.enableColor, "cursor" : "pointer"});
		
		// Top scroll
		if(currentHeight!=custom.hoursPos) {
			if(this.className ===arrowT){
				currentHeight += liHeight+1;
			}
		} 
		// Bottom scroll
		if(currentHeight!=0){
			if(this.className ===arrowB){
				currentHeight -= liHeight+1;
			}
		} 
		// Scroll
		$(mainEachTimer+hoursSel+" ul").css({
			"top": -currentHeight+"px",
			"bottom": "auto"
		});
		
	});
	
	// Feed Hour - Minutes in textbox field
	$(mainWrap).on('click',hoursSel+" li,"+ minutesSel+" li", function(){
		var hrs = $(this).text();
		var $timePicker = $('.picked-time');
		var HoursMinutes = $timePicker.val().split(":");
		var selHours = HoursMinutes[0];
		var selMinutes = HoursMinutes[1];
		var times = "";
		if($(this).closest('ul').is(mainWrap+' '+hoursSel+' ul')){
			selHours = +this.textContent < 10 ? this.textContent :this.textContent;			
			times = selHours+":"+selMinutes;
			$timePicker.val(times);
			
			// for hours
			$(this).parents(hoursSel+eachTimer).find("li").removeClass("current-hour");
			$(this).addClass("current-hour");
		
		} else {
			selMinutes = +this.textContent < 10 ? this.textContent :this.textContent;
			times = selHours+":"+selMinutes;
			$timePicker.val(times);	
			
			// for minutes
			$(this).parents(minutesSel+eachTimer).find("li").removeClass("current-minutes");
			$(this).addClass("current-minutes");
		}
	
	});
	
}