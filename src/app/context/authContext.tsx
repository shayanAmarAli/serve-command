"use client"
import { useState, createContext, useContext, useEffect } from "react";

export const FormContext = createContext<any>(null);

const initial_context = {
    username: "",
    session: ""
}
export type data = {
    [x: string]: string 
};

export default function FormProvider({ children }: any) {
    const [userData, setUserData] = useState<data>(() => {
        try {
            if (typeof window !== 'undefined') {
                const localStorageData = JSON.parse(localStorage.getItem('key') as string);
                return localStorageData || initial_context;
            } else {
                return initial_context;
            }
        } catch (error) {
            console.error("Error accessing localStorage:", error);
            return initial_context;
        }
    });

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.setItem("key", JSON.stringify(userData));
            }
        } catch (error) {
            console.error("Error storing data in localStorage:", error);
        }
    }, [userData]);

    // useEffect(() => {
    //     const storedData = localStorage.getItem('key');
    //     if (storedData) {
    //         setUserData(JSON.parse(storedData));
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('key', JSON.stringify(userData));
    // }, [userData])
    return (
        <FormContext.Provider value={{ userData, setUserData }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormData = () => useContext(FormContext); 