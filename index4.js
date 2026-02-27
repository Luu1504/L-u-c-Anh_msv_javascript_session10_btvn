let players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 }
];

let analyzeSalary = function (minYears, teamPlayers) {
    let filteredPlayers = [];

    for (let i = 0; i < teamPlayers.length; i++) {
        if (teamPlayers[i].years >= minYears) {
            filteredPlayers.push(teamPlayers[i]);
        }
    }

    if (filteredPlayers.length === 0) {
        return {
            totalSalary: 0,
            highestPaid: null,
            lowestPaid: null
        };
    }

    let total = 0;
    let highest = filteredPlayers[0];
    let lowest = filteredPlayers[0];

    for (let j = 0; j < filteredPlayers.length; j++) {
        let current = filteredPlayers[j];
        total = total + current.salary;

        if (current.salary > highest.salary) {
            highest = current;
        }

        if (current.salary < lowest.salary) {
            lowest = current;
        }
    }

    return {
        totalSalary: total,
        highestPaid: highest,
        lowestPaid: lowest
    };
};

console.log(analyzeSalary(10, players));
console.log(analyzeSalary(30, players));