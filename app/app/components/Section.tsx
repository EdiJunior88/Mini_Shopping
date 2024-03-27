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
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Define uma função assíncrona fetchItems que chama a função API
  // para buscar dados do tipo Product[],
  // e então define os dados obtidos usando a função setItems.
  useEffect(() => {
    const fetchItems = () => {
      setIsLoading(true);

      // Simula um atraso de 2 segundos antes de completar a chamada da API
      setTimeout(async () => {
        try {
          const data: Product[] = await API();
          setItems(data);
        } catch (error) {
          setErrorMessage(
            "⚠️ Aconteceu um erro inesperado. Por favor, atualize a página e tente novamente.",
          );
          console.error("Erro ao buscar produtos:", error);
        } finally {
          setIsLoading(false);
        }
      }, 2000);
    };

    fetchItems();
  }, []);

  // Define uma função onAddProduct que recebe um Product como argumento.
  // Ele verifica se o produto já existe no array allProducts.
  // Se existir, atualiza a quantidade do produto existente.
  // Se não existir, adiciona o novo produto ao array com uma quantidade de 1.
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

  // Formata o preço em reais (Brasil)
  const formatPriceBRL = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  // Componente de Loading simples
  const Loading = () => (
    <div className="flex items-center justify-center pt-20">
      <div className="custom-loader h-32 w-32" />
    </div>
  );

  return (
    <>
      {/* Exibir mensagem de loading enquanto os dados do array items não forem carregados */}
      {isLoading ? (
        <Loading />
      ) : errorMessage ? (
        /* Exibir mensagem de erro em caso de falha na chamada da API */
        <p className="w-full pt-20 text-center font-bold text-red-500">
          {errorMessage}
        </p>
      ) : (
        <section className="grid grid-cols-3 grid-rows-1 items-center justify-center gap-x-5 gap-y-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="shadow-black-500/50 flex flex-col gap-4 rounded-xl p-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
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
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
