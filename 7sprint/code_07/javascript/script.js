"use strict";
// enum
var Wind;
(function (Wind) {
    Wind[Wind["North"] = 12] = "North";
    Wind[Wind["East"] = 3] = "East";
    Wind[Wind["South"] = 6] = "South";
    Wind[Wind["West"] = 9] = "West";
})(Wind || (Wind = {}));
;
console.log(Wind);
console.log(Wind.North);
console.log(Wind[0]);
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["ok"] = 200] = "ok";
    HttpCode[HttpCode["forbidden"] = 403] = "forbidden";
    HttpCode[HttpCode["not found"] = 404] = "not found";
    HttpCode[HttpCode["internal server error"] = 500] = "internal server error";
})(HttpCode || (HttpCode = {}));
;
console.log(HttpCode);
console.log(HttpCode['500']);
console.log(HttpCode["not found"]);
var Select;
(function (Select) {
    Select["two"] = "\u0434\u0432\u0456\u0439\u043A\u0430";
    Select["three"] = "\u0442\u0440\u0456\u0439\u043A\u0430";
})(Select || (Select = {}));
;
console.log(Select);
console.log(Select.three);
console.log(Select['трійка']);
var Sel;
(function (Sel) {
    Sel["a"] = "b";
    Sel["c"] = "d";
})(Sel || (Sel = {}));
;
console.log(Sel);
console.log(Sel.c);
console.log(Sel['d']);
var UserState;
(function (UserState) {
    UserState[UserState["active"] = 10] = "active";
    UserState[UserState["disabled"] = 1] = "disabled";
    UserState[UserState["removed"] = 0] = "removed";
})(UserState || (UserState = {}));
;
console.log(UserState.active);
console.log(UserState[0]);
var WpRoles;
(function (WpRoles) {
    WpRoles[WpRoles["sadmin"] = 100] = "sadmin";
    WpRoles[WpRoles["administrator"] = 200] = "administrator";
    WpRoles[WpRoles["editor"] = 300] = "editor";
    WpRoles[WpRoles["author"] = 400] = "author";
    WpRoles[WpRoles["contributor"] = 500] = "contributor";
    WpRoles[WpRoles["subscriber"] = 600] = "subscriber";
})(WpRoles || (WpRoles = {}));
console.log(WpRoles);
var Log;
(function (Log) {
    Log["ws"] = "watch sprint";
    Log["lt"] = "load template";
    Log["lc"] = "load code";
    Log["sv"] = "start video";
})(Log || (Log = {}));
function writeLog(action) {
    console.log("user ### in sprint ### " + action);
}
writeLog(Log.ws);
writeLog(Log.sv);
writeLog(Log.lc);
//# sourceMappingURL=script.js.map