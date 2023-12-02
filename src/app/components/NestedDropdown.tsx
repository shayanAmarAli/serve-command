"use client"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
    Box,
} from "@chakra-ui/react"

const NestedDropdown = () => {
    return (
        <Box>
            <Menu>
                <MenuButton>Open Menu</MenuButton>
                <MenuList>
                    <MenuGroup title="Profile">
                        {/* Clicking on those items will close the menu (default behavior) */}
                        <MenuButton>My Account</MenuButton>
                        <MenuButton>Payments</MenuButton>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuOptionGroup title="Country" type="checkbox">
                        {/* Clicking on those items will keep the menu open */}
                        <MenuItemOption value="email" closeOnSelect={true}>
                            Email
                        </MenuItemOption>
                        <MenuItemOption value="phone" closeOnSelect={false}>
                            Phone
                        </MenuItemOption>
                        <MenuItemOption value="country" closeOnSelect={false}>
                            Country
                        </MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default NestedDropdown
