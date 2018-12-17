import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Story from '../.storybook/story'

import Component from '.'

const componentInfo = 'Hello Component'

const componentVariant = () => <Story>
  <Component>Hello</Component>
</Story>

storiesOf('Component', module)
  .add('Variant', withInfo(componentInfo)(componentVariant))