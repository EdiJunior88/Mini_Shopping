import React from "react";
import { InterfaceButton } from "../interface/Interface";

export default function Button({ text, onClick, className }: InterfaceButton) {
  return (
    <button
      className={`w-full rounded-b-lg bg-slate-950 p-3 text-sm font-light tracking-wide text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
