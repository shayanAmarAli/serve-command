// app/providers.tsx
'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme/theme'
import FormProvider from '@/app/context/authContext'
import '@fontsource/inter/400.css'
import '@fontsource/chivo/700.css'
delete theme.styles.global;

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <FormProvider>
      <CacheProvider>
        <ChakraProvider theme={theme} >
          {children}
        </ChakraProvider>
      </CacheProvider>
    </FormProvider>
  )
}