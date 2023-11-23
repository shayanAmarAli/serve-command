"use client"
import { Box, Button, Input, Flex, Image, Heading, chakra, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFormData } from '../context/authContext';
import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"

const Page = () => {
    const { userData, setUserData } = useFormData();
    const { username } = useFormData();
    const [newPassword, setNewPassword] = useState("");

    const handleChangePassword = async () => {
        const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
        const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand({
            ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
            ChallengeName: "NEW_PASSWORD_REQUIRED",
            Session: userData.session,
            ChallengeResponses: {
                USERNAME: userData.username,
                NEW_PASSWORD: newPassword,
            },
        });
        try {
            console.log("params you pass is ....", newPassword)
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

    // const firstTimeChangePass = () => {
    //     if (newPassword == password) {
    //         handleChangePassword();
    //     } else {
    //         console.log("password dont match");
    //         setShow(true);
    //     }
    // };
    

    // const params: any = {
    //     ChallengeName: 'NEW_PASSWORD_REQUIRED',
    //     ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
    //     ChallengeResponses: {
    //         NEW_PASSWORD: newPassword,
    //         USERNAME: userData.username,
    //         SESSION: userData.session
    //     },
    //     Session: userData.session
    // }

    // const handleChangePassword = async () => {
    //     const cognitoClient = new CognitoIdentityProviderClient({
    //         region: process.env.NEXT_PUBLIC_COGNITO_REGION
    //     })
    //     const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand(params)

    //     try {
    //         const response = await cognitoClient.send(respondToAuthChallengeCommand)
    //         console.log(response)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    
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
                            Set New Password
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
                                    Set New Password
                                </Text>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                alignSelf={"stretch"}
                                flexDirection={"column"}
                            >
                                <Input type="text" name="password"
                                    placeholder={"Set New Password"}
                                    color={"var(--gray-500, #667085)"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={400}
                                    lineHeight={"24px"}
                                    borderRadius={{ sm: "2px", '2xl': "4px" }}
                                    border={"1px solid var(--gray-200, #E2E8F0)"}                                    
                                    background={"var(--white, #FFF)"}
                                    onChange={(e:any) => setNewPassword(e.target.value)}
                                />
                            </Box>
                        </Flex>
                    </Box>

                </Box>
                <Box
                    display={"flex"}
                    height={{ sm: "28px", lg: "34px", '2xl': "40px" }}
                    padding={{ sm: "", '2xl': "0px 16px" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={{ sm: '', '2xl': "8px" }}
                    alignSelf={"stretch"}
                    borderRadius={{ sm: "4px", md: "6px", '2xl': "6px" }}
                    background={"var(--primary-main, #11190C)"}
                    onClick={handleChangePassword}
                >
                    <chakra.button
                        color={"#FFF"}
                        fontFamily={"Inter"}
                        fontSize={{ sm: "14px", lg: "16px", '2xl': "16px" }}
                        fontStyle={"normal"}
                        fontWeight={{sm: "500", "2xl": "600"}}
                        lineHeight={"24px"}
                        _hover={{ background: "none" }}

                    >Set Password and Sign in</chakra.button>
                </Box>

            </Flex>
        </Flex>
    )
}

export default Page
