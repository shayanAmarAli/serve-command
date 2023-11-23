"use client"
import React, { useEffect } from 'react'
import { Box, Heading, Image, Text, Flex, chakra } from "@chakra-ui/react"
// import { useRouter } from 'next/navigation';
import Popup from './pop-up'
import SelectCategory from './SelectCategory'

const Sidebar = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   const local_Storage: any = localStorage.getItem("key");
  //   console.log("Local storage contain....", local_Storage);
  //   if (!local_Storage.session) {
  //     router.push('/login'); // Redirect to login page
  //   }
  // }, [])

  return (
    <Flex
      height={"100vh"}
    >
      {/* sidebar */}
      <Box
        display={"flex"} justifyContent={"space-between"} flexDir={"column"}
        height={{ sm: "100vh", '2xl': "1080px" }}
        width={{ sm: "12%", mm: "12%", ml: "10%", md: "6%", lg: "4%", '2xl': "56px" }}
      >
        {/* upper */}
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={{ sm: "14px", mm: "16px", ml: "18px", md: "22px", lg: "26px", xl: "30px", '2xl': "32px" }}
          paddingTop={{ sm: "18px", mm: "22px", ml: "24px", md: "26px", lg: "28px", xl: "30px", '2xl': "32px" }}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={{ sm: "14px", mm: "16px", ml: "18px", md: "22px", lg: "26px", xl: "30px", '2xl': "32px" }}
            flexShrink={0}
          >
            <Image
              src={"/Flattened.svg"} alt={"logo"}
              width={{ sm: "23px", mm: "24px", ml: "25px", md: "27px", lg: "30px", '2xl': '33px' }}
              height={{ sm: "21px", mm: "24px", ml: "25px", md: "27px", lg: "30px", '2xl': '34px' }}
            />
          </Box>

          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "10px", '2xl': "16px" }}
          >
            <Box
              display={"flex"}
              padding={{ sm: "", '2xl': "8px" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={"/calendar.svg"} alt={"logo"}
                width={{ sm: "18px", mm: "16px", ml: "17px", md: "19px", lg: "22px", xl: "22px", '2xl': "24px" }}
                height={{ sm: "18px", mm: "16px", ml: "17px", md: "19px", lg: "22px", xl: "22px", '2xl': "24px" }}
              />
            </Box>
            <Box
              display={"flex"}
              padding={{ sm: "", '2xl': "8px" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ sm: "px", '2xl': "8px" }}
            >
              <Image src={"/placeholder.svg"} alt={"logo"}
                width={{ sm: "18px", mm: "16px", ml: "17px", md: "19px", lg: "22px", xl: "22px", '2xl': "24px" }}
                height={{ sm: "18px", mm: "16px", ml: "17px", md: "19px", lg: "22px", xl: "22px", '2xl': "24px" }}
              />
            </Box>
            <Box
              display={"flex"}
              padding={{ sm: "", '2xl': "8px" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ sm: "2px", '2xl': "8px" }}
            >
              <Image src={"/coins-hand.svg"} alt={"logo"}
                width={{ sm: "18px", mm: "16px", ml: "17px", md: "19px", lg: "22px", xl: "22px", '2xl': "24px" }}
                height={{ sm: "18px", mm: "16px", ml: "17px", md: "19px", lg: "22px", xl: "22px", '2xl': "24px" }}
              />
            </Box>
          </Box>

        </Box>

        {/* lower */}
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={{ sm: "14px", mm: "16px", ml: "17px", md: "18px", lg: "20px", xl: "22px", '2xl': "24px" }}
          paddingBottom={{ sm: "14px", mm: "16px", ml: "17px", md: "18px", lg: "20px", xl: "22px", '2xl': "24px" }}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            padding={{ sm: "2px", md: "4px", lg: "6px", xl: "7px", '2xl': "8px" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "2px", md: "4px", lg: "6px", xl: "7px", '2xl': "8px" }}
            borderRadius={{ sm: "4px", '2xl': "6px" }}
            border={"1px solid var(--black-alpha-200, rgba(0, 0, 0, 0.08))"}
            background={"var(--black-alpha-50, rgba(0, 0, 0, 0.04))"}
          >
            <Image src={"/settings.svg"} alt={"logo"}
              width={{ sm: "16px", mm: "16px", ml: "17px", md: "18px", lg: "20px", xl: "22px", '2xl': "24px" }}
              height={{ sm: "16px", mm: "16px", ml: "17px", md: "18px", lg: "20px", xl: "22px", '2xl': "24px" }}
            />
          </Box>
          <Box
            display={"flex"}
            padding={{ sm: "", '2xl': "6.65px" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "", '2xl': "8px" }}
            borderRadius={{ sm: "100px", '2xl': "200px" }}
            border={"1px solid var(--black-alpha-200, rgba(0, 0, 0, 0.08))"}
            background={"var(--gray-100, #F2F4F7)"}
            width={{ sm: "24px", md: "26px", lg: "28px", xl: "30px", '2xl': "32px" }}
            height={{ sm: "24px", md: "26px", lg: "28px", xl: "30px", '2xl': "32px" }}
          >
            <Image src={"/user.svg"} alt={"logo"}
              width={{ sm: "14px", md: "15px", lg: "16px", xl: "17px", '2xl': "18.667px" }}
              height={{ sm: "14px", md: "15px", lg: "16px", xl: "17px", '2xl': "18.667px" }}
            />
          </Box>
        </Box>
      </Box>

      {/* main content */}
      <Box background={"var(--gray-50, #F7FAFC);"}
        width={"100%"}

      >
        <Box
          display={"flex"}
          width={{ sm: "100%", '2xl': '1864px' }}
          padding={{ sm: "10px 18px", md: "14px 22px", lg: "18px 28px", xl: "22px 30px", '2xl': '24px 32px' }}
          alignItems={"flex-start"}
          gap={{ sm: "", '2xl': '8px' }}
        >
          <Box
            width={{ sm: '', '2xl': '1655px' }}
            display={"flex"}
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={{ sm: "4px", '2xl': '8px' }}
            flex={"1 0 0"}
          >
            <Heading
              color={'var(--text-primary, rgba(0, 0, 0, 0.87))'}
              fontFamily={"Chivo"}
              fontSize={{ sm: '16px', md: "20px", lg: "22px", xl: "26px", '2xl': '30px' }}
              fontStyle={"normal"}
              fontWeight={'400'}
              lineHeight={{ sm: "", '2xl': "39.9px" }}
            >
              Import Data
            </Heading>
            <Text
              color={'var(--text-primary, rgba(0, 0, 0, 0.87))'}
              fontFamily={"Inter"}
              fontSize={{ sm: '12px', md: "12px", lg: "14px", xl: "16px", '2xl': '16px' }}
              fontStyle={"normal"}
              fontWeight={'400'}
              lineHeight={"24px"}
            >
              Import data from the following tools in a few clicks.
            </Text>
          </Box>

          <chakra.button
            display={"flex"}
            height={{ sm: "22px", '2xl': '32px' }}
            padding={{ sm: "0px 8px", '2xl': '0px 12px' }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "6px", '2xl': '8px' }}
            background={"var(--gray-50, #F7FAFC);"}
            borderRadius={{ sm: "4px", lg: "5px", '2xl': "6px" }}
            border={" 1px solid var(--primary-main, #11190C)"}
          >
            <Text
              color={'var(--primary-main, #11190C)'}
              fontFamily={"Inter"}
              fontSize={{ sm: '14px', '2xl': '14px' }}
              fontStyle={"normal"}
              fontWeight={{ sm: "500", '2xl': '600' }}
              lineHeight={"20px"}
            >
              Call to Action
            </Text>
            <Image src={"/right-icon.svg"} alt={""}
              width={{ sm: '', '2xl': "14px" }}
              height={{ sm: '', '2xl': "14px" }}
            />
          </chakra.button>
        </Box>

        <Box
          width={{ sm: "90%", md: "95%", '2xl': '1800px' }}
          gap={{ sm: "", '2xl': '8px' }}
          paddingTop={{ sm: "10px", '2xl': "16px" }}
          paddingLeft={{ sm: "18px", md: "22px", lg: "28px", xl: "30px", '2xl': 'px 32px' }}
        >
          <Box
            display={"flex"}
            width={{ sm: "100%", ml: "270px", md: "300px", lg: '340px', xl: "380px", '2xl': '431px' }}
            flexDir={"column"}
            padding={{ sm: "14px", md: "18px", lg: "20px", 'xl': '22px', '2xl': '24px' }}
            alignItems={"flex-start"}
            gap={{ sm: "8px", md: "10px", lg: "10px", xl: "12px", '2xl': '12px' }}
            borderRadius={"6px"}
            border={"1px solid rgba(17, 25, 12, 0.3)"}
            background={"#FFF"}
          >
            <Flex
              gap={{ sm: "6px", md: "7px", lg: "8px", xl: "10px", '2xl': '10px' }}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Box
                width={{ sm: "120px", md: "160px", lg: "200px", xl: "240px", '2xl': "282px" }}
                flexShrink={0}
              >
                <Image src={"/hindLogo.svg"} alt={"logo"}
                  width={{ sm: "100px", md: "120px", lg: "140px", xl: "160px", '2xl': "178px" }}
                  height={{ sm: "32px", md: "36px", lg: "40px", xl: "44px", '2xl': "50px" }}

                />
              </Box>
              <SelectCategory />
            </Flex>
            <Flex
              flexDir={"column"}
              gap={{ sm: "6px", '2xl': '8px' }}
            >
              <Heading
                color={'#000'}
                fontFamily={"Inter"}
                fontSize={{ sm: '14px', md: "15px", lg: "16px", xl: "18px", '2xl': '20px' }}
                fontStyle={"normal"}
                fontWeight={'500'}
                lineHeight={{ sm: "20px", md: "20px", lg: "22px", xl: "26px", "2xl": "28px" }}
              >
                Hindsite Software
              </Heading>
              <Box
                alignSelf={"stretch"}
              >
                <Text
                  color={'var(--gray-70, #4A4B57)'}
                  fontFamily={"Inter"}
                  fontSize={{ sm: '12px', md: "13px", lg: "14px", xl: "15px", '2xl': '16px' }}
                  fontStyle={"normal"}
                  fontWeight={'400'}
                  lineHeight={{ sm: "20px", md: "18px", lg: "20px", xl: "22px", "2xl": "24px" }}
                >
                  Switch from Hindsite to ServeCommand in just a few clicks.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

    </Flex >
  )
}

export default Sidebar;
