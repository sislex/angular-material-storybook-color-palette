import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import {ColorPaletteComponent} from './color-palette.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ColorPaletteComponent> = {
  title: 'Example/ColorPaletteComponent',
  component: ColorPaletteComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ColorPaletteComponent>;

export const Primary: Story = {
};

