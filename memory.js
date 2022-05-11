
var cards = ["control-panel.png","control-panel.png","music-off.png","music-off.png","guitar.png","guitar.png","keyboard-piano.png","keyboard-piano.png",
"record-voice.png","record-voice.png","sing.png","sing.png","speaker-sound.png","speaker-sound.png","power-off.png","power-off.png"];
var shuffledCards = cards;

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 8;
var sec = 0;
var starttime = true;
var currentTime = Date.now();

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');

var resetButton = document.getElementById('reset');

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });

c12.addEventListener("click", function() { revealCard(12); });
c13.addEventListener("click", function() { revealCard(13); });
c14.addEventListener("click", function() { revealCard(14); });
c15.addEventListener("click", function() { revealCard(15); });

resetButton.addEventListener("click", resetGame);

function shuffleCards(cards){
	for (var i = 0; i<16; i++){
		var tempCard = cards[i];
		var shuffleIndex = Math.floor(Math.random()*16)
		cards[i] = cards[shuffleIndex];
		cards[shuffleIndex] = tempCard;
	}
}
shuffleCards(shuffledCards);

function revealCard(nr){
	var opacityValue = $('#c'+nr).css('opacity');
	
	if (opacityValue != 0 && lock == false){
		lock = true;
		var obraz = "url(img/"  + shuffledCards[nr] + ")";
		

		$('#c'+nr).css('background-image',obraz);
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).removeClass('card');

		if(oneVisible == false){
			oneVisible = true;
			visible_nr = nr;
			lock = false;
		}

		else{

			if(shuffledCards[visible_nr] == shuffledCards[nr]){

				setTimeout(function(){hideCards(nr, visible_nr)}, 750);
			}

			else{

				setTimeout(function(){restoreCards(nr, visible_nr)}, 1000);

			}

			turnCounter++;
			$('.score').html('Turn counter: '+turnCounter);
			oneVisible = false;

		    }
		}
}

function hideCards(nr1, nr2){
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');

	pairsLeft--;

	if(pairsLeft == 0){
		$('.board').html('<h1>You win in ' + turnCounter + ' moves and '  + sec +" seconds");
		$('#reset').css('display','block');
		starttime = false;
	}

	lock = false;
}

function restoreCards(nr1, nr2){
	$('#c'+nr1).css('background-image', 'url(img/vinyl.png)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');

	$('#c'+nr2).css('background-image', 'url(img/vinyl.png)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');

	lock=false;
}

function resetGame(){
	location.reload();
	starttime = true;
}

function startTimer(){
	if(starttime==true){
		sec = parseInt(sec)
		sec = sec + 1;
		counter.innerHTML = 'Time: ' + sec + 's';
	}
}
setInterval(startTimer, 1000);

