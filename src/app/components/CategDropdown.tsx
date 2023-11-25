// Dropdown.tsx
import { Box, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon, ChevronRightIcon, ArrowRightIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from "react";
import NestedMenu from "./NestedMenu";

const MotionBox = motion(Box);

interface DropdownProps {
    list1: string[];
    list2: string[];
}
const list1 = ["Item 1", "Item 2", "Item 3"];
const list2 = ["Option A", "Option B", "Option C"];

const CategDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <Menu>
            <MenuButton
                aria-label='Options'
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<AddIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    Open File...
                </MenuItem>
            </MenuList>
            {open && <MenuList>
                <MenuItem icon={<AddIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="->" onClick={() => {
                    setOpen(!open)
                }}>
                    Open File...
                </MenuItem>
            </MenuList>}
        </Menu>
    )
}

export default CategDropdown

