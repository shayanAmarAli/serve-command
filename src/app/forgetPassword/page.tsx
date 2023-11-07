"use client"
import { Box, Input, Flex, Button } from '@chakra-ui/react'
import {
    CognitoIdentityProviderClient, RespondToAuthChallengeCommand,
    InitiateAuthCommand, ChangePasswordCommand,
    ForgotPasswordCommand, ConfirmForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider"
import { useState } from 'react';

const Page = () => {
    const [phone, setPhone] = useState();

    const cognitoClient = new CognitoIdentityProviderClient({
        region: "us-east-1"
    })

    const forgetPassHandler = async () => {
        const params = {
            ClientId: "1727702mdj4021tmc218s3efab",
            Username: phone,
        };
        try {
            const response = await cognitoClient.send(new ForgotPasswordCommand(params));
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
                placeholder='Enter your phone number'
                onChange={(e: any) => {
                    setPhone(e.target.value)
                }} />
                <Button 
                border={"1px solid"}
                width={"100%"}
                onClick={() => {
                    forgetPassHandler()
                    phone ? alert("Verification is sent to your number") : alert("Enter your phone no")
                }}>Forget Password</Button>
            </Flex>
        </Flex>
    )
}

export default Page
