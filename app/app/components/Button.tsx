import React from "react";
import { InterfaceButton } from "../interface/Interface";

export default function Button({ text, onClick }: InterfaceButton) {
  return (
    <button
      className="rounded-b-lg bg-slate-950 p-3 text-white font-light text-sm tracking-wide"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
