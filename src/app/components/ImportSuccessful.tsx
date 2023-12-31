"use client"
import { Box, chakra, Text, Image } from '@chakra-ui/react'
import { useState } from 'react'
import Udf_mapping from './Udf_mapping'

const ImportSuccessful = () => {
    const [isDone, setIsDone] = useState<boolean>(false);

    return (
        <Box>
            {isDone ?
                (<Udf_mapping />) :
                (<Box
                    display={"flex"}
                    width={{ sm: "", "lg": "432px" }}
                    padding={{ sm: "", "lg": "32px" }}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={{ sm: "", "lg": "32px" }}
                    borderRadius={{ sm: "", lg: "24px" }}
                    bg={"#FFF"}
                >
                    <Box>
                        <Text
                            color={"var(--primary-main, #11190C)"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "16px", lg: "20px" }}
                            fontStyle={"normal"}
                            fontWeight={{ sm: "400", lg: "600" }}
                            lineHeight={{ sm: "20px", lg: "28px" }}
                        >
                            Import Successful!
                        </Text>
                    </Box>
                    <Box
                        width={{ sm: "", "lg": "117px" }}
                        height={{ sm: "", "lg": "117px" }}
                    >
                        <Image src={"/check-circle-green.svg"} alt={"circle"} />
                    </Box>
                    <chakra.button
                        onClick={() => setIsDone(true)}
                    >
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={{ sm: "", "lg": "8px" }}
                            height={{ sm: "", "lg": "32px" }}
                            padding={{ sm: "", "lg": "0px 12px" }}
                            border={"1px solid var(--gray-200, #E2E8F0)"}
                            borderRadius={"6px"}
                            background={"#000"}
                        >
                            <Text
                                color={" #FFF"}
                                fontFamily={"Inter"}
                                fontSize={{ sm: "", "lg": "14px" }}
                                fontStyle={"normal"}
                                fontWeight={{ sm: "", "lg": "600" }}
                                lineHeight={{ sm: "20px", "lg": "20px" }}
                            >
                                Done
                            </Text>
                        </Box>
                    </chakra.button>
                </Box>)
            }

        </Box>

    )
}

export default ImportSuccessful
