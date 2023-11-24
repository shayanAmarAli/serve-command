import {
    Box, Text, chakra, Table, Thead, Tbody, Switch,
    Tr, Th, Td, TableCaption, TableContainer, Image, Select
} from '@chakra-ui/react'
import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'

const fetchSelectedCategories = async () => {
    try {
        const response = await axios.get("");
        const selCategoriesFetched = response.data;
        console.log("Selected categories are....", selCategoriesFetched);
        return selCategoriesFetched;
    } catch (error) {
        console.log("Error occurred...", error);
    }
}

const Udf_mapping = () => {
    // const response = fetchSelectedCategories();
    return (
        <Box
            display={"flex"}
            width={{ sm: "90%", lg: "100%", "2xl": "1465px" }}
            height={{ sm: "95%", lg: "70%", "2xl": "850px" }}
            padding={{ sm: "", "2xl": "32px 40px" }}
            alignItems={{ sm: "", "2xl": "flex-start" }}
            flexDir={"column"}
            gap={{ sm: "", "2xl": "8px" }}
            flexShrink={0}
            borderRadius={{ sm: "12px", "2xl": "20px" }}
            bg={"#FFF"}
        >
            <Box
                display={"flex"}
                alignItems={{ sm: "", "2xl": "flex-start" }}
                flexDir={"column"}
                gap={{ sm: "", "2xl": "30px" }}
                flex={"1 0 0"}
                alignSelf={"stretch"}
            >
                <Box
                    display={"flex"}
                    alignItems={"flex-start"}
                    gap={{ sm: "", "2xl": "16px" }}
                    alignSelf={"stretch"}
                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={"100px"}
                        background={" var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
                        width={{ sm: "", "2xl": "40px" }}
                        height={{ sm: "", "2xl": "40px" }}
                    >
                        <Image src={"info-circle.svg"} alt={"i-circle"}
                            width={{ sm: "", "2xl": "24px" }}
                            height={{ sm: "", "2xl": "24px" }}
                        />
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"8px"}
                        flex={" 1 0 0"}
                    >
                        <Box
                            alignSelf={"stretch"}
                        >
                            <Text
                                color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                                fontFamily={"Inter"}
                                fontSize={{ sm: "16px", "2xl": "24px" }}
                                fontStyle={"normal"}
                                fontWeight={{ sm: "400", "2xl": "500" }}
                                lineHeight={{ sm: "20px", "2xl": "32px" }}
                            >
                                Confirm Mapping of Hindsite UDFs to ServeCommand Data
                            </Text>
                        </Box>
                        <Box
                            alignSelf={"stretch"}
                        >
                            <Text
                                color={"var(--black-alpha-700, rgba(0, 0, 0, 0.64));"}
                                fontFamily={"Inter"}
                                fontSize={{ sm: "16px", "2xl": "16px" }}
                                fontStyle={"normal"}
                                fontWeight={{ sm: "400", "2xl": "400" }}
                                lineHeight={{ sm: "20px", "2xl": "24px" }}
                            >
                                Please review the following data templates from Hindsite and confirm where the
                                data should live in ServeCommand
                            </Text>
                        </Box>
                    </Box>
                </Box >
                <Box
                    display={"flex"}
                    padding={{ sm: "", "2xl": "12px" }}
                    alignItems={{ sm: "", "2xl": "flex-start" }}
                    flex={{ sm: "", "2xl": "1 0 0" }}
                    alignSelf={{ sm: "", "2xl": "stretch" }}
                    borderRadius={"12px"}
                    border={"1px solid var(--gray-200, #E2E8F0)"}
                    background={"var(--white, #FFF)"}
                >
                    <Box>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th
                                        display={"flex"}
                                        paddingTop={"12px"}
                                        flexDir={"column"}
                                        justifyContent={"flex-end"}
                                        alignItems={"center"}
                                        gap={{ sm: "", "2xl": "11px" }}
                                        alignSelf={"stretch"}
                                    >
                                        <Box
                                            height={{ sm: "", "2xl": "40px" }}
                                            alignSelf={"stretch"}
                                            bg={"var(--white, #FFF)"}
                                        >
                                            <Box
                                                width={{ sm: "", "2xl": "96px" }}
                                                height={{ sm: "", "2xl": "16px" }}
                                            >
                                                <Text
                                                    color={"var(--gray-600, #4A5568)"}
                                                    fontFamily={"Inter"}
                                                    fontSize={{ sm: "16px", "2xl": "12px" }}
                                                    fontStyle={"normal"}
                                                    fontWeight={{ sm: "400", "2xl": "700" }}
                                                    lineHeight={{ sm: "20px", "2xl": "16px" }}
                                                    letterSpacing={"0.6px"}
                                                >
                                                    Import
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Th>
                                    <Th>
                                        <Box
                                            height={{ sm: "", "2xl": "40px" }}
                                            alignSelf={"stretch"}
                                            bg={"var(--white, #FFF)"}
                                        >
                                            <Box
                                                width={{ sm: "", "2xl": "358px" }}
                                                height={{ sm: "", "2xl": "16px" }}
                                            >
                                                <Text
                                                    color={"var(--gray-600, #4A5568)"}
                                                    fontFamily={"Inter"}
                                                    fontSize={{ sm: "16px", "2xl": "12px" }}
                                                    fontStyle={"normal"}
                                                    fontWeight={{ sm: "400", "2xl": "700" }}
                                                    lineHeight={{ sm: "20px", "2xl": "16px" }}
                                                    letterSpacing={"0.6px"}
                                                >
                                                    Hindsite UDF Category
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Th>
                                    <Th>
                                        <Box
                                            height={{ sm: "", "2xl": "40px" }}
                                            alignSelf={"stretch"}
                                            bg={"var(--white, #FFF)"}
                                        >
                                            <Box
                                                width={{ sm: "", "2xl": "358px" }}
                                                height={{ sm: "", "2xl": "16px" }}
                                            >
                                                <Text
                                                    color={"var(--gray-600, #4A5568)"}
                                                    fontFamily={"Inter"}
                                                    fontSize={{ sm: "16px", "2xl": "12px" }}
                                                    fontStyle={"normal"}
                                                    fontWeight={{ sm: "400", "2xl": "700" }}
                                                    lineHeight={{ sm: "20px", "2xl": "16px" }}
                                                    letterSpacing={"0.6px"}
                                                >
                                                    Hindsite UDF
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Th>
                                    <Th>
                                        <Box
                                            height={{ sm: "", "2xl": "40px" }}
                                            alignSelf={"stretch"}
                                            bg={"var(--white, #FFF)"}
                                        >
                                            <Box
                                                width={{ sm: "", "2xl": "358px" }}
                                                height={{ sm: "", "2xl": "16px" }}
                                            >
                                                <Text
                                                    color={"var(--gray-600, #4A5568)"}
                                                    fontFamily={"Inter"}
                                                    fontSize={{ sm: "16px", "2xl": "12px" }}
                                                    fontStyle={"normal"}
                                                    fontWeight={{ sm: "400", "2xl": "700" }}
                                                    lineHeight={{ sm: "20px", "2xl": "16px" }}
                                                    letterSpacing={"0.6px"}
                                                >
                                                    Data Category
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                
                                <Tr>
                                    <Td>
                                        <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        height={{ sm: "", "2xl": "88px" }}
                                        alignSelf={"stretch"}
                                        >
                                            <Switch size="lg" colorScheme='blue' />
                                        </Box>
                                    </Td>
                                    <Td
                                        color={"var(--gray-700, #2D3748)"}
                                        fontFamily={"Inter"}
                                        fontSize={{ sm: "14px", md: "16px" }}
                                        fontStyle={"normal"}
                                        fontWeight={400}
                                        lineHeight={{ sm: "14px", md: "16px", "lg": "20px", "2xl": "24px" }}
                                    >Sprinkler System Information</Td>
                                    <Td
                                        color={"var(--gray-700, #2D3748)"}
                                        fontFamily={"Inter"}
                                        fontSize={{ sm: "14px", md: "16px" }}
                                        fontStyle={"normal"}
                                        fontWeight={400}
                                        lineHeight={{ sm: "14px", md: "16px", "lg": "20px", "2xl": "24px" }}

                                    >Number of Zones
                                        <Text
                                            color={"var(--gray-500, #718096)"}
                                            fontFamily={"Inter"}
                                            fontSize={"12px"}
                                            fontStyle={"normal"}
                                            fontWeight={400}
                                            lineHeight={{ sm: "12px", md: "14px", "lg": "15px", "2xl": "16px" }}
                                        >
                                            Numerical
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Select placeholder='Irrigation'>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Box >
                <Box
                    display={"flex"}
                    alignItems={"flex-start"}
                    gap={{ sm: "", "2xl": "16px" }}
                    width={{ sm: "", "2xl": "820px" }}
                    height={{ sm: "", "2xl": "32px" }}
                >
                    <chakra.button>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap={{ sm: "", "2xl": "8px" }}
                            height={{ sm: "", "2xl": "32px" }}
                            padding={{ sm: "", "2xl": "0px 12px" }}
                            border={"1px solid var(--gray-200, #E2E8F0)"}
                            borderRadius={"6px"}
                        >
                            <Text
                                color={" var(--black-alpha-900, rgba(0, 0, 0, 0.92))"}
                                fontFamily={"Inter"}
                                fontSize={{ sm: "", "2xl": "14px" }}
                                fontStyle={"normal"}
                                fontWeight={{ sm: "", "2xl": "600" }}
                                lineHeight={{ sm: "20px", "2xl": "20px" }}
                            >
                                Cancel
                            </Text>
                        </Box>
                    </chakra.button>
                    <chakra.button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={{ sm: "", "2xl": "8px" }}
                        height={{ sm: "", "2xl": "32px" }}
                        padding={{ sm: "", "2xl": "0px 12px" }}
                        borderRadius={"6px"}
                        background={true ? "var(--gray-100, #EDF2F7)" : "#000"}
                        disabled={true}
                        _disabled={{
                            cursor: 'not-allowed',
                            opacity: 0.5
                        }}
                    ><Box>
                            <Text
                                color={true ? "var(--text-primary, rgba(0, 0, 0, 0.87))" : "#FFF"}
                                fontFamily={"Inter"}
                                fontSize={{ sm: "", "2xl": "14px" }}
                                fontStyle={"normal"}
                                fontWeight={{ sm: "", "2xl": "600" }}
                                lineHeight={{ sm: "20px", "2xl": "20px" }}
                            >
                                confirm mapping
                            </Text>
                        </Box>
                    </chakra.button>
                </Box>
            </Box>
        </Box>

    )
}

export default Udf_mapping
