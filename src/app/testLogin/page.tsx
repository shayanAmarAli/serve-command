"use client"
import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
    CognitoIdentityProviderClient, RespondToAuthChallengeCommand,
    InitiateAuthCommand, ChangePasswordCommand,
    ForgotPasswordCommand, ConfirmForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider"
import { useRouter } from "next/navigation";
import { useFormData } from '@/app/context/authContext';

const Page = () => {
    const { username, setUsername, session, setSession } = useFormData();
    const [loginInfo, setLoginInfo] = useState({
        phone: "",
        password: ""
    });
    const [newPassword, setNewPassword] = useState('');
    const [forPass, setForPass] = useState("");
    const [confirmForPass, setConfirmForPass] = useState("");
    const router = useRouter();

    const loginInfohandler = (event: any) => {
        const { name, value } = event.target;
        setLoginInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(loginInfo);

    };

    const params: any = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: '1727702mdj4021tmc218s3efab',
        UserPoolId: 'us-east-1_DIwOdU2TN',
        AuthParameters: {
            USERNAME: loginInfo.phone,
            PASSWORD: loginInfo.password
        }
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: "us-east-1"
    })
    const initiateAuthCommand = new InitiateAuthCommand(params)

    const cogCLIent = async () => {
        setUsername(loginInfo.phone);
        console.log('usename is updated into context---->', username)
        try {
            const response = await cognitoClient.send(initiateAuthCommand)
            console.log(response);
            setSession(response.Session);
            // session && router.push('/changePass')
        } catch (err) {
            console.log(err)
        }
    }

    const params2: any = {
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
        ChallengeResponses: {
            NEW_PASSWORD: newPassword,
            USERNAME: "+923468742593",
            SESSION: session
        },
        Session: session
    }
    const handleChangePassword = async () => {
        const cognitoClient = new CognitoIdentityProviderClient({
            region: process.env.NEXT_PUBLIC_COGNITO_REGION
        })
        console.log(params2);
        const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand(params2)

        try {
            const response = await cognitoClient.send(respondToAuthChallengeCommand)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    const forgotPassword = async (email: any) => {
        const params = {
            ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
            Username: forPass,
        };

        try {
            const response = await cognitoClient.send(new ForgotPasswordCommand(params));
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    const confirmForgotPassword = async (phone: string, newPassword: string) => {
        const params = {
            ClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
            ConfirmationCode: "520227",
            Password: newPassword,
            Username: phone,
        };

        try {
            const response = await cognitoClient.send(new ConfirmForgotPasswordCommand(params));
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* <Box > */}
            <Input
                name={"phone"}
                onChange={loginInfohandler}
                value={loginInfo.phone}
            />
            <Input
                name={"password"}
                onChange={loginInfohandler}
                value={loginInfo.password}
            />
            <Button onClick={cogCLIent}>submit</Button>

            {/* <Box>
                            this is the change passowrd route
                            <Input onChange={(e: any) => {
                                setNewPassword(e.target.value)
                            }}
                                value={newPassword}
                            />
                            <Button onClick={handleChangePassword}>continue</Button>
                        </Box> */}
            {/* </Box> */}
            {/*<Box>
                <Input onChange={(e: any) => {
                    setForPass(e.target.value)
                }} />
                <Button onClick={forgotPassword}>forget pass</Button>
                 <Input onChange={(e: any) => {
                    setConfirmForPass(e.target.value)
                }} />
                <Button
                onClick={()=>{
                    confirmForgotPassword('+923468742593', confirmForPass)
                }}
                >set new pass</Button> 
            </Box> */}
        </>
    )
}

export default Page;