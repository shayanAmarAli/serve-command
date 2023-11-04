import React from 'react'
import { Box, Heading, Image, Text, Button, Input } from "@chakra-ui/react"
import Popup from '../components/pop-up'

const Page = () => {
    return (
        <>
        <Popup />
            {/* <Box
                display={"flex"}
                gap={{ sm: "", "2xl": "16px" }}
            >
                <Box
                    //    display: flex;
                    //    flex-direction: column;
                    //    justify-content: center;
                    //    align-items: center;
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"100px"}
                    background={"rgba(17, 25, 12, 0.04)"}
                >
                    <Image src={"/info-circle.svg"} alt={""} />
                </Box>
                <Box
                    width={{ sm: "", "2xl": "768px" }}
                >
                    <Heading>
                        Prepare Your Hindsite Import
                    </Heading>
                    <Text>
                        To get started, you will need to export your latest backup of Hindsite.
                    </Text>
                </Box>
            </Box>
            <Box>
                <Box display={"flex"} gap={{ sm: "", "2xl": "16px" }}>
                    <Text>
                        Step 1. Create Hindsite Backup
                    </Text>
                    <Text>
                        In Hindsite, go to “Daily Must Do” section and click “Run Backup”.
                        Save the backup file somewhere you can easily find it, like on your desktop.
                    </Text>
                    <Text>
                        Step 2. Unzip Hindsite Backup File
                    </Text>
                    <Text>
                        Find the backup file and use your computer to “Unzip” the file. The file should read “backup.txt”.
                        Save this file somewhere you can easily find it.
                    </Text>
                    <Box>
                        <Text>
                            Step 3. Upload Your Backup File Here
                        </Text>
                        <Box
                            //                         display: flex;
                            // height: 120px;
                            // padding: 10px;
                            // flex-direction: column;
                            // justify-content: center;
                            // align-items: center;
                            // gap: 10px;
                            // align-self: stretch;
                            display={"flex"}
                            height={{ sm: "", "2xl": "120px" }}
                            padding={{ sm: "", "2xl": "10px" }}
                            flexDir={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            gap={{ sm: "", "2xl": "10px" }}
                            alignSelf={"stretch"}
                        >
                            <Input>
                                <Text>
                                    Upload backup file
                                </Text>
                                <Image src={"/right-icon-upload.svg"}
                                    width={{ sm: "", "2xl": "14px" }}
                                    height={{ sm: "", "2xl": "14px" }}
                                />
                            </Input>
                        </Box>
                    </Box>
                </Box>
            </Box> */}
        </>
    )
}

export default Page
