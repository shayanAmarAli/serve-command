"use client"
import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
    CognitoIdentityProviderClient, RespondToAuthChallengeCommand,
    InitiateAuthCommand, ChangePasswordCommand,
    ForgotPasswordCommand, ConfirmForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider"
import { useFormData } from '@/app/context/authContext';
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
    const [loginInfo, setLoginInfo] = useState({ phone: "", password: "" });
    const { userData, setUserData } = useFormData();
    const router = useRouter();

    const loginInputHandler = (event: any) => {
        const { name, value } = event.target;
        setLoginInfo(previousVal => ({
            ...previousVal,
            [name]: value
        }));
        
        console.log(loginInfo.phone)
    }

    const params: any = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: '1727702mdj4021tmc218s3efab',
        UserPoolId: 'us-east-1_DIwOdU2TN',
        AuthParameters: {
            USERNAME: loginInfo.phone,
            PASSWORD: loginInfo.password
        }
    }

    // defining region of cognito
    const cognitoClient = new CognitoIdentityProviderClient({
        region: "us-east-1"
    })

    // initiate authentication of a user
    const initiateAuthCommand = new InitiateAuthCommand(params)

    // send users credential to cognito for authentication
    const loginHanlder = async () => {
        setUserData((preVal: any) => ({
            ...preVal,
            username: loginInfo.phone,
        }));
        try {
            const response = await cognitoClient.send(initiateAuthCommand)
            console.log("Login response-->", response);
            setUserData((preVal: any) => ({
                ...preVal,
                session: response.AuthenticationResult?.AccessToken
            }));
            console.log('session (from request) has been updated into context---->', userData.session);
            const isSession = await localStorage.getItem('key') as string
            JSON.parse(isSession).session ? router.push('/') : router.push('/changePass')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Flex
            flexDir={"column"}
            height={"100vh"}
        >
            <Flex
                flexDir={"column"}
                width={{ sm: "", '2xl': "360px" }}
                margin={"auto"}
                gap={{ sm: "20px", '2xl': "32px" }}
            >
                <Flex
                    flexDir={"column"}
                    gap={{ sm: "10px", '2xl': "20px" }}
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
                            fontSize={{ sm: "18px", '2xl': "30px" }}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"39.9px"}
                        >
                            Log in to your account
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
                            gap={{ sm: "", '2xl': "8px" }}
                        >
                            <Box
                                height={{ sm: "", '2xl': "16px" }}
                                alignSelf={"stretch"}
                            >
                                <Text
                                    color={"rgba(0, 0, 0, 0.64)"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "14px", '2xl': "12px" }}
                                    fontStyle={"normal"}
                                    fontWeight={600}
                                    lineHeight={"16px"}
                                    letterSpacing={"0.3px"}
                                >
                                    Phone
                                </Text>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                alignSelf={"stretch"}
                            >
                                <Input
                                    type="text" name="phone"
                                    placeholder="Enter your phone number"
                                    color={"var(--gray-400, #A0AEC0)"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={400}
                                    lineHeight={"normal"}
                                    onChange={loginInputHandler}
                                    value={loginInfo.phone}
                                />
                            </Box>
                        </Flex>
                        {/* password */}
                        <Flex
                            flexDir={"column"}
                            gap={{ sm: "", '2xl': "8px" }}
                        >
                            <Box
                                height={{ sm: "", '2xl': "16px" }}
                                alignSelf={"stretch"}
                            >
                                <Text
                                    color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "14px", '2xl': "12px" }}
                                    fontStyle={"normal"}
                                    fontWeight={600}
                                    lineHeight={"16px"}
                                    letterSpacing={"0.3px"}
                                >
                                    Password
                                </Text>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"flex-start"}
                                alignSelf={"stretch"}
                            >
                                <Input type="text" name="password"
                                    onChange={loginInputHandler}
                                    placeholder={"......."}
                                    color={"var(--gray-500, #667085)"}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={400}
                                    lineHeight={"24px"}
                                    borderRadius={{ sm: "2px", '2xl': "4px" }}
                                    border={"1px solid var(--gray-200, #E2E8F0)"}
                                    background={"var(--white, #FFF)"}
                                    value={loginInfo.password}
                                />
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        display={"flex"}
                        height={{ sm: "", '2xl': "40px" }}
                        padding={{ sm: "", '2xl': "0px 16px" }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={{ sm: '', '2xl': "8px" }}
                        alignSelf={"stretch"}
                        borderRadius={{ sm: "4px", md: "6px", '2xl': "6px" }}
                        background={"var(--primary-main, #11190C)"}
                    >
                        <Button
                            color={"#FFF"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "", '2xl': "16px" }}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={"24px"}
                            _hover={{ background: "none" }}
                            onClick={loginHanlder}
                        >Sign in</Button>
                    </Box>
                        <Link href={"/forgetPassword"}>
                            Forget password
                        </Link>
                </Box>

            </Flex>
        </Flex>
    )
}

export default Page
