document.getElementById("defaultOpen").click();


var Eng = [
    [
        //
        ["Template:"],
        //array command
        //
        ['~&ltcommand> or @Amadeus &ltcommand>, replace &ltthing> in help with text without < > brackets',"~help commands"],
    ],
    [
        ["user commands:"],
        //array command
        ['Command', 'parameter/s', 'description', 'Gif'],
        ['ttt', '<@user> &ltN&gt', 'play tic tac toe for points', 'Pol1'],
        ['quote', ' <@user>', 'something from that user', 'Pol2'],
        ['score', ' <@user>', 'show user points', 'Pol3'],
        ['top', '&ltN&gt', 'shows top N users', 'Pol4'],
        ['give', '<@user> &ltN&gt', 'give user your N points', 'Pol5'],
        ['embed', '&lttitle> <description>', 'create embed', 'Pol6'],
        ['qrcode', '&ltsomething>:', 'creates QR code', 'Pol7'],
        ['urban', '&ltthing>', 'explains a thing', 'Pol8'],
        ['gif', '&ltthing>', 'cry, hug, pat, slap, cringe, wave, sex, ahegao, clap, shrug, lol', 'Pol9'],
        ['ru2en', '&lttext>', 'translation, also en2ru en2de en2fr de2en fr2en', 'Pol10'],
    ],
    [
        ["music commands:"],
        //array command
        ['Command', 'parameter/s', 'description', 'Gif'],
        ['join:', '', 'to your voice channel (you should be there)', "Муз1"],
        ['leave:', '', 'from voice channel', "Муз2"],
        ['play', '&lturl&gt', 'play an radio stream or youtube music', "Муз3"],
        ['repeat:', '', 'plays last stream again', "Муз4"],
    ],
    [
        ["warcraft commands:"],
        //array command
        ['Command', 'parameter/s', 'description', 'Gif'],
        ['today', "", 'show tournaments today (same with tomorrow, yesterday or weekends)', 'War1'],
        ['stats', '<nick>', 'shows ladder race stats (nick - battle tag or tag without numbers) (without nick will use discord name)', 'War2'],
        ['ongoing', "", 'show ongoing solo matches', 'War3'],
        ['lineup', '&lttitle&gt', '| map player map2 player2+player3 (title is optional)', 'War4'],

    ],
]

var Rus = [
    [
        //
        ["Шаблон:"],
        //array command
        //
        ['"@Amadeus <команда> <параметр/ы>" или "~<команда> <параметр/ы>" для обращения к боту без <>','"~помощь" показать список команд'],
    ],
    [
        ["Пользовательские команды:"],
        //array command
        ['Команда', 'Параметр/ы', 'Описание','Гифка'],
        ['Крестики_нолики', '<@пользователь> &ltN&gt', 'Игра - камень, ножницы, бумага на очки','Pol1Ru'],
        ['Цитата', ' <@пользователь>', 'Случайная цитата пользователя', 'Pol2Ru'],
        ['Счёт', ' <@пользователь>', 'Посмотреть счёт пользователя', 'Pol3Ru'],
        ['top', '&ltN&gt', ' Топ N пользователей по очкам', 'Pol4'],
        ['give', '<@пользователь> &ltN&gt', ' Дать пользователю N(ое) - количество очков', 'Pol5'],
        ['embed', '<Заголовок> <Описание>', 'Создание выделенного сообщения', 'Pol6'],
        ['qrcode', '<Сообщение>', 'Создание QR кода', 'Pol7'],
        ['urban', '<Термин>', 'Опеределение термина взятого из «urban»', 'Pol8'],
        ['gif', '<Параметр>', 'Ищет гифку в интернете по параметру', 'Pol9'],
        ['ru2en', '<Текст>', 'Переводчик, также en2ru en2de en2fr de2en fr2en', 'Pol10'],
    ],
    [
        ["Музыкальные команды:"],
        //array command
        ['Команда', 'Параметр/ы', 'Описание', 'Гифка'],
        ['join:', '',' Подключение к каналу(в котором вы находитесь)', "Муз1"],
        ['leave:', '', 'Выход из канала', "Муз2"],
        ['play', '&lturl&gt', 'Включить радиопоток или музыку на YouTube', "Муз3"],
        ['repeat:', '', 'Повтор последней url', "Муз4"],
    ],
    [
        ["Warcraft команды:"],
        //array command
        ['Команда', 'Параметр/ы', 'Описание', 'Гифка'],
        ['Сегодня', "", 'Показать турниры сегодня(Тоже самое для Завтра, Вчера или Weekends)', 'War1Ru'],
        ['Статистика', '<Никнейм>', 'Показывает статистику ладдера(Никнейм - battle tag или tag но без номера)(Без этого будет использовать имя дискорда)', 'War2Ru'],
        ['ongoing', "", 'Матчи которые идут прямо сейчас в под ладдере', 'War3'],
        ['lineup', '&lttitle&gt', 'Создание выделенного сообщение по шаблону → "Заголовок | текст1 текст2 текст3..."', 'War4'],

    ],
];

LoadTable(Eng, 1);
LoadTable(Rus, 2);

function LoadTable(lang, Numer) {

    let division_id;
    if (Numer == 1) {
        division_id = document.getElementById("div_division1");
    } else {
        division_id = document.getElementById("div_division2");
    }
    for (var i = 0; i < lang.length; i++) {
        let div_play_item = document.createElement('div');
        div_play_item.className = "play_item";
        let div_header = document.createElement('div');
        div_header.className = "header_play";
        let div_title = document.createElement('div');
        div_title.className = "title_play";
        div_title.innerHTML = lang[i][0][0];
        div_header.append(div_title);

        div_play_item.append(div_header);

        let table = document.createElement('table');
        for (var j = 1; j < lang[i].length; j++) {
            let tr = document.createElement('tr');
            for (var c = 0; c < lang[i][j].length; c++) {
                let td = document.createElement('td');
                if (j > 1 && c == 3) {
                    let img = document.createElement('img');
                    img.src = "res/Amadeus/" + lang[i][j][c] + ".gif";
                    img.alt = "Not gif";
                    td.append(img);
                }
                else {
                    td.innerHTML = lang[i][j][c];
                }
             
                tr.append(td);
            }
            table.append(tr);
        }
        div_play_item.append(table);
        division_id.append(div_play_item);
    }
}