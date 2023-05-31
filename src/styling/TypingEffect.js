import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const TypingText = ({ children, delay = 0, ...textStyles }) => {
  const [displayText, setDisplayText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Array of strings to be displayed
  const textArray = [children];

  // Use effect hook to handle typing animation
  useEffect(() => {
    const handleTyping = () => {
      const text = textArray[loopNum];
      const isComplete = displayText.length === text.length;

      if (isComplete) {
        setTypingSpeed(150);
        setLoopNum(loopNum === textArray.length - 1 ? 0 : loopNum + 1);
      } else {
        const char = text.substr(0, displayText.length + 1);
        setDisplayText(char);
      }
    };

    const typingTimer = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(typingTimer);
  }, [displayText, loopNum, textArray, typingSpeed, delay]);

  return (
    <Text {...textStyles}>
      {displayText}
    </Text>
  );
};

export default TypingText;
