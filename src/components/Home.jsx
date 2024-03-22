import React, { useRef, useState } from 'react';
import Editor from './editor';
import Input from './input';
import codeTemplates from '../assets/template';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';


const Home = ({setData}) => {
  const stdinRef = useRef('//Enter your input here');
  const [language, setLanguage] = useState('cpp');
  const [username, setUsername] = useState('');
  const codeRef = useRef('');
 const navigate=useNavigate();


    const handleSubmit = async () => {
      console.log(codeRef.current);
      console.log(stdinRef.current);
      console.log(username);
      console.log(language);
        const payload = {
            language_id: language,
            username,
            code: codeRef.current,
            stdin: stdinRef.current
        };
        console.log(payload);
        try {
            const response = await axios.post("http://localhost:4000/run", payload);
            console.log(response); 
            if (response.data.token) {
                console.log(response.data.token);
                console.log("setting data")
                console.log(response.data)
                setData(response.data);
                navigate(`/${username}/${response.data.token}`);
            } else {
                console.error("Token not found in response data"); 
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRunClick = () => {
        handleSubmit();
    };

    return (
      
         <form className="flex flex-col gap-2 px-2 py-2 w-full h-full border rounded-md relative">
            <Input
                username={username}
                setUsername={setUsername}
                language={language}
                setLanguage={setLanguage}
            />
            <Editor
                className='w-2/3'
                 oncodeChange={(code)=>{
                  codeRef.current=code;
                 }}
                oninputChange={(input) => {
                    stdinRef.current = input;
                }}
                language={language}
            />
            <div className="absolute right-44 top-6 text-white cursor-pointer ">
                <div className=" rounded-md w-32 text-center h-8 text-xl bg-green-600 hover:bg-green-300 font-bold"
                     onClick={handleRunClick}>Run</div>
            </div>
        </form> 
       
       
    )
}

export default Home;
