var preloader = function(){    
    $('#preloader').fadeOut('slow');
    $('.main').removeClass('hidden');
};

var hideForm = function(){
    $('.main-form-div').addClass('hidden');    
    $('#main-form-greetings').fadeIn();
};

var checkForm = function(){
    var userName = $('#main-form input[name="username"]').val();
    var userPassword = $('#main-form input[name="password"]').val();
    if (!userName) {
        $('.main-form-message').empty().append('Please enter the username.');    
    } else if (!userPassword ) {
        $('.main-form-message').empty().append('Please enter the password.');      
    } else if (userName != "test" || userName != "test") {
        $('.main-form-message').empty().append('Authentication error.');
    } else {
        $('.main-form-message').css('color','#2C9DEC').empty().append('Authorithation successful!');
        setTimeout( hideForm, 3000);
    };
};

$(window).on('load', function () {
    setTimeout(preloader, 5000); 
});

$(document).ready(function(){
        
    $('#main-form-submit').click(function(event){
        event.preventDefault();
        $('.main-form-message').empty().append('<img class="main-form-check" src="img/check.gif"><span>Authentication is in progress.</span>');
        setTimeout(checkForm, 5000);        
    });
    
});
