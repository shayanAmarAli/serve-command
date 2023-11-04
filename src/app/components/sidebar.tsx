"use client"
import React from 'react'
import { Box, Heading, Image, Text, Button, Flex } from "@chakra-ui/react"
import Popup from './pop-up'

// 'sm': "100%", 'md': "60%", 'lg': "30%", 'xl': "50%", '2xl': "80%"
const sidebar = () => {
  return (
    <Flex
      bgColor={{ "xxl": "blackAlpha.400", "2xl": "red" }}
    >
      {/* sidebar */}
      <Box
        border={"1px solid black"}
        display={"flex"} justifyContent={"space-between"} flexDir={"column"}
        height={{ sm: "100vh", '2xl': "1080px" }}
        width={{ sm: "60px", '2xl': "56px" }}
      >
        {/* upper */}
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={{ sm: "18px", '2xl': "32px" }}
          // paddingTop={{ sm: "", '2xl': "32px" }}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            width={{ sm: "", '2xl': '56px' }}
            // height={{sm: "", '2xl': '1080px'}}
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexShrink={0}
          >
            <Text
              paddingTop={{ sm: "", "3xl": "40px" }}
              width={{ sm: "22px", "3xl": "" }}
            >
              <Image
                src={"/Flattened.svg"} alt={"logo"}
              />
            </Text>

          </Box>
          <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ sm: "2px", '2xl': "8px" }}
          >
            <Box
              display={"flex"}
              padding={{ sm: "", '2xl': "8px" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={"/calendar.svg"} alt={"logo"}
                width={{ sm: "18px", '2xl': "24px" }}
                height={{ sm: "18px", '2xl': "24px" }}
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
                width={{ sm: "18px", '2xl': "24px" }}
                height={{ sm: "18px", '2xl': "24px" }}
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
                width={{ sm: "18px", '2xl': "24px" }}
                height={{ sm: "18px", '2xl': "24px" }}
              />
            </Box>
          </Box>

        </Box>

        {/* lower */}
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={{ sm: "", '2xl': "24px" }}
          paddingBottom={{ sm: "", '2xl': "24px" }}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            padding={{ sm: "", '2xl': "8px" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "", '2xl': "8px" }}
            borderRadius={{ sm: "", '2xl': "6px" }}
            border={"1px solid var(--black-alpha-200, rgba(0, 0, 0, 0.08))"}
            background={"var(--black-alpha-50, rgba(0, 0, 0, 0.04))"}
          >
            <Image src={"/settings.svg"} alt={"logo"}
              width={{ sm: "18px", '2xl': "24px" }}
              height={{ sm: "18px", '2xl': "24px" }}
            />
          </Box>
          <Box
            display={"flex"}
            padding={{ sm: "", '2xl': "6.65px" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "", '2xl': "8px" }}
            borderRadius={{ sm: "", '2xl': "200px" }}
            border={"1px solid var(--black-alpha-200, rgba(0, 0, 0, 0.08))"}
            background={"var(--gray-100, #F2F4F7)"}
            width={{ sm: "24px", '2xl': "32px" }}
            height={{ sm: "24px", '2xl': "32px" }}
          >
            <Image src={"/user.svg"} alt={"logo"}
              width={{ sm: "16px", '2xl': "18.667px" }}
              height={{ sm: "16px", '2xl': "18.667px" }}
              flexShrink={0}
            />
          </Box>
        </Box>
      </Box>

      {/* main content */}
      <Box background={"var(--gray-50, #F7FAFC);"}>
        <Box
          display={"flex"}
          width={{ sm: "", '2xl': '1864px' }}
          padding={{ sm: "", '2xl': '24px 32px' }}
          alignItems={"center"}
          gap={{ sm: "", '2xl': '8px' }}
        >
          <Box
            width={{ sm: '', '2xl': '1655px' }}
            display={"flex"}
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={{ sm: "", '2xl': '8px' }}
            flex={"1 0 0"}
          >
            <Heading
              color={'var(--text-primary, rgba(0, 0, 0, 0.87))'}
              fontFamily={"Chivo"}
              fontSize={{ sm: '', '2xl': '30px' }}
              fontStyle={"normal"}
              fontWeight={'400'}
              lineHeight={"39.9px"}
            >
              Import Data
            </Heading>
            <Text
              color={'var(--text-primary, rgba(0, 0, 0, 0.87))'}
              fontFamily={"Inter"}
              fontSize={{ sm: '', '2xl': '16px' }}
              fontStyle={"normal"}
              fontWeight={'400'}
              lineHeight={"24px"}
            >
              Import data from the following tools in a few clicks.
            </Text>

          </Box>
          <Button
            display={"flex"}
            height={{ sm: "", '2xl': '32px' }}
            padding={{ sm: "", '2xl': '0px 12px' }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ sm: "", '2xl': '8px' }}
            background={"var(--gray-50, #F7FAFC);"}
            borderRadius={"6px"}
            border={" 1px solid var(--primary-main, #11190C)"}
          >
            <Text
              color={'var(--primary-main, #11190C)'}
              fontFamily={"Inter"}
              fontSize={{ sm: '', '2xl': '14px' }}
              fontStyle={"normal"}
              fontWeight={'600'}
              lineHeight={"20px"}
            >
              Call to Action
            </Text>
            <Box>
              <Image src={"/right-icon.svg"} alt={""}
                width={{ sm: '', '2xl': "14px" }}
                height={{ sm: '', '2xl': "14px" }}
              />
            </Box>

          </Button>
        </Box>

        <Box
          display={"flex"}
          width={{ sm: "", '2xl': '1800px' }}
          flexDir={"column"}
          alignItems={"flex-start"}
          gap={{ sm: "", '2xl': '8px' }}
          margin={"auto"}
        >
          <Box
            display={"flex"}
            width={{ sm: "", '2xl': '431px' }}
            flexDir={"column"}
            padding={{ sm: "", '2xl': '24px' }}
            alignItems={"flex-start"}
            gap={{ sm: "", '2xl': '10px' }}
            flexShrink={0}
            borderRadius={"6px"}
            border={" 1px solid var(--primary-states-focus-visible, rgba(17, 25, 12, 0.30))"}
            background={"var(--white-100, #FFF)"}
          >
            <Flex
              gap={{ sm: "", '2xl': '10px' }}
            >
              <Box
                width={{ sm: "", '2xl': "282px" }}
              >
                <Image src={"/hindLogo.svg"} alt={"logo"}
                  width={{ sm: "", '2xl': "178px" }}
                  height={{ sm: "", '2xl': "50px" }}
                  flexShrink={0}
                />
              </Box>
              <Button
                display={"flex"}
                height={{ sm: "", '2xl': '32px' }}
                padding={{ sm: "", '2xl': '0px 12px' }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ sm: "", '2xl': '8px' }}
                borderRadius={"6px"}
                border={"1px solid var(--primary-states-focus-visible, rgba(17, 25, 12, 0.30))"}
                background={" var(--white-100, #FFF)"}
              >
                <Box>
                  <Image src={"/right-icon-upload.svg"} alt={""}
                    width={{ sm: '', '2xl': "14px" }}
                    height={{ sm: '', '2xl': "14px" }}
                  />
                </Box>
                <Text
                  color={'var(--primary-main, #11190C)'}
                  fontFamily={"Inter"}
                  fontSize={{ sm: '', '2xl': '14px' }}
                  fontStyle={"normal"}
                  fontWeight={'600'}
                  lineHeight={"20px"}
                >
                  Import
                </Text>
              </Button>
            </Flex>
            <Flex
              flexDir={"column"}
              gap={{ sm: "", '2xl': '8px' }}
            >
              <Heading
                color={'#000'}
                fontFamily={"Inter"}
                fontSize={{ sm: '', '2xl': '20px' }}
                fontStyle={"normal"}
                fontWeight={'500'}
                lineHeight={"28px"}
              >
                Hindsite Software
              </Heading>
              <Box
                alignSelf={"stretch"}
              >
                <Text
                  color={'var(--gray-70, #4A4B57)'}
                  fontFamily={"Inter"}
                  fontSize={{ sm: '', '2xl': '16px' }}
                  fontStyle={"normal"}
                  fontWeight={'400'}
                  lineHeight={"24px"}
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

export default sidebar
