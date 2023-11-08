"use client"
import { Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    CognitoIdentityProviderClient, RespondToAuthChallengeCommand,
    InitiateAuthCommand, ChangePasswordCommand,
    ForgotPasswordCommand, ConfirmForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider"
import { useFormData } from '../context/authContext';

const Page = () => {
    const [code, setCode] = useState<any>();
    const [newPass, setNewPass] = useState<any>();
    const { username } = useFormData();

    const confirmForgotPassword = async (newPassword: string, code: string) => {
        const params = {
            ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
            ConfirmationCode: code,
            Password: newPassword,
            Username: username,
        };
        const cognitoClient = new CognitoIdentityProviderClient({
            region: process.env.NEXT_PUBLIC_COGNITO_REGION
        })

        try {
            const response = await cognitoClient.send(new ConfirmForgotPasswordCommand(params));
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };
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
                    placeholder='Enter verification code'
                    onChange={(e: any) => {
                        setCode(e.target.value)
                    }} />
                    <Input type="text"
                    placeholder='Enter new password'
                    onChange={(e: any) => {
                        setNewPass(e.target.value)
                    }} />
                <Button
                    border={"1px solid"}
                    width={"100%"}
                    onClick={() => {
                        (!code && !newPass) && alert("Fields are empty")
                        confirmForgotPassword(newPass, code)
                    }}>Change Password</Button>
                
            </Flex>
        </Flex>
    )
}

export default Page
