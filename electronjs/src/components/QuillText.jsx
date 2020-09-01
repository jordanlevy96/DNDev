import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useSelector, useDispatch } from 'react-redux';
import { saveText } from '../redux/actions';

/**
 * WYSIWYG text editor
 */
export default function QuillText(props) {
const dispatch = useDispatch();

const [value, setValue] = useState(props.value);
const [title] = useState('');

const handleChange = () => {
  console.log(value);
  dispatch(saveText(value));
}

  return (
    <div>
      <h1>{title}</h1>
      <ReactQuill theme="snow" value={value} onChange={setValue}/>
      <button onClick={handleChange}>Save</button>
    </div>
  );
}

