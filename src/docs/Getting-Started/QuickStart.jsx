import React from 'react';
import CodeBlock from '../components/CodeBlock/CodeBlock.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

const QuickStart = () => {
  const { darkMode } = useTheme();

  const codeExample1 = `
import { Component } from 'framework';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`;

  const codeExample2 = `
import { useState } from 'framework';
import { fetchData } from './api';

function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    setLoading(true);
    const result = await fetchData();
    setData(result);
    setLoading(false);
  }

  return (
    <div>
      {loading ? <p>Loading...</p> : data && <p>{data.summary}</p>}
      <button onClick={loadData}>Load Data</button>
    </div>
  );
}`;

  return (
    <div
      className={`  w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)] '
          : 'bg-[var(--light-bg)] text-[var(--color-text)] '
      }`}
    >
      <h1 className='text-3xl font-bold mb-4'>Introduction</h1>
      <p className='mb-4'>
        Welcome to our framework documentation. This guide will help you
        understand the core concepts and get started with building applications
        quickly and efficiently.
      </p>
      <p className='mb-4'>
        At the very basic level, our framework provides a simple, intuitive API
        while offering powerful features that support complex application
        development. Our focus is on developer experience without sacrificing
        performance.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>Core Features</h2>
      <ul className='list-disc pl-5 mb-4'>
        <li>
          <strong>Component-Based Architecture</strong> that promotes
          reusability and maintainability.
        </li>
        <li>
          <strong>Virtual DOM</strong> implementation that optimizes rendering
          performance.
        </li>
        <li>
          <strong>State Management</strong> built-in with simple yet powerful
          APIs.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        Getting Started with Components
      </h2>
      <p className='mb-4'>
        Components are the building blocks of our framework. A component defines
        a piece of the UI and how it behaves. Here's a simple component example:
      </p>

      <div className='w-full overflow-x-auto my-4 rounded-xl'>
        <CodeBlock language='js' code={codeExample1} />
      </div>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        Hot Module Replacement
      </h2>
      <p className='mb-4'>
        Our framework provides Hot Module Replacement out of the box, allowing
        you to see your changes instantly without losing component state. This
        dramatically improves the development experience.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        Dependency Management
      </h2>
      <p className='mb-4'>
        The framework includes a powerful dependency management system that
        resolves and optimizes dependencies automatically. This ensures your
        application only loads what it needs, improving performance and reducing
        bundle size.
      </p>

      <div className='w-full overflow-x-auto my-4 rounded-xl'>
        <CodeBlock language='js' code={codeExample2} />
      </div>
    </div>
  );
};

export default QuickStart;
