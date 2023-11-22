"use client"
import { v4 as uuidv4 } from 'uuid';
import { Box, Flex, Image, chakra, Text } from "@chakra-ui/react"
import React, { useState } from 'react'

type category_types = {
    id: number,
    name: string,
    subText: string,
    about: string
}

const category: category_types[] = [
    {
        id: 1,
        name: "Landscape Irrigation",
        subText: "Also known as lawn sprinklers, lawn or shrub irrigation. Whatever you call it, you keep landscapes hydrated and healthy.",
        about: "Number of Zones, Controller Location, Controller Type, Backflow Location, etc."
    },
    {
        id: 2,
        name: "Low-Voltage Landscape Lighting",
        subText: "Also known as landscape lighting or outdoor lighting, your job is to illuminate your clients’ outdoor spaces using low-voltage lighting.",
        about: "Number of Transformers, Transformer Location, Number of Fixtures, etc."
    },
]
const SelectCategory = ({ onClosePop }: any) => {
    const [selectedCategories, setSelectedCategories] = useState<any>();
    const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>({});
    const [selected, setSelected] = useState<boolean>(true);
    const [uploadFile, setUploadFile] = useState<boolean>(true);
    const [selectedCategoryNames, setSelectedCategoryNames] = useState<string[]>([]); // New state for category names
    const [apiResponse, setApiResponse] = useState<string | null>(null);

    const handleAddRemove = (id: number, name: string) => {
        if (selectedCategories.includes(id)) {
            setSelectedCategories((prevCategories: any) => {
                // const names = category.filter((cat) => selectedCategories.includes(cat.id)).map((cat) => cat.name);
                // setSelectedCategoryNames(names);
                // selectedCategoryNames && console.log("selected category", selectedCategoryNames)
                const updatedCategories = prevCategories.filter((categoryId: any) => categoryId !== id);
                updatedCategories.length > 0 ? setSelected(false) : setSelected(true);
                return updatedCategories;
            });
        } else {
            setSelectedCategories((prevCategories: any) => {
                const addCategory = [...prevCategories, id, name];
                addCategory.length == 0 ? setSelected(true) : setSelected(false);
                return addCategory;
            });
        }
        console.log("selected category", selectedCategoryNames)
    };

    const handleMouseEnter = (id: number) => {
        setHoverStates((prevStates) => ({ ...prevStates, [id]: true }));
    };

    const handleMouseLeave = (id: number) => {
        setHoverStates((prevStates) => ({ ...prevStates, [id]: false }));
    };

    const fetchData = async (category_name: string) => {
        const apiUrl = 'https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/addservicecategory?SERVICE_CAT_ID=52f9c443-7379-4142-95f2-c8502c7d32ba&COMPANY_ID=52f9c443-7379-4142-95f2-c8502c7d32ab&SERVICE_CAT_NAME=Mishaal';

        // Generate a new UUID
        const serviceCatId = uuidv4();
        const companyId = uuidv4();

        const data = {
            COMPANY_ID: companyId,
            SERVICE_CAT_NAME: category_name,
            SERVICE_CAT_ID: serviceCatId,
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Request was successful
                const result = await response.json();
                setApiResponse(result); // Store the API response in state
            } else {
                // Handle error
                console.error('Error:', response.statusText);
                setApiResponse(null); // Reset the API response in case of an error
            }
        } catch (error: any) {
            console.error('Error:', error.message);
            setApiResponse(null); // Reset the API response in case of an error
        }
    }

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={{ sm: "", "lg": "8px" }}
            width={{ sm: "", "lg": "1117px" }}
            padding={{ sm: "", "lg": "32px 40px" }}
            borderRadius={{ sm: "", "lg": "20px" }}
            background={"var(--white, #FFF)"}
        >
            {/* First box */}
            <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"flex-start"}
                gap={{ sm: "", "lg": "16px" }}
                alignSelf={"stretch"}
            >
                <Box
                    alignSelf={"stretch"}
                >
                    <Text
                        color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                        fontFamily={"Inter"}
                        fontSize={{ sm: "", "lg": "24px" }}
                        fontStyle={"normal"}
                        fontWeight={{ sm: "", "lg": "500" }}
                        lineHeight={{ sm: "20px", "lg": "32px" }}
                    >
                        Add A Service Category
                    </Text>
                </Box>
                <Box
                    alignSelf={"stretch"}
                >
                    <Text
                        color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                        fontFamily={"Inter"}
                        fontSize={{ sm: "", "lg": "16px" }}
                        fontStyle={"normal"}
                        fontWeight={{ sm: "", "lg": "400" }}
                        lineHeight={{ sm: "20px", "lg": "24px" }}
                    >
                        Select a Service Category to add to your company. In the next step,
                        we will suggest some important information you should track at every site you service.
                    </Text>
                </Box>

            </Box>

            {/* Second Box */}
            <Box
                display={"flex"}
                alignItems={"flex-start"}
                gap={{ sm: "", "lg": "30px" }}
                alignSelf={"stretch"}
            >
                {/* Left box */}

                {
                    category.map((value: any, id: number) => {
                        return <Box
                            key={id}
                            display={"flex"}
                            flexDir={"column"}
                            alignItems={"flex-start"}
                            gap={{ sm: "", "lg": "12px" }}
                            width={{ sm: "", "lg": "503.5px" }}
                            padding={{ sm: "", "lg": "24px" }}
                            borderRadius={{ sm: "", "lg": "6px" }}
                            background={"var(--white-100, #FFF)"}
                            border={"1px solid var(--primary-states-focus, rgba(17, 25, 12, 0.12))"}
                            _hover={{
                                boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                            }}
                            onMouseEnter={() => handleMouseEnter(id)}
                            onMouseLeave={() => handleMouseLeave(id)}
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={{ sm: "", "lg": "10px" }}
                                alignSelf={"stretch"}
                            >
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={{ sm: "", "lg": "16px" }}
                                    flex={"1 0 0"}
                                >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        width={{ sm: "", "lg": "60px" }}
                                        height={{ sm: "", "lg": "60px" }}
                                        borderRadius={"6px"}
                                        background={"var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
                                    >
                                        <Image src={"/circle.svg"} alt={"circle"} />
                                    </Box>
                                    <Box>
                                        <Text>{value.name}</Text>
                                    </Box>
                                </Box>
                                <Box>
                                    <chakra.button
                                        height={{ sm: "", "lg": "32px" }}
                                        padding={{ sm: "", "lg": "0px 12px" }}
                                        borderRadius={"6px"}
                                        border={"1px solid var(--primary-main, #11190C)"}
                                        display={"flex"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        gap={{ sm: "", "lg": "8px" }}
                                        background={
                                            selectedCategories.includes(id)
                                                ? hoverStates[id]
                                                    ? "white"
                                                    : "var(--green-500, #38A169)"
                                                : "var(--white-100, #FFF)"
                                        }
                                        onClick={() => handleAddRemove(id, value.name)}
                                    >
                                        <Text
                                            color={
                                                selectedCategories.includes(id)
                                                    ? hoverStates[id]
                                                        ? "red"
                                                        : "white"
                                                    : "var(--gray-70, #4A4B57)"
                                            }
                                            fontFamily={"Inter"}
                                            fontSize={{ sm: "", "lg": "14px" }}
                                            fontStyle={"normal"}
                                            fontWeight={{ sm: "", "lg": "600" }}
                                            lineHeight={{ sm: "20px", "lg": "20px" }}
                                        >
                                            {selectedCategories.includes(id) ? (hoverStates[id] ? "Remove" : "Added") : "Add"}
                                        </Text>
                                        <Box>
                                            <Image
                                                src={
                                                    selectedCategories.includes(id)
                                                        ? hoverStates[id]
                                                            ? "/cross-x.svg"
                                                            : "/circlePlus.svg"
                                                        : "/plus.svg"
                                                }
                                                alt={"plus"} />
                                        </Box>
                                    </chakra.button>
                                </Box>
                            </Box>
                            <Flex
                                flexDirection={"column"}
                                gap={{ sm: "", "lg": "16px" }}
                            >
                                {/* 2nd text box */}
                                <Box
                                    alignSelf={"stretch"}
                                >
                                    <Text
                                        color={"var(--gray-70, #4A4B57)"}
                                        fontFamily={"Inter"}
                                        fontSize={{ sm: "", "lg": "14px" }}
                                        fontStyle={"normal"}
                                        fontWeight={{ sm: "", "lg": "400" }}
                                        lineHeight={{ sm: "20px", "lg": "20px" }}
                                    >
                                        {value.subText}
                                    </Text>
                                </Box>
                                {/* 3rd heading + text */}
                                <Box
                                    display={"flex"}
                                    flexDir={"column"}
                                    alignItems={"flex-start"}
                                    gap={{ sm: "", "lg": "8px" }}
                                    alignSelf={"stretch"}
                                >
                                    <Box
                                        alignSelf={"stretch"}
                                    >
                                        <Text
                                            color={"var(--gray-70, #4A4B57)"}
                                            fontFamily={"Inter"}
                                            fontSize={{ sm: "", "lg": "12px" }}
                                            fontStyle={"normal"}
                                            fontWeight={{ sm: "", "lg": "700" }}
                                            lineHeight={{ sm: "20px", "lg": "16px" }}
                                            letterSpacing={"0.6px"}
                                        >
                                            You Care About:
                                        </Text>
                                    </Box>
                                    <Box
                                        alignSelf={"stretch"}
                                    >
                                        <Text
                                            color={"var(--gray-70, #4A4B57)"}
                                            fontFamily={"Inter"}
                                            fontSize={{ sm: "", "lg": "14px" }}
                                            fontStyle={"normal"}
                                            fontWeight={{ sm: "", "lg": "400" }}
                                            lineHeight={{ sm: "20px", "lg": "20px" }}
                                        >
                                            {value.about}
                                        </Text>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    })
                }
                {/* right box */}

            </Box>

            {/* third box buttons */}
            <Box
                display={" flex"}
                alignItems={" flex-start"}
                gap={"16px"}
                alignSelf={"stretch"}
            >
                <chakra.button
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={{ sm: "", "lg": "8px" }}
                    height={{ sm: "", "lg": "32px" }}
                    padding={{ sm: "", "lg": "0px 12px" }}
                    borderRadius={"6px"}
                    border={" 1px solid var(--gray-200, #E2E8F0)"}
                >
                    <Box
                        onClick={onClosePop}
                    >
                        <Text
                            color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "", "lg": "14px" }}
                            fontStyle={"normal"}
                            fontWeight={{ sm: "", "lg": "600" }}
                            lineHeight={{ sm: "20px", "lg": "20px" }}
                        >
                            cancel
                        </Text>
                    </Box>
                </chakra.button>
                <chakra.button
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={{ sm: "", "lg": "8px" }}
                    height={{ sm: "", "lg": "32px" }}
                    padding={{ sm: "", "lg": "0px 12px" }}
                    borderRadius={"6px"}
                    background={selected ? "var(--gray-100, #EDF2F7)" : "#000"}

                    disabled={selected}
                    _disabled={{
                        cursor: 'not-allowed',
                        opacity: 0.5
                    }}
                    onClick={() => {
                        console.log("Upload file state before", uploadFile)
                        setUploadFile(false)
                        console.log("Categories names sleeccted", selectedCategories)
                    }}
                >
                    <Box>
                        <Text
                            color={selected ? "var(--text-primary, rgba(0, 0, 0, 0.87))" : "#FFF"}
                            fontFamily={"Inter"}
                            fontSize={{ sm: "", "lg": "14px" }}
                            fontStyle={"normal"}
                            fontWeight={{ sm: "", "lg": "600" }}
                            lineHeight={{ sm: "20px", "lg": "20px" }}
                            onClick={() => {
                                // fetchData()
                            }}
                        >
                            next
                        </Text>
                    </Box>
                </chakra.button>
            </Box>
        </Box>
    )
}

export default SelectCategory;
