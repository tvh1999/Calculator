import React from "react";
import Button from "../Button/Button";
import { BUTTONS_ARRAY } from "@/BUTTONS_ARRAY";

interface VoidFncType {
  (value?: string): void;
}

function CalcNumberButtonsContainer({
  addingValueFnc,
  deleteOperandFnc,
  nukeOperandFnc,
  calculateResult,
}: {
  addingValueFnc: VoidFncType;
  deleteOperandFnc: VoidFncType;
  nukeOperandFnc: VoidFncType;
  calculateResult: VoidFncType;
}) {
  const renderButtons = BUTTONS_ARRAY.map((button) => (
    <Button
      key={crypto.randomUUID()}
      text={button}
      addingValueFnc={addingValueFnc}
      deleteOperandFnc={deleteOperandFnc}
      nukeOperandFnc={nukeOperandFnc}
      calculateResult={calculateResult}
    />
  ));
  return (
    <div className="grid grid-cols-4 gap-3 max-w-full w-full min-h-full bg-[var(--buttons-bg-container)] p-6 rounded-lg xl:gap-6">
      {renderButtons}
    </div>
  );
}

export default CalcNumberButtonsContainer;
