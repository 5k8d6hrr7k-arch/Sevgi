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

let messages = [

"1-kun ❤️ Seni uchratganim hayotimdagi eng chiroyli voqealardan biri.",
"2-kun 🥰 Sen bilan gaplashish men uchun eng yoqimli vaqt.",
"3-kun ❤️ Tabassuming har kunimni yorqin qiladi.",
"4-kun 😘 Sen mening qalbimga yaqin insonsan.",
"5-kun 🌹 Sening baxting men uchun juda muhim.",
"6-kun ❤️ Seni har kuni ko‘proq qadrlayman.",
"7-kun 🥰 Sen bilan oddiy kunlar ham chiroyli.",
"8-kun 💕 Har bir xotiramda sen borsan.",
"9-kun 😍 Ko‘zlaringdagi mehr menga yoqadi.",
"10-kun ❤️ Doimo yuzingda tabassum bo‘lsin.",

"11-kun 🌹 Sen mening eng shirin orzularimsan.",
"12-kun 🥰 Sening ovozingni eshitish menga quvonch beradi.",
"13-kun ❤️ Yonimda bo‘lganing uchun rahmat.",
"14-kun 😘 Seni asrashni va qadrlashni xohlayman.",
"15-kun 💕 Bizning sevgimiz yanada mustahkam bo‘lsin.",

"16-kun ❤️ Sen mening baxtimga sabab bo‘lasan.",
"17-kun 🥰 Har kuni seni o‘ylayman.",
"18-kun 🌙 Sen bilan kelajakni chiroyli tasavvur qilaman.",
"19-kun ❤️ Sen men uchun alohida insonsan.",
"20-kun 😍 Kulishingni ko‘rish menga yoqadi.",

"21-kun 💕 Sening mehring qalbimga yaqin.",
"22-kun ❤️ Har doim baxtli bo‘lishingni istayman.",
"23-kun 🥰 Sen mening eng yaxshi tanlovimsan.",
"24-kun 🌹 Birga ko‘p chiroyli xotiralar qilamiz.",
"25-kun ❤️ Seni hurmat qilaman.",

"26-kun 😘 Sen bilan har bir lahza qadrli.",
"27-kun 💕 Mening duolarimda sen borsan.",
"28-kun ❤️ Sening kulging menga kuch beradi.",
"29-kun 🥰 Sen mening quvonchim.",
"30-kun 🌹 Seni doimo sevib qolaman.",

"31-kun ❤️ Bizning hikoyamiz eng chiroyli hikoya.",
"32-kun 😍 Sen bor joyda baxt bor.",
"33-kun 🥰 Sen bilan hammasi boshqacha.",
"34-kun 💕 Seni har doim qo‘llab-quvvatlayman.",
"35-kun ❤️ Sen mening yuragimdasan.",

"36-kun 🌙 Har kecha yaxshi tilaklar tilayman.",
"37-kun 😘 Sening tabassumingni ko‘rishni xohlayman.",
"38-kun ❤️ Sen bilan faxrlanaman.",
"39-kun 🥰 Sen mening ilhomimsan.",
"40-kun 💕 Sevgimiz doim davom etsin.",

"41-kun ❤️ Sen bilan baxtli kunlar kutmoqda.",
"42-kun 🌹 Har kuning chiroyli o‘tsin.",
"43-kun 😍 Sen juda qadrli insonsan.",
"44-kun 🥰 Seni tushunishga harakat qilaman.",
"45-kun ❤️ Doimo yoningda bo‘lishni xohlayman.",

"46-kun 💕 Sen mening eng yaxshi xotiram.",
"47-kun 😘 Seni ko‘rish kunimni chiroyli qiladi.",
"48-kun ❤️ Qalbimda sen uchun joy bor.",
"49-kun 🥰 Bizning sevgimiz kuchli bo‘lsin.",
"50-kun 🌹 Seni sevaman ❤️"
"51-kun ❤️ Sen bilan har bir kunim yanada chiroyli.",
"52-kun 🥰 Seni o‘ylash yuzimga tabassum olib keladi.",
"53-kun 💕 Sen mening eng qadrli insonimsan.",
"54-kun 🌹 Har doim ko‘ngling quvonchga to‘lsin.",
"55-kun ❤️ Bizning sevgimiz yanada mustahkam bo‘lsin.",

"56-kun 😘 Sen bilan suhbatlashish menga yoqadi.",
"57-kun 🥰 Sening mehring men uchun juda qadrli.",
"58-kun ❤️ Hayotimda borliging uchun rahmat.",
"59-kun 💕 Sen mening eng chiroyli xotiram.",
"60-kun 🌙 Seni doimo yaxshi niyatlar bilan eslayman.",

"61-kun ❤️ Sen mening qalbimdagi eng go‘zal insonsan.",
"62-kun 😍 Tabassuming men uchun baxt.",
"63-kun 🥰 Har bir kunimiz unutilmas bo‘lsin.",
"64-kun 🌹 Sen bilan kelajakni kutaman.",
"65-kun ❤️ Sening baxting meni ham baxtli qiladi.",

"66-kun 💕 Men seni har doim qadrlayman.",
"67-kun 😘 Sen mening sevimli insonimsan.",
"68-kun ❤️ Yonimda bo‘lishing katta baxt.",
"69-kun 🥰 Birga ko‘p kulgili xotiralar qilamiz.",
"70-kun 🌹 Seni sevish men uchun baxt.",

"71-kun ❤️ Har kuni qalbimda sen borsan.",
"72-kun 😍 Sen mening quvonchim va tabassumimsan.",
"73-kun 🥰 Sen bilan vaqt tez o‘tadi.",
"74-kun 💕 Sening mehringni qadrlayman.",
"75-kun ❤️ Doimo ko‘zingda baxt porlasin.",

"76-kun 🌙 Har bir orzuing amalga oshsin.",
"77-kun 😘 Sen mening eng shirin xayolim.",
"78-kun ❤️ Seni himoya qilishni xohlayman.",
"79-kun 🥰 Bizning sevgimiz go‘zal bo‘lsin.",
"80-kun 💕 Sen hayotimga chiroy olib kirding.",

"81-kun ❤️ Sening kulging menga kuch beradi.",
"82-kun 🌹 Har doim o‘zingdek chiroyli bo‘l.",
"83-kun 😍 Sen men uchun juda muhim insonsan.",
"84-kun 🥰 Sen bilan baxtliman.",
"85-kun ❤️ Seni hurmat qilaman va sevaman.",

"86-kun 💕 Har bir xotiramiz men uchun qadrli.",
"87-kun 😘 Seni ko‘rish kunimni bezaydi.",
"88-kun ❤️ Sen mening yuragimdagi sevgisan.",
"89-kun 🥰 Senga faqat yaxshilik tilayman.",
"90-kun 🌹 Birga baxtli kunlar ko‘p bo‘lsin.",

"91-kun ❤️ Sen mening eng katta quvonchim.",
"92-kun 😍 Sening tabassumingni asrayman.",
"93-kun 🥰 Har kuni seni ko‘proq sevaman.",
"94-kun 💕 Sen bilan hamma narsa chiroyli.",
"95-kun ❤️ Men doimo seni qo‘llab-quvvatlayman.",

"96-kun 🌹 Qalbimda sen uchun alohida joy bor.",
"97-kun 😘 Sen mening baxtli sababimsan.",
"98-kun ❤️ Sening mehring menga kuch beradi.",
"99-kun 🥰 Bizning hikoyamiz davom etsin.",
"100-kun ❤️ Seni juda yaxshi ko‘raman Sug‘diyona 🥰"
"101-kun ❤️ Sen bilan o‘tgan har bir lahza men uchun qadrli.",
"102-kun 🥰 Seni o‘ylasam qalbim quvonchga to‘ladi.",
"103-kun 💕 Sen mening hayotimdagi chiroyli sovg‘amsan.",
"104-kun 🌹 Har doim yuzingda tabassum ko‘rishni xohlayman.",
"105-kun ❤️ Sen bilan kelajagimiz chiroyli bo‘lsin.",

"106-kun 😘 Sen mening eng shirin orzularimdan birisan.",
"107-kun 🥰 Sening mehring qalbimni iliq qiladi.",
"108-kun ❤️ Borliging uchun har doim minnatdorman.",
"109-kun 💕 Sen bilan oddiy kunlar ham unutilmas.",
"110-kun 🌙 Seni doimo yaxshi fikrlar bilan eslayman.",

"111-kun ❤️ Sen mening ishonchim va quvonchimsan.",
"112-kun 😍 Sening kulging menga juda yoqadi.",
"113-kun 🥰 Har bir xotiramizni qadrlayman.",
"114-kun 🌹 Sen bilan baxtli kunlarni kutaman.",
"115-kun ❤️ Sening baxting mening baxtim.",

"116-kun 💕 Sen qalbimga yaqin insonsan.",
"117-kun 😘 Seni ko‘rganimda kayfiyatim ko‘tariladi.",
"118-kun ❤️ Sen mening eng go‘zal hikoyamsan.",
"119-kun 🥰 Sening tabassumingni doimo ko‘rishni xohlayman.",
"120-kun 🌹 Sevgimiz doimo kuchli bo‘lsin.",

"121-kun ❤️ Sen bilan har bir kun yangi quvonch.",
"122-kun 😍 Sen mening eng qadrli insonimsan.",
"123-kun 🥰 Seni tushunish va asrashni xohlayman.",
"124-kun 💕 Bizning xotiralarimiz ko‘paysin.",
"125-kun ❤️ Sen bilan faxrlanaman.",

"126-kun 🌹 Har doim baxtli bo‘lib yur.",
"127-kun 😘 Sening ovozing menga yoqimli.",
"128-kun ❤️ Sen mening yuragimdagi sevgisan.",
"129-kun 🥰 Har bir kunimiz mehrga to‘lsin.",
"130-kun 💕 Sen mening ilhomimsan.",

"131-kun ❤️ Men seni doimo qadrlayman.",
"132-kun 😍 Sening ko‘zlaringdagi mehr chiroyli.",
"133-kun 🥰 Sen bilan hamma narsa boshqacha.",
"134-kun 🌹 Birga orzularimizga yetaylik.",
"135-kun ❤️ Seni sevish men uchun baxt.",

"136-kun 💕 Sen mening quvonchli sababimsan.",
"137-kun 😘 Har doim yoningda bo‘lishni xohlayman.",
"138-kun ❤️ Sening baxtingni o‘ylayman.",
"139-kun 🥰 Sen bilan hayot yanada chiroyli.",
"140-kun 🌹 Sevgimiz hech qachon so‘nmasin.",

"141-kun ❤️ Sen mening eng shirin xotiram.",
"142-kun 😍 Har bir tabassumingni qadrlayman.",
"143-kun 🥰 Sen bilan kelajakni tasavvur qilaman.",
"144-kun 💕 Har kuni senga yaxshi tilak tilayman.",
"145-kun ❤️ Sen qalbimda alohida o‘rindasan.",

"146-kun 🌹 Senga doimo mehr va baxt tilayman.",
"147-kun 😘 Sen mening sevimli insonimsan.",
"148-kun ❤️ Bizning sevgimiz yanada chiroyli bo‘lsin.",
"149-kun 🥰 Sen bilan ko‘p baxtli kunlar kutmoqda.",
"150-kun ❤️ Seni yaxshi ko‘raman Sug‘diyona 🥰"
];

];



function newMessage(){


let random=
Math.floor(Math.random()*messages.length);



document.getElementById("message").innerHTML=
messages[random];


}
