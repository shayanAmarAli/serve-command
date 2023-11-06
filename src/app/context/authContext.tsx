"use client"
import { useState, createContext, useContext } from "react";

export const FormContext = createContext<any>(null);

export default function FormProvider({ children }: any) {
    const [username, setUsername] = useState("");
    const [session, setSession] = useState("");
   
    return (
        <FormContext.Provider value={{ username, setUsername, session, setSession }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormData = () => useContext(FormContext); 