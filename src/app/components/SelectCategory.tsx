"use client"
import React, { useEffect, useState } from 'react'
import {
    Box, Button, Flex, Heading, Image, Text, chakra,
    Modal, ModalOverlay, ModalContent, Input, useDisclosure, ModalBody
} from "@chakra-ui/react";

const SelectCategory = () => {
    const [isAddClicked, setIsAddClicked] = useState<boolean>();
    const [isMouseEnter, setIsMouseEnter] = useState<boolean>();
    const [isOpen, setIsOpen] = useState(true);
    const { onOpen, onClose } = useDisclosure();

    const handleClose = () => {
        setIsOpen(false);
    };
    const addBtnHandler = () => {
        setIsAddClicked(true);
        removeAddBtn()
    }
    const addBtnHandler2 = () => {
        setIsAddClicked(true);
        removeAddBtn()
    }

    const onMouseEnterHandler = () => {
        isAddClicked && setIsMouseEnter(true)
    }
    const onMouseLeaveHandler = () => {
        isAddClicked && setIsMouseEnter(false)
    }

    const removeAddBtn = () => {
        (isAddClicked && isMouseEnter) && setIsAddClicked(false)
    }

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
                onClick={()=>{
                    setIsOpen(true)
                }}
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
            <Box hidden>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size={{ sm: "sm"}}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={"auto"}
                        width={{ 'sm': "95%", ml: "90%", md: "auto", '2xl': "900px" }}
                        borderRadius={{ sm: "14px", '2xl': '20px' }}
                    >
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
                                <Box
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
                                    onMouseEnter={onMouseEnterHandler}
                                    onMouseLeave={onMouseLeaveHandler}
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
                                                <Text>Landscape Irrigation</Text>
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
                                                onClick={addBtnHandler}
                                                // background={isAddClicked ? "var(--green-500, #38A169)" : "none"}
                                                background={isAddClicked ? (isMouseEnter ? "white" : "var(--green-500, #38A169)") : "#FFF"}
                                            >
                                                <Text
                                                    color={isAddClicked ? (isMouseEnter ? "red" : "white") : "var(--gray-70, #4A4B57)"}
                                                    fontFamily={"Inter"}
                                                    fontSize={{ sm: "", "lg": "14px" }}
                                                    fontStyle={"normal"}
                                                    fontWeight={{ sm: "", "lg": "600" }}
                                                    lineHeight={{ sm: "20px", "lg": "20px" }}
                                                >
                                                    {isAddClicked ? (isMouseEnter ? "Remove" : "Added") : "Add"}
                                                </Text>
                                                <Box>
                                                    <Image src={isAddClicked ? (isMouseEnter ? "/cross-x.svg" : "/circlePlus.svg") : "/plus.svg"} alt={"plus"} />
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
                                                Also known as lawn sprinklers, lawn or shrub irrigation. Whatever you call it,
                                                you keep landscapes hydrated and healthy.
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
                                                    Number of Zones, Controller Location, Controller Type, Backflow Location, etc.
                                                </Text>
                                            </Box>
                                        </Box>

                                    </Flex>
                                </Box>
                                {/* right box */}
                                <Box
                                    display={"flex"}
                                    flexDir={"column"}
                                    alignItems={"flex-start"}
                                    gap={{ sm: "", "lg": "12px" }}
                                    width={{ sm: "", "lg": "503.5px" }}
                                    padding={{ sm: "", "lg": "24px" }}
                                    borderRadius={{ sm: "", "lg": "6px" }}
                                    background={"var(--white-100, #FFF)"}
                                    border={"1px solid var(--primary-states-focus, rgba(17, 25, 12, 0.12))"}
                                    onMouseEnter={onMouseEnterHandler}
                                    onMouseLeave={onMouseLeaveHandler}
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
                                                <Text
                                                    color={"#000"}
                                                    fontFamily={"Inter"}
                                                    fontSize={{ sm: "", "lg": "18px" }}
                                                    fontStyle={"normal"}
                                                    fontWeight={{ sm: "", "lg": "500" }}
                                                    lineHeight={{ sm: "20px", "lg": "28px" }}
                                                >Low-Voltage Landscape Lighting</Text>
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
                                                // className='active:bg-[#38A169] active:text-white '
                                                onClick={addBtnHandler2}
                                                background={isAddClicked ? (isMouseEnter ? "white" : "var(--green-500, #38A169)") : "#FFF"}
                                            >
                                                <Text
                                                    color={isAddClicked ? (isMouseEnter ? "red" : "white") : "var(--primary-main, #11190C)"}
                                                    fontFamily={"Inter"}
                                                    fontSize={{ sm: "", "lg": "14px" }}
                                                    fontStyle={"normal"}
                                                    fontWeight={{ sm: "", "lg": "600" }}
                                                    lineHeight={{ sm: "20px", "lg": "20px" }}
                                                >
                                                    {isAddClicked ? (isMouseEnter ? "Remove" : "Added") : "Add"}
                                                </Text>
                                                <Box>
                                                    <Image src={isAddClicked ? (isMouseEnter ? "/cross-x.svg" : "/circlePlus.svg") : "/plus.svg"} alt={"plus"} />
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
                                                Also known as landscape lighting or outdoor lighting, your job is
                                                to illuminate your clients’ outdoor spaces using low-voltage lighting.
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
                                                    Number of Transformers, Transformer Location, Number of Fixtures, etc.
                                                </Text>
                                            </Box>
                                        </Box>

                                    </Flex>
                                </Box>
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
                                    background={"var(--gray-100, #EDF2F7)"}
                                    _disabled={{
                                        cursor: 'not-allowed',
                                        opacity: 0.5,
                                    }}
                                >
                                    <Box>
                                        <Text
                                            color={"var(--text-primary, rgba(0, 0, 0, 0.87))"}
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
                    </ModalContent>
                </Modal>
            </Box>
        </>

    )
}

export default SelectCategory
