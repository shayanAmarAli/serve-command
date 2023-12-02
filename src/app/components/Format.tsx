// "use client"
// import React, { useState } from 'react'
// import InputMask from 'react-input-mask';
// import 'react-phone-number-input/style.css'
// // import PhoneInput from 'react-phone-number-input'
// import PhoneInput from "react-phone-input-2";
// import flags from 'react-phone-number-input/flags'
// import { getCountryCallingCode } from 'react-phone-number-input'
// import CountrySelect from 'react-phone-number-input';
// import 'intl-tel-input/build/css/intlTelInput.css';
// import 'react-phone-number-input/style.css';
// import 'intl-tel-input/build/js/utils';
// import 'intl-tel-input';
// import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';
// import { useEffect, useRef } from 'react';
// import 'intl-tel-input';

// interface PhoneInputProps {
//     onPhoneNumberChange: (phoneNumber: string) => void;
// }

// const Page = () => {
//     const [phoneNumber, setPhoneNumber] = useState<any>();
//     const [value, setValue] = useState<any>()
//     const [callingCode, setCallingCode] = useState<any>("")
//     const [country, setCountry] = useState<any>(); // State to store selected country
//     const [countryCode, setCountryCode] = useState<any>('US'); // Set the default country code
//     const [phone, setPhone] = useState("");

//     const customCountrySelectProps = {
//         showDefaultOption: false, // Hide the default option (e.g., "+1")
//         preferredCountries: ['US', 'GB', 'CA', 'AU', 'IN'], // Add the preferred country codes
//         onlyCountries: ['US', 'GB', 'CA', 'AU', 'IN'], // Add the country codes you want to include
//     };
//     // const [phoneNumber, setPhoneNumber] = useState('');


//     const handlePhoneChange = (event: any) => {
//         // Remove non-numeric characters from input
//         const rawPhoneNumber = event.target.value.replace(/\D/g, '');

//         // Format the phone number (you can customize this according to your needs)
//         const formattedPhoneNumber = `(${rawPhoneNumber.slice(0, 3)}) ${rawPhoneNumber.slice(3, 6)}-${rawPhoneNumber.slice(6, 10)}`;

//         setPhoneNumber(formattedPhoneNumber);
//         const abc = getCountryCallingCode('US') === '1'
//         setCallingCode(abc);
//         console.log(abc);
//     };
//     const inputRef = useRef<HTMLInputElement | null>(null);


//     return (
//         // <div>
//         //     <div>
//         //         <label htmlFor="phone">Phone Number:</label>
//         //         <InputMask
//         //             mask="(999) 999-9999"
//         //             maskChar="_"
//         //             id="phone"
//         //             placeholder="Enter your phone number"
//         //         />
//         //     </div>
//         // </div>
//         <>
//             {/* <PhoneInput
//                 country="US"
//                 placeholder="Enter phone number"
//                 flags={flags}
//                 //   value={value}
//                 onChange={setValue} /> */}
//             {/* <PhoneInput
//                 placeholder="Enter phone number"
//                 value={phoneNumber}
//                 onChange={setPhoneNumber}
//             /> */}
//             {/* <CountrySelect /> */}
//             {/* </PhoneInput> */}
//             {/* <CountrySelect
//                 value={country}
//                 onChange={(selectedCountry) => setCountry(selectedCountry)}
//             /> */}
//             {/* <PhoneInput
//         country={countryCode}
//         value={phoneNumber}
//         onChange={(value: any) => setPhoneNumber(value)}
//         onSelect={(country: any) => setCountryCode(country)}
//         countries={['US', 'GB', 'CA', 'AU', 'IN']} // Add the country codes you want to include
//       /> */}
//             {/* <PhoneInput
//                 country={countryCode}
//                 value={phoneNumber}
//                 onChange={(value: any) => setPhoneNumber(value)}
//                 onSelect={(country: any) => setCountryCode(country)}
//                 countrySelectProps={customCountrySelectProps}
//                 international
//             />

//             {callingCode} */}
//             {/* <PhoneInput
//                 defaultCountry="US"
//                 placeholder="Enter phone number"
//                 onChange={setValue}
//             // Add any other props or styles as needed
//             /> */}
//             <Stack spacing={4}>
//                 <InputGroup>
//                     <InputLeftAddon children="+1" />
//                     <PhoneInput
//                         // country={"us"}
//                         value={phone}
//                         onChange={(phone: any) => {
//                             console.log(phone)
//                             setPhone(phone)}
//                         }
//                     />
//                 </InputGroup>
//             </Stack>
//         </>
//     )
// }


// // function Example() {
// //   // `value` will be the parsed phone number in E.164 format.
// //   // Example: "+12133734253".
// //   const [value, setValue] = useState()
// //   return (

// //   )
// // }
// export default Page
"use client"
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
import en from 'react-phone-number-input/locale/en'
import PhoneNumberInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { Box, Button, Stack } from '@chakra-ui/react';
import { AsYouType } from 'libphonenumber-js'
import 'react-phone-number-input/style.css';
// import { Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useController, useFormContext } from 'react-hook-form';
import Input, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input/input'
import PhoneInput from 'react-phone-number-input'


interface FormattedPhoneNumberInputProps {
    name: string;
    label: string;
}
const CountrySelect = ({ value, onChange, labels, ...rest }: any) => (
    <select
        {...rest}
        value={value}
        onChange={event => onChange(event.target.value || undefined)}>
        <option value="">
            {labels['ZZ']}
        </option>
        {getCountries().map((country) => (
            <option key={country} value={country}>
                {labels[country]} +{getCountryCallingCode(country)}
            </option>
        ))}
    </select>
)

const Format = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState<any>();
    const [value, setValue] = useState<any>();
    const [formattted, setFormattted] = useState<any>();

    const handlePhoneNumberChange = (value: any) => {
        // const abcd = new AsYouType(value).input(value)
        setValue(formatPhoneNumber(value))
        console.log("number is...", value)
    };

    return (
        <Box>
            <PhoneInput
                defaultCountry="US"
                //   initialValueFormat="national"
                international
                value={value}
                onChange={setValue}
                style={{
                    color: "var(--gray-400, #A0AEC0)",
                    fontFamily: "Inter",
                    fontSize: { sm: "14px", '2xl': "16px" },
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    background: "var(--white, #FFF)",
                }}

            />
            {/* <Input
                value={value}
                onChange={setValue} 
                placeholder={"Start phone with country"}
                style={{
                    color: "var(--gray-400, #A0AEC0)",
                    fontFamily: "Inter",
                    fontSize: { sm: "14px", '2xl': "16px" },
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    background: "var(--white, #FFF)",
                }}
                /> */}
        </Box>
    );
};

export default Format;

