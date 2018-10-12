import React from "react";
import ContentEditable from "react-contenteditable";

const EditorRichTextEditor = ({ selectedText, onChange }) => {
  const handleChange = ev => {
    onChange(ev.target.value);
  };

  return (
    <ContentEditable
      html={selectedText} // innerHTML of the editable div
      disabled={false} // use true to disable editing
      onChange={handleChange} // handle innerHTML change
    />
  );
};

export default EditorRichTextEditor;
