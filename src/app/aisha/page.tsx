"use client"
import React, { useState } from 'react';
import CustomDialog from './alert';

const MyPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Hello, Next.js with Custom Dialog!</h1>
      <button className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={openDialog}>
        Open Dialog
      </button>
      <CustomDialog isOpen={isDialogOpen} onClose={closeDialog}>
        <h2>This is a custom dialog box content.</h2>
        <p>You can put any content inside this dialog.</p>
      </CustomDialog>
    </div>
  );
};

export default MyPage;
