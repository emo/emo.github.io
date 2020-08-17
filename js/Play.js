//Очки: 49 Penalty: Win / Lose: 4 / 1 Maps Win: 34 Maps Lose: 22
//HEmo	vs.     SPX	    Group Stage	23.08.2020 - 17:00 CEST
//HEmo	9:6	    Sun	    Group Stage	16.08.2020 - 17:00 CEST
//HEmo	9:6	    InFs	Group Stage	09.08.2020 - 17:00 CEST
//HEmo	11:4	s4s	    Group Stage	02.08.2020 - 17:00 CEST
//HEmo	14:1	TL7	    Group Stage	26.07.2020 - 17:00 CEST
//HEmo	6:9	    PD	    Group Stage	19.07.2020 - 17:00 CEST
document.getElementById("defaultOpen").click();


var Division1 = [
    [
        //Name,             website,                      data,      description
        ["NWC3L Season 16", "https://nwc3l.com/team/hemo", "2020", "Points: 49 Penalty: Win / Lose: 4 / 1 Maps Win: 34 Maps Lose: 22"],
        //array play
        ["HEmo", "vs.", "SPX", "Group Stage", "23.08.2020 - 17:00 CEST"],
        ["HEmo", "9:6", "Sun", "Group Stage", "16.08.2020 - 17:00 CEST"],
        ["HEmo", "9:6", "InFs", "Group Stage", "09.08.2020 - 17:00 CEST"],
        ["HEmo", "11:4", "s4s", "Group Stage", "02.08.2020 - 17:00 CEST"],
        ["HEmo", "14:1", "TL7", "Group Stage", "26.07.2020 - 17:00 CEST"],
        ["HEmo", "6:9", "PD", "Group Stage", "19.07.2020 - 17:00 CEST"],
    ],
]

var Division2 = [
    [
        //Name,             website,                      data,      description
        ["NWC3L Season 16", "https://nwc3l.com/team/emo", "2020", "Очки: 27 Penalty: Win / Lose: 1 / 3 Maps Win: 20 Maps Lose: 25"],
        //array play
        ["Emo", "vs", ".GCW3", "Group Stage", "30.08.2020 - 17: 00 CEST"],
        ["Emo", "vs", ".L7", "Group Stage", "23.08.2020 - 17: 00 CEST"],
        ["Emo", "vs", ".ITA", "Group Stage", "16.08.2020 - 21: 00 CEST"],
        ["Emo", "5:10", "wU", "Group Stage", "09.08.2020 - 19: 00 CEST"],
        ["Emo", "3:12", "RBTV", "Group Stage", "02.08.2020 - 17: 00 CEST"],
        ["Emo", "14:1", "EwOk", "Group Stage", "26.07.2020 - 17: 00 CEST"],
        ["Emo", "5: 10", "P2N", "Group Stage", "19.07.2020 - 17: 00 CEST"],
    ],
    [
        //Name,             website,                      data,      description
        ["W3RL S2 Group B", "http://legacy.iact-gaming.ru/index.php?view=league&id=74", "16.08.2020", ""],
        //array play
        ["Игровой день 2:"],
        ["23.08.2020 17:00", "Russia Emo 1337", "vs","France France Espoir"],
        ["Игровой день 1:"],
        ["16.08.2020 16:00","Russia Team Lightning7","4:1","Russia Emo 1337"],
    ],      
];

LoadTableDivision1(Division1, 1);
LoadTableDivision1(Division2, 2);

function LoadTableDivision1(Division, Numer) {

    let division_id;
    if (Numer == 1) {
        division_id = document.getElementById("div_division1");
    } else {
        division_id = document.getElementById("div_division2");
    }
    for (var i = 0; i < Division.length; i++) {
        let div_play_item = document.createElement('div');
        div_play_item.className = "play_item";
        let div_header = document.createElement('div');
        div_header.className = "header_play";
        let div_title = document.createElement('div');
        div_title.className = "title_play";
        let a = document.createElement('a');
        a.innerHTML =  Division[i][0][0];
        a.href = Division[i][0][1];
        div_title.append(a);
        let div_data = document.createElement('div');
        div_data.className = "data_play";
        div_data.innerHTML = Division[i][0][2];
        let div_description = document.createElement('div');
        div_description.className = "description_play";
        div_description.innerHTML = Division[i][0][3];

        div_header.append(div_title);
        div_header.append(div_data);

        div_play_item.append(div_header);
        div_play_item.append(div_description);

        let table = document.createElement('table');
        for (var j = 1; j < Division[i].length; j++) {
            let tr = document.createElement('tr');
            for (var c = 0; c < Division[i][j].length; c++) {
                let td = document.createElement('td');
                td.innerHTML = Division[i][j][c];
                tr.append(td);
            }
            table.append(tr);
        }
        div_play_item.append(table);
        division_id.append(div_play_item);
    }
}