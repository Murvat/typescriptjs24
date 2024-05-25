// enum
enum Wind {
    North = 12,
    East = 3,
    South = 6,
    West = 9
};


console.log(Wind);
console.log(Wind.North);
console.log(Wind[0]);

enum HttpCode {
    ok = 200,
    forbidden = 403,
    "not found" = 404,
    "internal server error" = 500
};

console.log(HttpCode);
console.log(HttpCode['500']);
console.log(HttpCode["not found"]);

enum Select {
    two = "двійка",
    three = "трійка"
};

console.log(Select);
console.log(Select.three);
console.log(Select['трійка']);

enum Sel {
    a = "b",
    c = "d"
};

console.log(Sel);
console.log(Sel.c);
console.log(Sel['d']);

enum UserState {
    active = 10,
    disabled = 1,
    removed = 0
};

console.log(UserState.active);
console.log(UserState[0]);


enum WpRoles {
    "sadmin" = 100,
    "administrator" = 200,
    "editor" = 300,
    "author" = 400,
    "contributor" = 500,
    "subscriber" = 600
}

console.log(WpRoles);

enum Log {
    "ws" = "watch sprint",
    "lt" = "load template",
    "lc" = "load code",
    "sv" = "start video"
}

function writeLog(action: Log) {
    console.log("user ### in sprint ### " + action);
}

writeLog(Log.ws);
writeLog(Log.sv);
writeLog(Log.lc);