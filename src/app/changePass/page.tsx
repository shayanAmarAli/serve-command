import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFormData } from '../context/authContext';
import { CognitoIdentityProviderClient, RespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"

const Page = () => {
    const [newPassword, setNewPassword] = useState('');
    const { username, setUsername, session, setSession } = useFormData();

    const params: any = {
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: '1727702mdj4021tmc218s3efab',
        ChallengeResponses: {
            NEW_PASSWORD: newPassword,
            USERNAME: username,
            SESSION: session
        },
        Session: session
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
        <Box>
            this is the change passowrd route
            <Input onChange={(e: any) => {
                setNewPassword(e.target.value)
            }}
                value={newPassword}
            />
            <Button onClick={handleChangePassword}>continue</Button>
        </Box>
    )
}

export default Page
