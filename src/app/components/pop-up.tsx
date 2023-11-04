"use client"
import { Box, Button, Text, Image, Heading, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        file && setIsFileUploaded(true)
        // Do something with the file, like send it to the server
    };
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Dialog Box</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent justifyContent="center" alignItems="center" height={"80vh"} background={"none"} boxShadow={"none"}>
                    <Box
                        display={"flex"}
                        width={{ sm: "95%", '2xl': "900px" }}
                        // height={{ sm: "80vh", '2xl': "none" }}
                        padding={{ sm: "14px", '2xl': "32px 40px" }}
                        flexDir={"column"}
                        alignItems={"flex-start"}
                        gap={{ sm: '4px', '2xl': "8px" }}
                        borderRadius={{ sm: "12px", '2xl': '20px' }}
                        background={"var(--white, #FFF)"}
                    >
                        <Box
                            display={"flex"}
                            flexDir={"column"}
                            gap={{ sm: "16px", '2xl': '30px' }}
                        >
                            <Flex
                                gap={{ sm: "8px", '2xl': '16px' }}
                            >
                                <Box
                                    display={"flex"}
                                    flexDir={"column"}
                                    justifyContent={"start"}
                                    alignItems={"center"}
                                    borderRadius={"100px"}
                                    background={"var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
                                    width={{ sm: "20px", '2xl': "40px" }}
                                    height={{ sm: "20px", '2xl': "40px" }}
                                >
                                    <Text
                                        width={{ sm: "16px", '2xl': "24px" }}
                                        height={{ sm: "16px", '2xl': "24px" }}
                                    >
                                        <Image src={"/info-circle.svg"} alt={"logo"} />
                                    </Text>
                                </Box>
                                <Box
                                    width={{ sm: "", "2xl": "768px" }}
                                >
                                    <Heading
                                        fontSize={{ sm: "16px", '2xl': "" }}
                                    >
                                        Prepare Your Hindsite Import
                                    </Heading>
                                    <Text
                                        fontSize={{ sm: "14px", '2xl': "" }}
                                    >
                                        To get started, you will need to export your latest backup of Hindsite.
                                    </Text>
                                </Box>
                            </Flex>
                            <Box>
                                <Flex
                                    flexDirection={"column"}
                                    gap={{ sm: '4px', '2xl': "16px" }}
                                >
                                    <Heading
                                        color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                                        fontSize={{ sm: "14px", '2xl': "16px" }}
                                        fontStyle={"normal"}
                                        fontWeight={"500"}
                                        lineHeight={"24px"}
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
                                            lineHeight={"24px"}
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
                                        lineHeight={"24px"}
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
                                            lineHeight={"24px"}
                                        >
                                            Find the backup file and use your computer to “Unzip” the file.
                                            The file should read “backup.txt”. Save this file somewhere you can easily find it.
                                        </Text>
                                    </Box>
                                    <Flex
                                        flexDir={"column"}
                                        gap={{ sm: "16px", '2xl': '32px' }}
                                    >
                                        <Heading
                                            color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                                            fontSize={{ sm: "14px", '2xl': "16px" }}
                                            fontStyle={"normal"}
                                            fontWeight={"400"}
                                            lineHeight={"24px"}
                                        >
                                            Step 3. Upload Your Backup File Here
                                        </Heading>
                                        <Box
                                            display={"flex"}
                                            padding={{ sm: "12px", '2xl': '24px' }}
                                            flexDir={"column"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            gap={{ sm: "", '2xl': '10px' }}
                                            alignSelf={"stretch"}
                                            borderRadius={{ sm: "", '2xl': '8px' }}
                                            border={"2px dashed var(--black-alpha-300, rgba(0, 0, 0, 0.16))"}
                                            background={"var(--gray-0, #F7F7FA)"}
                                        >
                                            {/* <Box
                                                display={"flex"}
                                                height={{ sm: "", '2xl': '40px' }}
                                                padding={{ sm: "", '2xl': '0px 16px' }}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                gap={{ sm: "", '2xl': '8px' }}
                                                flexShrink={0}
                                                borderRadius={{ sm: "", '2xl': '6px' }}
                                                border={"1px solid var(--primary-main, #11190C)"}
                                                background={"var(--white, #FFF)"}
                                                onClick={() => document.getElementById("file-input").click()}
                                            >
                                                <Box>
                                                    <Text>
                                                        Upload Backup Files
                                                    </Text>
                                                    <Input id="file-input" type="file" accept="text/plain" style={{ display: "none" }} />
                                                </Box>
                                                <Text
                                                    width={{ sm: "", '2xl': '16px' }}
                                                    height={{ sm: "", '2xl': '16px' }}
                                                >
                                                    <Image src={"/right-icon-upload.svg"} alt={"logo"} />
                                                </Text>
                                            </Box> */}
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
                                                    width={{ sm: "22px", '2xl': "40px" }}
                                                    height={{ sm: "22px", '2xl': "40px" }}
                                                >
                                                    <Text
                                                        width={{ sm: "16px", '2xl': "24px" }}
                                                        height={{ sm: "16px", '2xl': "24px" }}
                                                        color={"white"}
                                                    >
                                                        <Image src={"/info-circle.svg"} alt={"logo"} />
                                                    </Text>
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
                                                        height={{ sm: '', '2xl': "24px" }}
                                                        padding={{ sm: '0px 6px', '2xl': "0px 8px" }}
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
                                                        <Text
                                                            width={{ sm: "", '2xl': "12px" }}
                                                            height={{ sm: "", '2xl': "12px" }}
                                                        >
                                                            <Image src={"/cross.svg"} alt={"logo"}
                                                                width={{ sm: "10px", '2xl': "12px" }}
                                                                height={{ sm: "10px", '2xl': "12px" }}
                                                            />
                                                        </Text>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Flex
                                gap={{ sm: "10px", '2xl': "16px" }}
                            >
                                <Button
                                    display={"flex"}
                                    height={{ sm: '', '2xl': '32px' }}
                                    padding={{ sm: '4px', '2xl': '0px 12px' }}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    gap={{ sm: "4px", '2xl': "8px" }}
                                    borderRadius={"6px"}
                                    border={"1px solid var(--gray-200, #E2E8F0)"}
                                    onClick={() => setIsOpen(false)}
                                    fontFamily={"Inter"}
                                    fontSize={{ sm: "12px", '2xl': "14px" }}
                                    fontStyle={"normal"}
                                    fontWeight={"600"}
                                    lineHeight={"20px"}
                                >cancel</Button>
                                <Button
                                    display={"flex"}
                                    height={{ sm: '', '2xl': '32px' }}
                                    padding={{ sm: '', '2xl': '0px 12px' }}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    gap={{ sm: "", '2xl': "8px" }}
                                    borderRadius={"6px"}
                                    border={"1px solid var(--gray-200, #E2E8F0)"}
                                    background={"var(--primary-main, #11190C)"}
                                    isDisabled={false}
                                >
                                    <Text
                                        color={"#FFF"}
                                        fontFamily={"Inter"}
                                        fontSize={{ sm: "12px", '2xl': "14px" }}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"20px"}
                                    >
                                        begin import
                                    </Text>
                                </Button>
                            </Flex>
                        </Box>
                    </Box >
                </ModalContent>
            </Modal >
        </>
    )
}

export default Popup

{/* <label htmlFor="file-input">Upload text file:</label>
      <Button onClick={() => document.getElementById("file-input").click()}>Select file</Button>
      <Input id="file-input" type="file" accept="text/plain" style={{ display: "none" }} /> */}

{/* <Button onClick={() => setIsOpen(false)}>Cancel</Button>? */ }
