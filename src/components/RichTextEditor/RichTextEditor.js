import React, { useRef } from "react";
import JoditEditor from "jodit-react";

export const RichTextEditor = ({richTextContent,setRichTextEditor}) => {
  const editor = useRef(null);

  return (
    <>
      <JoditEditor
        ref={editor}
        value={richTextContent.body}
        tabIndex={1} 
        onBlur={(e) => setRichTextEditor(richTextContent => ({...richTextContent,body:e}))}
      />
    </>
  );
};
