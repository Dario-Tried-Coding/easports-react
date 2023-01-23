import React from 'react';
import Card1_1 from 'Components/2-Molecules/Cards/Card1_1';

const mockData = {
  bgImg: "https://media.contentapi.ea.com/content/dam/gin/images/2022/10/nfs-unbound-1x1.png.adapt.crop1x1.767p.png",
  logoImg: "https://media.contentapi.ea.com/content/dam/gin/common/logos/nfs-unbound-logo.png",
  logoImgWidth: 95,
  gradient: true,
  cardLink: "/games/need-for-speed/need-for-speed-unbound",
  links: [
    ["Sito ufficiale", "/games/need-for-speed/need-for-speed-unbound"],
    ["Aiuto", "/"],
    ["Forum", "/"],
  ]
}

export default {
  title: "Molecules/Cards/Card1_1",
  component: Card1_1,
};

const Template = args => <Card1_1 {...args} />

export const template = Template.bind({})
template.args = {
  bgImg: "https://media.contentapi.ea.com/content/dam/gin/images/2022/10/nfs-unbound-1x1.png.adapt.crop1x1.767p.png",
  logoImg: "https://media.contentapi.ea.com/content/dam/gin/common/logos/nfs-unbound-logo.png",
  logoImgWidth: 95,
  gradient: false,
  cardLink: "/games/need-for-speed/need-for-speed-unbound",
  links: [
    ["Sito ufficiale", "/games/need-for-speed/need-for-speed-unbound"],
    ["Aiuto", "/"],
    ["Forum", "/"],
  ]
}
template.parameters = {
  controls: {
    exclude: ["cardLink"],
  },
};