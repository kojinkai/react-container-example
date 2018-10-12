import React from "react";

const EditorSnippetSelector = ({ onSelect }) => (
  <div>
    {/* you would obviously be mapping over an array here */}
    <button onClick={() => onSelect("With Added foo")}>Add foo</button>
    <button onClick={() => onSelect("now add some bar")}>Add bar</button>
    <button onClick={() => onSelect("how about some baz")}>Add baz</button>
  </div>
);

export default EditorSnippetSelector;
