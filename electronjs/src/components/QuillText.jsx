import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * Function Component for WYSIWYG text editor
 */
function QuillText() {
  const [value, setValue] = useState('');

  /**
   * Prints text to console before adding it to the function component state
   * 
   * @param {HTML} text HTML-formatted text from the user
   */
  const handleChange = (text) => {
    console.log(text);
    setValue(text);
  }

  return (
    <ReactQuill theme="snow" value={value} onChange={handleChange}/>
  );
}

export default QuillText;
