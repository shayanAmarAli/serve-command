"use client"
import React, { useEffect, useState } from 'react'
import {
    Box, Button, Flex, Heading, Image, Text, chakra,
    Modal, ModalOverlay, ModalContent, Input, useDisclosure
} from "@chakra-ui/react";
import SelectCategory from '../components/SelectCategory';

const Page = () => {
    return (
        <SelectCategory />
    )
}

export default Page
