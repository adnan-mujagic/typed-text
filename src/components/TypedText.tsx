import React, { useEffect, useState, CSSProperties } from 'react'

export interface TypedTextProps {
  sentences: string[]
  style?: CSSProperties
  loop?: boolean
  typeTime?: number
  waitTime?: number
  deleteTime?: number
}

enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
}

const TypedText: React.FC<TypedTextProps> = (props) => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [sentenceIndex, setSentenceIndex] = useState<number>(0)
  const [currentSentence, setCurrentSentence] = useState<string>(props.sentences[sentenceIndex])
  const [index, setIndex] = useState<number>(0)
  const [direction, setDirection] = useState<Direction>(Direction.RIGHT)

  const typeNextCharacter = () => {
    setTimeout(() => {
      setDisplayedText(displayedText + currentSentence[index])
      setIndex(index + 1)
    }, props.typeTime)
  }

  const deletePreviousCharacter = (timeout = props.deleteTime) => {
    setTimeout(() => {
      setDisplayedText(displayedText.substring(0, index - 1))
      setIndex(index - 1)
    }, timeout)
  }

  const startNewSentence = () => {
    startSentence(sentenceIndex + 1, props.waitTime)
  }

  const startFirstSentence = () => {
    startSentence(0, props.typeTime)
  }

  const startSentence = (wantedSentenceIndex: number, timeout?: number) => {
    setTimeout(() => {
      setDirection(Direction.RIGHT)
      setCurrentSentence(props.sentences[wantedSentenceIndex])
      setSentenceIndex(wantedSentenceIndex)
      setIndex(0)
    }, timeout)
  }

  const handleLastSentenceFinished = () => {
    if (props.loop) {
      startDeletingSentence()
    }
  }

  const startDeletingSentence = () => {
    setDirection(Direction.LEFT)
    deletePreviousCharacter(props.waitTime)
  }

  const handleSentenceDeleted = () => {
    if (props.loop && sentenceIndex === props.sentences.length - 1) {
      startFirstSentence()
    } else {
      startNewSentence()
    }
  }

  useEffect(() => {
    if (index === currentSentence.length && sentenceIndex === props.sentences.length - 1) {
      handleLastSentenceFinished()
    } else if (direction === Direction.RIGHT && index < currentSentence.length) {
      typeNextCharacter()
    } else if (direction === Direction.RIGHT && index === currentSentence.length) {
      startDeletingSentence()
    } else if (direction === Direction.LEFT && index >= 0) {
      deletePreviousCharacter()
    } else if (direction === Direction.LEFT && index === -1) {
      handleSentenceDeleted()
    }
  }, [index])

  return <div style={props.style}>{displayedText}</div>
}

TypedText.defaultProps = {
  loop: false,
  style: {},
  deleteTime: 8,
  typeTime: 40,
  waitTime: 1200,
}

export default TypedText
