
import React from 'react';
import FunctionalCounter from '../components/FunctionalCounter';
import ClassCounter from '../components/ClassCounter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            React Counter App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Demonstrating both functional components with hooks and class components with lifecycle methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Functional Component Counter
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Using React Hooks (useState)
            </p>
            <FunctionalCounter />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Class Component Counter
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Using Class Component with Constructor & Lifecycle
            </p>
            <ClassCounter />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
