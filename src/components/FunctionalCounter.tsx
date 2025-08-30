
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

const FunctionalCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Effect to handle animation
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    setIsAnimating(true);
  };

  const reset = () => {
    setCount(0);
    setIsAnimating(true);
  };

  return (
    <div className="text-center space-y-6">
      <div className={`text-6xl font-bold text-blue-600 transition-transform duration-200 ${
        isAnimating ? 'scale-110' : 'scale-100'
      }`}>
        {count}
      </div>
      
      <div className="space-y-4">
        <button
          onClick={increment}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Increment
        </button>
        
        <button
          onClick={reset}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
        <strong>Implementation:</strong> useState hook for state management
      </div>
    </div>
  );
};

export default FunctionalCounter;
