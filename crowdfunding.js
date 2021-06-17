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

var navbarElement = document.getElementById("project");
navbarElement.addEventListener("click", function (e) {
    if (e.target.nodeName !== "A") {
        return;
    } else {
        //改變navbar
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
    if (nodePages === "1") {
        articles.forEach(function(item){
            var nodeString = '<img class="img-fluid" src="' + item["img-url"] + '"alt = "' + item.alt +'" >' +
                '<h2 class="p-2 mt-4 fw-bold border-start border-primary border-4 ls-2">' + item.title + '</h2>' +
                '<p class="text-secondary lh-lg">' + item.text +'</p>';
            nodeListString = nodeListString + nodeString;
        });
    } else if (nodePages == "2") {
        var listString = "";
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
        console.log("c");
        articleNode.innerHTML = "";
    } else if (nodePages == "4") {
        console.log("d");
        articleNode.innerHTML = "";
    }
    articleNode.innerHTML = nodeListString;
}

