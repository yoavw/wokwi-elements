import { html } from 'lit-html';
import './neopixel-ring-element';

export default {
  title: 'NeoPixel Ring',
  component: 'wokwi-neopixel-ring',
  argTypes: {
    animation: { control: 'boolean' },
    pixels: { control: { type: 'number', min: 1, max: 64, step: 1 } },
    pixelSpacing: { control: { type: 'range', min: 0, max: 10, step: 0.1 } },
    background: { control: { type: 'color' } },
    pinInfo: { control: { type: null } },
  },
  args: {
    background: '#363',
    pixels: 16,
    pixelSpacing: 0,
    animation: true,
  },
};

const Template = ({ animation, background, pixels, pixelSpacing }) =>
  html`<wokwi-neopixel-ring
    .animation=${animation}
    background=${background}
    pixels=${pixels}
    pixelSpacing=${pixelSpacing}
  ></wokwi-neopixel-ring>`;

export const Ring8 = Template.bind({});
Ring8.args = { pixels: 8 };

export const Ring12 = Template.bind({});
Ring12.args = { pixels: 12 };

export const Ring16 = Template.bind({});
Ring16.args = { pixels: 16 };

export const Ring24 = Template.bind({});
Ring24.args = { pixels: 24 };
