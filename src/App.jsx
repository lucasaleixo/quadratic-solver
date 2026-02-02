import { useState } from 'react';
import './App.css';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [solution, setSolution] = useState(null);

  const solveEquation = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setSolution('Please enter valid numbers for all coefficients.');
      return;
    }

    if (numA === 0) {
      setSolution('Coefficient "a" cannot be zero in a quadratic equation.');
      return;
    }

    const discriminant = numB * numB - 4 * numA * numC;

    if (discriminant > 0) {
      const x1 = (-numB + Math.sqrt(discriminant)) / (2 * numA);
      const x2 = (-numB - Math.sqrt(discriminant)) / (2 * numA);
      setSolution(`Two real solutions: x1 = ${x1}, x2 = ${x2}`);
    } else if (discriminant === 0) {
      const x = -numB / (2 * numA);
      setSolution(`One real solution: x = ${x}`);
    } else {
      setSolution('No real solutions.');
    }
  };

  return (
    <div className="App">
      <h1>Quadratic Equation Solver</h1>
      <div className="input-group">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Enter coefficient a"
        />
        <span>x² +</span>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Enter coefficient b"
        />
        <span>x +</span>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Enter coefficient c"
        />
        <span>= 0</span>
      </div>
      <button onClick={solveEquation}>Solve</button>
      {solution && <div className="solution">{solution}</div>}
    </div>
  );
}

export default App;
