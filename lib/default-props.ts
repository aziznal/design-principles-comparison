import { Props } from "@/components/PropProvider";

export function getDefaultProps(): Props {
  const defaultProps = {
    primaryColor: "#617DCE",
    secondaryColor: "#1AC4CF",
    tertiaryColor: "#1B2544",
    lineHeight: "1.5",
    sectionGapPx: 100,

    header: {
      blockPadding: "1rem",
      sidePadding: "146px",
      titleGap: "1rem",
      linksGap: "40px",
    },

    hero: {
      titleGap: "1rem",
      titleFontSize: "70px",
      lineHeight: "1.2",
      marginTop: "20px",
    },

    cards: {
      padding: "2rem",
      lineHeight: "1.5",
      height: "400px",
      cardGap: ".75rem",
      cardsGap: "3rem",
    },

    about: {
      gap: "1.5rem",
      titleFontSize: "45px",
      lineHeight: "1.5",
    },

    bubbles: {
      bubbleGap: "1rem",
      bubblesGap: "2rem",

      bubble1Color: "#BA3963",
      bubble2Color: "#FFD600",
      bubble3Color: "#00EDA6",

      fontSize: "1rem",
    },

    footer: {
      gap: "2rem",
    },
  };

  // deep copying to prevent mutation
  return JSON.parse(JSON.stringify(defaultProps));
}
