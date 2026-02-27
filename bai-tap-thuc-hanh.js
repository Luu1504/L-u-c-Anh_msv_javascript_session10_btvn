let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
    { id: 3, name: "Le Van C", goals: 0, position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0, position: "GK" }
];

let showSquad = function () {
    console.log("=> DANH SÁCH:");
    squad.forEach(function (player) {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
};

let addPlayer = function (name, goals, position) {
    let newId = squad.length > 0 ? squad[squad.length - 1].id + 1 : 1;
    let newPlayer = {
        id: newId,
        name: name,
        goals: Number(goals),
        position: position
    };
    squad.push(newPlayer);
    console.log(`=> Đã thêm: ${name}`);
};

let findPlayer = function (id) {
    let player = squad.find(p => p.id === Number(id));
    if (player) {
        console.log(player);
    } else {
        console.log("=> Không tìm thấy");
    }
};

let updateGoals = function (id) {
    let player = squad.find(p => p.id === Number(id));
    if (player) {
        player.goals = player.goals + 1;
        console.log(`=> Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng.`);
    } else {
        console.log("=> Không tìm thấy ID");
    }
};

let deletePlayer = function (id) {
    let index = squad.findIndex(p => p.id === Number(id));
    if (index !== -1) {
        let deletedName = squad[index].name;
        squad.splice(index, 1);
        console.log(`=> Đã xóa: ${deletedName}`);
    } else {
        console.log("=> Không tìm thấy ID");
    }
};

let mainMenu = function () {
    console.log("--- FOOTBALL MANAGER PRO ---");
    console.log("1. Xem đội hình");
    console.log("2. Thêm cầu thủ");
    console.log("3. Tìm kiếm (theo ID)");
    console.log("4. Cập nhật bàn thắng");
    console.log("5. Xóa cầu thủ (Chuyển nhượng)");
    console.log("0. Thoát");
};

mainMenu();
showSquad();
addPlayer("Phan Van Duc", 7, "MF");
updateGoals(1);
deletePlayer(3);
showSquad();