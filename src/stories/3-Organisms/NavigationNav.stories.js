import React from 'react';
import NavigationNav from 'Components/3-Organisms/NavigationNav';

export default {
  title: "Organisms/NavigationNav",
  component: NavigationNav,
  argTypes: {
    data: {
      table: {
        disable: true
      }
    },
    openSidebar: {
      table: {
        disable: true
      }
    }
  }
}

export const template = (args) => <NavigationNav {...args}/>