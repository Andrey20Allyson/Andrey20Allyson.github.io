import React, { ComponentType, useEffect, useState } from 'react';

export interface AnimatedTextComponentProps {
  children: string;
}

export interface AnimatedTextProps {
  texts?: string[];
  baseText?: string;
  Component: ComponentType<AnimatedTextComponentProps>;
}

export function useAnimatedText(texts: string[]) {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let textsIndex = 0;
    let stringEnd = 0;
    let increment = 1;

    const changeDelay = 4;
    let timeLeftToChange = changeDelay;
    
    const timer = setInterval(() => {
      if (!texts) return;

      if (textsIndex < texts.length) {
        const text = texts[textsIndex];

        if (stringEnd === text.length && timeLeftToChange > 0) {
          timeLeftToChange--;
          return;
        }

        if (stringEnd >= text.length) increment = -1;

        stringEnd += increment;

        if (stringEnd === 0) {
          textsIndex++;
          increment = 1;
          timeLeftToChange = changeDelay;
        }

        setCurrentText(text.slice(0, stringEnd));
      } else {
        textsIndex = 0;
      }
    }, 100);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return currentText;
}

const replaceRegex = /%s/g

function formatText(baseText: string, ...args: string[]) {
  let i = 0;
  
  return baseText.replace(replaceRegex, (sub) => {
    return args[i++];
  });
}

export function AnimatedText(props: AnimatedTextProps) {
  const {
    Component,
    texts,
    baseText = '%s',
  } = props;

  const animatedTexts = useAnimatedText(texts ?? []);

  return (
    <Component>
      {formatText(baseText, animatedTexts)}
    </Component>
  );
}