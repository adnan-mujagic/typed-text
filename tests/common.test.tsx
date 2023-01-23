import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { TypedText } from '../src'

describe('Common render', () => {
  it('Renders without crashing', () => {
    render(
      <TypedText
        sentences={['Hello world, I am working', 'I am also working with a new sentence!']}
        style={{ fontFamily: 'monospace' }}
      />,
    )
  })

  it('Renders with additional props', () => {
    render(
      <TypedText
        sentences={['Hello world, I am working', 'I am also working with a new sentence!']}
        style={{ fontFamily: 'monospace' }}
        typeTime={20}
        waitTime={2000}
        deleteTime={5}
      />,
    )
  })

  it('Renders with looping on', () => {
    render(
      <TypedText
        sentences={['Hello world, I am working', 'I am also working with a new sentence!']}
        style={{ fontFamily: 'monospace' }}
        typeTime={20}
        waitTime={2000}
        deleteTime={5}
        loop={true}
      />,
    )
  })
})
