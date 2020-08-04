import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * Component for WYSIWYG text editor
 */
export default class QuillText extends React.Component {
  handleChange = (text) => {
    console.log(text);
  }

  render() {
    return (
      <ReactQuill theme="snow" value={this.props.value} onChange={this.handleChange}/>
    );
  }
  
}
