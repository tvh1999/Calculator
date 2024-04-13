"use client";
import React from "react";
import Cookies from "js-cookie";
import { THEME_1, THEME_2, THEME_3 } from "@/utilities/THEME_COLORS";
import ThemeButton from "../ThemeButton/ThemeButton";

const THEMES_BUTTONS: { key: string; slug: string }[] = [
  { key: crypto.randomUUID(), slug: "1" },
  { key: crypto.randomUUID(), slug: "2" },
  { key: crypto.randomUUID(), slug: "3" },
];

function ThemeToggle({ initialTheme }: { initialTheme: string }) {
  const [themePreset, setThemePreset] = React.useState(initialTheme);

  const id = React.useId();
  const themeHandler = function (themeNumber: string): void {
    const nextTheme = themeNumber;
    setThemePreset(nextTheme);
    Cookies.set("theme", nextTheme, { expires: 1000 });

    const root = document.documentElement;
    const colors =
      nextTheme === "1" ? THEME_1 : nextTheme === "2" ? THEME_2 : THEME_3;

    root.setAttribute("data-colors-theme", nextTheme);
    Object.entries(colors).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    );
  };

  const buttonsRender = THEMES_BUTTONS.map((value) => (
    <ThemeButton
      key={value.key}
      slug={value.slug}
      layoutId={id}
      themePreset={themePreset}
      themeHandler={themeHandler}
    />
  ));

  return (
    <div className="absolute right-6 top-8 xl:right-[34%] xl:top-[11%]">
      <div className="flex justify-end gap-x-4 text-12 text-[var(--text-color-theme)]">
        <span>1</span>
        <span>2</span>
        <span className="mr-2">3</span>
      </div>
      <div className="flex items-center gap-6">
        <h4 className="text-[var(--text-color-theme)] uppercase text-12">
          <strong>Theme</strong>
        </h4>
        <ul className="flex justify-between max-w-full w-[71px] min-h-6 rounded-3xl bg-[var(--buttons-bg-container)] p-1">
          {buttonsRender}
        </ul>
      </div>
    </div>
  );
}

export default ThemeToggle;
