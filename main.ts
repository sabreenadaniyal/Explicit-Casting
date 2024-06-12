//====================EXPLICIT CASTING(Zabardasti data type assign krte hain)==========================
let val: unknown = "Sana"
val as string
console.log(typeof val)
//-----------OR-------------
let myName: unknown = "Badshah"
console.log((myName as string).toUpperCase());
//---------OR---------------
let Name1: string = "saadat ali"
Name1 as string
console.log(typeof Name1);

console.log("TitleCase:",Name1.split(" ").map(ele =>ele.charAt(0).toUpperCase()+ele.slice(1)
.toLowerCase()).join(""));





