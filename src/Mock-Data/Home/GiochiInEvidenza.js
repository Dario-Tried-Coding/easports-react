//Cards database passed as a prop
import style from "../../SCSS/2-Molecules/Cards/Card1.module.scss"

const cardsDatabase = [
    {
        containerClass: style["fifa23-card"],
        imgPath: "https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg",
        altIMg: "Fifa 23",
        logoClass: style["fifa23-logo"],
        imgLogoPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/fifa23-logo-white-stacked.svg",
        altLogo: "Fifa23 logo",
        width: "130px"
    },
    {
        containerClass: style["apex-mobile-card"],
        imgPath: "https://media.contentapi.ea.com/content/dam/gin/images/2022/03/apex-mobile-keyart-1x1.jpg.adapt.crop1x1.767p.jpg",
        altIMg: "Apex-Mobile",
        logoClass: style["apex-mobile-logo"],
        imgLogoPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/apex-mobile-logo.svg",
        altLogo: "Apex-mobile-logo",
        width: "80px"
    },
    {
        containerClass: style["f1-22-card"],
        imgPath: "https://media.contentapi.ea.com/content/dam/gin/images/2022/05/1-1-gamebox-f122-keyart-1.png.adapt.crop1x1.767p.png",
        logoClass: style["f1-22-logo"],
        imgLogoPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/f122-gamebox-logo.png",
        altLogo: "Formula 1 2022",
        width: "150px"
    },
    {
        containerClass: style["batterfield-card"],
        imgPath: "https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg",
        altIMg: "Batterfield 2042",
        logoClass: style["batterfield-logo"],
        imgLogoPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg",
        altLogo: "Btterfield 2042 logo",
        width: "150px"
    },
    {
        containerClass: style["apex-card"],
        imgPath: "https://media.contentapi.ea.com/content/dam/gin/images/2019/01/apex-legends-keyart.jpg.adapt.crop1x1.767p.jpg",
        altIMg: "Apex Legend",
        logoClass: style["apex-logo"],
        imgLogoPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/apex-legends-mono-logo.svg",
        altLogo: "Apex Legend logo",
        width: "110px"
    },
    {
        containerClass: style["the-sims4-card"],
        imgPath: "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-sims-4-keyart.jpg.adapt.crop1x1.767p.jpg",
        imgClass: style["resirez-responsive"],
        altIMg: "The Sims",
        logoClass: style["the-sims4-logo"],
        imgLogoPath: "https://media.contentapi.ea.com/content/dam/gin/common/logos/game-box-logo-thesims4-refresh.svg",
        altLogo: "The Sims",
        width: "150px",
        height: "175px"
    },
]


export {cardsDatabase as cards}

