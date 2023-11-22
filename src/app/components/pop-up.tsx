"use client"
import {
    Box, Button, Text, Image, Heading, Flex,
    chakra,
    Modal, ModalOverlay, ModalContent, Input, useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios"

const Popup = ({ onClosePop }: any) => {
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [fileName, setFileName] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [file, setFile] = useState<any>();

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];
        console.log("selectedFile is--->", selectedFile.name)
        setFile(selectedFile);
        selectedFile && setIsFileUploaded(true)
        console.log(file);
        setFileName(selectedFile.name)
    };

    const handleFileUpload = async () => {
        if (!file) {
            console.log("Please select a file to upload");
            return;
        }

        try {
            const response = await fetch(
                `https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=${file.name}&contentType=text/plain`
            );
            const data = await response.json();
            console.log(data)
            if (data.uploadUrl) {
                const uploadResponse = await fetch(data.uploadUrl, {
                    method: "PUT",
                    body: file,
                });

                if (uploadResponse.ok) {
                    console.log("File uploaded successfully!");
                } else {
                    console.log("File upload failed");
                }
            } else {
                console.log("Failed to get pre-signed URL");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("An error occurred while uploading the file.");
        }
    };

    return (
        <>
            <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                width={{ 'sm': "100%", ml: "100%", md: "auto", '2xl': "900px" }}
                padding={{ sm: "12px 14px", 'md': "16px 20px", 'lg': "20px 28px", 'xl': "26px 34px", '2xl': "32px 40px" }}
                gap={{ sm: '4px', '2xl': "8px" }}
                borderRadius={{ sm: "14px", '2xl': '20px' }}
                background={"var(--white, #FFF)"}
            >
                <Box
                    display={"flex"}
                    flexDir={"column"}
                    gap={{ sm: "10px", '2xl': '30px' }}
                >
                    <Flex
                        gap={{ sm: "8px", '2xl': '16px' }}
                    >
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            borderRadius={"100px"}
                            background={"var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
                            width={{ sm: "24px", '2xl': "40px" }}
                            height={{ sm: "24px", '2xl': "40px" }}
                            flexShrink={0}
                        >
                            <Image src={"/info-circle.svg"} alt={"logo"}
                                flexShrink={0}
                                width={{ sm: "16px", '2xl': "24px" }}
                                height={{ sm: "16px", '2xl': "24px" }}
                            />
                        </Box>
                        <Box
                            width={{ "2xl": "768px" }}
                        >
                            <Heading
                                fontSize={{ sm: "16px", '2xl': "24px" }}
                                color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                                fontFamily={"Inter"}
                                fontStyle={"normal"}
                                fontWeight={"500"}
                                lineHeight={{ sm: "24px", '2xl': "32px" }}
                            >
                                Prepare Your Hindsite Import
                            </Heading>
                            <Text
                                color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                                fontSize={{ sm: "14px", '2xl': "16px" }}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                fontFamily={"Inter"}
                                lineHeight={{ sm: "20px", lg: "22px", xl: "24px", '2xl': "24px" }}
                            >
                                To get started, you will need to export your latest backup of Hindsite.
                            </Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Flex
                            flexDir={"column"}
                            gap={{ sm: '6px', '2xl': "16px" }}
                        >
                            <Heading
                                color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                                fontSize={{ sm: "14px", '2xl': "16px" }}
                                fontStyle={"normal"}
                                fontWeight={"500"}
                                lineHeight={"24px"}
                                fontFamily={"Inter"}
                            >
                                Step 1. Create Hindsite Backup
                            </Heading>
                            <Box
                                alignSelf={"stretch"}
                            >
                                <Text
                                    color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={"400"}
                                    lineHeight={{ sm: "20px", md: "18px", lg: "20px", xl: "22px", '2xl': "24px" }}
                                    fontFamily={"Inter"}
                                >
                                    In Hindsite, go to “Daily Must Do” section and click “Run Backup”.
                                    Save the backup file somewhere you can easily find it, like on your desktop.
                                </Text>
                            </Box>
                            <Heading
                                color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                                fontSize={{ sm: "14px", '2xl': "16px" }}
                                fontStyle={"normal"}
                                fontWeight={"500"}
                                lineHeight={{ sm: "24px", '2xl': "24px" }}
                                fontFamily={"Inter"}
                            >
                                Step 2. Unzip Hindsite Backup File
                            </Heading>
                            <Box
                                alignSelf={"stretch"}
                            >
                                <Text
                                    color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={"400"}
                                    lineHeight={{ sm: "20px", md: "18px", lg: "20px", xl: "22px", '2xl': "24px" }}
                                    fontFamily={"Inter"}
                                >
                                    Find the backup file and use your computer to “Unzip” the file.
                                    The file should read “backup.txt”. Save this file somewhere you can easily find it.
                                </Text>
                            </Box>
                            <Flex
                                flexDir={"column"}
                                gap={{ sm: "12px", md: "20px", lg: "24px", xl: "28px", '2xl': '32px' }}
                            >
                                <Heading
                                    color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                                    fontSize={{ sm: "14px", '2xl': "16px" }}
                                    fontStyle={"normal"}
                                    fontWeight={"500"}
                                    lineHeight={{ sm: "24px", '2xl': "24px" }}
                                    fontFamily={"Inter"}
                                >
                                    Step 3. Upload Your Backup File Here
                                </Heading>
                                {
                                    isFileUploaded
                                        ? <Box
                                            display={"flex"}
                                            padding={{ sm: "12px 4px", mm: "16px 5px", ml: "18px 6px", md: "20px 7px", lg: "22px 8px", xl: "24px 8px", '2xl': '24px 10px' }}
                                            height={{ sm: "120px", mm: "125px", ml: "130px", md: "135px", lg: "140px", xl: "150px", '2xl': '158px' }}
                                            flexDir={"column"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            gap={{ sm: "4px", md: "5px", lg: "6px", xl: "8px", '2xl': '10px' }}
                                            alignSelf={"stretch"}
                                            borderRadius={{ sm: "6px", md: "8px", '2xl': '8px' }}
                                            border={"2px dashed var(--black-alpha-300, rgba(0, 0, 0, 0.16))"}
                                            background={"var(--gray-0, #F7F7FA)"}
                                        >

                                            <Flex
                                                flexDir={"column"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                gap={{ sm: "4px", md: "6px", lg: "7px", xl: "8px", '2xl': "8px" }}
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
                                                <Flex
                                                    flexDir={"column"}
                                                    gap={{ sm: "4px", md: "6px", lg: "7px", xl: "8px", '2xl': "10px" }}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}>
                                                    <Text
                                                        color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                                                        fontFamily={"Inter"}
                                                        fontSize={{ sm: "14px", md: "16px", lg: "17px", xl: "18px", '2xl': "18px" }}
                                                        fontStyle={"normal"}
                                                        fontWeight={"500"}
                                                        lineHeight={"28px"}
                                                    >
                                                        File Successfully Uploaded
                                                    </Text>
                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"center"}
                                                        alignItems={"center"}
                                                        height={{ sm: '20px', md: "20px", lg: "22px", xl: "24px", '2xl': "24px" }}
                                                        padding={{ sm: '0px 6px', md: "0px 6px", lg: "0px 7px", xl: "0px 8px", '2xl': "0px 8px" }}
                                                        gap={{ sm: "2px", '2xl': "6px" }}
                                                        borderRadius={"39px"}
                                                        border={" 1px solid var(--green-500, #38A169)"}
                                                        background={"var(--white, #FFF)"}
                                                    >
                                                        <Text
                                                            color={"var(--green-500, #38A169)"}
                                                            fontFamily={"Inter"}
                                                            fontSize={{ sm: "12px", '2xl': "12px" }}
                                                            fontStyle={"normal"}
                                                            fontWeight={"600"}
                                                            lineHeight={"16px"}
                                                        >
                                                            {isFileUploaded ? fileName : "backup.txt"}
                                                        </Text>
                                                        <Image src={"/cross.svg"} alt={"logo"}
                                                            width={{ sm: "10px", '2xl': "12px" }}
                                                            height={{ sm: "10px", '2xl': "12px" }}
                                                        />
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                        : <Box
                                            display={"flex"}
                                            flexDir={"column"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            gap={{ sm: "4px", md: "5px", lg: "6px", xl: "8px", '2xl': '10px' }}
                                            padding={{ sm: "4px", md: "6px", lg: "8px", xl: "10px", '2xl': '10px' }}
                                            height={{ sm: "70px", mm: "85px", ml: "90px", md: "95px", lg: "100px", xl: "110px", '2xl': '120px' }}
                                            alignSelf={"stretch"}
                                            borderRadius={{ sm: "6px", md: "8px", '2xl': '8px' }}
                                            border={"2px dashed var(--black-alpha-300, rgba(0, 0, 0, 0.16))"}
                                            background={"var(--gray-0, #F7F7FA)"}

                                        >
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                padding={{ sm: "0px 10px", md: "0px 12px", lg: "0px 14px", xl: "0px 16px", '2xl': '0px 16px' }}
                                                gap={{ sm: "6px", md: "7px", lg: "8px", '2xl': '8px' }}
                                                height={{ sm: "24px", mm: "26px", ml: "27px", md: "28px", lg: "32px", xl: "36px", '2xl': '40px' }}
                                                flexShrink={0}
                                                borderRadius={{ sm: "4px", md: "4px", '2xl': '6px' }}
                                                border={"1px solid var(--primary-main, #11190C)"}
                                                background={"var(--white, #FFF)"}
                                                cursor={"pointer"}
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
                                                        onChange={handleFileChange}
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
                                }
                            </Flex>
                        </Flex>
                    </Box>
                    <Flex
                        gap={{ sm: "10px", md: "12px", lg: "13px", xl: "14px", '2xl': "16px" }}
                    >
                        <chakra.button
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            height={{ sm: '', '2xl': '32px' }}
                            padding={{ sm: '4px', '2xl': '0px 12px' }}
                            gap={{ sm: "4px", '2xl': "8px" }}
                            borderRadius={"6px"}
                            border={"1px solid var(--gray-200, #E2E8F0)"}
                            onClick={onClosePop}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "12px", '2xl': "14px" }}
                            fontStyle={"normal"}
                            fontWeight={"600"}
                            lineHeight={"20px"}
                        >cancel</chakra.button>
                        <chakra.button
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            height={{ sm: '', '2xl': '32px' }}
                            padding={{ sm: '4px', lg: "2px 6px", '2xl': '0px 12px' }}
                            gap={{ sm: "4px", md: "5px", lg: "6px", xl: "8px", '2xl': "8px" }}
                            className="bg-btn"
                            color={"#FFF"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "12px", md: "14px", '2xl': "14px" }}
                            fontStyle={"normal"}
                            fontWeight={{ sm: "500", md: "500", "2xl": "600" }}
                            lineHeight={"20px"}
                            disabled={isFileUploaded ? false : true}
                            _disabled={{
                                cursor: "not-allowed",
                                opacity: 0.5
                            }}
                            border={"1px solid var(--gray-200, #E2E8F0)"}
                            borderRadius={"6px"}
                            onClick={handleFileUpload}
                        >
                            begin import
                        </chakra.button>
                    </Flex>
                </Box>
            </Box >
        </>
    )
}

export default Popup

{/* <label htmlFor="file-input">Upload text file:</label>
      <Button onClick={() => document.getElementById("file-input").click()}>Select file</Button>
      <Input id="file-input" type="file" accept="text/plain" style={{ display: "none" }} /> */}

{/* <Button onClick={() => setIsOpen(false)}>Cancel</Button>? */ }
