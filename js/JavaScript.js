document.getElementById("defaultOpen").click();


var Player = [
    //Discord, Battle Tag, Twitch, GoodGame,divion,active
    ["Дементра", "ag3nt#21617", "ag3ntik", "ag3nt", 1, true],
    ["Reyenir", "Reyenir#2169", "reyenir", "Cherry-Phoenix", 1, true],
    ["enalia", "ENA1337#2702", "ena1337", "", 1, true],
    ["Soulful", "Soulful#2300", "soulful85", "", 1, true],
    ["Muffy_SuperGosu", "Muffy#2299", "muffy_supergosu", "", 1, true],
    ["Trunks", "Trunks#2116", "trynkzzz", "", 1, true],
    ["Маша | Qeenon", "Маша#21994", "Qinon", "", 1, true],
    ["KroLu", "KroLo#11461", "krolu_", "", 1, true],
    ["hotwussy", "hhh#2991", "hotwussy", "", 1, true],
    ["Edek" , "Edek#1800", "", "", 1, true],
    ["RiplEy" , "RiplEy#21126", "", "", 1, true],
    ["GadjiPro" , "GadjiPro#2558", "", "", 1, true],
    ["SasoRii" , "SasoRii#21896", "", "", 1, false],
    ["Лилуал", "Лилуал#2400", "lilyal_", "lilyal", 2, true],
    ["SimbaPower", "SimbaPower#2413", "hemosimbapower", "SimbaPower", 2, true],
    ["PETRUSHQUE", "PETRUSHQUE#2357", "PETRUSHQUE", "", 2, true],
    ["Rearden", "Rearden#21595", "amateurrearden", "", 2, true],
    ["Raven_TT", "RavenTT#2656", "", "", 2, true],
    ["ParadoCS", "ParadoCS#21514", "", "", 2, true],
    ["Fopogg", "Fopogg#2818", "", "", 2, true],
    ["Kung_Fu_Rabbit", "KungFuRabbit#2696", "", "", 2, true],
    ["rav3n", "sonder#21813", "", "", 2, true],

]




LoadTable(Player);

//Create Table Header, and function remain
function LoadTable(Table) {
    window.tableDivision1.innerHTML = "";
    window.tableDivision1.innerHTML += "<tr><td>Discord</td></td><td>Battle Tag</td><td>Twitch</td><td>GoodGame</td></tr>";
    window.tableDivision2.innerHTML = "";
    window.tableDivision2.innerHTML += "<tr><td>Discord</td></td><td>Battle Tag</td><td>Twitch</td><td>GoodGame</td></tr>";
   
    for (let i = 0; i < Table.length; i++) {
        if (Table[i][5] == true) {
            if (Table[i][4] == 1) {
                window.tableDivision1.innerHTML += TddTd(Table, i);
            } else {
         
                window.tableDivision2.innerHTML += TddTd(Table, i);
            }
        }  
	}
}
//Create Table with links to twitch, GoodGame|| Создание таблицы с ссылками на твич
function TddTd(Table, i) {
    let TdTd = "";
    if (Table[i][2] == "" && Table[i][3] == "") {
        TdTd += "<tr class='" + Table[i][0] + "'><td>" + Table[i][0] + "</td><td>" + Table[i][1] + "</td><td>" + Table[i][2] + "</td><td>" + Table[i][3] + "</td></tr>";
    } else {
        TdTd += "<tr class='" + Table[i][0] + "'><td>" + Table[i][0] + "</td><td>" + Table[i][1] + "</td>"
        if (Table[i][2] != "") {
            TdTd += "<td><a href=\"https:\/\/www.twitch.tv\/" + Table[i][2] + "\"> " + Table[i][2] + "</a></td>"
        } else {
            TdTd += "<td>" + Table[i][2] + "</td>"
        }
        if (Table[i][3] != "") {
            TdTd += "<td><a href=\"https:\/\/goodgame.ru\/channel\/" + Table[i][3] + "\/\"> " + Table[i][3] + "</a></td>"
        } else {
            TdTd += "<td>" + Table[i][3] + "</td>";
        }
    }

    return TdTd;
}