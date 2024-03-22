
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Table from './table';
import { useParams} from 'react-router-dom';

const OutputEditor = () => {
  const [codes,setCodes]=useState([]);
  const { username, token } = useParams();
  const [secondcode,setSecondcode] = useState([]);
  
  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the first endpoint
        const response = await axios.get(`http://localhost:4000/response?username=${username}`);
        if (response.data && response.data.length >= 0) {
          setCodes(response.data);
        } 
        else {
          console.log('Response data is null or empty');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); 
  
  useLayoutEffect(() => {
  
    const secondFetchData = async () => {
      try {
        if (token) {
          const secondResponse = await axios.get(`http://localhost:4000/output?token=${token}&username=${username}`);
          if (secondResponse.data && secondResponse.data.length > 0) {
             console.log("second response",secondResponse.data);
             setSecondcode(secondResponse.data);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    secondFetchData();

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
