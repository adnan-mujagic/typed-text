import React from 'react'
import ReactDOM from 'react-dom/client'
import { TypedText } from 'typed-textfield'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <p>Default typed textfield</p>
      <TypedText sentences={['Hello world, I am working.', 'I am also working with a new sentence!']} />

      <p>Typed textfield with looping</p>
      <TypedText sentences={['Hello world, I am working.', 'I am also working with a new sentence!']} loop={true} />

      <p>Styled typed textfield</p>
      <TypedText
        sentences={['Hello world, I am working,', 'I am also working with a new sentence!']}
        loop={true}
        style={{ fontFamily: 'monospace', fontSize: 20, color: 'blue' }}
      />

      <p>Typed textfield with custom type time, wait time, and delete time</p>
      <TypedText
        sentences={['Hello world, I am working.', 'I am also working with a new sentence!']}
        waitTime={2000}
        deleteTime={4}
        typeTime={10}
      />
    </div>
  </React.StrictMode>,
)
