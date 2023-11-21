"use client"
import React, { useState } from 'react'
import {
    Box, Button, Flex, Image, Text, chakra, Modal, ModalOverlay, ModalContent,
} from "@chakra-ui/react";
import Popup from './pop-up';

type category_types = {
    name: string,
    subText: string,
    about: string
}

const category: category_types[] = [
    {
        name: "Landscape Irrigation",
        subText: "Also known as lawn sprinklers, lawn or shrub irrigation. Whatever you call it, you keep landscapes hydrated and healthy.",
        about: "Number of Zones, Controller Location, Controller Type, Backflow Location, etc."
    },
    {
        name: "Low-Voltage Landscape Lighting",
        subText: "Also known as landscape lighting or outdoor lighting, your job is to illuminate your clients’ outdoor spaces using low-voltage lighting.",
        about: "Number of Transformers, Transformer Location, Number of Fixtures, etc."
    },
]

const SelectCategory = () => {
    const [isOpen, setIsOpen] = useState(false); // Use local state to manage modal open/close
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>({});
    const [selected, setSelected] = useState<boolean>(true);
    const [uploadFile, setUploadFile] = useState<boolean>(true);

    const handleAddRemove = (id: number) => {
        if (selectedCategories.includes(id)) {
            setSelectedCategories((prevCategories) => {
                const updatedCategories = prevCategories.filter((categoryId) => categoryId !== id);
                updatedCategories.length > 0 ? setSelected(false) : setSelected(true);
                return updatedCategories;
            });
        } else {
            setSelectedCategories((prevCategories) => {
                const addCategory = [...prevCategories, id];
                addCategory.length == 0 ? setSelected(true) : setSelected(false);
                return addCategory;
            });
        }
    };

    const handleMouseEnter = (id: number) => {
        setHoverStates((prevStates) => ({ ...prevStates, [id]: true }));
    };

    const handleMouseLeave = (id: number) => {
        setHoverStates((prevStates) => ({ ...prevStates, [id]: false }));
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
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
                            !uploadFile ? <Popup onClosePop={handleClose}/> : <Box
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
                                                // background={"var(--white, #FFF)"}
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
                                                            onClick={() => handleAddRemove(id)}
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
                                            setUploadFile(false)
                                            console.log("Upload file state after", uploadFile)
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

