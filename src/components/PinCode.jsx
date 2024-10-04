import '@mantine/core/styles.css';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Flex, MantineProvider, PinInput } from '@mantine/core';

export const PinCode = () => {
    const navigate = useNavigate();
  return (
    <MantineProvider>
    <Flex>
    <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />
    
    </Flex>
    </MantineProvider>
  );
};
