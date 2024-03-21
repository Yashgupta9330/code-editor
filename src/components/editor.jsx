
import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import codeTemplates from '../assets/template';


const Editor = ({ oncodeChange  , oninputChange, language }) => {
  const editorRef = useRef(null);
  const inputRef = useRef(null);

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
        oncodeChange(codes);
        console.log(codes);
      });
    };

    initEditor();
  }, [oncodeChange]);

  useEffect(() => {
    const initInput = () => {
      inputRef.current = Codemirror.fromTextArea(
        document.getElementById('timeEditor'),
        {
          mode: { name: 'javascript', json: true },
          theme: 'dracula',
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );

      inputRef.current.on('change', (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        oninputChange(code);
      });
    };

    initInput();
  }, [oninputChange]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(codeTemplates[language]);
      oncodeChange(codeTemplates[language]);
    }
  }, [language,oncodeChange]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setValue('# Write your input here');
    }
  }, [language,oncodeChange]);
  
  
   
  
  
   

  return (
    <div className="flex">
      <div className="w-2/3">
        <textarea ref={editorRef} id="realtimeEditor" />
      </div>
      <div className="w-1/3">
        <textarea ref={inputRef} id="timeEditor" />
      </div>
    </div>
  );
};

export default Editor;
