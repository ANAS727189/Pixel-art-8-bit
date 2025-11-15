'use client'

import { useState } from "react";

const Page = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError("");
    setData("");

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/parse-resume', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Extracted PDF data:", result.text);
        console.log("Total pages:", result.pages);
        setData(result.text);
      } else {
        console.error('API Error:', result);
        setError(`${result.error}${result.details ? ': ' + result.details : ''}`);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to upload or parse PDF: ' + (err instanceof Error ? err.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resume Parser</h1>
      
      <div className="mb-4">
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={handleFile}
          disabled={loading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
            disabled:opacity-50"
        />
      </div>

      {loading && (
        <div className="text-blue-600 mb-4">Processing PDF...</div>
      )}

      {error && (
        <div className="text-red-600 mb-4 p-4 bg-red-50 rounded">
          Error: {error}
        </div>
      )}

      {data && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Extracted Text:</h2>
          <pre className="bg-gray-50 p-4 rounded overflow-auto max-h-96 text-sm">
            {data}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Page;