"use client";

import { useEffect, useState } from "react";
import { useProps } from "./PropProvider";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Contrast,
  GripVertical,
  MousePointerClick,
  Palette,
  Ruler,
  Type,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { getDefaultProps } from "@/lib/default-props";

export const ModTool = () => {
  const { setProps } = useProps();

  const [toolPosition, setToolPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isToolOpen, setIsToolOpen] = useState(false);
  const [isToolDragging, setIsToolDragging] = useState(false);

  // initial positioning
  useEffect(() => {
    if (window === undefined) return;

    setToolPosition({
      x: window === undefined ? 0 : window.innerWidth / 2 - 150,
      y: 20,
    });
  }, []);

  // drag handling
  useEffect(() => {
    if (window === undefined) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isToolDragging) {
        setToolPosition({
          x: e.clientX - 20,
          y: e.clientY - 20,
        });
      }
    };

    const handleMouseUp = () => {
      setIsToolDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isToolDragging]);

  const [principleToggles, setPrincipleToggles] = useState({
    badInnerSpacing: false,
    badOuterSpacing: false,

    tooManyColors: false,
    tooFewColors: false,

    badFontSize: false,
    badFontWeight: false,

    badContrast: false,

    // TODO: implement in default props
    tooLittleInteractivity: false,
    tooMuchInteractivity: false,
  });

  useEffect(() => {
    // always reset everything to normal first
    setProps(getDefaultProps());

    if (principleToggles.badInnerSpacing) {
      setProps((props) => ({
        ...props,
        lineHeight: "1",
        header: {
          ...props.header,
          titleGap: "0",
          linksGap: "0",
          blockPadding: "0",
        },
        hero: {
          ...props.hero,
          lineHeight: "1",
          titleGap: "0",
        },
        cards: {
          ...props.cards,
          lineHeight: "1",
          padding: "0",
          cardGap: "0",
        },
        about: {
          ...props.about,
          lineHeight: "1",
          gap: "0",
        },
        bubbles: {
          ...props.bubbles,
          lineHeight: "1",
          gap: "0",
          bubbleGap: "0",
        },
        footer: {
          ...props.footer,
          gap: "0",
        },
      }));
    }

    if (principleToggles.badOuterSpacing) {
      setProps((props) => ({
        ...props,
        lineHeight: "1",
        sectionGapPx: 0,
        header: {
          ...props.header,
          sidePadding: "0",
        },
        hero: {
          ...props.hero,
          marginTop: "0",
        },
        cards: {
          ...props.cards,
          cardsGap: "0",
        },
        about: {
          ...props.about,
        },
        bubbles: {
          ...props.bubbles,
          bubblesGap: "0",
        },
        footer: {
          ...props.footer,
        },
      }));
    }

    if (principleToggles.tooManyColors) {
      setProps((props) => ({
        ...props,
        primaryColor: props.primaryColor,
        primaryColorCopy1: "#61ce8b",
        primaryColorCopy2: "#ceab61",

        secondaryColor: props.secondaryColor,
        secondaryColorCopy1: "#1a32cf",
        secondaryColorCopy2: "#901acf",

        tertiaryColor: props.tertiaryColor,
        tertiaryColorCopy1: "#390b52",

        header: {
          ...props.header,
        },
        hero: {
          ...props.hero,
          titleColor: "#aab61c",
          textColor: "#1c61b6",
        },
        cards: {
          ...props.cards,
          textColor: "#1cb661",
        },
        about: {
          ...props.about,
          textColor: "#b61c61",
        },
        bubbles: {
          ...props.bubbles,
          bubble1Color: "#1cb6b6",
        },
        footer: {
          ...props.footer,
          textColor: "#b61cb6",
        },
      }));
    }

    if (principleToggles.tooFewColors) {
      setProps((props) => ({
        ...props,
        primaryColor: "#000",
        primaryColorCopy1: "#000",
        primaryColorCopy2: "#000",

        secondaryColor: "#000",
        secondaryColorCopy1: "#000",
        secondaryColorCopy2: "#000",

        tertiaryColor: "#000",
        tertiaryColorCopy1: "#000",

        header: {
          ...props.header,
        },
        hero: {
          ...props.hero,
        },
        cards: {
          ...props.cards,
        },
        about: {
          ...props.about,
        },
        bubbles: {
          ...props.bubbles,
          bubble1Color: "#000",
          bubble2Color: "#fff",
          bubble3Color: "#fff",
        },
        footer: {
          ...props.footer,
        },
      }));
    }

    if (principleToggles.badFontSize) {
    }

    if (principleToggles.badFontWeight) {
    }

    if (principleToggles.badContrast) {
    }

    if (principleToggles.tooLittleInteractivity) {
      setProps((props) => ({
        ...props,
        interactiveEnabled: false,
        overinteractiveEnabled: false,
      }));
    }

    if (principleToggles.tooMuchInteractivity) {
      setProps((props) => ({
        ...props,
        interactiveEnabled: true,
        overinteractiveEnabled: true,
      }));
    }
  }, [principleToggles, setProps]);

  return (
    <div
      className={cn(
        "fixed bg-white rounded-lg flex flex-col p-3 shadow-lg z-50 border-2 border-red-300"
      )}
      style={{
        top: toolPosition.y - 4,
        left: toolPosition.x - 4,
      }}
    >
      {/* Header */}
      <div className="flex items-center w-[250px] justify-between">
        <div className="flex gap-2">
          <GripVertical
            size={16}
            className={cn(
              "text-gray-400",
              !isToolDragging && "cursor-grab",
              isToolDragging && "cursor-grabbing"
            )}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsToolDragging(true);
            }}
          />

          <span className="text-sm font-bold">Mod Tool</span>
        </div>

        <div className="cursor-pointer">
          {!isToolOpen && (
            <ChevronDownIcon
              className="text-gray-400"
              size={16}
              onClick={() => setIsToolOpen(true)}
            />
          )}

          {isToolOpen && (
            <ChevronUpIcon
              className="text-gray-400"
              size={16}
              onClick={() => setIsToolOpen(false)}
            />
          )}
        </div>
      </div>

      {isToolOpen && (
        <div className="pt-4 mt-4 flex flex-col gap-4 p-2">
          <h1 className="text-lg font-bold border-b pb-4 flex items-center gap-2">
            <span>Spacing</span>
            <Ruler />
          </h1>

          <div className="flex justify-between">
            <span>Bad Inner Spacing</span>

            <Switch
              checked={principleToggles.badInnerSpacing}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  badInnerSpacing: state,
                }))
              }
            />
          </div>

          <div className="flex justify-between">
            <span>Bad Outer Spacing</span>

            <Switch
              checked={principleToggles.badOuterSpacing}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  badOuterSpacing: state,
                }))
              }
            />
          </div>

          <h1 className="text-lg font-bold border-b pb-4 mt-4 flex items-center gap-2">
            <span>Color</span>
            <Palette />
          </h1>

          <div className="flex justify-between">
            <span>Too Many Colors</span>

            <Switch
              checked={principleToggles.tooManyColors}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  tooManyColors: state,
                  tooFewColors: false,
                }))
              }
            />
          </div>

          <div className="flex justify-between">
            <span>Too Few Colors</span>

            <Switch
              checked={principleToggles.tooFewColors}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  tooFewColors: state,
                  tooManyColors: false,
                }))
              }
            />
          </div>

          <h1 className="text-lg font-bold mt-4 pb-4 border-b flex items-center gap-2">
            <span>Font</span>
            <Type />
          </h1>

          <div className="flex justify-between">
            <span>Bad Font Size</span>

            <Switch
              checked={principleToggles.badFontSize}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  badFontSize: state,
                }))
              }
            />
          </div>

          <div className="flex justify-between">
            <span>Bad Font Weight</span>

            <Switch
              checked={principleToggles.badFontWeight}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  badFontWeight: state,
                }))
              }
            />
          </div>

          <h1 className="text-lg font-bold mt-4 pb-4 border-b flex items-center gap-2">
            <span>Contrast</span>
            <Contrast />
          </h1>

          <div className="flex justify-between">
            <span>Bad Contrast</span>

            <Switch
              checked={principleToggles.badContrast}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  badContrast: state,
                }))
              }
            />
          </div>

          <h1 className="text-lg font-bold mt-4 pb-4 border-b flex items-center gap-2">
            <span>Interactivity</span>
            <MousePointerClick />
          </h1>

          <div className="flex justify-between">
            <span>Too Little Interactivity</span>

            <Switch
              checked={principleToggles.tooLittleInteractivity}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  tooLittleInteractivity: state,
                  tooMuchInteractivity: false,
                }))
              }
            />
          </div>

          <div className="flex justify-between">
            <span>Too Much Interactivity</span>

            <Switch
              checked={principleToggles.tooMuchInteractivity}
              onCheckedChange={(state) =>
                setPrincipleToggles((toggles) => ({
                  ...toggles,
                  tooMuchInteractivity: state,
                  tooLittleInteractivity: false,
                }))
              }
            />
          </div>

          <button
            className="mt-4 self-end hover:bg-slate-100 p-3 py-2 rounded-lg border transition-colors border-slate-200 active:bg-slate-200"
            onClick={() => {
              setPrincipleToggles({
                badInnerSpacing: false,
                badOuterSpacing: false,
                tooManyColors: false,
                tooFewColors: false,
                badFontSize: false,
                badFontWeight: false,
                badContrast: false,
                tooLittleInteractivity: false,
                tooMuchInteractivity: false,
              });
            }}
          >
            Reset All
          </button>
        </div>
      )}
    </div>
  );
};
