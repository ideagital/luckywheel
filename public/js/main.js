



// Super Wheel Script
jQuery(document).ready(function($){
	
	$('.wheel-with-image').superWheel({
		slices: [
		{
			text: 'images/1.png',
			value: 1,
			message: "คุณได้รับ Bento 1 แพ็ค",
			background: "#be0020",
			custom_key: 1,
			
		},
		{
			text: 'images/2.png',
			value: 1,
			message: "คุณได้รับ Chocky 1 แพ็ค",
			background: "#fff",
			custom_key: 2,
			
		},
		{
			text: 'images/3.png',
			value: 1,
			message: "คุณได้รับ Jele Lowsugar  1 แพ็ค",
			background: "#be0020",
			custom_key: 3,
			
		},
		{
			text: 'images/4.png',
			value: 1,
			message: "คุณได้รับ Jele beautie 1 แพ็ค",
			background: "#fff",
			custom_key: 4,
			
		},
		{
			text: 'images/5.png',
			value: 1,
			message: "คุณได้รับ ขาไก่ โลตัส 1 แพ็ค",
			background: "#be0020",
			custom_key: 5,
			
		},
		{
			text: 'images/6.png',
			value: 1,
			message: "คุณได้รับ เจเล่ ไลท์ 1 แพ็ค",
			background: "#fff",
			custom_key: 6,
			
		},
		{
			text: 'images/7.png',
			value: 0,
			message: "ลุ้นใหม่รอบหน้า",
			background: "#ed9b00",
			custom_key: 7,
		}
	],

	text : {
		type: 'image',
		color: '#CFD8DC',
		size: 25,
		offset : 10,
		orientation: 'h'
		
	},
	line: {
		width: 10,
		color: "#ed9b00"
	},
	outer: {
		width: 14,
		color: "#ed9b00"
	},
	inner: {
		width: 15,
		color: "#ed9b00"
	},
	marker: {
		background: "#ed9b00",
		animate: 1
	},
	center: {
		width: 30,
		background: '#FFFFFF00',
		rotate: true,
		class: "",
		image:{
		  url: "images/logo.png",
		  width: 20
		}
	},
	
	selector: "custom_key"
	
	});
	
	var tick = new Audio('media/tick.mp3');
	
	$(document).on('click','.wheel-with-image-spin-button',function(e){
		
		$('.wheel-with-image').superWheel('start','custom_key',3);
		$(this).prop('disabled',true);
	});
	
	
	$('.wheel-with-image').superWheel('onStart',function(results){
		
		
		$('.wheel-with-image-spin-button').text('กำลังหมุน');
		
	});
	$('.wheel-with-image').superWheel('onStep',function(results){
		
		if (typeof tick.currentTime !== 'undefined')
			tick.currentTime = 0;
        
		tick.play();
		
	});
	
	
	$('.wheel-with-image').superWheel('onComplete',function(results){
		console.log(results.custom_key);
		if(results.value === 1){
			
			swal({
				type: 'success',
				title: "ยินดีด้วย!", 
				html: results.message
			});
			
		}else{
			swal("เสียใจด้วย", results.message, "error");
		}
		
		$('.wheel-with-image-spin-button:disabled').prop('disabled',false).text('กดหมุนลุ้นโชค');
		
	});
	
	
	
	
	
});