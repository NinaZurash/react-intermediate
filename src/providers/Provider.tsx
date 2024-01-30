import { createContext, useContext, useState } from "react";

// create provider type
type Props = {
  children: React.ReactNode;
};

// create context type
type ContextType = {
  sum: number;
  setSum: React.Dispatch<React.SetStateAction<number>>;
};

// create context
export const Context = createContext({});

// create context provider
export const ContextProvider = ({ children }: Props) => {
  const [sum, setSum] = useState(0);

  const values = {
    sum,
    setSum,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// example of how to create custom hook
export const useContextProvider = () => {
  const context = useContext(Context);

  if (Object.keys(context).length === 0) {
    throw new Error("useContextProvider must be used within a ContextProvider");
  }

  return context as ContextType;
};
