"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { API } from "../api/API";
import { InterfaceHeader, Product } from "../interface/Interface";
import Button from "./Button";

export default function Section({
  allProducts,
  setAllProducts,
}: InterfaceHeader) {
  const [items, setItems] = useState<Product[]>([]);

  const textButton = "Adicionar ao carrinho";

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

  const formatPriceBRL = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  // console.log(allProducts);

  return (
    <section className="grid grid-cols-3 grid-rows-1 items-center justify-center gap-x-7 gap-y-12">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <Image
            src={item.urlImage}
            width={500}
            height={500}
            alt={item.nameProduct}
            priority
            className="h-52 w-full rounded-t-lg object-cover"
          />

          <div className="flex flex-col justify-center gap-4 px-8">
            <h1 className="text-lg font-semibold text-green-700">
              {item.nameProduct}
            </h1>
            <span>{formatPriceBRL(item.price)}</span>

            <Button
              onClick={() => onAddProduct(item)}
              text={textButton}
              className="rounded-b-none"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
