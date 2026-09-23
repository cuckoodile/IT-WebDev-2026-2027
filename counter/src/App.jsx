import { useState } from 'react';

const buttons = [
  'C', '(', ')', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setInput(String(eval(input)));
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => (prev === 'Error' ? value : prev + value));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-80 rounded-2xl bg-slate-900 p-4 shadow-xl">
        <div className="mb-4 h-20 overflow-x-auto overflow-y-hidden rounded-xl bg-slate-800 px-4 py-6 text-right">
          <p className="text-3xl font-semibold text-white">{input || '0'}</p>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`rounded-xl py-4 text-lg font-medium transition-colors
                ${btn === '=' ? 'col-span-2 bg-orange-500 text-white hover:bg-orange-600' : ''}
                ${'0123456789.'.includes(btn) ? 'bg-slate-700 text-white hover:bg-slate-600' : ''}
                ${'C()/*-+'.includes(btn) ? 'bg-slate-600 text-orange-300 hover:bg-slate-500' : ''}
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}