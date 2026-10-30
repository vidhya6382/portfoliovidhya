import { useState } from "react";

// A button that copies text to the clipboard and briefly shows the result.
export default function CopyButton({ text, label, className = "btn ghost" }) {
  const [state, setState] = useState("idle");

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = false;
    }
    setState(ok ? "copied" : "failed");
    setTimeout(() => setState("idle"), 1600);
  }

  const shown = state === "copied" ? "Copied" : state === "failed" ? "Select and copy" : label;
  return (
    <button className={className} type="button" onClick={copy}>
      {shown}
    </button>
  );
}
