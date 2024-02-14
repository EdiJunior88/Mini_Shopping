"use client";
import { useEffect, useState } from "react";
import { apiItens } from "./api/apiItens";
import Image from "next/image";

export const Page = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await apiItens();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.nameProduct}</h1>
          <p>{item.price}</p>
          <Image
            src={item.urlImage}
            width={500}
            height={500}
            alt={item.nameProduct}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
