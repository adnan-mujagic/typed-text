## Typed Textfield

This is a simple and customizable react component that simulates typing

## Installation

To add this library to your project, run the following command:

```shell
npm i typed-textfield
```

## Usage

In order to use this component, simply import it as shown below:

```ts
import { TypedText } from 'typed-texfield'
```

Now, you can use it inside your react component:

```ts
function MyComponent(props) {
  return (
    <div>
      <TypedText
        sentences={['Hello world, I am working', 'I am also working with a new sentence!']}
        style={{ fontFamily: 'monospace' }}
      />
    </div>
  )
}
```

## Properties

`sentences: string[]` - an array of strings representing the sentences that will interchangably be typed onto the screen

`style: CSSProperties` - any style that you would like the text component to have.
