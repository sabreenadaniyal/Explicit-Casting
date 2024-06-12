"use strict";
//====================EXPLICIT CASTING(Zabardasti data type assign krte hain)==========================
let val = "Sana";
val;
console.log(typeof val);
//-----------OR-------------
let myName = "Badshah";
console.log(myName.toUpperCase());
//---------OR---------------
let Name1 = "saadat ali";
Name1;
console.log(typeof Name1);
console.log("TitleCase:", Name1.split(" ").map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)
    .toLowerCase()).join(""));
