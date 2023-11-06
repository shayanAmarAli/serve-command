"use client"

import { Box, Flex, Image, Input, Text } from "@chakra-ui/react"
import React from 'react'

const UploadFile = () => {
    return (
        <Box
            display={"flex"}
            padding={{ sm: "4px", md: "6px", lg: "8px", xl: "10px", '2xl': '10px' }}
            height={{ sm: "80px", mm: "85px", ml: "90px", md: "95px", lg: "100px", xl: "110px", '2xl': '120px' }}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "", '2xl': '10px' }}
            alignSelf={"stretch"}
            borderRadius={{ sm: "6px", md: "8px", '2xl': '8px' }}
            border={"2px dashed var(--black-alpha-300, rgba(0, 0, 0, 0.16))"}
            background={"var(--gray-0, #F7F7FA)"}
        >
            <Box
                display={"flex"}
                height={{ sm: "24px", mm: "26px", ml: "27px", md: "28px", lg: "32px", xl: "36px", '2xl': '40px' }}
                padding={{ sm: "0px 10px", md: "0px 12px", lg: "0px 14px", xl: "0px 16px", '2xl': '0px 16px' }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ sm: "6px", md: "7px", lg: "8px", '2xl': '8px' }}
                flexShrink={0}
                borderRadius={{ sm: "4px", md: "4px", '2xl': '6px' }}
                border={"1px solid var(--primary-main, #11190C)"}
                background={"var(--white, #FFF)"}
                onClick={
                    () => {
                        const fileInput = document.getElementById("file-input");
                        if (fileInput) {
                            fileInput.click();
                        }
                    }
                }
            >
                <Box>
                    <Text
                        color={'var(--text-primary, rgba(0, 0, 0, 0.87))'}
                        fontFamily={"Inter"}
                        fontSize={{ sm: '12px', md: "13px", lg: "14px", xl: "15px", '2xl': '16px' }}
                        fontStyle={"normal"}
                        fontWeight={'600'}
                        lineHeight={{ sm: "18px", md: "19px", lg: "20px", xl: "22px", '2xl': "24px" }}
                    >
                        Upload Backup Files
                    </Text>
                    <Input id="file-input" type="file" accept="text/plain"
                        // onChange={handleFileUpload}
                        style={{ display: "none" }} />
                </Box>
                <Box
                    width={{ sm: "10px", md: "12px", lg: "14px", xl: "15px", '2xl': '16px' }}
                    height={{ sm: "10px", md: "12px", lg: "14px", xl: "15px", '2xl': '16px' }}
                >
                    <Image src={"/right-icon-upload.svg"} alt={"logo"} />
                </Box>
            </Box>
        </Box>
    )
}

export default UploadFile
