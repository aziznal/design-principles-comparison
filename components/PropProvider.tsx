"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

export type Props = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  lineHeight: string;
  sectionGapPx: number;

  header: {
    blockPadding: string;
    sidePadding: string;

    titleGap: string;
    linksGap: string;
  };

  hero: {
    titleGap: string;
    titleFontSize: string;
    lineHeight: string;
    marginTop: string;
  };

  cards: {
    padding: string;
    height: string;
    lineHeight: string;
    cardsGap: string;
    cardGap: string;
  };

  about: {
    gap: string;
    titleFontSize: string;
    lineHeight: string;
  };

  bubbles: {
    bubbleGap: string;
    bubblesGap: string;

    bubble1Color: string;
    bubble2Color: string;
    bubble3Color: string;

    fontSize: string;
  };

  footer: {
    gap: string;
  };
};

const PRIMARY_COLOR = "#617DCE";
const SECONDARY_COLOR = "#1AC4CF";
const TERTIARY_COLOR = "#1B2544";
const LINE_HEIGHT = "1.5";

const propContext = createContext<
  { props: Props; setProps: (props: Props) => void } | undefined
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
