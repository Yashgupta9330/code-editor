
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Table from './table';


const OutputEditor = () => {
  const [codes,setCodes]=useState([]);
  useEffect(() => {
    const submit = async () => {
      try {
        const username = window.location.pathname.split('/').pop();
        console.log(username);
        const response = await axios.get(`https://codeditor-server.onrender.com/response?username=${username}`);
        console.log(response.data);
        if(response.data){
        setCodes(response.data);
        }
        console.log("codes",codes);


        if (!response.data || response.data.length === 0) {
          console.log('Response data is null, calling submit again');
          submit();
        }
      } catch (error) {
        console.error(error);
      }
    };
    submit();
  }, []); 
  return (
    <div className='w-full h-screen text-white bg-black'>
    <div className='mx-auto h-[700px] overflow-auto'>
    <table className=" border my-8 mx-auto  bg-black">
      <thead className='border'>
        <tr>
          <th className='w-[120px]'>Username</th>
          <th className='w-[400px]'>Code</th>
          <th className='w-32'>Language</th>
          <th className='w-48'>Stdin</th>
          <th className='w-48'>Stdout</th>
          <th className='w-48'>Timestamp</th>
        </tr>
      </thead>
      <tbody className="overflow-auto">
        <Table codes={codes} />
      </tbody>
    </table>
  </div>   
  </div>
  
  );
};

export default OutputEditor;
