"use strict";
//Enum
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["SuperAdmin"] = "SuperAdmin";
    Role["Editor"] = "Editor";
})(Role || (Role = {}));
const role = Role.SuperAdmin;
console.log(role);
