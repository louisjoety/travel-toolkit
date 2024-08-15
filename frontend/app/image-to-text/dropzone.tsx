import React from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-8 mb-4 cursor-pointer">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>Drag 'n' drop an image here, or click to select an image</p>
      )}
    </div>
  );
};

export default Dropzone;
