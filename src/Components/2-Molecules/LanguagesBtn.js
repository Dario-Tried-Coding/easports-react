import React, { useState } from "react";
import LanguagesModal from "./LanguagesModal";

const LanguagesBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="languages-text">
      <h5>language</h5>
      <p onClick={() => setIsOpen(true)}>
        language <span onClick={() => setIsOpen(false)}> :--</span>
      </p>
      {isOpen && <LanguagesModal />}
    </div>
  );
};

export default LanguagesBtn;
