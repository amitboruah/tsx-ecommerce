import { createContext, useState } from "react";

export const CountContext: any = createContext(null);

const Context = ({ children }: any) => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(0);


  return (
    <>
      <CountContext.Provider value={{ count, setCount ,product, setProduct,price, setPrice}}>
        {children}
      </CountContext.Provider>
    </>
  );
};

export default Context;
