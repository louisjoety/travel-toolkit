import React from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';

interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    multiple: false, // Change to true if you want to accept multiple files
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
  };

  // Use dropzoneOptions with useDropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-8 mb-4 cursor-pointer">
      <input {...getInputProps()} style={{ display: 'none' }} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>Drag 'n' drop an image here, or click to select an image</p>
      )}
    </div>
  );
};

export default Dropzone;
