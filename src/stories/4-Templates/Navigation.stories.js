import React from 'react';
import Navigation from 'Components/4-Templates/Navigation';
import ScrollBlockedDecorator from "../../../.storybook/Decorators/ScrollBlockedDecorator"

export default {
  title: "Templates/Navigation",
  component: Navigation,
  decorators: [
    ScrollBlockedDecorator
  ],
  argTypes: {
    navigationData: {
      table: {
        disable: true
      }
    },
    sidebarData: {
      table: {
        disable: true
      }
    }
  }
}

export const template = (args) => <Navigation {...args}><div></div></Navigation>