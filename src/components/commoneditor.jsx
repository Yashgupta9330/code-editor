import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import codeTemplates from '../assets/template';


const CommonEditor = () => {
  const editorRef = useRef(null);
 

  useEffect(() => {
    const initEditor = () => {
      editorRef.current = Codemirror.fromTextArea(
        document.getElementById('realtimeEditor'),
        {
          mode: { name: 'javascript', json: true },
          theme: 'dracula',
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );

      editorRef.current.on('change', (instance, changes) => {
        const { origin } = changes;
        const codes = instance.getValue();
        console.log(codes);
      });
    };

    initEditor();
  }, []);


  return (
      <div className="w-full">
        <textarea ref={editorRef} id="realtimeEditor" />
      </div>
  );
};

export default CommonEditor;
