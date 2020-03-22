


/*SHOWS*/


function shows(){

	switch (new Date().getDay()){

		case 0:
			sun()
			break

		case 1: case 2: case 3: case 4: case 5:
			monToFri()
			break
			
		case 6:
			sat()
			break
	}

}





function sun(){

		switch (new Date().getHours()){

			case 0: case 1: case 2: case 3: case 4:
				patashika_sunday()
				break

			case 5: case 6: case 7: case 8: case 9:
				urejesho()
				break

			case 10: case 11: case 12: case 13:
				inuliwa()
				break

			case 14: case 15: case 16: case 17: case 18: case 19:
				tulizo()
				break

			case 20: case 21: case 22: case 23:
				ukumbiWaKristo()
				break
		}
}



function monToFri(){

	switch (new Date().getHours()){
		case 0: case 1: case 2: case 3: 
			patashika_weekdays()
			break

		case 4: case 5: 
			wakatiWaMungu()
			break

		case 6: case 7: case 8: case 9:
			kumekucha()
			break

		case 10: case 11: case 12:
			taradadi()
			break

		case 13: case 14: case 15:
			interactLive()
			break

		case 16: case 17: case 18:
			dariziDrive()
			break

		case 19: case 20: case 21: case 22: case 23:
			nangat()
			break
	}
}


function sat(){

	switch (new Date().getHours()){
		case 0: case 1: case 2: case 3:
			patashika_saturday()
			break

		case 4: case 5: case 6: case 7:
			happySabbath()
			break

		case 8: case 9:
			jukwaaLaMtoto()
			break

		case 10: case 11: case 12:
			declaresShow()
			break

		case 13: case 14:
			reggaeSpice()
			break

		case 15: case 16: case 17: case 18:
			kiwamboChaSpoti()
			break

		case 19: case 20: case 21: case 22: case 23:
			marakwetExpress()
			break
	}
}







function patashika_sunday(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';

		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Patashika"
		document.getElementById("show_now_time").innerHTML="12am - 4am"

		document.getElementById("show_next_name").innerHTML="Wakati wa Mungu"
		document.getElementById("show_next_time").innerHTML="4am - 6am"

		document.getElementById("show_later_name").innerHTML="Kumekucha"
		document.getElementById("show_later_time").innerHTML="6am - 10am"
}


function wakatiWaMungu(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';

		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Wakati wa Mungu"
		document.getElementById("show_now_time").innerHTML="4am - 6am"

		document.getElementById("show_next_name").innerHTML="Kumekucha"
		document.getElementById("show_next_time").innerHTML="6am - 10am"

		document.getElementById("show_later_name").innerHTML="Taradadi"
		document.getElementById("show_later_time").innerHTML="10am - 1pm"
	}


function kumekucha(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';

		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Kumekucha"
		document.getElementById("show_now_time").innerHTML="6am - 10am"

		document.getElementById("show_next_name").innerHTML="Taradadi"
		document.getElementById("show_next_time").innerHTML="10am - 1pm"

		document.getElementById("show_later_name").innerHTML="Interact Live"
		document.getElementById("show_later_time").innerHTML="1pm - 4pm"
}

function taradadi(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Taradadi"
		document.getElementById("show_now_time").innerHTML="10am - 1pm"



		document.getElementById("show_next_name").innerHTML="Interact Live"
		document.getElementById("show_next_time").innerHTML="1pm - 4pm"

		document.getElementById("show_later_name").innerHTML="Darizi Drive"
		document.getElementById("show_later_time").innerHTML="4pm - 7pm"
}

function interactLive(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Interact Live"
		document.getElementById("show_now_time").innerHTML="1pm - 4pm"

		document.getElementById("show_next_name").innerHTML="Darizi Drive"
		document.getElementById("show_next_time").innerHTML="4pm - 7pm"

		document.getElementById("show_later_name").innerHTML="Nang'at"
		document.getElementById("show_later_time").innerHTML="7pm - 12am"
}


function dariziDrive(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Darizi Drive"
		document.getElementById("show_now_time").innerHTML="4pm - 7pm"

		document.getElementById("show_next_name").innerHTML="Nang'at"
		document.getElementById("show_next_time").innerHTML="7pm - 12am"

		document.getElementById("show_later_name").innerHTML="Patashika"
		document.getElementById("show_later_time").innerHTML="12am - 4am"	
}

function nangat(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Nang'at"
		document.getElementById("show_now_time").innerHTML="7pm - 12am"

		document.getElementById("show_next_name").innerHTML="Patashika"
		document.getElementById("show_next_time").innerHTML="12am - 4am"

		document.getElementById("show_later_name").innerHTML="Wakati wa Mungu"
		document.getElementById("show_later_time").innerHTML="4am - 6am"	
}

function patashika_weekdays(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Patashika"
		document.getElementById("show_now_time").innerHTML="12am - 4am"

		document.getElementById("show_next_name").innerHTML="Wakati wa Mungu"
		document.getElementById("show_next_time").innerHTML="4am - 6am"

		document.getElementById("show_later_name").innerHTML="Kumekucha"
		document.getElementById("show_later_time").innerHTML="6am - 10am"	
}


function happySabbath(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Happy Sabbath"
		document.getElementById("show_now_time").innerHTML="4am - 8am"

		document.getElementById("show_next_name").innerHTML="Jukwaa la Mtoto"
		document.getElementById("show_next_time").innerHTML="8am - 10am"

		document.getElementById("show_later_name").innerHTML="Declares Inspirational"
		document.getElementById("show_later_time").innerHTML="10am - 1pm"	
}

function jukwaaLaMtoto(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Jukwaa la Mtoto"
		document.getElementById("show_now_time").innerHTML="8am - 10am"

		document.getElementById("show_next_name").innerHTML="Declares Inspirational"
		document.getElementById("show_next_time").innerHTML="10am - 1pm"

		document.getElementById("show_later_name").innerHTML="Reggae Spice"
		document.getElementById("show_later_time").innerHTML="1pm - 3pm"	
}

function declaresShow(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Declares Inspirational"
		document.getElementById("show_now_time").innerHTML="10am - 1pm"

		document.getElementById("show_next_name").innerHTML="Reggae Spice"
		document.getElementById("show_next_time").innerHTML="1pm - 3pm"

		document.getElementById("show_later_name").innerHTML="Kiwambo cha Spoti"
		document.getElementById("show_later_time").innerHTML="3pm - 7pm"
}

function reggaeSpice(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Reggae Spice"
		document.getElementById("show_now_time").innerHTML="1pm - 3pm"

		document.getElementById("show_next_name").innerHTML="Kiwambo cha Spoti"
		document.getElementById("show_next_time").innerHTML="3pm - 7pm"

		document.getElementById("show_later_name").innerHTML="Marakwet Express"
		document.getElementById("show_later_time").innerHTML="7pm - 12am"	
}

function kiwamboChaSpoti(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Kiwambo cha Spoti"
		document.getElementById("show_now_time").innerHTML="3pm - 7pm"

		document.getElementById("show_next_name").innerHTML="Marakwet Express"
		document.getElementById("show_next_time").innerHTML="7pm - 12am"

		document.getElementById("show_later_name").innerHTML="Patashika"
		document.getElementById("show_later_time").innerHTML="12am - 4am"	
}

function marakwetExpress(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Marakwet Express"
		document.getElementById("show_now_time").innerHTML="7pm - 12am"

		document.getElementById("show_next_name").innerHTML="Patashika"
		document.getElementById("show_next_time").innerHTML="12am - 4am"

		document.getElementById("show_later_name").innerHTML="Urejesho"
		document.getElementById("show_later_time").innerHTML="5am - 10am"	
}

function patashika_saturday(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Patashika"
		document.getElementById("show_now_time").innerHTML="12am - 5am"

		document.getElementById("show_next_name").innerHTML="Urejesho"
		document.getElementById("show_next_time").innerHTML="5am - 10am"

		document.getElementById("show_later_name").innerHTML="Inuliwa"
		document.getElementById("show_later_time").innerHTML="10am - 2pm"	
}

function urejesho(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Urejesho"
		document.getElementById("show_now_time").innerHTML="5am - 10am"

		document.getElementById("show_next_name").innerHTML="Inuliwa"
		document.getElementById("show_next_time").innerHTML="10am - 2pm"

		document.getElementById("show_later_name").innerHTML="Tulizo"
		document.getElementById("show_later_time").innerHTML="2pm - 8pm"	
}

function inuliwa(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Inuliwa"
		document.getElementById("show_now_time").innerHTML="10am - 2pm"

		document.getElementById("show_next_name").innerHTML="Tulizo"
		document.getElementById("show_next_time").innerHTML="2pm - 8pm"

		document.getElementById("show_later_name").innerHTML="Ukumbi wa Kristo"
		document.getElementById("show_later_time").innerHTML="8pm - 12am"
}

function tulizo(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Tulizo"
		document.getElementById("show_now_time").innerHTML="2pm - 8pm"

		document.getElementById("show_next_name").innerHTML="Ukumbi wa Kristo"
		document.getElementById("show_next_time").innerHTML="8pm - 12am"

		document.getElementById("show_later_name").innerHTML="Patashika"
		document.getElementById("show_later_time").innerHTML="12am - 4am"	
}

function ukumbiWaKristo(){
		document.getElementById('spin_loader').style.display = 'none';
		document.getElementById('player2-container').style.display = 'flex';
		document.getElementById('social_icons').style.display = 'flex';


		document.getElementById("player_title").innerHTML="On air"
		document.getElementById("show_now_name").innerHTML="Ukumbi wa Kristo"
		document.getElementById("show_now_time").innerHTML="8pm - 12am"

		document.getElementById("show_next_name").innerHTML="Patashika"
		document.getElementById("show_next_time").innerHTML="12am - 4am"

		document.getElementById("show_later_name").innerHTML="Wakati wa Mungu"
		document.getElementById("show_later_time").innerHTML="4am - 6am"	
}

