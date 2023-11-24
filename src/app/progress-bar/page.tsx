"use client"
import { Box, Button, Image, Input, Progress, Text, keyframes, Switch, Select, chakra } from '@chakra-ui/react';
import ImportDialogueBox from './UploadFileProgressBar';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure

} from '@chakra-ui/react'
import Udf_mapping from '../components/Udf_mapping';

const Page = () => {
    const [uploadingStart, setUploadingStart] = useState();
    const [progressValue, setProgressValue] = useState(50);
    const [width, setWidth] = useState(0);
    const progress = 50; // Set your progress value dynamically

    const progressBarAnimation = keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  `;
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        // <>
        //     <Button onClick={onOpen}>progress bar</Button>
        //     <Modal isOpen={isOpen}
        //         onClose={onClose}
        //         isCentered
        //         size={{ sm: "sm", md: 'lg', lg: "xl", '2xl': '4xl' }}>
        //         <ModalOverlay />
        //         <ModalContent
        //             display={"flex"}
        //             justifyContent={"start"}
        //             flexDir={"column"}
        //             alignItems={"center"}
        //             margin={"auto"}

        //         // flexDirection={"column"}
        //         // margin={"auto"}
        //         >
        //             {/* <Box
        //                 display={"flex"}
        //                 width={{ sm: "", "lg": "432px" }}
        //                 padding={{ sm: "", "lg": "32px" }}
        //                 flexDir={"column"}
        //                 alignItems={"flex-start"}
        //                 gap={{ sm: "", "lg": "32px" }}
        //                 borderRadius={{ sm: "14px", "lg": "24px" }}
        //                 background={"var(--white-100, #FFF)"}
        //                 boxShadow={"0px 24px 48px 0px rgba(90, 91, 106, 0.08), 0px 12px 24px 0px rgba(58, 58, 68, 0.08)"}
        //             >
        //                 <Box
        //                     display={"flex"}
        //                     flexDir={"column"}
        //                     justifyContent={"center"}
        //                     alignItems={"center"}
        //                     alignSelf={"stretch"}
        //                 >
        //                     <Text
        //                         color={"var(--gray-100, #19191D)"}
        //                         fontFamily={"Inter"}
        //                         fontSize={{ sm: "16px", lg: "20px" }}
        //                         fontStyle={"normal"}
        //                         fontWeight={{ sm: "400", lg: "600" }}
        //                         lineHeight={{ sm: "20px", lg: "28px" }}
        //                     >
        //                         Import in Progress...
        //                     </Text>
        //                 </Box>
        //                 <Box
        //                     width={"100%"}
        //                     margin={"auto"}
        //                     borderRadius={"full"}
        //                 >
        //                     <Box
        //                         position="relative"
        //                         height="8px"
        //                         bg="var(--primary-states-hover, rgba(17, 25, 12, 0.04))"
        //                         borderRadius="full"
        //                     >
        //                         <Box
        //                             position="absolute"
        //                             left="0"
        //                             top="0"
        //                             height="full"
        //                             bg="black" // Set the color to black
        //                             borderRadius="full"
        //                             width={`0%`}
        //                             animation={`${progressBarAnimation} 5s ease-in-out`}
        //                         ></Box>
        //                     </Box>
        //                 </Box>
        //             </Box > */}

                    // <Box
                    //     display={"flex"}
                    //     width={{ sm: "90%", lg: "100%", "2xl": "1465px" }}
                    //     height={{ sm: "95%", lg: "70%", "2xl": "850px" }}
                    //     padding={{ sm: "", "2xl": "32px 40px" }}
                    //     alignItems={{ sm: "", "2xl": "flex-start" }}
                    //     flexDir={"column"}
                    //     gap={{ sm: "", "2xl": "8px" }}
                    //     flexShrink={0}
                    //     borderRadius={{ sm: "12px", "2xl": "20px" }}
                    //     bg={"#FFF"}
                    // >
                    //     <Box
                    //         display={"flex"}
                    //         alignItems={{ sm: "", "2xl": "flex-start" }}
                    //         flexDir={"column"}
                    //         gap={{ sm: "", "2xl": "30px" }}
                    //         flex={"1 0 0"}
                    //         alignSelf={"stretch"}
                    //     >
                    //         <Box
                    //             display={"flex"}
                    //             alignItems={"flex-start"}
                    //             gap={{ sm: "", "2xl": "16px" }}
                    //             alignSelf={"stretch"}
                    //         >
                    //             <Box
                    //                 display={"flex"}
                    //                 flexDirection={"column"}
                    //                 justifyContent={"center"}
                    //                 alignItems={"center"}
                    //                 borderRadius={"100px"}
                    //                 background={" var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
                    //                 width={{ sm: "", "2xl": "40px" }}
                    //                 height={{ sm: "", "2xl": "40px" }}
                    //             >
                    //                 <Image src={"info-circle.svg"} alt={"i-circle"}
                    //                     width={{ sm: "", "2xl": "24px" }}
                    //                     height={{ sm: "", "2xl": "24px" }}
                    //                 />
                    //             </Box>
                    //             <Box
                    //                 display={"flex"}
                    //                 flexDirection={"column"}
                    //                 alignItems={"flex-start"}
                    //                 gap={"8px"}
                    //                 flex={" 1 0 0"}
                    //             >
                    //                 <Box
                    //                     alignSelf={"stretch"}
                    //                 >
                    //                     <Text
                    //                         color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                    //                         fontFamily={"Inter"}
                    //                         fontSize={{ sm: "16px", "2xl": "24px" }}
                    //                         fontStyle={"normal"}
                    //                         fontWeight={{ sm: "400", "2xl": "500" }}
                    //                         lineHeight={{ sm: "20px", "2xl": "32px" }}
                    //                     >
                    //                         Confirm Mapping of Hindsite UDFs to ServeCommand Data
                    //                     </Text>
                    //                 </Box>
                    //                 <Box
                    //                     alignSelf={"stretch"}
                    //                 >
                    //                     <Text
                    //                         color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64));"}
                    //                         fontFamily={"Inter"}
                    //                         fontSize={{ sm: "16px", "2xl": "16px" }}
                    //                         fontStyle={"normal"}
                    //                         fontWeight={{ sm: "400", "2xl": "400" }}
                    //                         lineHeight={{ sm: "20px", "2xl": "24px" }}
                    //                     >
                    //                         Please review the following data templates from Hindsite and confirm where the
                    //                         data should live in ServeCommand
                    //                     </Text>
                    //                 </Box>
                    //             </Box>
                    //         </Box >
                    //         <Box
                    //             display={"flex"}
                    //             padding={{ sm: "", "2xl": "12px" }}
                    //             alignItems={{ sm: "", "2xl": "flex-start" }}
                    //             flex={{ sm: "", "2xl": "1 0 0" }}
                    //             alignSelf={{ sm: "", "2xl": "stretch" }}
                    //             borderRadius={"12px"}
                    //             border={"1px solid var(--gray-200, #E2E8F0)"}
                    //             background={"var(--white, #FFF)"}
                    //         >
                    //             <TableContainer>
                    //                 <Table variant='simple'>
                    //                     <TableCaption>Imperial to metric conversion factors</TableCaption>
                    //                     <Thead>
                    //                         <Tr>
                    //                             <Th
                    //                                 display={"flex"}
                    //                                 paddingTop={"12px"}
                    //                                 flexDir={"column"}
                    //                                 justifyContent={"flex-end"}
                    //                                 alignItems={"center"}
                    //                                 gap={{ sm: "", "2xl": "11px" }}
                    //                                 alignSelf={"stretch"}
                    //                             >
                    //                                 <Box
                    //                                     height={{ sm: "", "2xl": "40px" }}
                    //                                     alignSelf={"stretch"}
                    //                                     bg={"var(--white, #FFF)"}
                    //                                 >
                    //                                     <Box
                    //                                         width={{ sm: "", "2xl": "96px" }}
                    //                                         height={{ sm: "", "2xl": "16px" }}
                    //                                     >
                    //                                         <Text
                    //                                             color={"var(--gray-600, #4A5568)"}
                    //                                             fontFamily={"Inter"}
                    //                                             fontSize={{ sm: "16px", "2xl": "12px" }}
                    //                                             fontStyle={"normal"}
                    //                                             fontWeight={{ sm: "400", "2xl": "700" }}
                    //                                             lineHeight={{ sm: "20px", "2xl": "16px" }}
                    //                                             letterSpacing={"0.6px"}
                    //                                         >
                    //                                             Import
                    //                                         </Text>
                    //                                     </Box>
                    //                                 </Box>
                    //                             </Th>
                    //                             <Th>
                    //                                 <Box
                    //                                     height={{ sm: "", "2xl": "40px" }}
                    //                                     alignSelf={"stretch"}
                    //                                     bg={"var(--white, #FFF)"}
                    //                                 >
                    //                                     <Box
                    //                                         width={{ sm: "", "2xl": "358px" }}
                    //                                         height={{ sm: "", "2xl": "16px" }}
                    //                                     >
                    //                                         <Text
                    //                                             color={"var(--gray-600, #4A5568)"}
                    //                                             fontFamily={"Inter"}
                    //                                             fontSize={{ sm: "16px", "2xl": "12px" }}
                    //                                             fontStyle={"normal"}
                    //                                             fontWeight={{ sm: "400", "2xl": "700" }}
                    //                                             lineHeight={{ sm: "20px", "2xl": "16px" }}
                    //                                             letterSpacing={"0.6px"}
                    //                                         >
                    //                                             Hindsite UDF Category
                    //                                         </Text>
                    //                                     </Box>
                    //                                 </Box>
                    //                             </Th>
                    //                             <Th>
                    //                                 <Box
                    //                                     height={{ sm: "", "2xl": "40px" }}
                    //                                     alignSelf={"stretch"}
                    //                                     bg={"var(--white, #FFF)"}
                    //                                 >
                    //                                     <Box
                    //                                         width={{ sm: "", "2xl": "358px" }}
                    //                                         height={{ sm: "", "2xl": "16px" }}
                    //                                     >
                    //                                         <Text
                    //                                             color={"var(--gray-600, #4A5568)"}
                    //                                             fontFamily={"Inter"}
                    //                                             fontSize={{ sm: "16px", "2xl": "12px" }}
                    //                                             fontStyle={"normal"}
                    //                                             fontWeight={{ sm: "400", "2xl": "700" }}
                    //                                             lineHeight={{ sm: "20px", "2xl": "16px" }}
                    //                                             letterSpacing={"0.6px"}
                    //                                         >
                    //                                             Hindsite UDF
                    //                                         </Text>
                    //                                     </Box>
                    //                                 </Box>
                    //                             </Th>
                    //                             <Th>
                    //                                 <Box
                    //                                     height={{ sm: "", "2xl": "40px" }}
                    //                                     alignSelf={"stretch"}
                    //                                     bg={"var(--white, #FFF)"}
                    //                                 >
                    //                                     <Box
                    //                                         width={{ sm: "", "2xl": "358px" }}
                    //                                         height={{ sm: "", "2xl": "16px" }}
                    //                                     >
                    //                                         <Text
                    //                                             color={"var(--gray-600, #4A5568)"}
                    //                                             fontFamily={"Inter"}
                    //                                             fontSize={{ sm: "16px", "2xl": "12px" }}
                    //                                             fontStyle={"normal"}
                    //                                             fontWeight={{ sm: "400", "2xl": "700" }}
                    //                                             lineHeight={{ sm: "20px", "2xl": "16px" }}
                    //                                             letterSpacing={"0.6px"}
                    //                                         >
                    //                                             Data Category
                    //                                         </Text>
                    //                                     </Box>
                    //                                 </Box>
                    //                             </Th>
                    //                         </Tr>
                    //                     </Thead>
                    //                     <Tbody>
                    //                         <Tr>
                    //                             <Td>
                    //                                 <Box
                    //                                     display={"flex"}
                    //                                     alignItems={"center"}
                    //                                     height={{ sm: "", "2xl": "88px" }}
                    //                                     alignSelf={"stretch"}
                    //                                 >
                    //                                     <Switch size='"2xl"' colorScheme='blackAlpha' />
                    //                                 </Box>
                    //                             </Td>
                    //                             <Td>Sprinkler System Information</Td>
                    //                             <Td>Number of Zones <br />Numerical</Td>
                    //                             <Td>
                    //                                 <Select placeholder='Irrigation'>
                    //                                     <option value='option1'>Option 1</option>
                    //                                     <option value='option2'>Option 2</option>
                    //                                     <option value='option3'>Option 3</option>
                    //                                 </Select>

                    //                             </Td>
                    //                         </Tr>
                    //                     </Tbody>
                    //                 </Table>
                    //             </TableContainer>
                    //         </Box >
                    //         <Box
                    //             display={"flex"}
                    //             alignItems={"flex-start"}
                    //             gap={{ sm: "", "2xl": "16px" }}
                    //             width={{ sm: "", "2xl": "820px" }}
                    //             height={{ sm: "", "2xl": "32px" }}
                    //         >
                    //             <chakra.button>
                    //                 <Box
                    //                     display={"flex"}
                    //                     alignItems={"center"}
                    //                     justifyContent={"center"}
                    //                     gap={{ sm: "", "2xl": "8px" }}
                    //                     height={{ sm: "", "2xl": "32px" }}
                    //                     padding={{ sm: "", "2xl": "0px 12px" }}
                    //                     border={"1px solid var(--gray-200, #E2E8F0)"}
                    //                     borderRadius={"6px"}
                    //                 >
                    //                     <Text
                    //                         color={" var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                    //                         fontFamily={"Inter"}
                    //                         fontSize={{ sm: "", "2xl": "14px" }}
                    //                         fontStyle={"normal"}
                    //                         fontWeight={{ sm: "", "2xl": "600" }}
                    //                         lineHeight={{ sm: "20px", "2xl": "20px" }}
                    //                     >
                    //                         cancel
                    //                     </Text>
                    //                 </Box>
                    //             </chakra.button>
                    //             <chakra.button
                    //                 display={"flex"}
                    //                 alignItems={"center"}
                    //                 justifyContent={"center"}
                    //                 gap={{ sm: "", "2xl": "8px" }}
                    //                 height={{ sm: "", "2xl": "32px" }}
                    //                 padding={{ sm: "", "2xl": "0px 12px" }}
                    //                 borderRadius={"6px"}
                    //                 background={true ? "var(--gray-100, #EDF2F7)" : "#000"}
                    //                 disabled={true}
                    //                 _disabled={{
                    //                     cursor: 'not-allowed',
                    //                     opacity: 0.5
                    //                 }}
                    //             ><Box>
                    //                     <Text
                    //                         color={true ? "var(--text-primary, rgba(0, 0, 0, 0.87))" : "#FFF"}
                    //                         fontFamily={"Inter"}
                    //                         fontSize={{ sm: "", "2xl": "14px" }}
                    //                         fontStyle={"normal"}
                    //                         fontWeight={{ sm: "", "2xl": "600" }}
                    //                         lineHeight={{ sm: "20px", "2xl": "20px" }}
                    //                     >
                    //                         confirm mapping
                    //                     </Text>
                    //                 </Box>
                    //             </chakra.button>
                    //         </Box>
                    //     </Box>
                    // </Box>

                    <Udf_mapping />
        //             {/* <Box
        //                 display={"flex"}
        //                 width={{ sm: "", "lg": "432px" }}
        //                 padding={{ sm: "", "lg": "32px" }}
        //                 flexDir={"column"}
        //                 justifyContent={"center"}
        //                 alignItems={"center"}
        //                 gap={{ sm: "", "lg": "32px" }}
        //                 borderRadius={{sm: "", lg: "24px"}}
        //                 bg={"#FFF"}
        //             >
        //                 <Box>
        //                     <Text
        //                         color={"var(--primary-main, #11190C)"}
        //                         fontFamily={"Inter"}
        //                         fontSize={{ sm: "16px", lg: "20px" }}
        //                         fontStyle={"normal"}
        //                         fontWeight={{ sm: "400", lg: "600" }}
        //                         lineHeight={{ sm: "20px", lg: "28px" }}
        //                     >
        //                         Import Successful!
        //                     </Text>
        //                 </Box>
        //                 <Box
        //                     width={{ sm: "", "lg": "117px" }}
        //                     height={{ sm: "", "lg": "117px" }}
        //                 >
        //                     <Image src={"/check-circle-green.svg"} alt={"circle"} />
        //                 </Box>
        //                 <chakra.button>
        //                     <Box
        //                         display={"flex"}
        //                         alignItems={"center"}
        //                         justifyContent={"center"}
        //                         gap={{ sm: "", "lg": "8px" }}
        //                         height={{ sm: "", "lg": "32px" }}
        //                         padding={{ sm: "", "lg": "0px 12px" }}
        //                         border={"1px solid var(--gray-200, #E2E8F0)"}
        //                         borderRadius={"6px"}
        //                         background={"#000"}
        //                     >
        //                         <Text
        //                             color={" #FFF"}
        //                             fontFamily={"Inter"}
        //                             fontSize={{ sm: "", "lg": "14px" }}
        //                             fontStyle={"normal"}
        //                             fontWeight={{ sm: "", "lg": "600" }}
        //                             lineHeight={{ sm: "20px", "lg": "20px" }}
        //                         >
        //                             cancel
        //                         </Text>
        //                     </Box>
        //                 </chakra.button>
        //             </Box> */}

        //         </ModalContent>
        //     </Modal>
        // </>
        // <ImportDialogueBox />
    );
};

export default Page;
