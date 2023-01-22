import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { TypedText } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <TypedText
        sentences={['Hello world, I am working', 'I am also working with a new sentence!']}
        style={{ fontFamily: 'monospace' }}
      />,
    )
  })
})
