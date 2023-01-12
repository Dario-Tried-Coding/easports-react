import React from "react";
import useWindowDimensions from "Hooks/useWindowDimensions";

import style from "../../SCSS/4-Templates/NavigationNav.module.scss";
import NavbarDropdown from "Components/1-Atoms/NavbarDropdown";

const mockData = [
  {
    btn: "Button 1",
    singleColumn: false,
    columns: [
      {
        heading: "Column Heading",
        links: ["Link label", "Link label", "Link label", "Link label", "Link label", "Link label"],
      },
      {
        heading: "Column Heading",
        links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
      },
    ],
  },
  {
    btn: "Button 2",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
  {
    btn: "Button 3",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
  {
    btn: "Button 4",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
  {
    btn: "Button 5",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
];

function NavigationNav({ data = mockData }) {
  const { width } = useWindowDimensions();

  return (
    <div className={style.navigationNav}>
      <div className={style.toggle}>
        {width > 1024 ? (
          <svg viewBox="0 0 16 16" style={{ transform: "rotate(90deg)", height: "35%" }}>
            <g>
              <circle cx="14.143" cy="8" r="1.857"></circle>
              <circle cx="7.996" cy="8" r="1.857"></circle>
              <circle cx="1.857" cy="8" r="1.857"></circle>
            </g>
          </svg>
        ) : (
          <svg x="0px" y="0px" viewBox="0 0 20 16" style={{ height: "32%" }}>
            <path d="M1,2h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H1C0.4,0,0,0.4,0,1S0.4,2,1,2z M19,7H1C0.4,7,0,7.4,0,8s0.4,1,1,1h18 c0.6,0,1-0.4,1-1S19.6,7,19,7z M19,14H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S19.6,14,19,14z"></path>
          </svg>
        )}
      </div>

      <div className={style.logo}>
        <img src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg" alt="logo" />
      </div>

      <ul className={style.shelf}>
        {data.map((dataObj) => (
          <li>
            <NavbarDropdown
              // @ts-ignore
              data={dataObj}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationNav;
