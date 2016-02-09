var login = require("facebook-chat-api");
var nba = require("nba");
var ruser = "";
var remind = false;
var rreminder = "";
var rmonth = "";
var ryear = "";
var rdate = "";
var remindDate = new Date();
var rreminding = false;
var rreminders=[];
var dreminders=[];
var messageCount = 0;
var words = [];
var people = [];
var wordcounts = [];
var peoplecounts = [];
for(i = 0; i < 10000; i++){
	wordcounts[i] = 0;
}
for(i = 0; i < 10; i++){
    peoplecounts[i] = 0;
}
 
var items=[
"Hello from Matt Facts! Fact - Matt likes to work out a lot. Send 'STOP' to stop receiving these messages.",
"Hello from Matt Facts! Fact - You might not know that Matt is a big fan of League of Legends, a popular online video game. Send 'STOP' to stop receiving these messages.",
"Hello from Matt Facts! Fact - Matt was born in Thailand and his parents live in Hawaii. Send 'STOP' to stop receiving these messages.",
"Hello from Matt Facts! Fact - Matt graduated with two degrees from the University of Texas at Austin. Send 'STOP' to stop receiving these messages."
]

var ball=[
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful",
"Fuck you",
"Do I look like I care?",
"..."
]

var bern=[
"I feel the bern.",
"つ ◕_◕ ༽つ BERNIE TAKE MY ENERGY ༼ つ ◕_◕ ༽つ",
"Do you feel the bern now Mr. Krabs?"
]

// Create simple echo bot 
login({email: "michaelfbot@gmail.com", password: "MonkFB214"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
        // api.sendMessage(message.body, message.threadID);
        /*if(message.body === 'Matt Fact') {
              var item = items[Math.floor(Math.random()*items.length)];
              api.sendMessage(item, message.threadID);

        }
        if(message.body === 'STOP') {
            api.sendMessage("'STOP' is an unrecognized command. Send 'STOP' to stop receiving these messages.", message.threadID);
        }*/
		
		if((message.body.toUpperCase() === 'Time'.toUpperCase()) && !Boolean(remind)){
			var d = new Date();
			var Uh = d.getHours();
			var m = d.getMinutes();
			var Eh = Uh-5;
			var Ch = Uh-6;
			var Mh = Uh-7;
			var Ph = Uh-8;
			var Ux;
			var Ex;
			var Cx;
			var Mx;
			var Px;
			
			if(Uh > 12){
				Uh=Uh-12;
				Ux = "PM";
			} else if(Uh == 12){
				Ux = "PM";
			} else{
				Ux = "AM";
			}
			if(Eh > 12){
				Eh=Eh-12;
				Ex = "PM";
			} else if(Eh == 12){
				Ex = "PM";
			} else if(Eh < 0){
			Eh = Eh+12;
				Ex = "PM";
			} else{
				Ex = "AM";
			}
			if(Ch > 12){
				Ch=Ch-12;
				Cx = "PM";
			} else if(Ch == 12){
				Cx = "PM";
			} else if(Ch < 0){
			Ch = Ch+12;
				Cx = "PM";
			} else{
				Cx = "AM";
			} 
			if(Mh > 12){
				Mh=Mh-12;
				Mx = "PM";
			} else if(Mh == 12){
				Mx = "PM";
			} else if(Mh < 0){
			Mh = Mh+12;
				Mx = "PM";
			} else{
				Mx = "AM";
			} 
			if(Ph > 12){
				Ph=Ph-12;
				Px = "PM";
			} else if(Ph == 12){
				Px = "PM";
			} else if(Ph < 0){
			Ph = Ph+12;
				Px = "PM";
			} else{
				Px = "AM";
			} 
			
			if(m < 10){
				api.sendMessage("UTC: " + Uh.toString() + ":0"+ m.toString() + " " + Ux
				+"\n"+"EST: " + Eh.toString() + ":0"+ m.toString() + " " + Ex
				+"\n"+"CST: " + Ch.toString() + ":0"+ m.toString() + " " + Cx
				+"\n"+"MST: " + Mh.toString() + ":0"+ m.toString() + " " + Mx
				+"\n"+"PST: " + Ph.toString() + ":0"+ m.toString() + " " + Px
				+"\n"+"And OU still sucks!!!!!"
				, message.threadID);
				
			} else{
				api.sendMessage("UTC: " + Uh.toString() + ":"+ m.toString() + " " + Ux
				+"\n"+"EST: " + Eh.toString() + ":"+ m.toString() + " " + Ex
				+"\n"+"CST: " + Ch.toString() + ":"+ m.toString() + " " + Cx
				+"\n"+"MST: " + Mh.toString() + ":"+ m.toString() + " " + Mx
				+"\n"+"PST: " + Ph.toString() + ":"+ m.toString() + " " + Px
				+"\n"+"And OU still sucks!!!!!"
				, message.threadID);
			}
			
			
			
			
			
			
		}
		
		
		if((message.body.toUpperCase() === 'NBA'.toUpperCase())  && !Boolean(remind)) {
			var d = new Date();
			var gameD = "";
			var dd = (d.getDate()).toString();
			var mm = (d.getMonth()+1).toString();
			if(dd<10){
				dd='0'+dd;
			} 
			if(mm<10){
				mm='0'+mm;
			} 
			var yyyy = (d.getFullYear()).toString();
			gameD = mm + "/" + dd + "/" + yyyy;
			
			nba.stats.scoreboard({gameDate: gameD}, function (err, response) {
				var wgames = ""
				for (i = 0; i < response.westConfStandingsByDay.length; i++) { 
				    wgames = wgames + response.westConfStandingsByDay[i].team + ": " + response.westConfStandingsByDay[i].w + "-" + response.westConfStandingsByDay[i].l + "\n"
				}
				var egames = ""
				for (i = 0; i < response.eastConfStandingsByDay.length; i++) { 
				    egames = egames + response.eastConfStandingsByDay[i].team + ": " + response.eastConfStandingsByDay[i].w + "-" + response.eastConfStandingsByDay[i].l + "\n"
				}
				api.sendMessage("\nWestern Conference:\n" + wgames + "\n\nEastern Conference:\n" + egames , message.threadID);
					
			
			
				//api.sendMessage(response.available ,message.threadID);    
			});
			
			
            
        }
		
		/*if(message.body === 'Does OU still suck?') {
            api.sendMessage("Yes.", message.threadID);
        }*/
		
		
		
		
		if(((message.body).toUpperCase().indexOf("Star Wars".toUpperCase())>-1) && !Boolean(remind)) {
			var d = new Date();
			var dd = d.getDate();
			var mm = d.getMonth()+1;
			var yyyy = d.getFullYear();
			
			var fd = 16;
			var fm = 12;
			var fy = 2016;
			
			var fd2 = 15;
			var fm2 = 12;
			var fy2 = 2017;
			
			var years = fy - yyyy;
			var months = fm-mm;
			var days = (fd-dd) + months*30 + years*365 + 4;
			
			var years2 = fy2 - yyyy;
			var months2 = fm2 - mm;
			var days2 = (fd2-dd) + months2*30 + years2*365 + 4;
			
            api.sendMessage("There are " + days + " days until Rogue One, and " + days2 + " until Episode VIII", message.threadID);
        }
		
		if(((message.body).toUpperCase().indexOf("cake".toUpperCase())>-1) && !Boolean(remind)) {
			api.sendMessage("The cake aaaasdfasfsais a lie.", message.threadID);
        }
		
		if(((message.body).toUpperCase().indexOf("ヽ༼ຈل͜ຈ༽ﾉ".toUpperCase())>-1) && !Boolean(remind)) {
			api.sendMessage("ヽ༼ຈل͜ຈ༽ﾉ raise your Charlies ヽ༼ຈل͜ຈ༽ﾉ", message.threadID);
        }
		
		if(((message.body).toUpperCase().indexOf("つ ◕_◕ ༽つ".toUpperCase())>-1) && !Boolean(remind)) {
			api.sendMessage("つ ◕_◕ ༽つ BERNIE TAKE MY ENERGY ༼ つ ◕_◕ ༽つ", message.threadID);
        }
		
		if(((message.body).toUpperCase().indexOf("WROG?", message.body.length - 5) !== -1) && !Boolean(remind)) {
              var res = ball[Math.floor(Math.random()*ball.length)];
              api.sendMessage(res, message.threadID);

        }
		
		if(((message.body).toUpperCase().indexOf("feel the bern".toUpperCase())>-1) && !Boolean(remind)) {
			var res = bern[Math.floor(Math.random()*bern.length)];
			api.sendMessage(res, message.threadID);
        }
		
		if(message.body.toUpperCase() === "I love you".toUpperCase() || message.body.toUpperCase() === "Ily".toUpperCase() || message.body.toUpperCase() === "I love you Wrog".toUpperCase() || message.body.toUpperCase() === "Ily Wrog".toUpperCase() && !Boolean(remind)) {
			
            api.sendMessage("I know.", message.threadID);
        }
		
		if(message.body.toUpperCase() === "fuck you wrog".toUpperCase() && !Boolean(remind)) {
			
            api.sendMessage("Fuck you too.", message.threadID);
        }
		
		if(message.senderID === ruser && Boolean(remind)){
			var date = [];	
			date = message.body.split("/");
			rmonth = date[0];	
			rdate = date[1];	
			ryear = date[2];
			if((rmonth % 1 != 0) || (rdate % 1 != 0) || (ryear % 1 != 0) || rmonth > 12 || rmonth < 1 || rdate > 31 || rdate < 1 || ryear < 2015){
				api.sendMessage("That is not a valid date. Please use the format: mm/dd/yyyy", message.threadID);
				rmonth = "";
				rdate = "";
				ryear = "";
				//rreminders.pop();
			} else{
				remindDate.setMonth(rmonth-1);
				remindDate.setDate(rdate);
				remindDate.setYear(ryear);
				remindDate.setHours(6);
				remindDate.setMinutes(0);
				remindDate.setSeconds(0);
				rreminding = true;
				api.sendMessage("I will remind you to \"" + rreminder + "\" on " + rmonth + "/" + rdate + "/" + ryear ,message.threadID);
				remind = false;
			//api.sendMessage(remindDate.toString() ,message.threadID);
			}
			
			
   

			
			//remind = false;
		}
		
		if(((message.body).toUpperCase().indexOf("Remind me to ".toUpperCase())>-1) && !Boolean(remind)) {
			ruser = message.senderID;
			remind = true;
			//api.sendMessage(user.toString(), message.threadID);
			var sp = 13 + (message.body).toUpperCase().indexOf("Remind me to ".toUpperCase());
			rreminder = message.body.substring(sp);
			rreminders.push(message.body.substring(sp));
			api.sendMessage("What date should I remind you to \"" + rreminder + "\" on? Please use the format: mm/dd/yyyy",message.threadID);
        }
		
		if((message.body.toUpperCase() === 'Reminder'.toUpperCase()) && Boolean(rreminding) && message.senderID === ruser && !Boolean(remind)) {
			//api.sendMessage("Remember to \"" + rreminder + "\" on " + rmonth + "/" + rdate + "/" + ryear ,message.threadID);
			tempreminders = rreminders.slice();
			var tempr = ""
			while(tempreminders.length > 0){
				tempr = tempr + "Remember to " + tempreminders.pop() + "\n";
				//api.sendMessage("Hey you! " + tempreminders.pop(),message.threadID);
			}
			api.sendMessage("Hey you! \n" + tempr,message.threadID);
			
        }
		
		if(message.body) {
            api.markAsRead(message.threadID);
			messageCount++;
			console.log("count: " + messageCount.toString());
			
			var rand = Math.floor(Math.random() * (201 - 1 + 1)) + 1;
			console.log(rand.toString());
			if(rand == 101){
				console.log(rand.toString() + " GOT IT!");
				api.sendMessage("People can't decide every color",message.threadID);
			}
			

			var curwords = [];	
			curwords = message.body.split(" ");
			var curperson = message.senderName;
			
			for(i = 0; i < curwords.length; i++){
				//console.log("testing: " + curwords[i].toString() + " " + curwords[i].length);
				if(curwords[i].length < 3 || curwords[i].toString().toUpperCase() === 'the'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'I\'m'.toUpperCase() || curwords[i].toString().toUpperCase() === 'this'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'what'.toUpperCase() || curwords[i].toString().toUpperCase() === 'like'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'and'.toUpperCase() || curwords[i].toString().toUpperCase() === 'that'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'have'.toUpperCase() || curwords[i].toString().toUpperCase() === 'for'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'not'.toUpperCase() || curwords[i].toString().toUpperCase() === 'with'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'you'.toUpperCase() || curwords[i].toString().toUpperCase() === 'but'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'his'.toUpperCase() || curwords[i].toString().toUpperCase() === 'from'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'they'.toUpperCase() || curwords[i].toString().toUpperCase() === 'say'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'her'.toUpperCase() || curwords[i].toString().toUpperCase() === 'she'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'will'.toUpperCase() || curwords[i].toString().toUpperCase() === 'all'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'would'.toUpperCase() || curwords[i].toString().toUpperCase() === 'there'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'their'.toUpperCase() || curwords[i].toString().toUpperCase() === 'just'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'out'.toUpperCase() || curwords[i].toString().toUpperCase() === 'about'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'who'.toUpperCase() || curwords[i].toString().toUpperCase() === 'get'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'which'.toUpperCase() || curwords[i].toString().toUpperCase() === 'when'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'make'.toUpperCase() || curwords[i].toString().toUpperCase() === 'can'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'him'.toUpperCase() || curwords[i].toString().toUpperCase() === 'know'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'take'.toUpperCase() || curwords[i].toString().toUpperCase() === 'into'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'your'.toUpperCase() || curwords[i].toString().toUpperCase() === 'some'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'could'.toUpperCase() || curwords[i].toString().toUpperCase() === 'them'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'see'.toUpperCase() || curwords[i].toString().toUpperCase() === 'other'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'than'.toUpperCase() || curwords[i].toString().toUpperCase() === 'then'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'now'.toUpperCase() || curwords[i].toString().toUpperCase() === 'look'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'only'.toUpperCase() || curwords[i].toString().toUpperCase() === 'come'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'it\'s'.toUpperCase() || curwords[i].toString().toUpperCase() === 'was'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'yeah'.toUpperCase() || curwords[i].toString().toUpperCase() === 'how'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'our'.toUpperCase() || curwords[i].toString().toUpperCase() === 'hmm'.toUpperCase() ||
				curwords[i].toString().toUpperCase() === 'its'.toUpperCase() || curwords[i].toString().toUpperCase() === 'also'.toUpperCase())
				{
					console.log("denied: " + curwords[i].toString());
				}
				else if(words.indexOf(curwords[i].toString().toLowerCase()) > -1){
					wordcounts[words.indexOf(curwords[i].toString().toLowerCase())]++;
					peoplecounts[people.indexOf(curperson)]++;
					console.log("accepted: " + curwords[i].toString());
				} else{
					words.push(curwords[i].toString().toLowerCase());
					wordcounts[words.length-1]++;
					peoplecounts[people.length-1]++;
					console.log("accepted: " + curwords[i].toString());
				}
				
				
			}
			
			
			
			
			if(messageCount == 100){
				//api.sendMessage("10 messages!",message.threadID);
				var res = "Here are the most common words used in the last 100 messages:\n";
				
				for(i = 0; (i < 5 && i < words.length); i++){
					var tempcount = (Math.max.apply( Math, wordcounts ));
					var spot = wordcounts.indexOf(parseInt(tempcount));
					res = res + (words[(spot)].toString() + ": " + tempcount.toString() + "\n").toString();
					//api.sendMessage(words[(spot)].toString() + ": " + tempcount.toString(),message.threadID);
					wordcounts[spot] = -1;
				}
				
				
				//api.sendMessage(tempcount.toString() + " " + words[wordcounts.indexOf(tempcount)]),message.threadID);
				
				//res = words[0] + " " + wordcounts[0].toString() + "\n" + words[1] + " " + wordcounts[1].toString() + "\n" + words[2] + " " + wordcounts[2].toString() + "\n" + words[3] + " " + wordcounts[3].toString() + "\n" + words[4] + " " + wordcounts[4].toString() + "\n" + words[5] + " " + wordcounts[5].toString() + "\n";
				
				//res = word1 + " " + count1.toString();
				
				api.sendMessage(res,message.threadID);
				
				messageCount = 0;
				words = [];
				wordcounts = [];
				for(i = 0; i < 10000; i++){
					wordcounts[i] = 0;
				}
			}
        }
		
		
		
		
    });
});
