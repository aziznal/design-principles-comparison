"use client";

import { useEffect, useState } from "react";
import { useProps } from "./PropProvider";
import { Wrench } from "lucide-react";

export const ModTool = () => {
  const props = useProps();

  const [toolPosition, setToolPosition] = useState({
    x: window.innerWidth - 80,
    y: 20,
  });
  const [isToolOpen, setIsToolOpen] = useState(false);
  const [isToolDragging, setIsToolDragging] = useState(false);

  useEffect(() => {
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
      className="absolute w-14 h-14 bg-blue-600 rounded-full flex flex-col justify-end items-center cursor-pointer hover:bg-blue-700 transition-colors duration-200 text-white"
      style={{
        top: toolPosition.y,
        left: toolPosition.x,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsToolDragging(true);
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsToolOpen((state) => !state);
      }}
    >
      <Wrench size={24} />

      {isToolOpen && (
        <div className="absolute w-40 h-40 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">Mod Tool Open!</div>
        </div>
      )}
    </div>
  );
};