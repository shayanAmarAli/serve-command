"use client"
import { useEffect, useState } from 'react';
import { Box, Button, Input, Progress } from '@chakra-ui/react';
import axios, { CancelTokenSource } from 'axios';

const UploadFileProgressBar = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadTime, setUploadTime] = useState<number | null>(null);
    const [cancelToken, setCancelToken] = useState<CancelTokenSource | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
        setUploadProgress(0);
        setUploadTime(null);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            // Handle case where no file is selected
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const source = axios.CancelToken.source();
        setCancelToken(source);

        try {
            const startTime = Date.now();

            const response = await axios.post('/api/upload', formData, {
                onUploadProgress: (progressEvent: any) => {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                    setUploadProgress(progress);
                },
                cancelToken: source.token,
            });

            const endTime = Date.now();
            const timeTaken = endTime - startTime;
            setUploadTime(timeTaken);

            // Handle successful upload, if needed
            console.log('File uploaded successfully', response.data);
        } catch (error) {
            // Handle upload error, if needed
            console.error('Error uploading file', error);
        } finally {
            // Reset progress and time after upload is complete or failed
            setUploadProgress(0);
            setCancelToken(null);
        }
    };

    // const [animationDuration, setAnimationDuration] = useState<number>(() => {
    //     return Math.random() * 2000 + 1000; // Random duration between 1000 and 3000ms
    // });

    const [animationStartDelay, setAnimationStartDelay] = useState<number>(() => {
        return Math.random() * 1000; // Random delay between 0 and 1000ms
    });

    return (
        <Box></Box>
    );
};

export default UploadFileProgressBar;
