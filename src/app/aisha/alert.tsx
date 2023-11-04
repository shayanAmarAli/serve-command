"use client"
import React, { ReactNode } from 'react';

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Transparent black overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>
      {/* Dialog box */}
      <div className="bg-white p-8 rounded shadow-lg relative z-10">
        {children}
        <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomDialog;
