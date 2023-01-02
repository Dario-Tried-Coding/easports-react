import React from "react";
import { useState } from "react";
import RegionsModal from "./RegionsModal";

const RegionsBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="regions-text">
        <h5>prezzi per regione</h5>
        <p onClick={() => setIsOpen(true)}>
          state <span onClick={() => setIsOpen(false)}>:--</span>
        </p>
        {isOpen && <RegionsModal />}
      </div>
    </>
  );
};

export default RegionsBtn;