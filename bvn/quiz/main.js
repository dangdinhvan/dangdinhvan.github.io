let data = [
    {
        question: "Miền Bắc của Việt Nam có tổng cộng bao nhiêu tỉnh thành?",
        answerA: "A: 22 tỉnh thành",
        answerB: "B: 23 tỉnh thành",
        answerC: "C: 24 tỉnh thành",
        answerD: "D: 25 tỉnh thành",
        answer: 4,
    },
    {
        question: "Ấn Độ là quốc gia có dân số đứng thứ mấy thế giới?",
        answerA: "A: Thứ 10",
        answerB: "B: Thứ 2",
        answerC: "C: Thứ 9",
        answerD: "D: Thứ 5",
        answer: 2,
    },
    {
        question: "Tổng thống đời thứ 16 của Mỹ là ai?",
        answerA: "A: Abraham Lincoln",
        answerB: "B: John Adams",
        answerC: "C: John F. Kennedy",
        answerD: "D: Richard Nixon",
        answer: 1,
    }
];

let content = [];
// tạo câu hỏi và câu trả lời
for (let i = 0; i < data.length; i++) {
    content.push(`<div id="container">
    <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/0/09/Vietnam_millionaire_2021.webp/1200px-Vietnam_millionaire_2021.webp.png"
        alt="anh logo">
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

let dem = 1;
$('body').html(content[0]);
// chức năng của nút next
function next() {
    let currentQ = content[dem];
    $('body').html(currentQ);
    dem++;
    if (dem === content.length) {
        $($('.button')[2]).html('Kết thúc');
    }
    else if (dem > content.length) {
        $('body').html(`<div id="end-game">
       <h1>Game Over</h1>
   </div>`);
    }
}

function exit() {
    location.reload();
}

function choice(input) {
    }
    if (input === 'a') {
        return 1;
    } 
    else if (input === 'b') {
        return 2;
    }
    else if (input === 'c') {
        return 3;
    }
    else if (input === 'd') {
        return 4;
    }
}

function confirm() {
}

