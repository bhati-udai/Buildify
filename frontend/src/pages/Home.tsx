import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wand2 } from "lucide-react";

export function Home() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate("/builder", { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-800 flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 text-gray-100 py-4 px-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Wand2 className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">Buildify</span>
          </div>

          {/* Navigation Links */}
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a
              href="/contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4 w-full">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Wand2 className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">
              Website Builder Tool
            </h1>
            <p className="text-lg text-gray-300">
              Describe your dream website, and we'll help you build it
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the website you want to build..."
                className="w-full h-32 p-4 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 text-gray-100 py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get code and preview
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
