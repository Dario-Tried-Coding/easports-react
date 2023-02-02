import SidebarCard from "Components/2-Molecules/Cards/SidebarCard";
import SidebarDropdown from "Components/1-Atoms/SidebarDropdown";
import WrSidebarCards from "Components/3-Organisms/Wrappers/WrSidebarCards";
import useWindowDimensions from "Hooks/useWindowDimensions";
import React from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

import style from "../../SCSS/3-Organisms/Sidebar.module.scss";

const defaultMockData = [
  {
    btn: "Button",
    singleColumn: false,
    columns: [
      {
        heading: "Heading",
        links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"], ["Link 6", "/"]],
      },
      {
        heading: "Heading",
        links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]],
      },
    ],
  },
  {
    btn: "Button",
    singleColumn: true,
    links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]],
  },
  {
    btn: "Button",
    singleColumn: true,
    links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]],
  },
  {
    btn: "Button",
    singleColumn: true,
    links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]],
  },
  {
    btn: "Button",
    singleColumn: true,
    links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]],
  },
  {
    btn: "Button",
    singleColumn: true,
    links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]],
  },
];

const defaultSidebarDesktopMockData = {
  bigImg: {
    bgImg: "https://via.placeholder.com/767",
    logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
    to: "/",
    bgImgAlt: "description",
    logoImgAlt: "description",
    logoImgWidth: 30
  },
  cards: [
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
  ]
}

function Sidebar({ closeSidebar = () => console.log("pass function to close sidebar"), navigationData = defaultMockData, sidebarData = defaultSidebarDesktopMockData }, ref) {
  const { width } = useWindowDimensions();

  return width > 1024 ? (
    <div ref={ref} className={style.sidebarDesktop}>
      <header>
        <Link to="/games">Tutti i giochi</Link>
        <svg onClick={closeSidebar} x="0px" y="0px" viewBox="0 0 16 16">
          <path d="M13.4,11.9l-4-4l3.9-3.9c0.6-0.6,0.7-1.3,0.3-1.7c-0.4-0.4-1.2-0.3-1.7,0.3L8,6.6l-4-4 C3.5,2.1,2.7,1.9,2.3,2.3C1.9,2.7,2.1,3.5,2.6,4.1l4,4l-3.9,3.9c-0.6,0.6-0.7,1.3-0.3,1.7c0.4,0.4,1.2,0.3,1.7-0.3L8,9.4l4,4 c0.6,0.6,1.3,0.7,1.7,0.3C14.1,13.3,13.9,12.5,13.4,11.9z"></path>
        </svg>
      </header>

      <div className={style.cards}>
        <SidebarCard bgImg={sidebarData?.bigImg?.bgImg} logoImg={sidebarData?.bigImg?.logoImg} logoImgWidth={sidebarData?.bigImg?.logoImgWidth} to={sidebarData?.bigImg?.to} bgImgAlt={sidebarData?.bigImg?.bgImgAlt} logoImgAlt={sidebarData?.bigImg?.logoImgAlt} />
        <WrSidebarCards>
          {sidebarData.cards.map((obj, i) => (
            <SidebarCard key={i} bgImg={obj?.bgImg} logoImg={obj?.logoImg} logoImgWidth={obj?.logoImgWidth} to={obj?.to} bgImgAlt={obj?.bgImgAlt} logoImgAlt={sidebarData?.bigImg?.logoImgAlt} />
          ))}
        </WrSidebarCards>
      </div>
    </div>
  ) : (
    <div ref={ref} className={style.sidebarMobile}>
      <header>
        <div className="logoImg">
          <Link to="/"><img src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg" alt="logo" /></Link>
        </div>
        <div onClick={closeSidebar} className={style.closeSVG}>
          <svg x="0px" y="0px" viewBox="0 0 40 40">
            <g viewBox="0 0 16 16">
              <path fill-rule="evenodd" fill="none" clip-rule="evenodd" d="M20.2019 36.5256C30.433 36.5256 38.7269 28.4553 38.7269 18.5C38.7269 8.54472 30.433 0.474365 20.2019 0.474365C9.9708 0.474365 1.67688 8.54472 1.67688 18.5C1.67688 28.4553 9.9708 36.5256 20.2019 36.5256Z" stroke-width="0.95"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1566 13.1711C15.7806 12.8052 15.1709 12.8052 14.7949 13.1711C14.4189 13.537 14.4189 14.1302 14.7949 14.4961L18.8392 18.4314L14.6543 22.5035C14.2783 22.8694 14.2783 23.4626 14.6543 23.8285C15.0304 24.1944 15.64 24.1944 16.0161 23.8285L20.201 19.7564L24.3857 23.8284C24.7618 24.1943 25.3714 24.1943 25.7475 23.8284C26.1235 23.4625 26.1235 22.8693 25.7475 22.5034L21.5627 18.4314L25.6069 14.4962C25.9829 14.1303 25.9829 13.5371 25.6069 13.1712C25.2309 12.8053 24.6212 12.8053 24.2452 13.1712L20.201 17.1064L16.1566 13.1711Z"></path>
            </g>
          </svg>
        </div>
      </header>
      <div className={style.body}>
        {navigationData.map((obj, i) => (
          <SidebarDropdown
            key={i}
            // @ts-ignore
            data={obj}
          />
        ))}
      </div>
    </div>
  );
}

export default forwardRef(Sidebar);
