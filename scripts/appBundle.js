// 如需空白範本的簡介，請參閱下列文件: 
// http://go.microsoft.com/fwlink/?LinkID=397705
// 若要針對在 Ripple 或 Android 裝置/模擬器上載入的頁面，偵錯程式碼: 請啟動您的應用程式，設定中斷點，
// 然後在 JavaScript 主控台中執行 "window.location.reload()"。
var 個人資料;
(function (個人資料) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // 處理 Cordova 暫停與繼續事件
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。
            var parentElement = document.getElementById('deviceready');
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }
        function onPause() {
            // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。
        }
        function onResume() {
            // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
        }
    })(Application = 個人資料.Application || (個人資料.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(個人資料 || (個人資料 = {}));
//# sourceMappingURL=appBundle.js.map