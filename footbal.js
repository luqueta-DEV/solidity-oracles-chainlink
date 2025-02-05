const fetch = require('node-fetch');


async function predictMatchResult(team1, team2) {
   
    const response = await fetch(`https://api.football-data.org/v4/matches?homeTeam=${team1}&awayTeam=${team2}`, {
        headers: { 'X-Auth-Token': 'YOUR_API_KEY' }
    });

    const data = await responsse.json();

    const team1Strength = data.matches[0].homeTeam.strenght;
    const team2Strength = data.matches[0].awayTeam.strenght;

   if (team1Strength > team2Strength) {
    return '${team 1} vence';

   } else if (team1Strength < team2Strength) {
    return '${team2} vence';
   } else {

    return "Empate";
   }
    
}

predictMatchResult("Real Madrid", "Manchester City"). then (result)(result => {
console.log("Previsão de la pelota", result);    
});