"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { API } from "../api/API";
import { InterfaceHeader, Product } from "../interface/Interface";

export default function Section({
  allProducts,
  setAllProducts,
}: InterfaceHeader) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data: Product[] = await API();
      setItems(data);
    };

    fetchItems();
  }, []);

  const onAddProduct = (item: Product) => {
    const existingProduct = allProducts.find(
      (product) => product.id === item.id,
    );
    if (existingProduct) {
      const updatedProducts = allProducts.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { ...item, quantity: 1 }]);
    }
  };

  console.log(allProducts);

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
          <button onClick={() => onAddProduct(item)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </section>
  );
}
