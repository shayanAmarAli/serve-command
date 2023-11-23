"use client"
import { Box, Input, Flex, Button, Image, Text } from '@chakra-ui/react'
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
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"100vh"}
                w={{ "2xl": "1920px" }}
                background={"var(--gray-50, #F7FAFC)"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={{ "2xl": "32px" }}
                    flexShrink={0}
                    w={{ "2xl": "360px" }}
                    h={"auto"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={{ "2xl": "24px" }}
                        alignSelf={"stretch"}
                    >
                        <Image
                            src={"/Flattened.svg"}
                            w={{ "2xl": "33px" }}
                            h={{ "2xl": "34px" }}
                            fill={"#11190C"}
                        />
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={{ "2xl": "12px" }}
                            alignSelf={"stretch"}
                        >
                            <Text
                                alignSelf={"stretch"}
                                textAlign={"center"}
                                fontFamily={"Chivo"}
                                fontSize={{ "2xl": "30px" }}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={{ "2xl": "39.9px" }}
                                w={"100%"}
                                h={"auto"}
                            >
                                Reset Password
                            </Text>

                            <Text
                                alignSelf={"stretch"}
                                textAlign={"center"}
                                fontFamily={"Inter"}
                                fontSize={{ "2xl": "16px" }}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={{ "2xl": "24px" }}
                                w={"100%"}
                                h={"auto"}
                                color={"var(--gray-600, #475467)"}
                            >
                                No worries, we will help you reset your password.
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={{ "2xl": "32px" }}
                        alignSelf={"stretch"}
                        w={"100%"}
                        h={"auto"}
                    >
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={{ "2xl": "24px" }}
                            alignSelf={"stretch"}
                            borderRadius={"12px"}
                        >
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"flex-start"}
                                gap={{ "2xl": "4px" }}
                                alignSelf={"stretch"}
                            >
                                <Text
                                    w={"auto"}
                                    h={{ "2xl": "16px" }}
                                    alignSelf={"stretch"}
                                    textColor={"blackAlpha.700"}
                                    fontFamily={"Inter"}
                                    fontSize={{ "2xl": "12px" }}
                                    fontStyle={"normal"}
                                    fontWeight={600}
                                    lineHeight={{ "2xl": "16px" }}
                                    letterSpacing={{ "2xl": "0.3px" }}
                                    color={'var(--black-alpha-700, rgba(0, 0, 0, 0.64))'}
                                >
                                    Phone Number
                                </Text>

                                <Input
                                    display={"flex"}
                                    h={{ "2xl": "40px" }}
                                    w={"100%"}
                                    px={{ "2xl": "16px" }}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    gap={{ "2xl": "10px" }}
                                    borderRadius={"4px"}
                                    border={"1px solid var(--gray-200, #E2E8F0)"}
                                    background={"var(--white, #FFF)"}
                                    placeholder="Enter your phone number"
                                    fontSize={{ "2xl": "16px" }}
                                    fontStyle={"normal"}
                                    textColor={"var(--gray-400, #A0AEC0)"}
                                    fontFamily={"Inter"}
                                    lineHeight={"normal"}
                                    color={" var(--gray-400, #A0AEC0)"}
                                    fontWeight={400}
                                    // value={username}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Box>

                            <Box
                                typeof="Button"
                                display={"flex"}
                                h={{ "2xl": "40px" }}
                                px={{ "2xl": "16px" }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={{ "2xl": "8px" }}
                                alignSelf={"stretch"}
                                borderRadius={"6px"}
                                background={"var(--primary-main, #11190C)"}
                                onClick={forgetPassHandler}
                            >
                                <Text
                                    textColor={"white"}
                                    fontFamily={"Inter"}
                                    fontSize={{ "2xl": "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={600}
                                    lineHeight={{ "2xl": "24px" }}
                                >
                                    Send Code
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        display={"flex"}
                        h={{ "2xl": "40px" }}
                        px={{ "2xl": "16px" }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={{ "2xl": "8px" }}
                        alignSelf={"stretch"}
                        borderRadius={"6px"}
                        w={"100%"}
                        // onClick={() => setStep(0)}
                    >
                        <Image
                            src="/left-icon-arrow.svg"
                            h={{ "2xl": "16px" }}
                            w={{ "2xl": "16px" }}
                        />

                        <Text
                            h={"auto"}
                            w={"auto"}
                            textColor={"var(--gray-800, #1A202C)"}
                            fontFamily={"Inter"}
                            fontSize={{ "2xl": "16px" }}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={{ "2xl": "24px" }}
                        >
                            Back to log in
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Page

{/* <Input type="text"
                        placeholder='Enter your phone number'
                        onChange={(e: any) => {
                            setPhone(e.target.value)
                        }} />
                    <Button
                        border={"1px solid"}
                        width={"100%"}
                        onClick={() => {
                            forgetPassHandler()
                        }}>Forget Password</Button> */}

// verifyCode && confirmForgotPassword(verifyCode, phone)
