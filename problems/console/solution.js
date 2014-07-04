"use strict"

var fs = require("fs");

var peach = function (obj) {

    console.log(obj);
}

var bowser = function (callback) {

    fs.readFile(process.cwd() + "/problems/console/object.json", callback);
}

bowser(koopa);

var koopa = function (err, file) {

    if (err) {
        //NOOOOOO
    }

    peach(JSON.parse(file));
}

