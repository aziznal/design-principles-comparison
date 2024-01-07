"use client";

import { useEffect, useState } from "react";
import { useProps } from "./PropProvider";
import { ChevronDownIcon, ChevronUpIcon, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

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
        setToolPosition({ x: e.clientX - 20, y: e.clientY - 20 });
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

  return (
    <div
      className="absolute bg-white rounded-lg flex flex-col p-3 shadow-lg"
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

      {isToolOpen && <div className="mt-4">Content (Todo)</div>}
    </div>
  );
};
