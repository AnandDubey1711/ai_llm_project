// import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-300 via-indigo-400 to-blue-500 h-screen">
      <header className="bg-blue-500 text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to LLM Services</h1>
          <p className="text-lg">Unlock the power of LLM with our suite of services.</p>
        </div>
      </header>

      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 - Summary Generation */}
          <Link to="https://ai-sumz-akd.netlify.app/" className="no-underline">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">Summary Generation</h2>
              <p>Generate concise and informative summaries with ease.</p>
            </div>
          </Link>

          {/* Service Card 2 - Image Generation */}
          <Link to="/image" className="no-underline">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">Image Generation</h2>
              <p>Generate images based with the help of prompts with ease.</p>
            </div>
          </Link>

          {/* Service Card 3 - Sentiment Analysis */}
          <Link to="/sentiment" className="no-underline">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">Sentiment Analysis</h2>
              <p>Analyze sentiments to understand user reactions on a range of topics and conversations.</p>
            </div>
          </Link>

          {/* Add more service cards as needed */}
        </div>
      </section>

      <section className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose LLM Services?</h2>
        <p className="text-lg">
          Our LLM-based services provide cutting-edge solutions for text analysis, allowing you to gain valuable insights
          and enhance your applications.
        </p>
        <div className="mt-4">
          <p className="text-lg">Key Features:</p>
          <ul className="list-disc pl-6">
            <li>Advanced natural language processing capabilities.</li>
            <li>Easy integration with your existing applications.</li>
            <li>Real-time analysis for quick decision-making.</li>
            {/* Add more features as needed */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
