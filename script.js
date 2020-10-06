var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container').on('click', function(e){
  input.focus();
});

input.on('keyup', function(e){
  $('.new-output').text(input.val());
});

$('.four-oh-four-form').on('submit', function(e){
  e.preventDefault();
  var val = $(this).children($('.404-input')).val().toLowerCase();
  var href;


    if (val === 'about'){
    showabout();
        return -1;}
   if (val === 'portfolio'){
      showportfolio();
       return -1;}
    if (val === 'blog'){
      showblog();
       return -1;}
    if (val === 'contact'){
      showcontact();
       return -1;}
    if (val === 'tool'){
      showtool();
       return -1;}
    if (val === 'help'){
      showhelp();
       return -1;}
    if (val === 'social'){
      showmedia();
       return -1;}
    else {
    resetForm();
  }
});

function resetForm(withKittens){
  var message = "Sorry that command is not recognized."
  var input = $('.404-input');

  if (withKittens){
    $('.kittens').removeClass('kittens');
    message = "---------------------------------------------"
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}

	function showabout(){
        
       $('.terminal').append("<div class='kittens'>"+"<p class='prompt'>About Me \n\n  I am Tharana Hansaja. a cyber Security student at Srilanka Institute Of Information Technology (SLIIT). I studied at St: Aloysius College -Rathnapura and Following the Commerce and Information Technology for my Advanced Level Studies. My fields of interest are web development, web application security, hardware security. I have special interests in the field of Pentesting</p></div>");
    
		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		
				resetForm(true);
	}



function showcontact(){
		$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>Contact me \n\n Email: tharanahansaja@gmail.com \n Call: 076 292 4564 \n Addressee:25/34,Deniyawaththa, Batugedara ,Ratnapura. 70000 Sri Lanka </p></div>");
    
		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		
				resetForm(true);
			
		
	}


function showblog(){
		$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>LATEST POSTS FROM BLOG\n \n Further updates are in progress </p></div>");
     
		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		
				resetForm(true);
			
		
	}

 function showportfolio(){
		$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>my portfolio\n\n you can Explore my projects via Opensource Platforms</p> <a href='https://github.com/Tharana'target='_blank'>paypal bug bounty</a> <p>\n</p> <a href='https://github.com/Tharana'target='_blank'>pharmacy management system </a><p class='prompt'>Further updates are in progress </p>/div>");
    
		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		
				resetForm(true);
			
		
	}

function showtool(){
		$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>TOOLS EXPERTNESS 10/10 \n\n HTML       ********\n JAVA       ******\n JAVASCRIPT ****** \n C          ******* \n python     *******  </p></div>");
     
		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		
				resetForm(true);
			
		
	}



function showhelp(){
		$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>You can access this website using the following commands \n\n >about       A little introduction about me \n >blog        Links to my blog\n >portfolio   my projects via Opensource Platforms \n >contact     How to contact me \n >tool        Programming languages to learn\n >social      my social media accounts \n>help        To get help </p></div>");
     
		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		
				resetForm(true);
			
		
	}



function showmedia(){
		$('.terminal').append("<div class='kittens'>"+"<p class='prompt'>my social media link </p>\n\n <a href='https://github.com/Tharana'target='_blank'>github </a> \n\n<a href='https://fb.com/tharana.hansaja'target='_blank'>facebook </a> \n <a href='https://twitter.com/tharanahansaja'target='_blank'>twitter </a>\n <a href='https://www.linkedin.com/in/tharana-hansaja-1352b3185/'target='_blank'>linkedin </a>\n<a href='https://stackexchange.com/users/14952222'target='_blank'>stackoverflow </a>\n<a href='https://www.hackerrank.com/tharanahansaja'target='_blank'>hackerrank</a>\n <a href='https://hackerone.com/cyber_killer'target='_blank'>hackerone </a>\n </div>");
    
		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		
				resetForm(true);
			
		
	}


	function textEffect(line){
		var alpha = [';', '.', ',', ':', ';', '~', '`'];
		var animationSpeed = 4;
		var index = 0;
		var string = line.text();
		var splitString = string.split("");
		var copyString = splitString.slice(0);

		var emptyString = copyString.map(function(el){
		    return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
		})

		emptyString = shuffle(emptyString);

		$.each(copyString, function(i, el){
		    var newChar = emptyString[i];
		    toUnderscore(copyString, line, newChar);

		    setTimeout(function(){
		      fromUnderscore(copyString, splitString, newChar, line);
		    },i * animationSpeed);
		  })
	}

	function toUnderscore(copyString, line, newChar){
		copyString[newChar[1]] = newChar[0];
		line.text(copyString.join(''));
	}

	function fromUnderscore(copyString, splitString, newChar, line){
		copyString[newChar[1]] = splitString[newChar[1]];
		line.text(copyString.join(""));
	}


	function shuffle(o){
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};
