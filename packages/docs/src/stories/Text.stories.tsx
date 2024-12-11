import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ielo-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iste quibusdam architecto totam cum vel, a illo ut perspiciatis blanditiis facere, laboriosam quo. Nam, libero explicabo nisi beatae sint quia.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
