import React, { useState } from "react";
import LanguagesModal from "./LanguagesModal";

const LanguagesBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="languages-text">
      <h5>language</h5>
      <p onClick={() => setIsOpen(true)}>language</p>
      <span onClick={() => setIsOpen(false)}> :--</span>
      {isOpen && <LanguagesModal />}
    </div>
  );
};

export default LanguagesBtn;
