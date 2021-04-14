let data = [
    {
        question: "Miền Bắc của Việt Nam có tổng cộng bao nhiêu tỉnh thành?",
        answerA: "A: 22 tỉnh thành",
        answerB: "B: 23 tỉnh thành",
        answerC: "C: 24 tỉnh thành",
        answerD: "D: 25 tỉnh thành",
        answer: "D: 25 tỉnh thành"
    },
    {
        question: "Ấn Độ là quốc gia có dân số đứng thứ mấy thế giới?",
        answerA: "A: Thứ 10",
        answerB: "B: Thứ 2",
        answerC: "C: Thứ 9",
        answerD: "D: Thứ 5",
        answer: "B: Thứ 2"
    },
    {
        question: "Tổng thống đời thứ 16 của Mỹ là ai?",
        answerA: "A: Abraham Lincoln",
        answerB: "B: John Adams",
        answerC: "C: John F. Kennedy",
        answerD: "D: Richard Nixon",
        answer: "A: Abraham Lincoln"
    },
    {
        question: "Năm 1500 thuộc thế kỷ thứ bao nhiêu?",
        answerA: "A: 14",
        answerB: "B: 15",
        answerC: "C: 16",
        answerD: "D: 17",
        answer: "B: 15"
    }
];

let content = [];
// tạo câu hỏi và câu trả lời
for (let i = 0; i < data.length; i++) {
    content.push(`<div id="container">
    <img src="http://streaming1.danviet.vn/upload/4-2018/images/2018-10-31/Tron-1-thang-gia-nhap-Facebook-MC-Lai-Van-Sam-noi-dieu-bat-ngo-sam6-1497289434848-1540981233-width660height396.jpg"
        alt="anh nen">
    <div id="question">
        <div class="hai-ben">
            <div class="tren"></div>
            <div class="duoi"></div>
        </div>
        <div id="content-question">${data[i].question}</div>
        <div class="hai-ben">
            <div class="tren"></div>
            <div class="duoi"></div>
        </div>
    </div>
    <div id="answers">
        <div class="line">
            <div class="space">
                <div class="tren"></div>
                <div class="duoi"></div>
            </div>
            <button id="A" onclick="choice('a')" class="content-answer">${data[i].answerA}</button>
            <div class="space">
                <div class="tren"></div>
                <div class="duoi"></div>
            </div>
            <button id="B" onclick="choice('b')" class="content-answer">${data[i].answerB}</button>
            <div class="space">
                <div class="tren"></div>
                <div class="duoi"></div>
            </div>
        </div>
        <div class="line">
            <div class="space">
                <div class="tren"></div>
                <div class="duoi"></div>
            </div>
            <button id="C" onclick="choice('c')" class="content-answer">${data[i].answerC}</button>
            <div class="space">
                <div class="tren"></div>
                <div class="duoi"></div>
            </div>
            <button id="D" onclick="choice('d')" class="content-answer">${data[i].answerD}</button>
            <div class="space">
                <div class="tren"></div>
                <div class="duoi"></div>
            </div>
        </div>
    </div>
    <div id="select">
        <button class="button" onclick="exit()">Thoát Game</button>
        <button class="button" onclick="confirm()">Xác nhận câu trả lời</button>
        <button class="button" onclick="next()">Câu kế tiếp</button>
    </div>
</div>`);
}

// màn hình lúc đầu của web
$('body').html(`
<div id="start">
    <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/0/09/Vietnam_millionaire_2021.webp/1200px-Vietnam_millionaire_2021.webp.png"
    alt="anh logo">
    <button class="play-again" onclick="start()">Start</button>
</div>`);

// chức năng nút start và màn hình bắt đầu
function start() {
    $('#start').addClass("hidden");
    $('body').html(content[0]);
    $('.button')[2].disabled = true;
}

// chức năng của nút next
let dem = 1;
function next() {
    $('body').html(content[dem]);
    dem++;
    $('.button')[2].disabled = true;
    if (dem === content.length) {
        $($('.button')[2]).html('Kết thúc');
    }
    else if (dem > content.length) {
        $('body').html(`
        <div id="end-game">
            <h1>Game Over</h1>
            <p>Bạn đúng được ${dem - 1} câu</p>
            <button class="play-again" onclick="exit()">Chơi lại</button>
        </div>`);
    }
}
// nút exit
function exit() {
    location.reload();
}

// thay đổi màu nền của câu nguòi chơi lựa chọn và lưu lựa chọn vào biến phụ
let temp = "";
function choice(input) {
    if (input == 'a') {
        $('#A').css('background-color', '#dbac4b');
        $('#A').css('color', 'white');
        temp = $('#A').html();
        $('#B').css('background-color', '#2359b6');
        $('#B').css('color', 'rgb(255, 232, 98)');
        $('#C').css('background-color', '#2359b6');
        $('#C').css('color', 'rgb(255, 232, 98)');
        $('#D').css('background-color', '#2359b6');
        $('#C').css('color', 'rgb(255, 232, 98)');
    }
    else if (input == 'b') {
        $('#B').css('background-color', '#dbac4b');
        $('#B').css('color', 'white');
        temp = $('#B').html();
        $('#A').css('background-color', '#2359b6');
        $('#A').css('color', 'rgb(255, 232, 98)');
        $('#C').css('background-color', '#2359b6');
        $('#C').css('color', 'rgb(255, 232, 98)');
        $('#D').css('background-color', '#2359b6');
        $('#C').css('color', 'rgb(255, 232, 98)');
    }
    else if (input == 'c') {
        $('#C').css('background-color', '#dbac4b');
        $('#C').css('color', 'white');
        temp = $('#C').html();
        $('#B').css('background-color', '#2359b6');
        $('#B').css('color', 'rgb(255, 232, 98)');
        $('#A').css('background-color', '#2359b6');
        $('#A').css('color', 'rgb(255, 232, 98)');
        $('#D').css('background-color', '#2359b6');
        $('#C').css('color', 'rgb(255, 232, 98)');
    }
    else if (input == 'd') {
        $('#D').css('background-color', '#dbac4b');
        $('#D').css('color', 'white');
        temp = $('#D').html();
        $('#B').css('background-color', '#2359b6');
        $('#B').css('color', 'rgb(255, 232, 98)');
        $('#C').css('background-color', '#2359b6');
        $('#C').css('color', 'rgb(255, 232, 98)');
        $('#A').css('background-color', '#2359b6');
        $('#A').css('color', 'rgb(255, 232, 98)');
    }
}

// chức năng nút xác nhận, kiểm tra câu trả lời và show đáp án đúng
function confirm() {
    if (data[dem - 1].answerA == data[dem - 1].answer) {
        $('#A').css('animation', 'nhap-nhay 0.3s linear infinite');
    }
    else if (data[dem - 1].answerB == data[dem - 1].answer) {
        $('#B').css('animation', 'nhap-nhay 0.3s linear infinite');
    }
    else if (data[dem - 1].answerC == data[dem - 1].answer) {
        $('#C').css('animation', 'nhap-nhay 0.3s linear infinite');
    }
    else if (data[dem - 1].answerD == data[dem - 1].answer) {
        $('#D').css('animation', 'nhap-nhay 0.3s linear infinite');
    }

    // check câu trả lời
    if (temp == data[dem - 1].answer) {
        $('.button')[2].disabled = false;
    }
    else {
        setTimeout(function () {
            $('body').html(`
            <div id="end-game">
                <h1>Game Over</h1>
                <p>Bạn đúng được ${dem - 1} câu</p>
                <button class="play-again" onclick="exit()">Chơi lại</button>
            </div>`);
        }, 1800);
    }
}



