import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Component from '.'

const componentInfo = 'Hello Component'

const componentVariant = () => <ul>
  <li><Component>Hello</Component></li>
</ul>

storiesOf('Component', module)
  .add('Variant', withInfo(componentInfo)(componentVariant))