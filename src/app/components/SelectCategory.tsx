"use client"
import React, { useEffect, useState } from 'react'
import {
    Box, Flex, Image, Text, chakra, Modal, ModalOverlay, ModalContent,
} from "@chakra-ui/react";
import Popup from './pop-up';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

type category_types = {
    service_cat_id: string,
    company_id: string,
    service_cat_name: string,
    description: string
};

const category = [
    {
        service_cat_id: "1",
        company_id: "52f9c443-7379-4142-95f2-c8502c7d32bb",
        service_cat_name: "Landscape Irrigation1",
        description: "Also known as lawn sprinklers, lawn or shrub irrigation. Whatever you call it, you keep landscapes hydrated and healthy.You Care About:Number of Zones, Controller Location, Controller Type, Backflow Location, etc."
    },
    {
        service_cat_id: "2",
        company_id: "52f9c443-7379-4142-95f2-c8502c7d32ba",
        service_cat_name: "Low-Voltage Landscape Lighting2",
        description: "Also known as landscape lighting or outdoor lighting, your job is to illuminate your clients’ outdoor spaces using low-voltage lighting.You Care About:Number of Transformers, Transformer Location, Number of Fixtures, etc."
    },
]

const SelectCategory = () => {
    const [isOpen, setIsOpen] = useState(false); // Use local state to manage modal open/close
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>({});
    const [selected, setSelected] = useState<boolean>(true);
    const [uploadFile, setUploadFile] = useState<boolean>(true);
    const [selectedCategoryNames, setSelectedCategoryNames] = useState<any>(); // New state for category names
    const [apiResponse, setApiResponse] = useState<string | null>(null);
    const [apiCategories, setApiCategories] = useState<category_types[]>(category);
    const [categorySelected, setCategorySelected] = useState<boolean>(false);

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SC_IMPORT_HOST}/getservicelookup?SERVICE_CAT_ID=2`);
            const categories = response.data;
            console.log("Categories are....", categories);
            setApiCategories(categories);
            return categories;
        }
        getCategories();
    }, []);


    // const handleAddRemove = (id: number) => {
    //     if (selectedCategories.includes(id)) {
    //         setSelectedCategories((prevCategories) => {
    //             const updatedCategories = prevCategories.filter((categoryId) => categoryId !== id);
    //             console.log("categoroy is remove", updatedCategories)
    //             const allSelectName = updatedCategories.map((cateId: string) => {
    //                 const categoryId = parseInt(cateId);
    //                 console.log(apiCategories[categoryId].service_cat_name);
    //                 const abc = [];
    //                 abc.push(apiCategories[categoryId].service_cat_name);
    //                 return abc
    //             })
    //             console.log("all names are....", allSelectName)
    //             setSelectedCategoryNames(allSelectName);
    //             updatedCategories.length > 0 ? setSelected(false) : setSelected(true);
    //             return updatedCategories;
    //         });
    //     } else {
    //         setSelectedCategories((prevCategories) => {
    //             const addCategory = [...prevCategories, id];
    //             console.log("categoroy is added", addCategory)
    //             const allSelectName = addCategory.map((cateId: string) => {
    //                 const categoryId = parseInt(cateId);
    //                 console.log(apiCategories[categoryId].service_cat_name);
    //                 const abc = [];
    //                 abc.push(apiCategories[categoryId].service_cat_name);
    //                 return abc
    //             })
    //             console.log("all names are....", allSelectName)
    //             setSelectedCategoryNames(allSelectName);
    //             addCategory.length == 0 ? setSelected(true) : setSelected(false);
    //             return addCategory;
    //         });
    //     }
    //     console.log("selected category name is ....", selectedCategoryNames);
    // };
    const handleAddRemove = (id: number) => {
        if (selectedCategories.includes(id)) {
            setSelectedCategories((prevCategories) => {
                const updatedCategories = prevCategories.filter((categoryId) => categoryId !== id);
                console.log("category is removed", updatedCategories);

                const allSelectName = updatedCategories.map((categoryId: number, id: any) => {
                    console.log(apiCategories[id].service_cat_name);
                    const abc = [];
                    abc.push(apiCategories[id].service_cat_name);
                    return abc;
                });

                console.log("all names are....", allSelectName);
                setSelectedCategoryNames(allSelectName);
                updatedCategories.length > 0 ? setSelected(false) : setSelected(true);
                return updatedCategories;
            });
        } else {
            setSelectedCategories((prevCategories) => {
                const addCategory = [...prevCategories, id];
                console.log("category is added", addCategory);

                const allSelectName = addCategory.map((categoryId: number, id: any) => {
                    console.log(apiCategories[id].service_cat_name);
                    const abc = [];
                    abc.push(apiCategories[id].service_cat_name);
                    return abc;
                });

                console.log("all names are....", allSelectName);
                setSelectedCategoryNames(allSelectName);
                addCategory.length === 0 ? setSelected(true) : setSelected(false);
                return addCategory;
            });
        }
        console.log("selected category name is ....", selectedCategoryNames);
    };

    const handleMouseEnter = (id: number) => {
        setHoverStates((prevStates) => ({ ...prevStates, [id]: true }));
    };

    const handleMouseLeave = (id: number) => {
        setHoverStates((prevStates) => ({ ...prevStates, [id]: false }));
    };

    const handleOpen = async () => {
        const getServiceId = await axios.get(`${process.env.NEXT_PUBLIC_SC_IMPORT_HOST}/getservicecategory?COMPANY_ID=1`)
        const responseServiceid = getServiceId.data;
        console.log("service id is ...", responseServiceid.length);
        if (responseServiceid.length > 1) {
            setCategorySelected(true)
        }
        // responseServiceid.length > 1 && 
        setIsOpen(true)
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const fetchData = async () => {
        // Generate a new UUID
        const serviceCatId = uuidv4();
        const companyId = uuidv4();
        const category_name = selectedCategoryNames.join(', ')
        console.log("name are in the string format")
        const data = {
            COMPANY_ID: companyId,
            SERVICE_CAT_NAME: category_name,
            SERVICE_CAT_ID: serviceCatId,
        };
        const apiUrl =

            `${process.env.NEXT_PUBLIC_SC_IMPORT_HOST}/addservicecategory?SERVICE_CAT_ID=${data.SERVICE_CAT_ID}&COMPANY_ID=${data.COMPANY_ID}&SERVICE_CAT_NAME=Mishaal`;

        console.log("Data send to api is ..", data);

        try {
            const response = await axios.post(`https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/addservicecategory?COMPANY_ID=${companyId}&SERVICE_CAT_ID=${serviceCatId}&SERVICE_CAT_NAME=${category_name}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data) {
                // Request was successful
                const result = await response.data;
                setApiResponse(result); // Store the API response in state
                console.log("your api response is....", response)
            } else {
                // Handle error
                console.error('Error:', response.data.statusText);
                setApiResponse(null); // Reset the API response in case of an error
                console.log("ERROR response is....", response.data.statusText)
            }
        } catch (error: any) {
            console.error('Error:', error.message);
            setApiResponse(null); // Reset the API response in case of an error
            console.log("ERROR response is....", error.message)
        }
    }
    return (
        <>
            <chakra.button
                display={"flex"}
                height={{ sm: "20px", mm: "22px", ml: "24px", md: "26px", lg: "28px", xl: "30px", '2xl': '32px' }}
                padding={{ sm: "12px", lg: "0px 10px", '2xl': '0px 12px' }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ sm: "4px", md: "6px", '2xl': '8px' }}
                borderRadius={{ sm: "4px", '2xl': "6px" }}
                border={"1px solid var(--primary-states-focus-visible, rgba(17, 25, 12, 0.30))"}
                background={" var(--white-100, #FFF)"}
                onClick={handleOpen}
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
            </chakra.button>
            <Box
                hidden
            >
                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    size={{ sm: "sm", md: 'lg', lg: "xl", '2xl': '4xl' }}
                    isCentered >
                    <ModalOverlay />
                    <ModalContent
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={"auto"}
                        width={{ 'sm': "95%", ml: "90%", md: "auto", '2xl': "1117px" }}
                        borderRadius={{ sm: "14px", '2xl': '20px' }}
                    >
                        {
                            categorySelected ?
                                <Popup onClosePop={handleClose} /> :
                                <Box
                                    display={"flex"}
                                    flexDir={"column"}
                                    alignItems={"flex-start"}
                                    gap={{ sm: "", "lg": "8px" }}
                                    width={{ sm: "", "lg": "1117px" }}
                                    padding={{ sm: "", "lg": "32px 40px" }}
                                    borderRadius={{ sm: "", "lg": "20px" }}
                                    background={"var(--white, #FFF)"}
                                // border={"1px solid black"}
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
                                            apiCategories.map((value: any, id: number) => {
                                                return <Box
                                                    key={value.service_cat_id}
                                                    display={"flex"}
                                                    flexDir={"column"}
                                                    alignItems={"flex-start"}
                                                    gap={{ sm: "", "lg": "12px" }}
                                                    width={{ sm: "", "lg": "503.5px" }}
                                                    padding={{ sm: "", "lg": "24px" }}
                                                    borderRadius={{ sm: "", "lg": "6px" }}
                                                    // background={"var(--white, #FFF)"}
                                                    background={"var(--white-100, #FFF)"}
                                                    border={"1px solid var(--primary-states-focus, rgba(17, 25, 12, 0.12))"}
                                                    _hover={{
                                                        boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                                    }}
                                                    onMouseEnter={() => handleMouseEnter(value.service_cat_id)}
                                                    onMouseLeave={() => handleMouseLeave(value.service_cat_id)}

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
                                                                <Text>{value.service_cat_name}</Text>
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
                                                                    selectedCategories.includes(value.service_cat_id)
                                                                        ? hoverStates[parseInt(value.service_cat_id)]
                                                                            ? "white"
                                                                            : "var(--green-500, #38A169)"
                                                                        : "var(--white-100, #FFF)"
                                                                }
                                                                onClick={() => handleAddRemove(value.service_cat_id)}
                                                            >
                                                                <Text
                                                                    color={
                                                                        selectedCategories.includes(value.service_cat_id)
                                                                            ? hoverStates[parseInt(value.service_cat_id)]
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
                                                                    {selectedCategories.includes(value.service_cat_id) ? (hoverStates[parseInt(value.service_cat_id)] ? "Remove" : "Added") : "Add"}
                                                                </Text>
                                                                <Box>
                                                                    <Image
                                                                        src={
                                                                            selectedCategories.includes(value.service_cat_id)
                                                                                ? hoverStates[parseInt(value.service_cat_id)]
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
                                                                {value.description}
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
                                                                    {
                                                                        value.description.substring(value.description.indexOf("Number"))
                                                                    }
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
                                                onClick={handleClose}
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
                                                // setUploadFile(false)
                                                console.log("Upload file state after", uploadFile)
                                                console.log(selectedCategoryNames);
                                                fetchData();
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
                                                >
                                                    next
                                                </Text>
                                            </Box>
                                        </chakra.button>
                                    </Box>
                                </Box>
                        }

                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}

export default SelectCategory

