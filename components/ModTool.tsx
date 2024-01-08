"use client";

import { useEffect, useState } from "react";
import { useProps } from "./PropProvider";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Contrast,
  GripVertical,
  Palette,
  Ruler,
  Type,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { getDefaultProps } from "@/lib/default-props";

export const ModTool = () => {
  const { props, setProps } = useProps();

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
      x: window === undefined ? 0 : window.innerWidth / 2,
      y: 20,
    });
  }, []);

  // drag handling
  useEffect(() => {
    if (window === undefined) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isToolDragging) {
        // adding scroll offset to account if the page is scrolled
        const scrollX = window.scrollX || document.documentElement.scrollLeft;
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        setToolPosition({
          x: e.clientX - 20 + scrollX,
          y: e.clientY - 20 + scrollY,
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
  }, [principleToggles, setProps]);

  return (
    <div
      className={cn(
        "absolute bg-white rounded-lg flex flex-col p-3 shadow-lg z-50 border-2 border-red-300"
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
