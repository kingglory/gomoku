var helloWorld = "Hello World";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Boyuan", 702451091);
function logPoint(p) {
    console.log(p.x + ", " + p.y);
}
var point = { x: 99, y: 22 };
logPoint(point);
