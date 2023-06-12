import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex >= text.length) {
        clearTimeout(timer);
      } else {
        setDisplayText(text.substring(0, currentIndex + 3));
        setCurrentIndex((prevIndex) => prevIndex + 3);
      }
    }, 30);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, text]);
  return <div>{displayText}</div>;
};

export default TypingText;
