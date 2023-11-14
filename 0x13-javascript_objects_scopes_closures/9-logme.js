#!/usr/bin/node
let argumentNo = 0;

exports.logMe = function (item) {
  console.log(argumentNo + ': ' + item);
  argumentNo++;
};
