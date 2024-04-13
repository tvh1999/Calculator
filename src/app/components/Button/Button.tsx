import React from "react";

interface VoidFncType {
  (value?: string): void;
}

function Button({
  text,
  addingValueFnc,
  deleteOperandFnc,
  nukeOperandFnc,
  calculateResult,
}: {
  text: string;
  addingValueFnc: VoidFncType;
  nukeOperandFnc: VoidFncType;
  deleteOperandFnc: VoidFncType;
  calculateResult: VoidFncType;
}) {
  const renderNumberButtons = text !== "DEL" &&
    text !== "RESET" &&
    text !== "=" && (
      <button
        className={
          "flex justify-center items-center max-w-full min-h-16 rounded-md xl:w-full hover:cursor-pointer bg-[var(--button-bg-color-theme)] text-[var(--button-color-theme)] text-32 w-16 focus:bg-[var(--focus-button-bg-color-theme)]"
        }
        type="button"
        onClick={() => addingValueFnc(text)}
      >
        <strong className="mt-1">{text === "*" ? "x" : text}</strong>
      </button>
    );

  const renderDelButton = text === "DEL" && (
    <button
      className={
        "flex justify-center items-center max-w-full min-h-16 rounded-md xl:w-full hover:cursor-pointer  bg-[var(--reset-and-del-bg-color-theme)] text-white text-20 w-16 focus:bg-[var(--focus-reset-and-del-bg-color-theme)]"
      }
      type="button"
      onClick={() => deleteOperandFnc()}
    >
      <strong className="mt-1">{text}</strong>
    </button>
  );

  const renderResetButton = text === "RESET" && (
    <button
      className={
        "flex justify-center items-center max-w-full w-full min-h-16 rounded-md xl:w-full hover:cursor-pointer  bg-[var(--reset-and-del-bg-color-theme)] text-white text-20 focus:bg-[var(--focus-reset-and-del-bg-color-theme)] col-span-2"
      }
      type="button"
      onClick={() => nukeOperandFnc()}
    >
      <strong className="mt-1">{text}</strong>
    </button>
  );

  const renderResultButton = text === "=" && (
    <button
      className={
        "flex justify-center items-center max-w-full min-h-16 rounded-md xl:w-full hover:cursor-pointer  text-32 col-span-2 w-full bg-[var(--result-and-theme-icon-color-theme)] text-[var(--result-text-color)] focus:bg-[var(--focus-result-bg-color)]"
      }
      type="button"
      onClick={() => calculateResult()}
    >
      <strong className="mt-1">{text}</strong>
    </button>
  );
  return (
    <>
      {renderNumberButtons}
      {renderDelButton}
      {renderResetButton}
      {renderResultButton}
    </>
  );
}

export default Button;
