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
import formatPhoneNumber from 'libphonenumber-js';
import { Button, Stack } from '@chakra-ui/react';
import { AsYouType } from 'libphonenumber-js'
import 'react-phone-number-input/style.css';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useController, useFormContext } from 'react-hook-form';
import Format from '../components/Format';

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
                +{getCountryCallingCode(country)}
            </option>
        ))}
    </select>
)

const PhoneInput = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    // const { control } = useFormContext();
    // const {
    //   field: { onChange, onBlur, value },
    //   fieldState: { invalid, error },
    // } = useController({
    //   name,
    //   control,
    // });
  
    // const handlePhoneChange = (phoneNumber: string | undefined) => {
    //   onChange(phoneNumber);
    // };

    const handlePhoneNumberChange = (value: any) => {
        console.log(value);
        setPhoneNumber(value);
    };

    const handleCountryChange = (value: any) => {
        setCountry(value);
    };
    // const handlePhoneNumberChange = (value: any) => {
    //     console.log(value)
    //     setPhoneNumber(value);
    // };
    // const formatePhno = new AsYouType().input('+12133734');
    // console.log(formatePhno)
    // const formatAndValidatePhoneNumber = () => {
    //     if (isValidPhoneNumber(phoneNumber)) {
    //         const formattedNumber = formatPhoneNumber(phoneNumber, 'International');
    //         alert(`Formatted Phone Number: ${formattedNumber}`);
    //     } else {
    //         alert('Invalid phone number');
    //     }
    // };

    return (
        // <Stack spacing={4} align="center">
        //     {/* <PhoneNumberInput
        //         international
        //         defaultCountry="US"
        //         countryCallingCodeEditable={false}
        //         value={phoneNumber}
        //         onChange={handlePhoneNumberChange} /> */}
        //     <CountrySelect
        //         labels={en}
        //         value={country}
        //         onChange={setCountry} />
        // </Stack>
        // <Stack spacing={4} align="center">
        //     <CountrySelect labels={en} value={country} onChange={handleCountryChange} />
        //     <PhoneNumberInput
        //         international
        //         defaultCountry={country}
        //         countryCallingCodeEditable={false}
        //         value={phoneNumber}
        //         onChange={handlePhoneNumberChange}
        //         component={Input} // Use Chakra UI Input component
        //         inputProps={{ placeholder: 'Phone Number' }}
        //     // You can add more props as needed
        //     />
        //     I


        // </Stack>
        // <FormControl isInvalid={invalid}>
        //     <FormLabel htmlFor={name}>{label}</FormLabel>
        //     <PhoneInput
        //         defaultCountry="US" // Set your default country code or dynamically set based on user selection
        //         value={value}
        //         onChange={handlePhoneChange}
        //         inputComponent={(props) => (
        //             <Input
        //                 {...props}
        //                 onChange={(e) => {
        //                     // Format the input as the user types
        //                     const numericValue = e.target.value.replace(/\D/g, '');
        //                     const formattedValue = `+${numericValue}`;
        //                     onChange(formattedValue);
        //                 }}
        //                 onBlur={onBlur}
        //             />
        //         )}
        //     />
        // </FormControl>
        <Format />
        // <CountrySelect />
    );
};

export default PhoneInput;

