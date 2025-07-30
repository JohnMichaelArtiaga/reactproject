import React from "react";
import PdfReader from "./Processing/PdfReader.jsx";

export default function PdfDisplay() {
  const [pdf, setPdf] = React.useState(null);

  return (
    <form className="flex flex-col items-center justify-center ">
    <div className="App p-16 mt-10 bg-gray-800 rounded-lg shadow-lg w-[800px] h-[150px] flex justify-center items-center content-center">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setPdf(reader.result);
          };
        }}
      />
      <div className="PdfReader">
        <PdfReader pdf={pdf} />
      </div>
    </div>
    </form>
  );
}

