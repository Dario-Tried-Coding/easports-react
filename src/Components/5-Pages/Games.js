import Navigation from 'Components/4-Templates/Navigation';
import React from 'react';
import NavigationData from 'Mock-Data/Games/Navigation';
import Sidebar from 'Mock-Data/Games/Sidebar';
import { Links } from 'Components/4-Templates/Links';

export default function Games() {
  const navigationData = JSON.parse(NavigationData)
  const sidebarData = JSON.parse(Sidebar)

  return <Navigation navigationData={navigationData} sidebarData={sidebarData}>
    <Links />
  </Navigation>
}