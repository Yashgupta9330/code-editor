import React, { useEffect } from 'react';
const Input = ({username, setUsername , language, setLanguage}) => {
   

   

   const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log("Selected Language:", selectedLanguage);
    setLanguage(selectedLanguage);
};


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div className='flex  border rounded-md h-14 gap-2 w-full bg-black'>
            <div className='flex justify-center items-center px-4 gap-8'>
                <div className='justify-start w-52 flex justify-center items-center'> 
                    <label htmlFor="language">Choose Language:</label>
                    <select 
                        className='rounded-md cursor-pointer w-full h-full' 
                        value={language} 
                        onChange={handleLanguageChange}
                        id="language"
                    >
                        <option value="cpp">C++</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="javascript">Javascript</option>
                    </select>
                </div>
                <div className="w-80  flex justify-center items-center">
                    <label htmlFor="username">Username:</label>
                    <div className="relative w-full min-w-[200px] h-10">
                        <input
                            value={username}
                            className="peer w-full h-full bg-white text-blue-gray-700 font-sans font-normal rounded-md px-2 py-2 text-md"
                            placeholder="Enter your Username" 
                            onChange={handleUsernameChange}
                            id="username"
                        />
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Input;
