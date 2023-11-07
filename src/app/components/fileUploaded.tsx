"use client"
import React from 'react'
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const FileUploaded = () => {
    return (
        <Box
            display={"flex"}
            padding={{ sm: "12px 4px", mm: "16px 5px", ml: "18px 6px", md: "20px 7px", lg: "22px 8px", xl: "24px 8px", '2xl': '24px 10px' }}
            height={{ sm: "120px", mm: "125px", ml: "130px", md: "135px", lg: "140px", xl: "150px", '2xl': '158px' }}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "", '2xl': '10px' }}
            alignSelf={"stretch"}
            borderRadius={{ sm: "6px", md: "8px", '2xl': '8px' }}
            border={"2px dashed var(--black-alpha-300, rgba(0, 0, 0, 0.16))"}
            background={"var(--gray-0, #F7F7FA)"}
            margin={"auto"}
        >

            <Flex flexDir={"column"}
                gap={{ sm: "4px", '2xl': "8px" }}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"100px"}
                    background={"var(--green-600, #25855A);"}
                    width={{ sm: "26px", md: "30px", lg: "36px", xl: "38px", '2xl': "40px" }}
                    height={{ sm: "26px", md: "30px", lg: "36px", xl: "38px", '2xl': "40px" }}
                >
                    <Image src={"/check-circle.svg"} alt={"logo"}
                        width={{ sm: "16px", md: "18px", lg: "22px", xl: "23px", '2xl': "24px" }}
                        height={{ sm: "16px", md: "18px", lg: "22px", xl: "23px", '2xl': "24px" }}
                        style={{ fill: "#FFFFFF" }}
                    />
                </Box>
                <Flex flexDir={"column"}
                    gap={{ sm: "4px", '2xl': "10px" }} justifyContent={"center"}
                    alignItems={"center"}>
                    <Text
                        color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                        fontFamily={"Inter"}
                        fontSize={{ sm: "14px", '2xl': "18px" }}
                        fontStyle={"normal"}
                        fontWeight={"500"}
                        lineHeight={"28px"}
                    >
                        File Successfully Uploaded
                    </Text>
                    <Box
                        display={"flex"}
                        height={{ sm: '20px', md: "20px", lg: "22px", xl: "24px", '2xl': "24px" }}
                        padding={{ sm: '0px 6px', md: "0px 6px", lg: "0px 7px", xl: "0px 8px", '2xl': "0px 8px" }}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={{ sm: "2px", '2xl': "6px" }}
                        borderRadius={"39px"}
                        border={" 1px solid var(--green-500, #38A169)"}
                        background={"var(--white, #FFF)"}
                        width={{ sm: '', '2xl': "97px" }}
                    >
                        <Text
                            color={"var(--green-500, #38A169)"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "12px", '2xl': "12px" }}
                            fontStyle={"normal"}
                            fontWeight={"600"}
                            lineHeight={"16px"}
                        >
                            backup.txt
                        </Text>
                        <Image src={"/cross.svg"} alt={"logo"}
                            width={{ sm: "10px", '2xl': "12px" }}
                            height={{ sm: "10px", '2xl': "12px" }}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default FileUploaded
