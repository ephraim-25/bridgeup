'use client';

import React, { useState } from 'react';
import { UploadCloud, File as FileIcon, X } from 'lucide-react';

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer relative
        ${isDragging ? 'border-primary bg-primary/5' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/50'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
        onChange={handleFileChange}
      />
      
      {!file ? (
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white rounded-full shadow-sm">
            <UploadCloud className="w-6 h-6 text-slate-400" />
          </div>
          <p className="text-sm font-medium text-slate-900">Cliquez ou glissez un fichier ici</p>
          <p className="mt-1 text-xs text-slate-500">PDF, DOCX, ou images (max. 5MB)</p>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm pointer-events-none border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-primary/10">
              <FileIcon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-slate-900 line-clamp-1">{file.name}</p>
              <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button 
            type="button"
            className="p-1 rounded-full pointer-events-auto hover:bg-slate-100 text-slate-500"
            onClick={(e) => { e.preventDefault(); setFile(null); }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
