import ExamplePage from "@/components/ExamplePage";
import { PropProvider } from "@/components/PropProvider";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex-1 flex flex-col border-r-gray-400 border-r h-full pt-6">
        <h1 className="text-2xl font-bold text-center">Default</h1>

        <PropProvider
          props={{
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
          }}
        >
          <ExamplePage />
        </PropProvider>
      </div>

      <div className="flex-1 flex flex-col border-r-gray-400 border-r h-full pt-6">
        <h1 className="text-2xl font-bold text-center">Modified</h1>

        <PropProvider
          props={{
            primaryColor: "#617DCE",
            secondaryColor: "#1AC4CF",
            tertiaryColor: "#1B2544",
            lineHeight: "1.5",
            sectionGapPx: 20,

            header: {
              blockPadding: "1rem",
              sidePadding: "1rem",
              titleGap: "1rem",
              linksGap: "1rem",
            },

            hero: {
              titleGap: "1rem",
              titleFontSize: "2rem",
              lineHeight: "1.5",
              marginTop: "0",
            },

            cards: {
              padding: "1rem",
              lineHeight: "1.5",
              height: "200px",
              cardGap: "1rem",
              cardsGap: "1rem",
            },

            about: {
              gap: "1rem",
              titleFontSize: "2rem",
              lineHeight: "1.5",
            },

            bubbles: {
              bubbleGap: "1rem",
              bubblesGap: "1rem",

              bubble1Color: "#BA3963",
              bubble2Color: "#FFD600",
              bubble3Color: "#00EDA6",

              fontSize: "1rem",
            },
          }}
        >
          <ExamplePage />
        </PropProvider>
      </div>
    </div>
  );
}
