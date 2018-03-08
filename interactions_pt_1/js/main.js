
$('#openDropdown').hide();

//when the user clicks the menu
//display navigation links
$('#openDropdown').on('click', function () {
	$('#dropdownMenu').slideToggle();
});

//when the second question is clicked
	//slide down answer
	//hide the first answer
	//make question 2 active
$('#question2').on('click',function(){
	$('#answer2').show();
	$('#answer1').hide();
	$('li').removeClass('active');
	$('#question2').addClass('active');
})

//when the first question is clicked
	//slide  down first answer
	//slide up second answer if showing
	//make question 1 active
$('#question1').on('click',function(){
	$('#answer1').show();
	$('#answer2').hide();
	$('li').removeClass('active');
	$('#question1').addClass('active');
})




//click only yell button
//display only yellow circles below
$('#showYellowCircles').on('click', function () {
	$('.blue').hide();
  $('.yellow').show();
});
//click only blue button
//display only blue circles below
$('#showBlueCircles').on('click', function () {
	$('.yellow').hide();
  $('.blue').show();
});
