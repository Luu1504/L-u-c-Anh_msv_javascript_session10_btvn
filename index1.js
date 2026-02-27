let player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};

let showPlayerInfo = function (player) {
    let ten = player.name;
    let viTri = player.position;
    let tuoi = player.age;
    let banThang = player.goals;
    let kienTao = player.assists;
    let tongDongGop = banThang + kienTao;

    console.log(`Tên: ${ten}`);
    console.log(`Vị trí: ${viTri}`);
    console.log(`Tuổi: ${tuoi}`);
    console.log(`Bàn thắng mùa này: ${banThang}`);
    console.log(`Kiến tạo mùa này: ${kienTao}`);
    console.log(`Tổng đóng góp: ${tongDongGop}`);
};

showPlayerInfo(player);