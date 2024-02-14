"use client";
import { useEffect, useState } from "react";
import { apiItens } from "./api/apiItens";
import Image from "next/image";

interface Item {
  id: number;
  nameProduct: string;
  price: number;
  urlImage: string;
}

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data: Item[] = await apiItens();
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
}
