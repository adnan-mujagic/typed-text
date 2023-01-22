import React, { useEffect, useState, CSSProperties } from "react";

export interface TypedTextProps {
  sentences: string[];
  style: CSSProperties;
}

enum Direction {
  RIGHT = "right",
  LEFT = "left",
}

function TypedText(props: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [currentSentence, setCurrentSentence] = useState<string>(
    props.sentences[sentenceIndex]
  );
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>(Direction.RIGHT);

  const typeNextCharacter = () => {
    setTimeout(() => {
      setDisplayedText(displayedText + currentSentence[index]);
      setIndex(index + 1);
    }, 40);
  };

  const deletePreviousCharacter = (timeout: number = 8) => {
    setTimeout(() => {
      setDisplayedText(displayedText.substring(0, index - 1));
      setIndex(index - 1);
    }, timeout);
  };

  const startNewSentence = (timeout: number = 1200) => {
    setTimeout(() => {
      setDirection(Direction.RIGHT);
      setCurrentSentence(props.sentences[sentenceIndex + 1]);
      setSentenceIndex(sentenceIndex + 1);
      setIndex(index + 1);
    }, timeout);
  };

  useEffect(() => {
    if (
      index === currentSentence.length &&
      sentenceIndex === props.sentences.length - 1
    ) {
      return;
    } else if (
      direction === Direction.RIGHT &&
      index < currentSentence.length
    ) {
      typeNextCharacter();
    } else if (
      direction === Direction.RIGHT &&
      index === currentSentence.length
    ) {
      if (props.sentences.length - 1 === sentenceIndex) {
        return;
      } else {
        setDirection(Direction.LEFT);
        deletePreviousCharacter(1200);
      }
    } else if (direction === Direction.LEFT && index >= 0) {
      deletePreviousCharacter();
    } else if (direction === Direction.LEFT && index === -1) {
      startNewSentence();
    }
  }, [index]);

  return <div style={props.style}>{displayedText}</div>;
}

export default TypedText;
