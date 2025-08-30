
import React, { Component } from 'react';
import { Minus } from 'lucide-react';

interface ClassCounterState {
  count: number;
  isAnimating: boolean;
  mountTime: Date;
}

class ClassCounter extends Component<{}, ClassCounterState> {
  private animationTimer: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    
    // Initialize state in constructor
    this.state = {
      count: 0,
      isAnimating: false,
      mountTime: new Date()
    };

    console.log('ClassCounter: Constructor called');
  }

  // Lifecycle method - component mounted
  componentDidMount() {
    console.log('ClassCounter: Component mounted at', this.state.mountTime);
  }

  // Lifecycle method - component updated
  componentDidUpdate(prevProps: {}, prevState: ClassCounterState) {
    if (prevState.count !== this.state.count) {
      console.log(`ClassCounter: Count updated from ${prevState.count} to ${this.state.count}`);
    }
  }

  // Lifecycle method - component will unmount
  componentWillUnmount() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
    console.log('ClassCounter: Component will unmount');
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
      isAnimating: true
    }), () => {
      // Callback after state update
      this.animationTimer = setTimeout(() => {
        this.setState({ isAnimating: false });
      }, 200);
    });
  };

  reset = () => {
    this.setState({
      count: 0,
      isAnimating: true
    }, () => {
      this.animationTimer = setTimeout(() => {
        this.setState({ isAnimating: false });
      }, 200);
    });
  };

  render() {
    const { count, isAnimating } = this.state;

    return (
      <div className="text-center space-y-6">
        <div className={`text-6xl font-bold text-red-600 transition-transform duration-200 ${
          isAnimating ? 'scale-110' : 'scale-100'
        }`}>
          {count}
        </div>
        
        <div className="space-y-4">
          <button
            onClick={this.decrement}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Minus size={20} />
            Decrement
          </button>
          
          <button
            onClick={this.reset}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Reset
          </button>
        </div>

        <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
          <strong>Implementation:</strong> Class component with constructor & lifecycle methods
        </div>
      </div>
    );
  }
}

export default ClassCounter;
