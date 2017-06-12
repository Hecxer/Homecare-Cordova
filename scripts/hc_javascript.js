/********************************/
//Index
/********************************/

(function () { //設定splash screen
    setTimeout(hideSplash, 1500);
});

function hideSplash() {
    $.mobile.changePage("#home", "fade");
}

/********************************/
//自我檢測
/********************************/

//檢查是否同意

function isAgree() {
    if (!($('#agreement').is(':checked')))
        alert("您尚未勾選同意聲明!");
    else
        location.replace("#testSelect");
}

//計算ADL結果

function calADL() {
    var sum = 0;

    for (i = 1; i <= 10; i++) {
        for (j = 0; j < document.getElementsByName("ADL" + i).length; j++) {
            if (document.getElementsByName("ADL" + i)[j].checked) {
                var temp = document.getElementsByName("ADL" + i)[j].value;
                sum += parseInt(temp);
            }
        }
    }
    if (sum > 90)
        alert(sum + "分，您屬於功能獨立");
    else if (sum > 60 && sum < 90)
        alert(sum + "分，您屬於中度依賴");
    else if (sum > 20 && sum < 60)
        alert(sum + "分，您屬於重度依賴");
    else
        alert(sum + "分，您屬於完全依賴");
}

//計算GDS結果

function calGDS() {
    var sum = 0;

    for (i = 1; i <= 15; i++) {
        for (j = 0; j < document.getElementsByName("GDS" + i).length; j++) {
            if (document.getElementsByName("GDS" + i)[j].checked) {
                var temp = document.getElementsByName("GDS" + i)[j].value;
                sum += parseInt(temp);
            }
        }
    }
    if (sum >= 0 && sum < 6)
        alert(sum + "分，健康");
    else if (sum > 5 && sum < 10)
        alert(sum + "分，有輕微憂鬱傾向，須進一步評估。");
    else
        alert(sum + "分，需積極關懷及轉介專業單位");
}

//計算IADL結果

function calIADL() {
    var disable = 0;

    for (i = 1; i <= 8; i++) {
        for (j = 0; j < document.getElementsByName("IADL" + i).length; j++) {
            if (document.getElementsByName("IADL" + i)[j].checked) {
                var temp = document.getElementsByName("IADL" + i)[j].value;
                disable += parseInt(temp);
            }
        }
    }
    if (disable >= 3)
        alert(disable + "分，輕度失能");
    else
        alert(disable + "分，正常");
}

//計算AD8結果

function calAD8() {
    var sum = 0;

    for (i = 1; i <= 8; i++) {
        for (j = 0; j < document.getElementsByName("AD8" + i).length; j++) {
            if (document.getElementsByName("AD8" + i)[j].checked) {
                var temp = document.getElementsByName("AD8" + i)[j].value;
                sum += parseInt(temp);

            }
        }
    }
    if (sum >= 2)
        alert(sum + "分，建議您由專業醫師進行進一步的檢查和診斷");
    else
        alert(sum + "分，結果正常，請您身體力行「預防失智症」之健康生活");
}

/********************************/
//健康紀錄、看診紀錄
/********************************/

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



/*************************************/


//Global function 通用函數


//重設表單

function resetForm() {
    //$('#hc').trigger("reset");
    //document.getElementsByName("hcForm").reset();
    document.getElementById("hcForm").reset();

}

/************************************/

//登入

$(function () {
    //登入
    var loginUrl = "http://localhost:3807/WebService1.asmx/hcLogin";
    $('#loginBtn').click(function () {
        //抓textBox值
        var loginID = $('#un').val(); localStorage.loginID = $('#un').val();
        var loginPwd = $('#pw').val(); localStorage.loginPwd = $('#pw').val();
        $.ajax({
            url: loginUrl,
            type: 'POST',
            dataType: 'xml',
            //傳參數給WebService : {account(你在WS宣告的變數): loginID(你要傳的參數)}
            data: { account: loginID, password: loginPwd },
            //成功時該做的事           
            success: function (returnXml) {
                //WS回傳的東西是XML，要轉型態
                var a = $('string', returnXml).text();
                alert(a + "\n" + loginID + "\n" + loginPwd);
                //與使用者輸入的帳號做比對，正確才跳轉頁面
                if (loginID == a) {
                    $.mobile.changePage("home.html", "fade");
                }
                else {
                    $('#un').val(""); $('#pw').val("");
                }
            },
            //失敗了該怎麼辦
            error: function (returnXml) {
                alert("failure");
            }
        })
    });

    //註冊
    var registerUrl = "http://localhost:3807/WebService1.asmx/hcRegister";
    $('#hcRegister').click(function () {
        var registerID = $('#account').val(), registerPwd = $('#password').val(), registerName = $('#name').val(),
            registerGender = $('#gender option:checked').val(), registerBirthday = $('#date').val(), registerBloodtype = $('#bldtype option:checked').val(),
            registerEmail = $('#email').val();
        $.ajax({
            url: registerUrl,
            type: 'POST',
            dataType: 'xml',
            data: { account: registerID, password: registerPwd, name: registerName, gender: registerGender, birthday: registerBirthday, blood_type: registerBloodtype, email: registerEmail },
            success: function (returnXml) {
                var registerID2 = $('string', returnXml).text();
                alert(registerID2 + "\n" + name + " 您好!");
                //清空所有TEXTBOX
                $('#account').val(""); $('#password').val("");
                $('#date').val(""); $('#name').val("");
                $('#email').val("");
                //if (registerID == registerID2) {
                //    $.mobile.changePage("#popupLogin", "fade");
                //}
            },
            error: function (returnXml) {
                alert("新增失敗，請檢查網路連線。");
            }
        })
    });

    //顯示個人資料
    var personalDataUrl = "http://localhost:3807/WebService1.asmx/hcPersonalData";
    //頁面建立時觸發
    var account = localStorage.loginID;
    $('#pDataHomepage').on("pagecreate", function (e) {
        //alert(e.target.id);
        $.ajax({
            type: 'POST',
            url: personalDataUrl,
            data: { account: account },
            dataType: 'xml',
            //oXml是自己宣告的變數
            success: function (oXml) {
                //因為DataSet通常是裝資料表，所以我們用下面這行來抓回傳的XML的值
                //$(oXml).find("user").each(function () {};
                //user是資料表名稱
                $(oXml).find("user").each(function () {
                    //alert("成功抓取: " + $(this).children("name").text());
                    //$(this).children("name").text()
                    //這行程式是抓oXml裡資料表的值，用欄位名稱來抓
                    $('#pDataName').text($(this).children("name").text());
                    $('#pDataEmail').text($(this).children("email").text());
                    $('#pDataDate').text($(this).children("regis_date").text().substr(0, 10));
                    $('#pDataGender').text($(this).children("gender").text());
                    $('#pDataBirthday').text($(this).children("birthday").text().substr(0, 10));
                    $('#pDataAge').text($(this).children("age").text());
                    $('#pDataBloodtype').text($(this).children("blood_type").text());

                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Failed" + xhr.status);
                alert(thrownError);
            }
        });
    });
});