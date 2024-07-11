import { forwardRef, ForwardedRef, HTMLAttributes } from "react";

interface NoteProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  initialPos?: { x: number; y: number };
}

const Note = forwardRef(
  (
    { content, initialPos, ...props }: NoteProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          left: `${initialPos?.x}px`,
          top: `${initialPos?.y}px`,
          border: "1px solid black",
          userSelect: "none",
          padding: "10px",
          width: "200px",
          cursor: "move",
          backgroundColor: "lightyellow",
        }}
        {...props}
      >
        📌 {content}
      </div>
    );
  }
);

// Set the display name for the component (for React DevTools and error messages)
Note.displayName = "Note";

export default Note;
