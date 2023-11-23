"use client"
import { Button, Flex, Input, chakra, Box, Image, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    CognitoIdentityProviderClient, RespondToAuthChallengeCommand,
    InitiateAuthCommand, ChangePasswordCommand,
    ForgotPasswordCommand, ConfirmForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider"
import { useFormData } from '../context/authContext';

const Page = () => {
    const { username } = useFormData();
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPasswordChangeForm, setShowPasswordChangeForm] = useState(false);
    const [session, setSession] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [show, setShow] = useState(false);
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });

    const handleChangePassword = async () => {
        const client = new CognitoIdentityProviderClient({ region: "us-east-1" });

        const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand({
            ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
            ChallengeName: "NEW_PASSWORD_REQUIRED",
            Session: session,
            ChallengeResponses: {
                USERNAME: username,
                NEW_PASSWORD: newPassword,
            },
        });

        try {
            const respondToAuthChallengeResponse = await client.send(
                respondToAuthChallengeCommand
            );
            console.log("Password change response:", respondToAuthChallengeResponse);

            // You can handle the response accordingly, e.g., show a success message
        } catch (error) {
            console.error("Password change failed", error);
            // Handle error, e.g., display an error message
        }
    };

    const firstTimeChangePass = () => {
        if (newPassword == password) {
            handleChangePassword();
        } else {
            console.log("password dont match");
            setShow(true);
        }
    };


    return (
        <Flex
            flexDir={"column"}
            height={"100vh"}
            bg={"var(--gray-50, #F7FAFC)"}
        >
            <Flex
                flexDir={"column"}
                width={{ sm: "", lg: "20%", '2xl': "360px" }}
                margin={"auto"}
                gap={{ sm: "20px", lg: "26px", '2xl': "32px" }}
            >
                <Flex
                    flexDir={"column"}
                    gap={{ sm: "10px", lg: "16px", '2xl': "20px" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Image src={"/Flattened.svg"}
                        width={{ sm: "28px", "2xl": "33px" }}
                        height={{ sm: "28px", "2xl": "33px" }}
                        alt={""} fill={"var(--primary-main, #11190C)"} />
                    <Box
                        alignSelf={"stretch"}
                    >
                        <Heading
                            color={"var(--gray-900, #101828)"}
                            textAlign={"center"}
                            fontFamily={"Chivo"}
                            fontSize={{ sm: "18px", lg: "22px", '2xl': "30px" }}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"39.9px"}
                        >
                            Confirm New Password
                        </Heading>
                    </Box>

                </Flex>
                <Box
                    display={"flex"}
                    flexDir={"column"}
                    gap={{ sm: "18px", '2xl': "24px" }}
                >
                    <Box
                        display={"flex"}
                        flexDir={"column"}
                        gap={{ sm: "20px", '2xl': "20px" }}
                    >
                        {/* phone */}
                        <Flex
                            flexDir={"column"}
                            gap={{ sm: "4px", '2xl': "4px" }}
                        >
                            <Box
                                height={{ sm: "", '2xl': "16px" }}
                                alignSelf={"stretch"}
                            >
                                <Text
                                    color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "12px", lg: "14px", '2xl': "12px" }}
                                    fontStyle={"normal"}
                                    fontWeight={600}
                                    lineHeight={"16px"}
                                    letterSpacing={"0.3px"}
                                >
                                    Enter New Password
                                </Text>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                alignSelf={"stretch"}
                            >
                                <Input
                                    type="text" name="phone"
                                    placeholder="Enter New Password"
                                    color={"var(--gray-400, #A0AEC0)"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={400}
                                    lineHeight={"normal"}
                                    background={"var(--white, #FFF)"}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Box>
                        </Flex>
                        {/* password */}
                        <Flex
                            flexDir={"column"}
                            gap={{ sm: "4px", '2xl': "4px" }}
                        >
                            <Box
                                height={{ sm: "", '2xl': "16px" }}
                                alignSelf={"stretch"}
                            >
                                <Text
                                    color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "12px", lg: "14px", '2xl': "12px" }}
                                    fontStyle={"normal"}
                                    fontWeight={600}
                                    lineHeight={"16px"}
                                    letterSpacing={"0.3px"}
                                >
                                    Confirm New Password
                                </Text>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                alignSelf={"stretch"}
                                flexDirection={"column"}
                            >
                                <Input type="text" name="password"
                                    placeholder={"Confirm New Password"}
                                    color={"var(--gray-500, #667085)"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={400}
                                    lineHeight={"24px"}
                                    borderRadius={{ sm: "2px", '2xl': "4px" }}
                                    border={
                                        show
                                            ? "2px solid var(--red-500, #E53E3E)"
                                            : "1px solid var(--gray-200, #E2E8F0)"
                                    }
                                    background={"var(--white, #FFF)"}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                {show && (
                                    <Text
                                        h={{ "2xl": "16px" }}
                                        alignSelf={"stretch"}
                                        textColor={"var(--red-500, #E53E3E)"}
                                        fontFamily={"Inter"}
                                        fontSize={{ "2xl": "12px" }}
                                        fontStyle={"normal"}
                                        fontWeight={400}
                                        lineHeight={{ "2xl": "16px" }}
                                    >
                                        Password does not match
                                    </Text>
                                )}
                            </Box>
                        </Flex>
                    </Box>

                </Box>
                <Box
                    display={"flex"}
                    height={{ sm: "", lg: "34px", '2xl': "40px" }}
                    padding={{ sm: "", '2xl': "0px 16px" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={{ sm: '', '2xl': "8px" }}
                    alignSelf={"stretch"}
                    borderRadius={{ sm: "4px", md: "6px", '2xl': "6px" }}
                    background={"var(--primary-main, #11190C)"}
                    onClick={firstTimeChangePass}
                >
                    <chakra.button
                        color={"#FFF"}
                        fontFamily={"Inter"}
                        fontSize={{ sm: "", '2xl': "16px" }}
                        fontStyle={"normal"}
                        fontWeight={"600"}
                        lineHeight={"24px"}
                        _hover={{ background: "none" }}

                    >Reset Password and Sign in</chakra.button>
                </Box>

            </Flex>
        </Flex>
    )
}

export default Page
