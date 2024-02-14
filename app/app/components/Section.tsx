"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { API } from "../api/API";
import { Item } from "../interface/Interface";

export default function Section() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data: Item[] = await API();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <section className="grid grid-cols-3 grid-rows-1 items-center justify-center gap-x-4 gap-y-12">
      {items.map((item) => (
        <div key={item.id}>
          <Image
            src={item.urlImage}
            width={500}
            height={500}
            alt={item.nameProduct}
            priority
            className="h-52 w-full object-cover"
          />
          <h1>{item.nameProduct}</h1>
          <p>{item.price}</p>
          <button>Adicionar ao carrinho</button>
        </div>
      ))}
    </section>
  );
}
