$(function () { //設定splash screen
    setTimeout(hideSplash, 1500);
});

function hideSplash() {
    $.mobile.changePage("#home", "fade");
}

var index = 0;           // 目前照顧者的索引
var curImgSrc, curBook; // 目前取得的照顧者圖檔名、照顧者名稱

var aryBookSrc = new Array("a.jpg",
                            "b.jpg",
                            "c.jpg",
                            "d.jpg",
                            "e.jpg"); // 照顧者圖片

var aryBookName = new Array("江秋霖",
        "廖富城",
        "邱科偉",
        "John",
        "馬靖威");  // 照顧者名

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    $("#showprev").on("click", showprev); // 上一筆
    $("#shownext").on("click", shownext); // 下一筆
};

function showprev() { // 上一筆
    index--;
    if (index < 0) { index = 4; } // 可循環
    curImgSrc = "images/" + aryBookSrc[index]; // 目前取得的照顧者名稱
    curBook = aryBookName[index];              // 目前取得的照顧者名稱
    $("#bookpic").attr("src", curImgSrc);  // 動態顯示照顧者圖片
    $("#bookname").text(curBook);		  // 動態顯示照顧者名稱
}

function shownext() {  // 下一筆
    index++;
    if (index > 4) { index = 0; } // 可循環選頁
    curImgSrc = "images/" + aryBookSrc[index];
    curBook = aryBookName[index];
    $("#bookpic").attr("src", curImgSrc);
    $("#bookname").text(curBook);
}

$(document).on("swipeleft", function (e) {
    if (e.target.id == "bookpic") {
        showprev();
    }
});

$(document).on("swiperight", function (e) {
    if (e.target.id == "bookpic") {
        shownext();
    }
});
//========另一頁程式碼=========

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    $("#showprev2").on("click", showprev2); // 上一筆
    $("#shownext2").on("click", shownext2); // 下一筆
};
function showprev2() { // 上一筆
    index--;
    if (index < 0) { index = 4; } // 可循環選頁
    curImgSrc = "images/" + aryBookSrc[index]; // 目前取得的被照顧者名稱
    curBook = aryBookName[index];              // 目前取得的被照顧者名稱
    $("#bookpic2").attr("src", curImgSrc);  // 動態顯示被照顧者圖片
    $("#bookname2").text(curBook);		  // 動態顯示被照顧者名稱
}

function shownext2() {  // 下一筆
    index++;
    if (index > 4) { index = 0; } // 可循環選頁
    curImgSrc = "images/" + aryBookSrc[index];
    curBook = aryBookName[index];
    $("#bookpic2").attr("src", curImgSrc);
    $("#bookname2").text(curBook);
}

$(document).on("swipeleft", function (e) {
    if (e.target.id == "bookpic2") {
        showprev();
    }
});

$(document).on("swiperight", function (e) {
    if (e.target.id == "bookpic2") {
        shownext();
    }
});