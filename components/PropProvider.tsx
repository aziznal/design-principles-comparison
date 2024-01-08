"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type Props = {
  primaryColor: string;
  primaryColorCopy1: string;
  primaryColorCopy2: string;

  secondaryColor: string;
  secondaryColorCopy1: string;
  secondaryColorCopy2: string;

  tertiaryColor: string;
  tertiaryColorCopy1: string;

  textColor: string;

  lineHeight: string;
  sectionGapPx: number;

  interactiveEnabled: boolean;
  overinteractiveEnabled: boolean;

  header: {
    blockPadding: string;
    sidePadding: string;

    titleGap: string;
    linksGap: string;

    textColor: string;
  };

  hero: {
    titleGap: string;
    titleColor: string;
    titleFontSize: string;
    lineHeight: string;
    marginTop: string;
    textColor: string;
  };

  cards: {
    padding: string;
    height: string;
    lineHeight: string;
    cardsGap: string;
    cardGap: string;
    textColor: string;
  };

  about: {
    gap: string;
    titleFontSize: string;
    lineHeight: string;
    textColor: string;
  };

  bubbles: {
    bubbleGap: string;
    bubblesGap: string;

    bubble1Color: string;
    bubble2Color: string;
    bubble3Color: string;

    fontSize: string;
    textColor: string;
  };

  footer: {
    gap: string;
    textColor: string;
  };
};

const propContext = createContext<
  { props: Props; setProps: Dispatch<SetStateAction<Props>> } | undefined
>(undefined);

// added nullish coalescing operator to prevent type error
// since context can be undefined. Needed to add undefined
// in order to skip adding a default value.
export const useProps = () => useContext(propContext)!;

export const PropProvider = ({
  props,
  children,
}: { props: Props } & PropsWithChildren) => {
  const [liveProps, setLiveProps] = useState(props);

  return (
    <propContext.Provider
      value={{
        props: liveProps,
        setProps: setLiveProps,
      }}
    >
      {children}
    </propContext.Provider>
  );
};
