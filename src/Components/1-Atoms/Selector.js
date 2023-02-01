import { motion } from "framer-motion";
import useWindowSize from "Hooks/useWindowSize";
import React from "react";
import style from "../../SCSS/1-Atoms/Selector.module.scss";

const mockData = [
  [["Austria"], ["Belgio"], ["Bulgaria"], ["Croazia"], ["Cipro"], ["Repubblica Ceca"], ["Danimarca"], ["Estonia"], ["Finlandia"]],
  [["Francia"], ["Germania"], ["Greece"], ["Ungheria"], ["Islanda"], ["Irlanda"], ["Italia", "active"], ["Lettonia"], ["Liechtenstein"]],
  [["Lituania"], ["Lussemburgo"], ["Malta"], ["Paesi Bassi"], ["Norvegia"], ["Polonia"], ["Portogallo"], ["Romania"], ["Slovenia"]],
  [["Spagna"], ["Svezia"], ["Svizzera"]],
];

const Selector = ({ isOpen, handleClick, label = "default", data = mockData }, ref) => {
  const { width } = useWindowSize();

  return (
    <div ref={ref} className={style.selector}>
      <button onClick={handleClick} data-active={isOpen}>
        <span>{label}</span>
        <span>
          {data.find(arr => arr.find(arr => arr[1])).find(arr => arr[1] === "active")[0]}
          <svg style={{transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"}} viewBox="0 0 16 16">
            <g>
              <path d="M7.4,9.7l5.8-4.8c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4l-5.8,4.8 c-0.4,0.4-1,0.4-1.4,0l0,0C7,10.7,7,10.1,7.4,9.7z"></path>
              <path d="M7.2,11.1L1.4,6.3C1,5.9,1,5.3,1.4,4.9l0,0c0.4-0.4,1-0.4,1.4,0l5.8,4.8c0.4,0.4,0.4,1,0,1.4 l0,0C8.3,11.5,7.6,11.5,7.2,11.1z"></path>
            </g>
          </svg>
        </span>
      </button>
      {width < 1024 ? (
        <select name="prova" id="prova">
          {data.map((arr) => arr.map(arr => {
          if (arr[1]) return <option selected>{arr[0]}</option>
          else return <option>{arr[0]}</option>
          } ))}
        </select>
      ) : null}
      <div style={{ display: isOpen ? "flex" : "none" }} className={style.options}>
        {data.map((set, i) => (
          <div key={i} className={style.column}>
            {set.map((arr, i) => (
              <motion.div key={i} className={style.item} whileHover="hover">
                <motion.span variants={{hover: {x: 10}}} transition={{duration: 0.1, ease: "easeInOut"}}>{arr[0]}</motion.span>
                {arr[1] === "active" && (<svg viewBox="0 0 16 16"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7,13.3L7,13.3c-0.4,0.4-1,0.4-1.4,0L0.9,8.7 c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L7,11.9C7.4,12.3,7.4,12.9,7,13.3z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.7,13.4L5.7,13.4c-0.4-0.4-0.5-1-0.1-1.4l8-9.2 c0.4-0.4,1-0.5,1.4-0.1l0,0c0.4,0.4,0.5,1,0.1,1.4l-8,9.2C6.8,13.7,6.1,13.7,5.7,13.4z"></path></g></svg>)}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.forwardRef(Selector);
