
	var j = 0; 

window.onload = function(){

	console.log('Democratic Snake');
	var arr = [[0,0],[0,1],[0,2]];
		UP = 38 ; 
		DOWN = 40 ;
		LEFT = 37 ;
		RIGHT = 39 ;
	$(arr[2][0] + '-' + arr[2][1]).style.backgroundColor = '#CDDC39';
	huashe();	
	//direction	
	var direction = RIGHT ;
	function $(id){
		return document.getElementById(id);
	}
	function join(arr){
		return arr[0] + '-' + arr[1];
	}
	//snake
	function huashe(){
		for ( var i = 0; i < arr.length-1; i++ ){
			var el = arr[i][0] + '-' +arr[i][1];
			$(el).style.backgroundColor = '#CDDC39';
		}
	}

	function panduan(x,y){
		for(var i = 0 ; i < arr.length ; i++){
			if( x == arr[i][0] && y == arr[i][1]){
				return true;
			}
		}
		return false;
	}
	//random food
	function toufangshiwu(){
		x = Math.floor(Math.random()*20);
		y = Math.floor(Math.random()*20);
		while(panduan(x,y)){
			x = Math.floor(Math.random()*20);
			y = Math.floor(Math.random()*20);
		}
		$(join([x,y])).style.backgroundColor = '#FF8E41';
		return [x,y];
	}
	//food
	var shiwu = toufangshiwu();
	var timeId = setInterval(function(){

	var data = [
 		  "@Vonszn_: when ya homie get out of prison that got locked up back in 2001 https://t.co/hMLBDHUkWyI had to look back at the nigga like dam 😂😂😂 https://t.co/bC8EzYZ52X",
 		  "@DemiHarper_: I am so scared of committing to someone because you can literally be together 2 years and one day they can wake up… Your past may sneak up on you today, pulling you back into you... More for Virgo https://t.co/ZehlWoz4jP",
 		  "@iyad_elbaghdadi: This should be leading news all over the world right now. Hundreds of civilians in Yemen are a week away from being… ",
 		  "@syeddoha: GOP,  where's the money? Who'll balance fed's book? R U gonna wait 4 #InevitableCorrection of the market? Wake up.",
 		  "@British_Titanic: Oh Trump is same as Maggie's Tories mate. Centre-right. https://t.co/uoiJy18Ztv",
 		 "@krassenstein Hope Plugs Biden is the Democrat nominee for President in 2020. Ole Crazy Joe's stupid remarks will k… https://t.co/ayfzSgxNCn",
 		 "@saamcarr: as if my fairy lights just fell down 😩having a cute bedroom is hard work ok",
 		 "@KarnaMikko: It is unbelieveable, that nobody is asking #Spain the right questions at the moment: are committed to respect the r… ",
 		 "@dbongino Thanks for the heads up. Pretty soon we're just going to have conservative companies and liberal companies",
 		 "@nfldraftscout: Glad to see he's healthy. His early film this year wasn't up to the standard set last year. Hope he comes back out… ",
 		 "@KTHopkins: The power of the Right-Minded. Well done to all involved with #BoycottKeurig @Keurig CEO has backed down. Excellent… ",
 		 "@unison_my_ass: HLT ain't even a bad song and they did snap on the mv but the poor sis was released and was left to die... the only…",
 		 "@BalkissockLodge: Do you want up to 20% off your 2018 holiday?Download a new cool game Bowmasters! 😂 It's hilarious!!! 😂😂 Download Bowmasters FOR FREE right now! 🔥🔥🔥😍👉  https://t.co/r5aPrLk9uO",
 		 "@TomFitton: The Left wants the ability to steal elections... https://t.co/HWbvYeY74T @JudicialWatch",
 		 "@purpleswanphoto: Hello my #worcestershirehour friends! How are we all tonight? I'm getting in early, as I've a lot of proactive twee… "

	];

	var all = data.length;
	//for (var j=0; j< all; j++){
		
		//document.getElementById("button").addEventListener("click", jt);
		if(j<all){
			j = j+1;
		}else{j = 0};

		var oldHead = arr[arr.length-1],newHead;

		if( data[j].includes("right") == true) 
			newHead = [ oldHead[0] , oldHead[1]+1 ];
		
		if( data[j].includes("left") == true) 
			newHead = [ oldHead[0] , oldHead[1]-1 ];
		
		if( data[j].includes("up") == true) 
			newHead = [ oldHead[0]-1 , oldHead[1] ];
		
		if( data[j].includes("down") == true) 
			newHead = [ oldHead[0]+1 , oldHead[1] ];
		

		console.log(data[j]);
		document.getElementById("tweets").innerHTML = data[j];

		if( newHead[1] < 0 ){
			newHead[1] = 19;
		}
		if( newHead[1] > 19 ){
			newHead[1] = 0;
		}
		if( newHead[0] > 19){
			newHead[0] = 0;
		}
		if( newHead[0] < 0){
			newHead[0] = 19;
		}
		
		if( newHead[0] == x && newHead[1] == y ){
			arr.push(shiwu);
			$(join([x,y])).style.backgroundColor = '#CDDC39';
			$( join(arr[arr.length-2]) ).style.backgroundColor = '#CDDC39;';
			shiwu = toufangshiwu();
			return;
		}

		// for ( var i = 0 ; i < arr.length ; i++ ){
		// 	if( newHead[0] == arr[i][0] && newHead[1] == arr[i][1]){
		// 		alert('Game over');
		// 		clearInterval(timeId);
		// 		return;
		// 	}
		// } 

		arr.push(newHead);
		$( join(newHead) ).style.backgroundColor = '#CDDC39';
		$( join(arr[arr.length-2]) ).style.backgroundColor = '#CDDC39';
		var tail = arr.shift();
		$(join(tail)).style.backgroundColor = '#37474F'; 
	
	//}
		
		
	
	},500);


	// document.onkeydown = function(ev){
	// 	console.log(ev.keyCode);
	// 	var tmp = Math.abs(ev.keyCode - direction) ;
	// 	if( tmp == 2){
	// 		return false;
	// 	}
	// 	if( ev.keyCode != RIGHT && ev.keyCode != LEFT && ev.keyCode != DOWN && ev.keyCode != UP ){
	// 		return;
	// 	}
	// 	direction = ev.keyCode ;
	// }

}


// var n = data[1].includes("down");
	// console.log(n);

	// function direction(){
	// 	for(var i = 0; i < data.length-1; i++ ){
	// 		if (data[i].includes("up") = true){
	// 			return direction == UP;
	// 			console.log("up");
	// 			
	// 		}
	// 	}
	// }


	// var results = data.filter(function (elem) {
 //    	return elem.toLowerCase().indexOf("down") > -1;
	// });

		// if( direction==RIGHT) newHead = [ oldHead[0] , oldHead[1]+1 ];
		// if( direction==LEFT) newHead = [ oldHead[0] , oldHead[1]-1 ];
		// if( direction==UP) newHead = [ oldHead[0]-1 , oldHead[1] ];
		// if( direction==DOWN) newHead = [ oldHead[0]+1 , oldHead[1] ];

//reference:
//https://github.com/Zxy-Code/Gluttonous-Snake