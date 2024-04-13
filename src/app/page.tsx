"use client";
import React from "react";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import CalcNumberButtonsContainer from "./components/CalcNumberButtonsContainer/CalcNumberButtonsContainer";

function Calculator({ initialTheme }: { initialTheme: string }) {
  const [displayContent, setDisplayContent] = React.useState("0");
  const addingValueFnc = (value?: string): void =>
    setDisplayContent((prevState) => {
      if (prevState === "0" && value !== "0")
        return String(prevState).slice(1) + value;
      if (value === "+" || value === "-" || value === "*" || value === "/")
        return prevState + ` ${value} `;
      return prevState + value;
    });
  const deleteOperandFnc = (): void =>
    setDisplayContent((prevState) => {
      console.log(prevState.length);
      if (prevState.length <= 1) return "0";
      return String(prevState).slice(0, -1);
    });
  const nukeOperandFnc = (): void => setDisplayContent("0");
  const calculateResult = function (): void {
    const indirectEval = eval;
    const finalResult = indirectEval(displayContent);
    setDisplayContent(finalResult);
  };
  return (
    <div className="max-w-full xl:w-1/3">
      <header className="flex justify-between mb-8">
        <h1 className="text-32 text-[var(--text-color-theme)] font-extrabold">
          calc
        </h1>
        <ThemeToggle initialTheme={initialTheme} />
      </header>
      <main className="">
        <div className="max-w-full w-full min-h-20 flex justify-end items-center py-3 px-6 bg-[var(--result-bg-color-theme)] rounded-lg mb-6">
          <span className="max-w-full text-40 text-[var(--text-color-theme)]">
            {displayContent}
          </span>
        </div>
        <CalcNumberButtonsContainer
          addingValueFnc={addingValueFnc}
          deleteOperandFnc={deleteOperandFnc}
          nukeOperandFnc={nukeOperandFnc}
          calculateResult={calculateResult}
        />
      </main>
    </div>
  );
}

export default Calculator;
