import React from 'react'
import ReactDOM from 'react-dom/client'
import { TypedText } from '@adnan-mujagic/typed-text'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <TypedText
        sentences={['Hello world, I am working', 'I am also working with a new sentence!']}
        style={{ fontFamily: 'monospace' }}
      />
    </div>
  </React.StrictMode>,
)
