"use client"

import {
    ChevronDownIcon,
} from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuList, MenuItem, Box, Text, Icon, Image } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FC, useEffect, useState } from "react";
import axios from "axios";

const NestedMenu = ({ select }: any) => {
    const [dropdownData, setDropdownData] = useState<any>();
    useEffect(() => {
        const dropdownApi = async () => {
            // https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/getservicecategory?COMPANY_ID=1
            try {
                const response = await axios.get("https://830wrvbmz2.execute-api.us-east-1.amazonaws.com/getservicecategory?COMPANY_ID=3");
                const seldropdownCateg = response.data;
                console.log("Selected categories are....", seldropdownCateg);

                setDropdownData(seldropdownCateg);
                return seldropdownCateg;
            } catch (error) {
                console.log("Error occurred...", error);
            }
        }

        dropdownApi();
    })
    console.log("dropdown categories are..", select);
    
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        isActive={isOpen}
                        _hover={{ bg: "transparent" }}
                        _expanded={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                        color={"var(--gray-500, #718096)"}
                        width={"320px"}
                        disabled
                    >
                        Select Data Type
                    </MenuButton>
                    <MenuList
                        display={"flex"}
                        flexDir={"column"}
                        width={"320px"}
                        padding={"6px 12px"}
                    >
                        <Menu placement="right-start" >
                            {({ isOpen: isNestedOpen }) => (
                                <>
                                    <MenuButton
                                        as={Button}
                                        leftIcon={<Image src={"/folder.svg"} alt={"folderIcon"} />}
                                        rightIcon={<ChevronRightIcon />}
                                        isActive={isNestedOpen}
                                        _hover={{ bg: "transparent" }}
                                        _expanded={{ bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))" }}
                                        _focus={{ boxShadow: "none" }}
                                        display={"flex"}
                                        padding={"6px 12px"}
                                        alignItems={"center"}
                                        gap={"10px"}
                                        alignSelf={"stretch"}
                                    >
                                        <Text>Service Category</Text>
                                    </MenuButton>
                                    <MenuList style={{
                                        position: "absolute",
                                        top: 10,
                                        margin: 10,
                                        display: "flex",
                                        width: "335px",
                                        padding: "10px",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        gap: "10px",
                                        borderRadius: "6px",
                                    }}  >
                                        {dropdownData.map((name: any) => {
                                            return <MenuItem
                                                _active={{
                                                    bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))"
                                                }}
                                            >{name.service_cat_name}</MenuItem>
                                        })}

                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <Menu placement="right-start">
                            {({ isOpen: isNestedOpen }) => (
                                <>
                                    <MenuButton
                                        as={Button}
                                        leftIcon={<Image src={"/folder.svg"} alt={"folderIcon"} />}
                                        rightIcon={<ChevronRightIcon />}
                                        isActive={isNestedOpen}
                                        _hover={{ bg: "transparent" }}
                                        _expanded={{ bg: "var(--primary-states-hover, rgba(17, 25, 12, 0.04))" }}
                                        _focus={{ boxShadow: "none" }}
                                    >
                                        Client Information
                                    </MenuButton>
                                    <MenuList style={{
                                        position: "absolute",
                                        top: 10,
                                        margin: 10,
                                        display: "flex",
                                        width: "335px",
                                        padding: "10px",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        gap: "10px",
                                        borderRadius: "6px",
                                    }}  >
                                        <MenuItem>Nested Option 1</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    </MenuList>
                </>
            )}
        </Menu>
    );
};

export default NestedMenu;
