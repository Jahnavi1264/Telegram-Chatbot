const request = require("request");
const TelegramBot = require("node-telegram-bot-api");
const token = "5414553115:AAGdLWzILpaY6E0Os7ZrkbKTjngG1SkK5uk";
const bot = new TelegramBot(token, { polling: true });
request(
  "https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=7275&secondTeamId=151&APIkey=4ac1a7d3ba75a8e7bdb25b818634c8d8c19d833f75e0e0c27f032e8da58aad14",
  function (error, response, body) {
    bot.onText(/\/start/, (msg) => {
      bot.sendMessage(msg.chat.id, ":-)Dive into the world of Football:-)", {
        "reply_markup": {
          "keyboard": [
            ["LEAGUE NAME", "MATCH DATE"],["HOME TEAM NAME","AWAY TEAM NAME"],["HOME TEAM SCORE", "AWAY TEAM SCORE"],["GRACIAS"]]
          }
      });
});
bot.onText(/\/sendpic/, (msg) => {
      bot.sendPhoto(msg.chat.id,"https://tse1.mm.bing.net/th?id=OIP.afp5YfiD5nUoXQjayLy5VAEyDM&pid=Api&P=0",{caption : "There you go!!!"});
});
  
 bot.on("message", (msg) => {
     var countryname= "COUNTRY NAME";
     var leaguename= "LEAGUE NAME";
     var teams= "SOCCER GAMES TODAY?"
     var start="/start";
     var img="/sendpic";
     var matchdate= "MATCH DATE";
     var matchtime= "MATCH TIME";
     var htname= "HOME TEAM NAME";
     var atname= "AWAY TEAM NAME";
     var htscore ="HOME TEAM SCORE";
     var atscore ="AWAY TEAM SCORE";
     var clogo= "COUNTRY LOGO";
     var llogo= "LEAGUE LOGO";
     var htbadge= "HOME TEAM BADGE";
     var atbadge= "AWAY TEAM BADGE";
     var windup = "GRACIAS"
     if (msg.text.indexOf(countryname) === 0) {
         bot.sendMessage(msg.chat.id,"<b>Country Name </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].country_name,{parse_mode : "HTML"});
     }

     else if (msg.text.indexOf(leaguename) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Soccer League name - </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].league_name,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(teams) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Fight between two best teams </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].match_hometeam_name+" vs "+JSON.parse(body).firstTeam_VS_secondTeam[0].match_awayteam_name,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(matchdate) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Match lasted on </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].match_date,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(matchtime) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Every second matters in football! Here's the match time </b> "+JSON.parse(body).firstTeam_VS_secondTeam[0].match_time,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(htname) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Home team name </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].match_hometeam_name,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(atname) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Away team name </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].match_awayteam_name,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(htscore) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Home team score </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].match_hometeam_score,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(atscore) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Away team score </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].match_awayteam_score,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(clogo) === 0) {
          bot.sendMessage(msg.chat.id,"<b>SPAIN </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].country_logo,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(llogo) === 0) {
          bot.sendMessage(msg.chat.id,"<b>La Liga </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].league_logo,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(htbadge) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Deportivo Alavés </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].team_home_badge,{parse_mode : "HTML"});
     }
     else if (msg.text.indexOf(atbadge) === 0) {
          bot.sendMessage(msg.chat.id,"<b>Granada </b>"+JSON.parse(body).firstTeam_VS_secondTeam[0].team_away_badge,{parse_mode : "HTML"});
     }
     else if(msg.text.indexOf(windup) === 0){
          bot.sendMessage(msg.chat.id,"<b>Pleasure is all mine to assisst you....See you next time! </b>" ,{parse_mode : "HTML"});
     }
     else{
          if (msg.text.indexOf(start) === 0) {
               bot.sendMessage(msg.chat.id,"Hola!");
          }
          else if (msg.text.indexOf(img) === 0) {
               bot.sendMessage(msg.chat.id,"***  BOOOM  ***");
          }
          else{
               bot.sendMessage(msg.chat.id,"Data not found :-(");
          }
      }
});
});
     

