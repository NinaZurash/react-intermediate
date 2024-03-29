import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MemoizeFunction = (...args: any[]) => any;
type CacheType = {
  [key: string]: unknown;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const memoize = (fn: MemoizeFunction): any => {
  const cache: CacheType = {};

  return (...args: unknown[]) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }
    const result = fn(...args);
    console.log(result);
    cache[args.toString()] = result;
    return result;
  };
};

const fibonacciSequence = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
};

const memoizedFibonacciSequence = memoize(fibonacciSequence);

export default function MemoizePage() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <div className="text-gray-900 text-4xl">
        Memoization: Fibonacci Sequence
      </div>
      <label>Enter Value</label>
      <input
        className="bg-slate-400 w-10 m-2"
        type="number"
        value={value}
        onChange={(e) => {
          const num = parseInt(e.target.value);
          setValue(isNaN(num) ? 0 : num);
        }}
      />
      <div>
        <p>Result: {memoizedFibonacciSequence(value)}</p>
      </div>
    </div>
  );
}
