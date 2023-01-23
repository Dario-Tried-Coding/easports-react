import React, { useRef } from 'react';
import NetworkNav from 'Components/3-Organisms/NetworkNav';
import ScrollBlockedDecorator from "../../../.storybook/Decorators/ScrollBlockedDecorator"

export default {
  title: "Organisms/NetworkNav",
  component: NetworkNav,
  decorators: [
    ScrollBlockedDecorator
  ]
}

function Wrapper() {
  const pageContentRef = useRef(null)

  return (
    <div>
      <div><NetworkNav pageContentRef={pageContentRef} /></div>
      <div ref={pageContentRef}></div>
    </div>
  )
}

export const template = (args) => <Wrapper {...args} />