import { useState } from "react";

const ImageGenerationForm = () => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  // console.log(apiKey)
  // console.log("Hello")
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = output;
    link.download = "generated_image.png";
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-indigo-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Image <span className="text-blue-500">Generation</span>
        </h1>
        <p className="text-gray-600 mb-4">Write a prompt to generate an image</p>
        <form className="gen-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder="Type your prompt here..."
            className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 mt-2 rounded-md w-full"
          >
            Generate
          </button>
        </form>
        <div className="mt-8">
          {loading && (
            <div className="loader ease-linear border rounded-full border-t-4 border-t-blue-500 h-12 w-12"></div>
          )}
          {!loading && output && (
            <div className="result-image mt-4 border-4 border-blue-500 p-2">
              <img
                src={output}
                alt="Generated art"
                className="rounded-md max-w-full"
              />
              <button
                onClick={handleDownload}
                className="bg-blue-500 text-white p-2 mt-2 rounded-md w-full"
              >
                Download Image
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerationForm;
