// ⏰ Toshkent vaqti

function clock(){

let time = new Date().toLocaleTimeString("uz-UZ",{
timeZone:"Asia/Tashkent",
hour:"2-digit",
minute:"2-digit",
second:"2-digit"
});

document.getElementById("clock").innerHTML=time;

}

setInterval(clock,1000);
clock();




// 🎂 Yosh hisoblash

function age(){

let now=new Date();


let aziz=new Date("2006-08-05");
let sug=new Date("2008-04-30");


let a=Math.floor(
(now-aziz)/(1000*60*60*24*365.25)
);


let s=Math.floor(
(now-sug)/(1000*60*60*24*365.25)
);


document.getElementById("ages").innerHTML=
"🌚 Azizbek: "+a+" yosh ❤️ <br>"+
"🥰 Sug’diyona: "+s+" yosh ❤️";


}

age();






// ❤️ Stiker yomg‘iri

let stickers=[
"❤️","😘","🥰","🌚",
"😍","😁","💕",
"💋","✨","🌹"
];


setInterval(()=>{


let st=document.createElement("div");


st.innerHTML=
stickers[Math.floor(Math.random()*stickers.length)];


st.style.position="fixed";

st.style.left=Math.random()*100+"%";

st.style.bottom="-30px";

st.style.fontSize=
(20+Math.random()*35)+"px";


st.style.zIndex="5";


st.style.animation="fly 5s linear";


document.body.appendChild(st);



setTimeout(()=>{

st.remove();

},5000);



},300);





// stikerni uchirish

let style=document.createElement("style");


style.innerHTML=`

@keyframes fly{

0%{
transform:translateY(0);
opacity:1;
}

100%{

transform:translateY(-110vh) rotate(360deg);

opacity:0;

}

}

`;


document.head.appendChild(style);







// 🎵 Musiqa

function playMusic(){

let music=document.getElementById("music");

music.play();

}







// 💌 365 ta sevgi xabari

let messages=[

"Seni ko‘rganim eng chiroyli kunim ❤️",

"Sen mening baxtimsan 🥰",

"Har doim yonimda bo‘lgin ❤️",

"Ko‘zlaring menga juda yoqadi 😍",

"Bizning sevgimiz doim davom etsin 💕"

];



function newMessage(){


let random=
Math.floor(Math.random()*messages.length);



document.getElementById("message").innerHTML=
messages[random];


}
