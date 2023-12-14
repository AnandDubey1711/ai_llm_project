import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

async function query(data) {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Emanuel/twitter-emotion-deberta-v3-base",
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

function EmotionAnalysisComponent() {
  const [textInput, setTextInput] = useState('');
  const [emotionResult, setEmotionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleEmotionAnalysis = async () => {
    if (textInput) {
      setLoading(true);
      try {
        const result = await query({ inputs: textInput });
        setEmotionResult(result);
      } catch (error) {
        console.error('Error fetching emotion analysis data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const chartOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: emotionResult?.[0]?.map((emotion) => emotion.label.toUpperCase()) || [],
    },
  };

  const chartSeries = [
    {
      name: 'Score',
      data: emotionResult?.[0]?.map((emotion) => emotion.score.toFixed(2) * 100) || [],
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-grey-500 via-grey-200 to-red-100 rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-black">Emotion Analysis</h1>
      <textarea
        placeholder="Enter text for emotion analysis"
        value={textInput}
        onChange={handleInputChange}
        className="border p-2 rounded-md w-full mb-4 focus:outline-none focus:ring focus:border-blue-300"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
      />
      <button
        onClick={handleEmotionAnalysis}
        className="bg-blue-500 text-black p-2 rounded-md"
      >
        Analyze
      </button>

      {loading && <div className="loader ease-linear border rounded-full border-t-4 border-t-blue-500 h-12 w-12 mt-4"></div>}

      {emotionResult && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Emotion Analysis Result</h2>
          <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
        </div>
      )}
    </div>
  );
}

export default EmotionAnalysisComponent;
