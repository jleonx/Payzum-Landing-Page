	/* ------ letters and numbers only example username -------------*/
	$(".allletterwithnumber").on("keypress keyup blur",function (event) {
		$(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''));
		if ((event.which > 30 && event.which < 48) || (event.which > 57 && event.which < 65) || event.which == 46 || (event.which >= 123 && event.which <= 125) || (event.which >= 219 && event.which <= 221) || (event.which >= 91 && event.which <= 95) || event.which == 189) {
			event.preventDefault();
		}
	});

	$(".allletterwithnumberandsymbol").on("keypress keyup blur",function (event) {
		$(this).val($(this).val().replace(/[^A-Za-z0-9@_]/g, ''));
		if ((event.which > 30 && event.which < 48 && event.which != 16) || (event.which > 57 && event.which < 65 && event.which != 64) || event.which == 46 || (event.which >= 123 && event.which <= 125) || (event.which >= 219 && event.which <= 221 && event.which!= 189) || (event.which >= 91 && event.which < 95 && event.which != 95)) {
			event.preventDefault();
		}
	});

	/* ------ letters only example username -------------*/
	$(".allletter").on("keypress keyup blur",function (event) {
		$(this).val($(this).val().replace(/[^A-Za-z]/g, ''));
		if ((event.which > 30 && event.which < 65) || event.which == 46 || (event.which >= 123 && event.which <= 125) || (event.which >= 219 && event.which <= 221) || (event.which >= 91 && event.which <= 95) || event.which == 189) {
			event.preventDefault();
		}
	});


	/* ------ letters with single space -------------*/
	$(".allletterwithspace").on("keypress keyup blur",function (event) {
		$(this).val($(this).val().replace(/[^A-Za-z]+(?: \S+)/g, ''));
		if ((event.which > 30 && event.which < 32) || (event.which > 32 && event.which < 65) || event.which == 46 || (event.which >= 123 && event.which <= 125) || (event.which >= 219 && event.which <= 221) || (event.which >= 91 && event.which <= 95) || event.which == 189) {
			event.preventDefault();
		}
	});

	/* ------ letters numbers with single space -------------*/
	$(".allletterwithnumberspace").on("keypress keyup blur",function (event) {
		$(this).val($(this).val().replace(/[^A-Za-z0-9 ]+(?: \S+)/g, ''));
		if ((event.which > 30 && event.which < 48 && event.which != 32) || (event.which > 57 && event.which < 65) || event.which == 46 || (event.which >= 123 && event.which <= 125) || (event.which >= 219 && event.which <= 221) || (event.which >= 91 && event.which <= 95) || event.which == 189) {
			event.preventDefault();
		}
	});

	/* ------------ integer number only ----------------*/
	$(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
		$(this).val($(this).val().replace(/[^\d].+/, ""));
		if ((event.which < 48 || event.which > 57) && event.which != 8 && event.which != 46 || (event.which >= 123 && event.which <= 125) || (event.which >= 219 && event.which <= 221) || (event.which >= 91 && event.which <= 95) || event.which == 189) {
			event.preventDefault();
		}
	});

// ------------ integer and float number ----------------
$(".allownumericwithdecimal").on("keypress keyup blur",function (event) {
	$(this).val($(this).val().replace(/[^0-9\.]/g,''));
	if((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57) && (event.which != 8) && event.which != 37 || (event.which >= 123 && event.which <= 125) || (event.which >= 219 && event.which <= 221) || (event.which >= 91 && event.which <= 95) || event.which == 189) {
		event.preventDefault();
	}
});

/* ------------ integer number and minus only ----------------*/
$(".allownumericwithoutdecimalandsymbol").on("keypress keyup blur",function (event) {
	if (event.which != 46 && event.which != 45 && event.which != 46 &&
		!(event.which >= 48 && event.which <= 57)) {
		event.preventDefault();
}
});

// ---------------- email validation 
$('#email').on('keypress keyup blur', function(event){
	if ((event.which > 31 && event.which < 46) || (event.which > 57 && event.which < 64) || event.which == 47 || (event.which > 90 && event.which < 96) || (event.which > 122 && event.which < 126)){
		event.preventDefault();
	}
	var emailRegex  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; // email validation
	var email_css = $('#email');
	var val = email_css.val();
	if(val.match(emailRegex)){
		email_css.css(
		{
			"border-color":"#3DA904",
		}
		);
	} else {
		email_css.css(
		{
			"border-color":"#FA0606",
		}
		);
	}
	
});

// ---------------- email validation 
$('#emailusername').on('keypress keyup blur', function(event){
	if ((event.which > 31 && event.which < 46) || (event.which > 57 && event.which < 64) || event.which == 47 || (event.which > 90 && event.which < 96) || (event.which > 122 && event.which < 126)){
		event.preventDefault();
	}
});

$(".allletter").on("keypress keyup blur",function (event) {    
	$(this).val($(this).val().replace(/[^A-Za-z]/g, ''));
	if ((event.which > 30 && event.which < 65) || event.which == 46) {
		event.preventDefault();
	}
});

$('#name').on('keyup', function(event){
	var nameRegex = /^[^\s]+[a-zA-Z0-9 ]+$/; // var and number
	var name = $('#name');
	var val = name.val();
	if(val.match(nameRegex)){
		name.css(
		{
			"border-color":"#3DA904",
		}
		);
	} else {
		name.css(
		{
			"border-color":"#FA0606",
		}
		);
	}
});

$('#username').on('keyup', function(event){
	var usernameRegex = /^[a-zA-Z0-9@_]+$/; // var and number 
	var username = $('#username');
	var val = username.val();
	if(val!=""){
		if(val.match(usernameRegex)){
			username.css(
			{
				"border-color":"#3DA904",
			}
			);
		} else {
			username.css(
			{
				"border-color":"#FA0606",
			}
			);
		}
	} else {
		$('#username').css(
		{
			"border-color":"#FA0606",
		}
		);
	}
});

$('#password').on('keypress', function(event){
	if (event.keyCode == 32) return false;
});

$('#password-confirm').on('keypress', function(event){
	if (event.keyCode == 32) return false;
});

$('#register_form').on('submit', function(){
	$('#register_btn').attr('disabled', true);
});

$('#login_form').on('submit', function(){
	$('#login_btn').attr('disabled', true);
});

$('.weak-class, .medium-class, .good-class, .strong-class').hide();

$('#password').on('keypress keyup blur', function() {
	var data = '';
	var password = $('#password').val();
	if(password!=""){
		$('.addStrengthClass').addClass('strength-bar');
		$('.weak-class, .medium-class, .good-class, .strong-class').show();
		data = checkStrength(password);
		$('#password_result').css('margin-top', '10px');
		$('#password_result').html(data);
		$('#password').css(
		{
			"border-color":"#3DA904",
		}
		);
	} else {
		$('.weak-class, .medium-class, .good-class, .strong-class').hide();
		$('#password_result').html('');
		$('#password').css(
		{
			"border-color":"#FA0606",
		}
		);
	} 
});

$('#password-confirm').on('keypress keyup blur', function() {
	var re_password = $('#password-confirm').val();
	var password = $('#password').val();
	if(re_password!= ""){
		$('#passwordmatch').css('margin-top', '10px');
		$('#passwordmatch').html(checkPassword(re_password, password));
	} else {
		$('#passwordmatch').html('');
		$('#password-confirm').css(
		{
			"border-color":"#FA0606",
		}
		);
	}
});

function checkPassword(repassword, password){
	if(password === repassword){
		$('#passwordmatch').css({'color': 'green', 'font-weight' : 'bold' });
		return 'Password Match';
	} else {
		$('#passwordmatch').css('color', 'red');
		return 'Password doesn\'t match';
	}
}

function checkStrength(password) {
	var strength = 0;
	$('#password_result').css('font-weight', 'bold');
	if (password.length < 8 && password.length > 0) {
		$('#password_result').removeClass();
		$('#password_result').css('color', 'red');
		$('#password_result').addClass('Weak');
		$('#password_result').addClass('Weak');
		$('.medium-class, .good-class, .strong-class').css('background', '#fff');
		$('.weak-class').css('background', 'red');
		return 'Weak';
	}
	else if (password.length >= 8) {
		if(password.match(/(([a-z].*[A-Z])|([A-Z].*[a-z]))(.*[!,%,&,@,#,$,^,*,?,_,~])/)){
			$('#password_result').removeClass();
			$('#password_result').css('color', 'green');
			$('.weak-class, .medium-class, .good-class, .strong-class').css('background', 'green');
			return 'Strong';
		}
		else if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
			$('#password_result').removeClass();
			$('#password_result').css('color', '#2D98F3');
			$('#password_result').addClass('Good');
			$('.strong-class').css('background', '#fff');
			$('.weak-class, .medium-class, .good-class').css('background', '#2D98F3');
			return 'Good';
		}
		else{
			$('#password_result').removeClass();
			$('#password_result').css('color', '#2D98F3');
			$('#password_result').addClass('Medium');
			$('.good-class, .strong-class').css('background', '#fff');
			$('.weak-class, .medium-class').css('background', '#2D98F3');
			return 'Medium';
		}
	}
}

function check_referral(data_url)
{
	var formData = $('#register_form').serialize();
	$.ajax({
		type: "post",
		url: data_url,
		dataType: "json",
		data: formData,
		success: function(data){
			if(data.status == 'success')
			{
				$('#register_btn').attr('disabled', false);
				$('#showReferralUser').html(data.msg);
			}
			else
			{
				$('#register_btn').attr('disabled', true);
				$('#showReferralUser').html(data.msg);
			}
		}
	});
	return false;
}

function subscribe_email(data_url){
	$('#subscribe_bnt').attr('disabled', true);
	var formData = $('#subscribers').serialize();
	$.ajax({
		type: "post",
		url: data_url,
		dataType: "json",
		data: formData,
		success: function(data){
			if(data.status == 'success')
			{
				$('#subscribers')[0].reset();
				$('#subscribe_bnt').attr('disabled', false);
				$("#subscriber").html('<span class="text-success">'+data.msg+'</span>');
			}
			else
			{
				$('#subscribe_bnt').attr('disabled', false);
				if(data.msg.email)
				{
					$("#subscriber").html('<span class="text-danger">'+data.msg.email+'</span>');
				}
				if(!data.msg.email)
				{
					$("#subscriber").html('<span class="text-success">'+data.msg+'</span>');
				}
			}
		}
	});
	return false;
}

function clickAndDisable(link) {
	link.onclick = function(event) {
		event.preventDefault();
	}
}