import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <form>
        <div {...getRootProps({className :'p-16 mt-10 bg-gray-800 rounded-lg shadow-lg'})} >
        <input {...getInputProps()} />
        {
            isDragActive ?(
            <p>Drop the files here ...</p> ):(
            <p>Drag 'n' drop some files here, or click to select files</p>
        ) }
        </div>
    </form>
  )
}

export default Dropzone;