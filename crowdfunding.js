var articles = [
    {
        "img-url": "https://hexschool.github.io/boootstrap5WebLayout/assets/p1.jpg",
        "title": "施了魔法的照片",
        "alt": "拍立得照片",
        "text": "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。",
    },{
        "img-url": "https://hexschool.github.io/boootstrap5WebLayout/assets/p2.jpg",
        "title": "留下當下的美好",
        "alt": "產品照片",
        "text": "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。"
    }
];
var questions = [
    {
        "question": "影片拍完之後可以編輯嗎？",
        "answer": "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",

    }, {

        "question": "有提供保固或維修服務嗎？",
        "answer": "保固期為一年。"

    }, {

        "question": "補充包底片要去哪裡購買呢？",
        "answer": "上市後，將在官網上販售補充包。"

    }, {

        "question": "印出來的拍立得照片需要充電嗎？",
        "answer": "不需要。"

    }, {

        "question": "運送方式及付款方式有哪些呢？",
        "answer": "目前提供宅配，以信用卡或ATM轉帳付款。"

    }, {

        "question": "退換貨方式及規則",
        "answer": "依照消費者保護法19條規定，通訊交易或訪問交易的消費者可以在收到商品或服務後7日內，不需要理由與負擔退貨費用解除契約（退貨）。契約約定的鑑賞期：依照店家與消費者之間的契約，使消費者可以依照約定的條件解除契約（退貨）或是換貨的權利。"

    }
];
var progress = [
    {
        "img-url": "https://hexschool.github.io/boootstrap5WebLayout/assets/news01.jpg",
        "title": "高雄體驗會｜免費參加送帆布袋",
        "date": "2021-6-20",
        "intro": "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
        "link": "#"
    },{
        "img-url": "https://hexschool.github.io/boootstrap5WebLayout/assets/news02.jpg",
        "title": "高雄體驗會｜免費參加送帆布袋",
        "date": "2021-6-20",
        "intro": "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
        "link": "#"
    },{
        "img-url": "https://hexschool.github.io/boootstrap5WebLayout/assets/news03.jpg",
        "title": "高雄體驗會｜免費參加送帆布袋",
        "date": "2021-6-20",
        "intro": "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
        "link": "#"
    }
];
var messages = [
    {
        "user-photo": "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img01.jpg",
        "username": "廖小杰",
        "messages-date": "2020年5月22日 11:32",
        "content": "晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！",
        "if-reply": true,
        "reply": "你要嘛起床的時候開燈，要嘛給我們更多錢開發阿"
    }, {
        "user-photo": "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg",
        "username": "卡阿伯",
        "messages-date": "2020年5月22日 11:32",
        "content": "希望有更多花色可以選擇！我女兒最近喜歡綠色",
        "if-reply": false,
        "reply": ""
    }, {
        "user-photo": "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg",
        "username": "賈師",
        "messages-date": "2020年5月22日 11:32",
        "content": "可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣",
        "if-reply": false,
        "reply": ""
    }, {
        "user-photo": "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg",
        "username": "俊俊",
        "messages-date": "2020年5月22日 11:32",
        "content": "test123 看一下我是不是真的可以留言",
        "if-reply": false,
        "reply": ""
    }
];
var navbarElement = document.getElementById("project");
navbarElement.addEventListener("click", function (e) {
    if (e.target.nodeName !== "A") {
        return;
    } else {
        var selectedNode = navbarElement.querySelector(".border-primary");
        var clickNode = e.target.parentNode;
        selectedNode.classList.remove("border-bottom", "border-primary", "border-3", "fw-bold");
        clickNode.classList.add("border-bottom", "border-primary", "border-3", "fw-bold");
        setTags(e.target.dataset.pages);
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
})();

function setTags(nodePages) {
    var articleNode = document.getElementById("content");
    var nodeListString = "";
    var listString = "";
    if (nodePages === "1") {
        articles.forEach(function(item){
            var nodeString = '<img class="img-fluid" src="' + item["img-url"] + '"alt = "' + item.alt +'" >' +
                '<h2 class="p-2 mt-4 fw-bold border-start border-primary border-4 ls-2">' + item.title + '</h2>' +
                '<p class="text-secondary lh-lg">' + item.text +'</p>';
            nodeListString = nodeListString + nodeString;
        });
    } else if (nodePages == "2") {
        questions.forEach(function(item, index){
            var qIndex = index + 1;
            var nodeString = '<li class="accordion-item border-gray-500 drop-shadow-1"><p class="accordion-header" id="panelsStayOpen-heading' + qIndex +'">' +
                '<button class="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse' + qIndex + '" aria-expanded="false"' +
                ' aria-controls="panelsStayOpen-collapse' + qIndex + '"><span class="badge pt-2 bg-primary text-info font-baloo-tamma2 fs-7">Q' + qIndex + '</span>' +
                '<p class="ps-2 m-0 text-body flex-fill fs-7">' + item.question + '</p></button></p>' +
                '<div id="panelsStayOpen-collapse' + qIndex + '" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading' + qIndex + '">' +
                '<p class="ps-7 m-0 accordion-body fs-7 text-secondary border-top border-gray-500">' + item.answer + '</p></div></li>';
            listString = listString + nodeString;
        });
        nodeListString = '<ul class="list-unstyled d-grid gap-3 accordion" id="accordionPanelsStayOpenExample">' + listString + '</ul>';
    } else if (nodePages == "3") {
        progress.forEach(function(item){
            var nodeString = '<li class="card flex-row border-0"><img class="w-50" src="' + item["img-url"] + '" alt="手持照片">' +
            '<div class="card-body border border-start-0 border-gray-500 rounded-end">' +
            '<h5 class="card-title fw-bold">' + item.title + '</h5>' +
            '<h6 class="card-subtitle text-secondary font-baloo-tamma2">' + item.date + '</h6>' +
            '<p class="card-text pt-3 text-secondary fs-7">' + item.intro + '</p>' +
            '<a href="' + item.link + '" class="card-link text-danger font-baloo-tamma2 fw-bold fs-7">MORE</a>' + '</div></li>';
            listString = listString + nodeString;
        });
        nodeListString = '<ul class="list-unstyled d-grid gap-3">' + listString + '</ul>';
    } else if (nodePages == "4") {
        messages.forEach(function(item){
            var replyNodeString = "";
            if(item["if-reply"]){
                replyNodeString = '<div class="bg-light m-3 p-3"><h6 class="text-danger" >提案者回覆</h6>' +
                        '<p class="text-success ls-1 m-0">' + item.reply +'</p></div>';
            }
            var nodeString = '<li class="card"><div class="d-flex mt-3 ms-3 me-3"><img src="' + item["user-photo"] + '" alt="使用者照片">' +
                '<div class="ms-3"><h3 class="card-title">' + item.username +'</h3><h6 class="card-subtitle text-secondary">' + item["messages-date"] +
                '</h6></div></div><div class="card-body"><p class="text-success ls-1">' + item.content +
                '</p></div>' + replyNodeString +'</li>';
            listString = listString + nodeString;
        });
        nodeListString = '<p class="p-3 border-start border-primary border-3 rounded-start fs-7 ls-1">只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<span><a class="link-danger" href="#">聯絡提案人</a></span>！</p><ul class="list-unstyled d-grid gap-3">' + listString + '</ul>';
    }
    articleNode.innerHTML = nodeListString;
}

