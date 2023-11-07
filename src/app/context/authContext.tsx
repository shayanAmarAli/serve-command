"use client"
import { useState, createContext, useContext, useEffect } from "react";

export const FormContext = createContext<any>(null);

export default function FormProvider({ children }: any) {
    const [userData, setUserData] = useState<any>({
        username: "",
        session: ""
    });

    useEffect(() => {
        const storedData = localStorage.getItem('key');
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(userData));
    }, [userData])
    return (
        <FormContext.Provider value={{ userData, setUserData }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormData = () => useContext(FormContext); 