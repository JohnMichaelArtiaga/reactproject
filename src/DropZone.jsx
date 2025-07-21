import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept:{'application/pdf':['.pdf']}, maxFiles: 5 });

  const acceptedFiles = files.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
<form className="flex flex-col items-center justify-center">
  <div
    {...getRootProps({
      className:
        'p-16 mt-10 bg-gray-800 rounded-lg shadow-lg w-[800px] h-[150px] flex justify-center items-center',
    })}
  >
    <input {...getInputProps()} />
    {isDragActive ? (
      <p className="text-white">Drop the files here ...</p>
    ) : (
      <p className="text-white">Drag 'n' drop some files here, or click to select files</p>
    )}
  </div>

  <aside className="mt-4  w-[800px]">
    <h4 className="text-white  mb-2"> Files</h4>
    <ul className="text-white list-disc list-inside">
      {acceptedFiles}
    </ul>
  </aside>
</form>

  );
}

export default Dropzone;
