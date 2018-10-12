import React from "react";
import EditorRichTextEditor from "../editor-richtext-editor";
import EditorSnippetSelector from "../editor-snippet-selector";

class EditorContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedInput: "Type here"
    };
  }

  updateRichtext = value => {
    this.setState({
      selectedInput: value
    });
  };

  updateSnippet = value => {
    this.setState({
      selectedInput: `${this.state.selectedInput} ${value}`
    });
  };

  render() {
    const { selectedInput } = this.state;
    return (
      <div>
        <EditorRichTextEditor
          selectedText={selectedInput}
          onChange={this.updateRichtext}
        />
        <EditorSnippetSelector onSelect={this.updateSnippet} />
      </div>
    );
  }
}

export default EditorContainer;
