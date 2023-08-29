const menu = [
    {
        id: 1,
        title: "Zeta Puppis",
        category:"Super",
        price: "1076 ışık yılı",
        img:"img/zeta_Puppis.png",
        desc:`Gökyüzündeki birkaç çıplak gözle O-tipi yıldızdan biridir ve aynı zamanda Dünya'ya en yakın olanlardan biridir. Güneş'ten 10.000 kat daha parlaktır.`,
    },

    {
        id: 2,
        title: "Eta Carinae",
        category:"Super",
        price: "7500 ışık yılı",
        img:"img/EtaCarinae.jpg",
        desc:`Güneş’in yaklaşık 5 milyon katı parlaklığa sahip olmasına karşın, kendi püskürttüğü gaz bulutları tarafından çevrelendiği için, heybetini bizlere pek gösteremiyor ve olduğundan çok daha soluk görünüyor.`,
    },

    {
        id: 3,
        title: "IC 4634",
        category:"Nebula",
        price: "7.500 ışık yılı",
        img:"img/IC_4634.jpg",
        desc:`1893 yılında Williamina Fleming tarafından keşfedilmiştir. İç kabuk yoğun bir H-alfa emisyonuna sahipken, s-şekilli şeritler NII emisyon çizgisine sahiptir.`,
    },

    {
        id: 4,
        title: "Atbaşı Nebulası",
        category:"Nebula",
        price: "1500 ışık yılı",
        img:"img/at.jpg",
        desc:`Oldukça yoğun olmaları sebebiyle içerisinden veya arkasından hiçbir ışık geçirmediği için çevresine göre koyu görünen bulutsulardır.`,
    },

    {
        id: 5,
        title: "47 Ursae Majoris b",
        category:"Otegezegen",
        price: "46 ışık yılı",
        img:"img/47_Ursae_Majoris_b_v4.jpg",
        desc:`Jüpiter-benzeri olan bu gezegen, 17 Ocak 1996 tarihinde keşfedilmiştir. Kütlesi 760 Dünya kütlesidir.`,
    },
    {
        id: 6,
        title: "HD 134987 b",
        category:"Otegezegen",
        price: "82 ışık yılı",
        img:"img/hd_134987_b.png",
        desc:`Gezegenin yüzey sıcaklığı 42 derecedir. Kütlesi 334 Dünya kütlesidir ve gezegen, yaşam kuşağında yer almaktadır.`,
    },
    {
        id: 7,
        title: "HD 210277 b",
        category:"Otegezegen",
        price: "69 ışık yılı",
        img:"img/hd_210277_b.png",
        desc:`9 Eylül 1998 yılında keşfedilmiştir. Kütlesi 391 Dünya kütlesi olan gezegenin bir yılı 436,6 gündür.`,
    },

]

const buttonsection = document.querySelector(".btn-container")
const menusection = document.querySelector(".section-center")

const createbutton = () =>{
    let allbuttons=`
        <button id = "all" class = "btn btn-outline-dark btn-item" type = "button"> All </button>
        <button id = "ote" class = "btn btn-outline-dark btn-item" type = "button"> Ötegezegen </button>
        <button id = "nebula" class = "btn btn-outline-dark btn-item" type = "button"> Nebula </button>
        <button id = "super" class = "btn btn-outline-dark btn-item" type = "button"> Süper Dev </button>
    `
    buttonsection.innerHTML = allbuttons;
}
createbutton();

const createfood = (food) =>{
    let html=`
        <div class="menu-items col-lg-6 col-sm-12">
            <img class = "photo" src="${food.img}" alt="${food.title}">
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${food.title}</h4>
                    <h5 class="price">${food.price}</h5>
                </div>
                <div class="menu-text">${food.desc}</div>
            </div>
        </div>
    `
    return html;
}

const listallfood = ()=>{
    let allfood="";

    menu.map(item => {
        allfood+=createfood(item)
    })
    menusection.innerHTML = allfood;
}

document.addEventListener("DOMContentLoaded",listallfood);

const listKoreanfood = ()=>{
    let koreanfoods="";

    menu.map(item =>{
        if(item.category==="Otegezegen"){
           koreanfoods+=createfood(item)
    }
    })
    menusection.innerHTML=koreanfoods;
}

document.querySelector("#ote").addEventListener("click",listKoreanfood);

const listJapanfood = ()=>{
    let japanfoods="";

    menu.map(item =>{
        if(item.category==="Nebula"){
           japanfoods+=createfood(item)
    }
    })
    menusection.innerHTML=japanfoods;
}

document.querySelector("#nebula").addEventListener("click",listJapanfood);

const ChinaFoods = () =>{
    let chinafoods="";

    menu.map(item=>{
        if(item.category==="Super"){
            chinafoods+=createfood(item)
        }
    })
    menusection.innerHTML=chinafoods;
}
document.querySelector("#super").addEventListener("click",ChinaFoods)

document.querySelector("#all").addEventListener("click",listallfood)