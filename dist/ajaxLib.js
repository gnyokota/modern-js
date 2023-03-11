"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easyHttp = void 0;
function easyHttp() {
    this.http = new XMLHttpRequest();
}
exports.easyHttp = easyHttp;
let self = this;
easyHttp.prototype.get = function (url, callback) {
    this.http.open("GET", url, true);
    this.hhtp.onload = function () {
        if (self.http.status === 200) {
            callback(JSON.parse(self.http.resposeText), null);
        }
        else {
            callback(null, `Error: ${self.http.status}`);
        }
    };
    this.http.send();
};
easyHttp.prototype.post = function (url, data, callback) {
    this.http.open("POST", url, true);
    this.http.requestHeader("Content-type", "application.json");
    this.http.send(JSON.stringify(data));
};
