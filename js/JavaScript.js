document.getElementById("defaultOpen").click();



var Division1 = [
    [1, "Савельев Владислав Агафонович", "enalia", "Ena1337"],
    [2, "Сергеев Маша", "Маша | Qeenon", "Маша"]
];

var Division2 = [
    [1, "Савельев Владислав Агафонович", "Петруша", "PETRUSHKA"],
    [2, "Лилуальный", "Лилуал", "Лилуал#2400"],
];

LoadTable(1);
LoadTable(2);

function LoadTable(Table) {
	if (Table == 1) {
        window.tableDivision1.innerHTML = "";
        window.tableDivision1.innerHTML += "<tr><td>FullName</td></td><td>Discord</td><td>Battletag</td></tr>";
        for (let i = 0; i < window.Division1.length; i++) {
            window.tableDivision1.innerHTML += "<tr class='" + window.Division1[i][0] + "'><td>" + window.Division1[i][1] + "</td><td>" + window.Division1[i][2] + "</td><td>" + window.Division1[i][3] + "</td></tr>";
		}
	} else {
        window.tableDivision2.innerHTML = "";
        window.tableDivision2.innerHTML += "<tr><td>FullName</td></td><td>Discord</td><td>Battletag</td></tr>";
        for (let i = 0; i < window.Division2.length; i++) {
            window.tableDivision2.innerHTML += "<tr class='" + window.Division2[i][0] + "'><td>" + window.Division2[i][1] + "</td><td>" + window.Division2[i][2] + "</td><td>" + window.Division2[i][3] + "</td></tr>";
        }
	}
}
