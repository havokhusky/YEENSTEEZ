	var isDesktop = true;
	var isdone=false;
 	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isDesktop = false;

	if(isDesktop){
		$('#iconMask').mouseenter(function() { 
			if(isdone==0){
			anime({
				targets: ['#icon1'],
				d: "M400 264 L390 253 L253 390 L264 400 L254 410 L390 546 L400 536 L410 546 L544 410 L535 400 L546 390 L410 253 Z",
				duration: 300,
				loop: false,
				easing: 'easeInOutExpo'
			});
			}
		});
		$('#iconMask').mouseleave(function() { 
			if(isdone==0){
			anime({
				targets: ['#icon1'],
				d: "M400 264 L400 264 L264 400 L264 400 L264 400 L400 536 L400 536 L400 536 L535 400 L535 400 L535 400 L400 264 Z",
				duration: 300,
				loop: false,
				easing: 'easeInOutExpo'
			});
			}
		});
	}
	$('#iconMask').click(function() { 
		$('.svg-holder').removeClass("pulse");
		$('#icon1').css("cursor", "default");
		if(!isdone){
			playAnimation();
		}
	});
	function playAnimation(){
		$('.centerIcon').css('opacity','0');
		$('#iconMask').css('display','none');
		$('.centerIcon').css('transform',' rotate(540deg)');
		
		anime({
			targets: ['#icon1'],
			d: "M400 264 L264 128 L128 264 L264 400 L128 536 L264 671 L400 536 L536 671 L671 536 L536 400 L671 263 L536 128 Z",
			duration: 1000,
			loop: false,
			easing: 'easeInOutExpo',
			rotate: 720,
			complete: function(anim) {
				$('#twitter, #tumblr, #weasyl, #email, .fa').css('display', 'block');
			
				$('.centerIcon').css('display','none');
				anime({
					targets: ['#twitter', '#tumblr', '#email', '#weasyl', '.fa'],
					duration: 100,
					loop: false,
					easing: 'linear',
					opacity: 1
				}); 
				isdone=true;
			}
		});
		
	}

	$('#left-div').not('#iconMask').click(function() { 
		$('.svg-holder').addClass("pulse");
		$('#icon1').css("cursor", "default");
		if(isdone){
			resetAnimation();
		}
	});
	
	function resetAnimation(){
		$('.centerIcon').css('opacity','1');
		$('.centerIcon').css('transform',' rotate(0deg)');
		anime({
			targets: ['#twitter', '#tumblr', '#email', '#weasyl', '.fa'],
			duration: 40,
			loop: false,
			easing: 'linear',
			opacity: 0
		}); 
		anime({
			targets: ['#icon1'],
			d: "M400 264 L400 264 L264 400 L264 400 L264 400 L400 536 L400 536 L400 536 L535 400 L535 400 L535 400 L400 264 Z",
			duration: 1000,
			loop: false,
			easing: 'easeInOutExpo',
			rotate: 0,
			complete: function(anim) {
				$('#iconMask').fadeIn(1000);				
				isdone=false;
			}
			
		});
		
	}
	$('#shopBtn').click(function() { 
		$('#right-div').toggleClass("open");
		$('#shopBtn').toggleClass("open");
		//$('#loading').toggleClass("open");
		
		 setTimeout(function(){ window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfwtFv1NvqlwRC6urtbIAmx9w-U5j2QLV-gEuK1KhfYSQ57iw/viewform"; }, 800);
	});
	$('#loading').click(function() { 
		$('#right-div').toggleClass("open");
		$('#shopBtn').toggleClass("open");
		$('#loading').toggleClass("open");
		$('#preorderFrame').toggleClass("open");
	});
	var icon = 1,
	imageArr = ['1.jpg', '2.png', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '12.jpg', '13.jpg', '14.jpg'];
	
	function shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}
	imageArr = shuffle(imageArr);
	var imageHTML = "";
	x = 12;
	while(x--){
		imageHTML += "<img src=\"images/" + imageArr[x] + "\" alt=\"YEENSTEEZ\" class=\"sideBarImage\ image" + x + "\" />";
	}

	var div = $('#right-div');
	var pos = div.scrollTop();
	

	function scrollDown(){
		var scroller = setInterval(function(){
			div.scrollTop(++pos);
			if($('.image2').visible(true)) {
				$('.image2').removeClass('image2');
				div.append(imageHTML);
			}
		}, 10);
	}
	
	
	$(document).ready(function() {
		div.append(imageHTML);		
		setInterval(function() {
			 if(!isdone){
				if(icon>=7){
					icon=1;
				}
				 $('.centerIcon').css('display','none');
				 $('#center' + icon).css('display','block');
				 icon++; 
			 }
			}, 150);
		scrollDown();
	});