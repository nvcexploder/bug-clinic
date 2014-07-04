"use strict"

var fs = require("fs");

var peach = function (obj) {

    console.log(obj);
}

var bowser = function (callback) {

    fs.readFile(process.cwd() + "/object.json", callback);
}

var koopa = function (err, file) {

    if (err) {
        console.log("Handle your errors folks.");
    }

    peach(JSON.parse(file));
}

bowser(koopa);

