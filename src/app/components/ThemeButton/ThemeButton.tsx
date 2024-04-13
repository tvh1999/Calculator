"use client";
import React from "react";
import { motion } from "framer-motion";

interface ThemeTypes {
  slug: string;
  layoutId: string;
  themePreset: string;
  themeHandler: (theme: string) => void;
}

function ThemeButton({
  slug,
  layoutId,
  themePreset,
  themeHandler,
}: ThemeTypes) {
  return (
    <li
      data-activedtheme={themePreset === slug ? true : false}
      className="max-w-full w-4 min-h-4 bg-transparent hover:cursor-pointer"
      onClick={() => themeHandler(slug)}
    >
      {themePreset === slug && (
        <motion.div
          layoutId={layoutId}
          className="max-w-full w-4 min-h-4 rounded-full bg-[var(--result-and-theme-icon-color-theme)]"
        />
      )}
    </li>
  );
}

export default ThemeButton;
