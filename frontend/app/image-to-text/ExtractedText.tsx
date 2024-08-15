import React from 'react';

interface ExtractedTextProps {
  text: string;
}

const ExtractedText: React.FC<ExtractedTextProps> = ({ text }) => {
  return (
    text ? (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Extracted Text:</h2>
        <p className="whitespace-pre-wrap">{text}</p>
      </div>
    ) : null
  );
};

export default ExtractedText;
