import '@mantine/core/styles.css';
import { MantineProvider,PasswordInput, Text, Group, Anchor, Flex, Box } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
    const [inputString,setInputString] = useState('')
    const [progress,setProgress] = useState(0)
    
   


      useEffect(()=>{
        let calculatedProgress = 0;

        if(inputString.match( /[A-Z]/ )){
          calculatedProgress += 25;

        }
        if(inputString.match(/\d/)){
          calculatedProgress += 25;
        }
        
        if(inputString.match(/[!@#$%^&*()_+]/g )){
          calculatedProgress += 25;
          
        }
        if(inputString.length >= 8 ){
          calculatedProgress += 25;
        }
      setProgress( calculatedProgress);
      },[inputString])


    
    
return (
    <>
        <MantineProvider>
     <Flex>
        <Box >
    <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="your-password" size="sm" fw={500}>
          Enter password
        </Text>

      </Group>
      <PasswordInput value={inputString} onChange={(e)=>setInputString(e.target.value)} placeholder="Your password" id="your-password" 
      style={{ width: '250px' }} />
      <progress id="file" value={progress} max="100">  </progress>
      <label>
        <ul>
            <li>Has at least 6 characters</li>
            <li>Includes number</li>
            <li>Includes lowercase letter</li>
            <li>Includes uppercase letter</li>
            <li>Includes special symbol</li>
        </ul>
      </label>
      </Box>
        </Flex>
      </MantineProvider>
        
    </>

)
}
