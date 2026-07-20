// ⏰ Toshkent vaqti

function updateClock(){

let now = new Date();

let time = now.toLocaleTimeString("uz-UZ",{
timeZone:"Asia/Tashkent",
hour:"2-digit",
minute:"2-digit",
second:"2-digit"
});

document.getElementById("clock").innerHTML = time;

}

setInterval(updateClock,1000);
updateClock();




// 🎂 Yosh hisoblash

function calculateAge(birth){

let today = new Date();
let birthday = new Date(birth);

let age = today.getFullYear() - birthday.getFullYear();

let month = today.getMonth() - birthday.getMonth();

if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())){
age--;
}

return age;

}


function showAge(){

let azizAge = calculateAge("2006-08-05");

let sugAge = calculateAge("2008-04-30");


document.getElementById("ages").innerHTML =

"🌚 Azizbek: "+azizAge+" yosh ❤️ <br>"+
"🥰 Sug’diyona: "+sugAge+" yosh ❤️";

}

showAge();







// ❤️ Stikerlar

let emojis=[

"❤️","😘","🥰",
"🌚","😍","😁",
"💕","💋","🌹","✨"

];


setInterval(()=>{


let e=document.createElement("div");


e.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];


e.style.position="fixed";
e.style.left=Math.random()*100+"%";
e.style.bottom="-30px";
e.style.fontSize=(20+Math.random()*30)+"px";
e.style.zIndex="5";


e.style.animation="fly 5s linear";


document.body.appendChild(e);



setTimeout(()=>{

e.remove();

},5000);



},400);







// 🎵 Musiqa

function playMusic(){

let music=document.getElementById("music");

music.play();

}








// 💌 100 kunlik xabarlar


let messages=[


"1-kun ❤️ Seni uchratganim eng chiroyli voqea.",
"2-kun 🥰 Sen mening baxtimsan.",
"3-kun ❤️ Tabassuming menga yoqadi.",
"4-kun 😘 Sen qalbimga yaqinsan.",
"5-kun 🌹 Seni doimo qadrlayman.",

"6-kun ❤️ Yonimda bo‘lganing uchun rahmat.",
"7-kun 🥰 Sen bilan kunlarim chiroyli.",
"8-kun 💕 Sen mening quvonchimsan.",
"9-kun 😍 Ko‘zlaring juda chiroyli.",
"10-kun ❤️ Seni yaxshi ko‘raman.",

"11-kun 🌹 Har doim baxtli bo‘l.",
"12-kun 🥰 Sen bilan kelajakni xohlayman.",
"13-kun ❤️ Sen men uchun alohidasan.",
"14-kun 😘 Sening kulging yoqadi.",
"15-kun 💕 Bizning sevgimiz kuchli bo‘lsin.",

"16-kun ❤️ Seni hurmat qilaman.",
"17-kun 🥰 Har kuni seni o‘ylayman.",
"18-kun 🌹 Sen mening orzumsan.",
"19-kun 😍 Sen bilan hammasi chiroyli.",
"20-kun ❤️ Doimo yonimda bo‘l.",

"21-kun 💕 Seni asrayman.",
"22-kun 🥰 Sen mening ilhomimsan.",
"23-kun ❤️ Baxting men uchun muhim.",
"24-kun 😘 Sen bilan kulishni yaxshi ko‘raman.",
"25-kun 🌹 Sevgimiz davom etsin.",

"26-kun ❤️ Sen mening tanlovimsan.",
"27-kun 🥰 Har kunimiz xotira bo‘lsin.",
"28-kun 💕 Sen juda qadrli insonsan.",
"29-kun 😍 Seni ko‘rish baxt.",
"30-kun ❤️ Seni sevaman Sug’diyona.",

"31-kun 🌹 Birga chiroyli kunlar kutmoqda.",
"32-kun 🥰 Sen mening quvonchim.",
"33-kun ❤️ Sen bor joyda baxt bor.",
"34-kun 😘 Seni sog‘inaman.",
"35-kun 💕 Qalbimda sen borsan.",

"36-kun ❤️ Har doim kulib yur.",
"37-kun 🥰 Sen mening sevimli insonimsan.",
"38-kun 🌹 Seni qadrlayman.",
"39-kun 😍 Sen bilan baxtliman.",
"40-kun ❤️ Sevgimiz abadiy bo‘lsin.",

"41-kun 💕 Sen mening baxtim.",
"42-kun 🥰 Sen bilan faxrlanaman.",
"43-kun ❤️ Seni tushunishga harakat qilaman.",
"44-kun 😘 Sen juda go‘zalsan.",
"45-kun 🌹 Doimo baxtli bo‘l.",

"46-kun ❤️ Sen mening yuragimdasan.",
"47-kun 🥰 Har kun seni ko‘proq sevaman.",
"48-kun 💕 Bizning hikoyamiz chiroyli.",
"49-kun 😍 Sen mening sevgimsan.",
"50-kun ❤️ Seni juda yaxshi ko‘raman.",


"51-kun 🥰 Sen bilan har lahza qadrli.",
"52-kun ❤️ Sen mening quvonchim.",
"53-kun 🌹 Baxting doimo kulib tursin.",
"54-kun 😘 Sen menga azizsan.",
"55-kun 💕 Sevgimiz kuchli bo‘lsin.",

"56-kun ❤️ Sen mening orzum.",
"57-kun 🥰 Sen bilan hayot chiroyli.",
"58-kun 😍 Sen qalbimdasen.",
"59-kun 🌹 Seni asrayman.",
"60-kun ❤️ Sen mening baxtimsan.",

"61-kun 💕 Sen bilan kelajak yaxshi.",
"62-kun 🥰 Seni har kuni qadrlayman.",
"63-kun ❤️ Sen menga kuch berasan.",
"64-kun 😘 Tabassuming yoqimli.",
"65-kun 🌹 Seni sevaman.",

"66-kun ❤️ Har doim yoningdaman.",
"67-kun 🥰 Sen mening eng yaxshim.",
"68-kun 💕 Birga baxtli bo‘lamiz.",
"69-kun 😍 Sen juda qadrli.",
"70-kun ❤️ Qalbim sen bilan.",

"71-kun 🌹 Seni hech qachon unutmayman.",
"72-kun 🥰 Sen mening baxtli kunimsan.",
"73-kun ❤️ Sen bilan faxrlanaman.",
"74-kun 😘 Sen menga kerak.",
"75-kun 💕 Sevgimiz davom etsin.",

"76-kun ❤️ Seni doimo sevaman.",
"77-kun 🥰 Sen mening hayotim bezagi.",
"78-kun 🌹 Sen bilan hammasi yaxshi.",
"79-kun 😍 Sen mening baxtim.",
"80-kun ❤️ Seni qadrlayman.",

"81-kun 💕 Sen qalbimdagi inson.",
"82-kun 🥰 Seni ko‘rishni xohlayman.",
"83-kun ❤️ Sen bilan baxtliman.",
"84-kun 😘 Sen mening sevgilim.",
"85-kun 🌹 Har doim kulib yur.",

"86-kun ❤️ Sen men uchun maxsus.",
"87-kun 🥰 Seni sevish baxt.",
"88-kun 💕 Sen mening umidimsan.",
"89-kun 😍 Sen juda go‘zalsan.",
"90-kun ❤️ Birga baxtli bo‘laylik.",

"91-kun 🌹 Sen mening eng yaxshi xotiram.",
"92-kun 🥰 Sen bilan kunlar chiroyli.",
"93-kun ❤️ Seni qo‘llab-quvvatlayman.",
"94-kun 😘 Sen mening sevgimsan.",
"95-kun 💕 Seni doimo sevaman.",

"96-kun ❤️ Sen bilan orzularim bor.",
"97-kun 🥰 Sen mening quvonchim.",
"98-kun 🌹 Baxtimiz ko‘p bo‘lsin.",
"99-kun 😍 Seni yaxshi ko‘raman.",
"100-kun ❤️ Seni sevaman Sug’diyona 🥰"


];



function newMessage(){

let random=Math.floor(Math.random()*messages.length);

document.getElementById("message").innerHTML =
messages[random];

}
