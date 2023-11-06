"use client"
import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import AWS from 'aws-sdk';
import awsExports from "@/app/aws-export"
// import  * as CognitoIdentityServiceProvider   from "aws-sdk/clients/cognitoidentityserviceprovider";
import { useRouter } from "next/router";
import {Amplify , Auth } from 'aws-amplify';

Amplify.configure(awsExports);

const Page = () => {
    const [loginInfo, setLoginInfo] = useState({
        phone: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const loginInfohandler = (event: any) => {
        const { name, value } = event.target;
        setLoginInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // cognito.sign
    const handleSignIn = (data: Record<string, string>) => {
        
      }

    // const postCredential = () => {
    //     // console.log("User credentials are---->", loginInfo);
    //     // cognito.
    //     cognito.signIn(
    //         {
    //           ClientId: process.env.client_id as string,
    //           UserAttributes: [{
    //             Name: "email",
    //             Value: `${data.email}`
    //           }],
    //           Username: `${data.username}`,
    //           Password: `${data.password}`,
    //         }, (err, result) => {
    //           if (err) {
    //             console.log(err);
    //           } else {
    //             console.log(result);
    //             setUsername(data.username)
    //             setEmail(data.email)
    //             const code = prompt("Enter verification code by check you email");
    //             setUserVerifyCode(code);
    //           }
    //         });
    //       console.log('Registration data:', data);
    // }
    return (
        <Box>
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
            <Button>submit</Button>
        </Box>
        // <Flex
        //     flexDir={"column"}
        //     height={"100vh"}
        // >
        //     <Flex
        //         flexDir={"column"}
        //         width={{ sm: "", '2xl': "360px" }}
        //         margin={"auto"}
        //         gap={{ sm: "20px", '2xl': "32px" }}
        //     >
        //         <Flex
        //             flexDir={"column"}
        //             gap={{ sm: "10px", '2xl': "20px" }}
        //             justifyContent={"center"}
        //             alignItems={"center"}
        //         >
        //             <Image src={"/Flattened.svg"}
        //                 width={{ sm: "28px", "2xl": "33px" }}
        //                 height={{ sm: "28px", "2xl": "33px" }}
        //                 alt={""} fill={"var(--primary-main, #11190C)"} />
        //             <Box
        //                 alignSelf={"stretch"}
        //             >
        //                 <Heading
        //                     color={"var(--gray-900, #101828)"}
        //                     textAlign={"center"}
        //                     fontFamily={"Chivo"}
        //                     fontSize={{ sm: "18px", '2xl': "30px" }}
        //                     fontStyle={"normal"}
        //                     fontWeight={400}
        //                     lineHeight={"39.9px"}
        //                 >
        //                     Log in to your account
        //                 </Heading>
        //             </Box>

        //         </Flex>
        //         <Box
        //             display={"flex"}
        //             flexDir={"column"}
        //             gap={{ sm: "18px", '2xl': "24px" }}
        //         >
        //             <Box
        //                 display={"flex"}
        //                 flexDir={"column"}
        //                 gap={{ sm: "20px", '2xl': "20px" }}
        //             >
        //                 {/* phone */}
        //                 <Flex
        //                     flexDir={"column"}
        //                     gap={{ sm: "", '2xl': "8px" }}
        //                 >
        //                     <Box
        //                         height={{ sm: "", '2xl': "16px" }}
        //                         alignSelf={"stretch"}
        //                     >
        //                         <Text
        //                             color={"rgba(0, 0, 0, 0.64)"}
        //                             fontFamily={"Inter"}
        //                             fontSize={{ sm: "14px", '2xl': "12px" }}
        //                             fontStyle={"normal"}
        //                             fontWeight={600}
        //                             lineHeight={"16px"}
        //                             letterSpacing={"0.3px"}
        //                         >
        //                             Phone
        //                         </Text>
        //                     </Box>
        //                     <Box
        //                         display={"flex"}
        //                         alignItems={"flex-start"}
        //                         alignSelf={"stretch"}
        //                     >
        //                         <Input
        //                             type="number" name="phone"
        //                             placeholder="Enter your phone number"
        //                             color={"var(--gray-400, #A0AEC0)"}
        //                             fontFamily={"Inter"}
        //                             fontSize={{ sm: "14px", '2xl': "16px" }}
        //                             fontStyle={"normal"}
        //                             fontWeight={400}
        //                             lineHeight={"normal"}
        //                             onChange={loginInfohandler}
        //                             value={loginInfo.phone}
        //                         />
        //                     </Box>
        //                 </Flex>
        //                 {/* password */}
        //                 <Flex
        //                     flexDir={"column"}
        //                     gap={{ sm: "", '2xl': "8px" }}
        //                 >
        //                     <Box
        //                         height={{ sm: "", '2xl': "16px" }}
        //                         alignSelf={"stretch"}
        //                     >
        //                         <Text
        //                             color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
        //                             fontFamily={"Inter"}
        //                             fontSize={{ sm: "14px", '2xl': "12px" }}
        //                             fontStyle={"normal"}
        //                             fontWeight={600}
        //                             lineHeight={"16px"}
        //                             letterSpacing={"0.3px"}
        //                         >
        //                             Password
        //                         </Text>
        //                     </Box>
        //                     <Box
        //                         display={"flex"}
        //                         alignItems={"flex-start"}
        //                         alignSelf={"stretch"}
        //                     >
        //                         <Input type="password" name="password"
        //                             onChange={loginInfohandler}
        //                             placeholder={"......."}
        //                             color={"var(--gray-500, #667085)"}
        //                             fontFamily={"Inter"}
        //                             fontSize={{ sm: "14px", '2xl': "16px" }}
        //                             fontStyle={"normal"}
        //                             fontWeight={400}
        //                             lineHeight={"24px"}
        //                             borderRadius={{ sm: "2px", '2xl': "4px" }}
        //                             border={"1px solid var(--gray-200, #E2E8F0)"}
        //                             background={"var(--white, #FFF)"}
        //                             value={loginInfo.password}
        //                         />
        //                     </Box>
        //                 </Flex>
        //             </Box>

        //             <Box
        //                 display={"flex"}
        //                 height={{ sm: "", '2xl': "40px" }}
        //                 padding={{ sm: "", '2xl': "0px 16px" }}
        //                 justifyContent={"center"}
        //                 alignItems={"center"}
        //                 gap={{ sm: '', '2xl': "8px" }}
        //                 alignSelf={"stretch"}
        //                 borderRadius={{ sm: "4px", md: "6px", '2xl': "6px" }}
        //                 background={"var(--primary-main, #11190C)"}
        //             >
        //                 <Button
        //                     color={"#FFF"}
        //                     fontFamily={"Inter"}
        //                     fontSize={{ sm: "", '2xl': "16px" }}
        //                     fontStyle={"normal"}
        //                     fontWeight={600}
        //                     lineHeight={"24px"}
        //                     _hover={{ background: "none" }}
        //                     onClick={postCredential}
        //                 >Sign in</Button>
        //             </Box>
        //         </Box>

        //     </Flex>
        // </Flex>
    )
}

export default Page
