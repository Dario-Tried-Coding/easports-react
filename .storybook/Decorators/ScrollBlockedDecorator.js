import ScrollBlockedContext from "../../src/Context/ScrollBlockedContext"
import { useState } from "react"
import React from "react";

export default function ScrollBlockedDecorator(Story, context) {
  const [isScrollBlocked, setIsScrollBlocked] = useState(false);

  return (
    <div>
      <ScrollBlockedContext.Provider value={{isScrollBlocked, setIsScrollBlocked}}>
        <Story />
      </ScrollBlockedContext.Provider>
    </div>
  )
}