"use client"
import React, { useEffect, useState } from 'react'
import {
    Box, Flex, Image, Text, chakra, Modal, ModalOverlay, ModalContent,
} from "@chakra-ui/react";
import Popup from './pop-up';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import UploadFileProgressBar from '../progress-bar/UploadFileProgressBar';

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
            const response = await axios.post(`https://830wrvbmz2.execute-api.us-east-1.amazonaws.com/addservicecategory?COMPANY_ID=${companyId}&SERVICE_CAT_ID=${serviceCatId}&SERVICE_CAT_NAME=${category_name}`, {
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
            <UploadFileProgressBar />
        </>
    )
}

export default SelectCategory

