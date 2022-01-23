const navBarObj = [
    {
        icon: "./assets/icons/house.svg",
        text: "Início"
    },
    {
        icon: "./assets/icons/videocam.svg",
        text: "Vídeos"
    },
    {
        icon: "./assets/icons/pin-drop.svg",
        text: "Picos"
    },
    {
        icon: "./assets/icons/supervised-user-circle.svg",
        text: "Integrantes"
    },
    {
        icon: "./assets/icons/accessibility.svg",
        text: "Camisas"
    },
    {
        icon: "./assets/icons/wallpaper.svg",
        text: "Pinturas"
    }
]


const musicsObj = [
    {
        img: "./assets/images/sc-1.png",
        musicName: "HZC - Love Machine",
        avtor: "Júlia Fonseca"
    },
    {
        img: "./assets/images/sc-2.png",
        musicName: "HZC - Vol. 3",
        avtor: "Júlia Fonseca"
    },
    {
        img: "./assets/images/sc-3.png",
        musicName: "HZC - Pescaria na Urca",
        avtor: "Júlia Fonseca"
    },
    {
        img: "./assets/images/sc-4.png",
        musicName: "Vidalocagi - Guerreiros <br> do Asfalto",
        avtor: "Júlia Fonseca"
    },
    {
        img: "./assets/images/sc-5.png",
        musicName: "Vidalocagi - Não importa <br> o nível",
        avtor: "Júlia Fonseca"
    }
]

const cardsObj = [
    {
        mainImg: "./assets/images/mc-1.png",
        profileImg: "./assets/images/pf-1.png",
        cardName: "André Soares",
        cardTxt: "HZC - Tudo sem Padrin"
    },
    {
        mainImg: "./assets/images/mc-2.png",
        profileImg: "./assets/images/pf-3.png",
        cardName: "Bruno Lopes",
        cardTxt: "HZC - Enter The Hu-flez"
    },
    {
        mainImg: "./assets/images/mc-3.png",
        profileImg: "./assets/images/pf-2.png",
        cardName: "Luiza Sampaio",
        cardTxt: "HZC - Vol.3"
    },
    {
        mainImg: "./assets/images/mc-4.png",
        profileImg: "./assets/images/pf-3.png",
        cardName: "Bruno Lopes",
        cardTxt: "HZC - Love Machine"
    }
]

const cardsObj2 = [
    {
        mainImg: "./assets/images/c-1.png",
        profileImg: "./assets/images/pf-1.png",
        cardName: "André Soares",
        cardTxt: "IBM"
    },
    {
        mainImg: "./assets/images/c-2.png",
        profileImg: "./assets/images/pf-3.png",
        cardName: "Bruno Lopes",
        cardTxt: "HZC - Enter The Hu-flez"
    },
    {
        mainImg: "./assets/images/c-3.png",
        profileImg: "./assets/images/pf-2.png",
        cardName: "Luiza Sampaio",
        cardTxt: "Corujita noturna"
    },
    {
        mainImg: "./assets/images/c-4.png",
        profileImg: "./assets/images/pf-3.png",
        cardName: "Bruno Lopes",
        cardTxt: "GGG - Gatin G Gorro"
    }
]

const musicsObj2 = [
    {
        img: "./assets/images/ar-1.png",
        musicName: "Sem título 01",
        avtor: "Antonio Tebyriçá"
    },
    {
        img: "./assets/images/ar-2.png",
        musicName: "Sem título 02",
        avtor: "Antonio Tebyriçá"
    },
    {
        img: "./assets/images/ar-3.png",
        musicName: "Segurança",
        avtor: "Raphael Gibson"
    },
    {
        img: "./assets/images/ar-4.png",
        musicName: "Malunguisse",
        avtor: "Carolina Canavarro"
    },
    {
        img: "./assets/images/ar-5.png",
        musicName: "Coroa da converse",
        avtor: "Nikolas de Murtas"
    },
    {
        img: "./assets/images/ar-3.png",
        musicName: "Segurança",
        avtor: "Raphael Gibson"
    },
    {
        img: "./assets/images/ar-1.png",
        musicName: "Sem título 03",
        avtor: "Antonio Tebyriçá"
    }
]

for(let navElement of navBarObj) {
    const navBar = document.getElementById("nav-bar")
    const navMenu = document.createElement("div")
    const navMenuImg = document.createElement("img")
    const navMenuText = document.createElement("p")

    navMenuImg.src = navElement.icon
    navMenuText.textContent = navElement.text

    navMenu.classList.add("nav-menu")

    navMenu.append(navMenuImg, navMenuText)
    navBar.appendChild(navMenu)
}

for(let musicObj of musicsObj) {
    const smallCard = document.querySelector(".small-card")

    const music = document.createElement("div")
    const musicImg = document.createElement("img")
    const musicText = document.createElement("div")

    music.classList.add("musics")

    musicImg.src = musicObj.img
    musicText.classList.add("music-text")
    const b = document.createElement("b")
    const p = document.createElement("p")

    b.innerHTML = musicObj.musicName
    p.innerHTML = musicObj.avtor

    musicText.append(b, p)

    music.append(musicImg, musicText)
    smallCard.appendChild(music)
}

for(let cardObj of cardsObj) {
    const cardContainer = document.querySelector(".card-container")
    const card = document.createElement("div")
    const mainImg = document.createElement("img")
    const cardText = document.createElement('div')
    const profileImg = document.createElement("img")
    const cardName = document.createElement("p")
    const cardTxt = document.createElement("h3")
    const span = document.createElement("span")
    const timeIcon = document.createElement("img")
    const b = document.createElement("b")

    card.classList.add("card")
    cardText.classList.add("card-text")
    profileImg.classList.add("profile")

    mainImg.style.width = "250px"
    mainImg.src = cardObj.mainImg
    profileImg.src = cardObj.profileImg
    cardName.innerHTML = cardObj.cardName
    cardTxt.innerHTML = cardObj.cardTxt
    timeIcon.src = "./assets/icons/access-time.svg"
    b.innerHTML = "33 minutos"

    span.append(timeIcon, b)
    cardText.append(profileImg, cardName, cardTxt, span)
    card.append(mainImg, cardText)
    cardContainer.appendChild(card)
}


for(let musicObj2 of musicsObj2) {
    const smallCard = document.querySelector("#small-card")

    const music = document.createElement("div")
    const musicImg = document.createElement("img")
    const musicText = document.createElement("div")

    music.classList.add("musics")

    musicImg.src = musicObj2.img
    musicText.classList.add("music-text")
    const b = document.createElement("b")
    const p = document.createElement("p")

    b.innerHTML = musicObj2.musicName
    p.innerHTML = musicObj2.avtor

    musicText.append(b, p)

    music.append(musicImg, musicText)
    smallCard.appendChild(music)
}


for(let cardObj of cardsObj2) {
    const cardContainer = document.querySelector("#card-container")
    const card = document.createElement("div")
    const mainImg = document.createElement("img")
    const cardText = document.createElement('div')
    const profileImg = document.createElement("img")
    const cardName = document.createElement("p")
    const cardTxt = document.createElement("h3")
    const span = document.createElement("span")
    const timeIcon = document.createElement("img")
    const b = document.createElement("b")

    card.classList.add("card")
    cardText.classList.add("card-text")
    profileImg.classList.add("profile")
    mainImg.style.width = "250px"
    mainImg.src = cardObj.mainImg
    profileImg.src = cardObj.profileImg
    cardName.innerHTML = cardObj.cardName
    cardTxt.innerHTML = cardObj.cardTxt
    timeIcon.src = "./assets/icons/attach-money.svg"
    b.innerHTML = "33,33"

    span.append(timeIcon, b)
    cardText.append(profileImg, cardName, cardTxt, span)
    card.append(mainImg, cardText)
    cardContainer.appendChild(card)
}