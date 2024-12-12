import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ielo-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/wwchacalww.png',
    alt: 'Chacal.Dev',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
