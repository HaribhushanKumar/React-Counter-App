
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3">React Counter App</h3>
            <p className="text-gray-300 text-sm">
              Demonstrating the power of React components with both functional and class-based approaches.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <p>React with TypeScript</p>
              <p>Tailwind CSS</p>
              <p>Lucide React Icons</p>
              <p>Vite Build Tool</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-3">Features</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <p>useState Hook Implementation</p>
              <p>Class Component Lifecycle</p>
              <p>Smooth Animations</p>
              <p>Responsive Design</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} React Counter App. Built using React & Tailwind CSS.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <span>Functional Components</span>
              <span>•</span>
              <span>Class Components</span>
              <span>•</span>
              <span>Modern React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
