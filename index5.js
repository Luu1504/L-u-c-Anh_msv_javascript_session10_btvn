let teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
            "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
            "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 },
        },
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
            "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
            "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
        },
    }
];

let generatePlayerSeasonReport = function (playerName, teamHistory) {
    let player = null;
    for (let i = 0; i < teamHistory.length; i++) {
        if (teamHistory[i].name === playerName) {
            player = teamHistory[i];
        }
    }

    if (player === null) {
        return `Không tìm thấy cầu thủ ${playerName}`;
    }

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalYellowCards = 0;

    let bestSeasonName = "";
    let maxGoals = -1;
    let maxAssists = -1;

    let tatCaMuaGiai = player.seasons;
    for (let tenMua in tatCaMuaGiai) {
        let thongTinMua = tatCaMuaGiai[tenMua];

        totalMatches = totalMatches + thongTinMua.matches;
        totalGoals = totalGoals + thongTinMua.goals;
        totalAssists = totalAssists + thongTinMua.assists;
        totalYellowCards = totalYellowCards + thongTinMua.yellowCards;

        if (thongTinMua.goals > maxGoals) {
            maxGoals = thongTinMua.goals;
            maxAssists = thongTinMua.assists;
            bestSeasonName = tenMua;
        } else if (thongTinMua.goals === maxGoals) {
            if (thongTinMua.assists > maxAssists) {
                maxAssists = thongTinMua.assists;
                bestSeasonName = tenMua;
            }
        }
    }

    let report = {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: {
            totalMatches: totalMatches,
            totalGoals: totalGoals,
            totalAssists: totalAssists,
            totalYellowCards: totalYellowCards,
            averageGoalsPerMatch: Number((totalGoals / totalMatches).toFixed(2)),
            averageAssistsPerMatch: Number((totalAssists / totalMatches).toFixed(2)),
            bestSeason: {
                season: bestSeasonName,
                goals: maxGoals,
                assists: maxAssists
            }
        }
    };

    return report;
};

console.log(generatePlayerSeasonReport("Messi", teamHistory));