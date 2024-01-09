import { Props } from "@/components/PropProvider";

export function getDefaultProps(): Props {
  const defaultProps = {
    primaryColor: "#617DCE",
    primaryColorCopy1: "#617DCE",
    primaryColorCopy2: "#617DCE",

    secondaryColor: "#1AC4CF",
    secondaryColorCopy1: "#1AC4CF",
    secondaryColorCopy2: "#1AC4CF",

    tertiaryColor: "#1B2544",
    tertiaryColorCopy1: "#1B2544",

    lineHeight: "1.5",
    sectionGapPx: 100,
    textColor: "#000",

    interactiveEnabled: true,
    overinteractiveEnabled: false,

    badContrastEnabled: false,

    header: {
      blockPadding: "1rem",
      sidePadding: "146px",
      titleGap: "1rem",
      linksGap: "40px",
      textColor: "#fff",
      logoFontSize: "1.5rem",

      linkFontSize: "1rem",
      linkFontWeight: "regular",
    },

    hero: {
      titleGap: "1rem",
      titleFontSize: "70px",
      lineHeight: "1.2",
      marginTop: "20px",
      titleColor: "#000",
      titleFontWeight: "bold",

      textColor: "#000",
      textFontSize: "1rem",
      textFontWeight: "regular",
    },

    cards: {
      padding: "2rem",
      lineHeight: "1.5",
      height: "400px",
      cardGap: ".75rem",
      cardsGap: "3rem",
      textColor: "#000",

      titleFontSize: "1.875rem",
      titleFontWeight: "bold",
      titleLineHeight: "2.25rem",
    },

    about: {
      gap: "1.5rem",
      titleFontSize: "38px",
      titleFontWeight: "bold",
      lineHeight: "1.5",
      textColor: "#000",
      textFontSize: "1.3rem",
      textFontWeight: "regular",
    },

    bubbles: {
      bubbleGap: "1rem",
      bubblesGap: "2rem",

      bubble1Color: "#BA3963",
      bubble2Color: "#FFD600",
      bubble3Color: "#00EDA6",

      fontSize: "1rem",
      fontWeight: "regular",

      textColor: "#000",
    },

    footer: {
      gap: "2rem",
      textColor: "#fff",

      titleFontWeight: "bold",
      titleFontSize: "2.25rem",
      titleLineHeight: "2.5rem",

      textFontWeight: "regular",
      textFontSize: "1.5rem",
      textLineHeight: "2rem",
    },

    button: {
      fontWeight: "bold",
      fontSize: "1rem",
    },
  } satisfies Props;

  // deep copying to prevent mutation
  return JSON.parse(JSON.stringify(defaultProps));
}
