"use client"
import { Box, Button, Input, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFormData } from '../context/authContext';
import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"

const Page = () => {
    const [newPassword, setNewPassword] = useState('');
    const { userData, setUserData } = useFormData();

    const params: any = {
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: '1727702mdj4021tmc218s3efab',
        ChallengeResponses: {
            NEW_PASSWORD: newPassword,
            USERNAME: userData.username,
            SESSION: userData.session
        },
        Session: userData.session
    }

    const handleChangePassword = async () => {
        const cognitoClient = new CognitoIdentityProviderClient({
            region: "us-east-1"
        })
        const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand(params)

        try {
            const response = await cognitoClient.send(respondToAuthChallengeCommand)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <Flex
            border={"1px solid black"}
            borderRadius={"4px"}
            flexDir={"column"}
            height={"100vh"}
        >
            <Flex
                margin={"auto"}
                width={{ sm: "90%", md: "50%", lg: "30%" }}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                gap={"10px"}
            >
                <Input type="text"
                placeholder='Enter new password'
                onChange={(e: any) => {
                    setNewPassword(e.target.value)
                }}
                    value={newPassword} 
                    />
                <Button 
                border={"1px solid"}
                width={"100%"}
                onClick={()=>{
                    handleChangePassword()
                    newPassword ? alert("Login with your new password") : alert("Enter new password")
                    }}>Continue</Button>
            </Flex>
        </Flex>
    )
}

export default Page
