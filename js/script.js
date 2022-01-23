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