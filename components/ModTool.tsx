"use client";

import { useEffect, useState } from "react";
import { useProps } from "./PropProvider";
import { ChevronDownIcon, ChevronUpIcon, GripVertical } from "lucide-react";
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
        "absolute bg-white rounded-lg flex flex-col p-3 shadow-lg opacity-50 hover:opacity-100 transition-opacity hover:delay-0 delay-1000 duration-200 z-50"
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
        <div className="pt-4 mt-4 border-t flex flex-col gap-4 p-2">
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
        </div>
      )}
    </div>
  );
};
