"use client";

export function ClickMeButton() {
  return (
    <button
      onClick={() => alert("button clicked")}
      className="rounded-md bg-blue-500 p-2 text-white"
    >
      Click me
    </button>
  );
}
