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
    <section>
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
    </section>
  );
}
