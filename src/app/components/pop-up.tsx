"use client"
import {
    Box, Button, Text, Image, Heading, Flex,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
    Input, background, useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";

const Popup = ({ close }: any) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [fileName, setFileName] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const readFileContent = (file: any) => {
    //     return new Promise((resolve, reject) => {
    //       const reader = new FileReader();
    //       reader.onload = (event: any) => {
    //         resolve(event.target.result); // The file content will be available here
    //       };
    //       reader.onerror = (error) => {
    //         reject(error);
    //       };
    //       reader.readAsText(file); // You can also use readAsArrayBuffer for binary files
    //     });
    //   };
    // const handleFileUpload = async (event: any) => {
    //     const file = event.target.files[0];
    //     file && setIsFileUploaded(true);
    //     if (file) {
    //         try {
    //           const fileContent = await readFileContent(file);
    //           console.log(file.name ,'has content:', fileContent);
    //         } catch (error) {
    //           console.error('Error reading file:', error);
    //         }
    //       }
    // };
    const handleFileUpload = async (event: any) => {
        const file = await event.target.files[0];
        file && setIsFileUploaded(true);
        file && setFileName(file.name);
        if (file && file.size > 0) {
            const formData = new FormData(); // creates a new instance of the FormData object.
            formData.append('file', file); // appends the selected file to the FormData object. 
            if (formData.has('file')) {
                console.log('File has been appended to FormData.', file.name);
            } else {
                console.log('No file has been appended to FormData.');
            }
            // try {
            //     const response = await fetch('http://localhost:3000/upload', {
            //         method: 'POST',
            //         body: uploadedFile,
            //     });

            //     if (response.ok) {
            //         console.log('File uploaded successfully!');
            //     } else {
            //         console.error('File upload failed.');
            //     }
            // } catch (error) {
            //     console.error('Error uploading file:', error);
            // }
        } else {
            console.log("Opppps Belanders happens");
        }
    };

    return (
        <>
            <Button
                display={"flex"}
                height={{ sm: "20px", mm: "22px", ml: "24px", md: "26px", lg: "28px", xl: "30px", '2xl': '32px' }}
                padding={{ sm: "12px", lg: "0px 10px", '2xl': '0px 12px' }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ sm: "4px", md: "6px", '2xl': '8px' }}
                borderRadius={{ sm: "4px", '2xl': "6px" }}
                border={"1px solid var(--primary-states-focus-visible, rgba(17, 25, 12, 0.30))"}
                background={" var(--white-100, #FFF)"}
                onClick={onOpen}
            >
                <Image src={"/right-icon-upload.svg"} alt={""}
                    width={{ sm: '14px', '2xl': "14px" }}
                    height={{ sm: '14px', '2xl': "14px" }}
                    flexShrink={0}
                />
                <Text
                    color={'var(--primary-main, #11190C)'}
                    fontFamily={"Inter"}
                    fontSize={{ sm: '14px', '2xl': '14px' }}
                    fontStyle={"normal"}
                    fontWeight={'600'}
                    lineHeight={"20px"}
                >
                    Import
                </Text>
            </Button>
            <Box
                // display={"flex"}
                // flexDir={"column"}
                // justifyContent={"center"}
                // alignItems={"center"}
                hidden
                // height={"100vh"}
                // width={{ 'sm': "95%", ml: "90%", md: "auto", '2xl': "900px" }}
            >
                <Modal isOpen={isOpen} onClose={onClose} size={{sm: "sm", md: 'lg', lg: "xl", '2xl': '4xl'}} isCentered>
                    <ModalOverlay />
                    <ModalContent
                        display={"flex"}
                        flexDir={"column"} 
                        margin={"auto"}
                        borderRadius={{ sm: "14px", '2xl': '20px' }}
                        width={{ 'sm': "95%", ml: "90%", md: "auto", '2xl': "900px" }}
                    >
                        {/* <ModalBody width={{ 'sm': "95%", ml: "90%", md: "auto", '2xl': "900px" }}> */}
                        <Box
                            display={"flex"}
                            width={{ 'sm': "100%", ml: "100%", md: "auto", '2xl': "900px" }}
                            // height={"50vh"}
                            padding={{ sm: "12px 14px", 'md': "16px 20px", 'lg': "20px 28px", 'xl': "26px 34px", '2xl': "32px 40px" }}
                            flexDir={"column"}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            gap={{ sm: '4px', '2xl': "8px" }}
                            borderRadius={{ sm: "14px", '2xl': '20px' }}
                            background={"var(--white, #FFF)"}
                        border={"1px solid black"}
                        // margin={"auto"}
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
                                            flexShrink={0} width={{ sm: "16px", '2xl': "24px" }}
                                            height={{ sm: "16px", '2xl': "24px" }}
                                        />
                                    </Box>
                                    <Box
                                        width={{ sm: "", "2xl": "768px" }}
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
                                        flexDirection={"column"}
                                        gap={{ sm: '6px', '2xl': "16px" }}
                                    >
                                        <Heading
                                            color={"var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                                            fontSize={{ sm: "14px", '2xl': "16px" }}
                                            fontStyle={"normal"}
                                            fontWeight={"500"}
                                            lineHeight={{ sm: "24px", '2xl': "24px" }}
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
                                            gap={{ sm: "12px", '2xl': '32px' }}
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
                                                        gap={{ sm: "", '2xl': '10px' }}
                                                        alignSelf={"stretch"}
                                                        borderRadius={{ sm: "6px", md: "8px", '2xl': '8px' }}
                                                        border={"2px dashed var(--black-alpha-300, rgba(0, 0, 0, 0.16))"}
                                                        background={"var(--gray-0, #F7F7FA)"}
                                                    // margin={"auto"}
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
                                                        padding={{ sm: "4px", md: "6px", lg: "8px", xl: "10px", '2xl': '10px' }}
                                                        height={{ sm: "70px", mm: "85px", ml: "90px", md: "95px", lg: "100px", xl: "110px", '2xl': '120px' }}
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
                                                                    onChange={handleFileUpload}
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
                                        onClick={onClose}
                                        fontFamily={"Inter"}
                                        fontSize={{ sm: "12px", '2xl': "14px" }}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"20px"}
                                    // onClick={close}
                                    >cancel</Button>
                                    <Box
                                        border={"1px solid var(--gray-200, #E2E8F0)"}
                                        // bg="#11190C"
                                        borderRadius={"6px"}
                                        _disabled={{
                                            background: "#11190C",
                                            color: "#E2E8F0",
                                            _hover: {
                                                background: "none"
                                            }
                                        }}
                                    >
                                        <Button
                                            display={"flex"}
                                            height={{ sm: '', '2xl': '32px' }}
                                            padding={{ sm: '4px', '2xl': '0px 12px' }}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            gap={{ sm: "4px", '2xl': "8px" }}
                                            // onClick={() => setIsOpen(false)}
                                            fontFamily={"Inter"}
                                            fontSize={{ sm: "12px", '2xl': "14px" }}
                                            fontStyle={"normal"}
                                            fontWeight={"600"}
                                            lineHeight={"20px"}
                                            isDisabled={isFileUploaded && false}
                                            textColor="#FFFF"
                                            bg="#11190C"
                                            borderRadius={"6px"}
                                            _disabled={{
                                                background: "none",
                                                color: "#E2E8F0",
                                            }}
                                        >
                                            begin import
                                        </Button>

                                    </Box>
                                </Flex>
                            </Box>
                        </Box >
                            
                        {/* </ModalBody> */}
                    </ModalContent>
                </Modal>
            </Box>

        </>
    )
}

export default Popup

{/* <label htmlFor="file-input">Upload text file:</label>
      <Button onClick={() => document.getElementById("file-input").click()}>Select file</Button>
      <Input id="file-input" type="file" accept="text/plain" style={{ display: "none" }} /> */}

{/* <Button onClick={() => setIsOpen(false)}>Cancel</Button>? */ }
