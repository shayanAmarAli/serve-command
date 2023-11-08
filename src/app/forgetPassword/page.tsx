"use client"
import { Box, Input, Flex, Button } from '@chakra-ui/react'
import {
    CognitoIdentityProviderClient, RespondToAuthChallengeCommand,
    InitiateAuthCommand, ChangePasswordCommand,
    ForgotPasswordCommand, ConfirmForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
    const [phone, setPhone] = useState<any>();
    const router = useRouter();

    const cognitoClient = new CognitoIdentityProviderClient({
        region: process.env.NEXT_PUBLIC_COGNITO_REGION
    })

    const forgetPassHandler = async () => {
        const params = {
            ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
            Username: phone,
        };
        try {
            const response = await cognitoClient.send(new ForgotPasswordCommand(params));
            response.$metadata.httpStatusCode == 200 && router.push("/confirmPass")
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    // const confirmForgotPassword = async (phone: string, newPassword: string) => {
    //     const params = {
    //         ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
    //         ConfirmationCode: "520227",
    //         Password: newPassword,
    //         Username: phone,
    //     };

    //     try {
    //         const response = await cognitoClient.send(new ConfirmForgotPasswordCommand(params));
    //         console.log(response);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    return (
        <>
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
                        }}>Forget Password</Button>
                </Flex>
            </Flex>
        </>
    )
}

export default Page

// verifyCode && confirmForgotPassword(verifyCode, phone)
