let player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

let addPerformanceScore = function (player) {
    let goals = player.goals;
    let assists = player.assists;
    let matches = player.matchesPlayed;

    let score = (goals + assists) / matches;
    player.performancePerMatch = Number(score.toFixed(2));

    if (player.performancePerMatch >= 1.0) {
        player.isKeyPlayer = true;
    } else {
        player.isKeyPlayer = false;
    }

    console.log(player);
};

addPerformanceScore(player);