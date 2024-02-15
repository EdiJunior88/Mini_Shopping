import React from "react";
import Image from "next/image";
import IconClosed from "@/app/assets/svg/IconClosed.svg";
import { InterfaceHeaderWallet } from "../interface/Interface";

export default function HeaderWallet({
  active,
  allProducts,
  setAllProducts,
}: InterfaceHeaderWallet) {
  const removeProduct = (productId: number) => {
    setAllProducts(allProducts.filter((product) => product.id !== productId));
  };

  const formatPriceBRL = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const onCleanCart = () => {
    setAllProducts([]);
  };

  return (
    <div
      className={`absolute right-0 top-20 flex w-80 flex-col bg-red-300 ${active ? "" : "hidden"}`}
    >
      {allProducts.length ? (
        <>
          <div className="flex flex-col gap-2 py-5">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span>{product.quantity}</span>
                  <p>
                    <span>{product.nameProduct}</span>
                  </p>
                  <span>{formatPriceBRL(product.price)}</span>
                </div>
                <div>
                  <Image
                    src={IconClosed}
                    alt="ícone fechar"
                    onClick={() => removeProduct(product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 py-5">
            <h3>Total:</h3>
            <span>
              {formatPriceBRL(
                allProducts.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0,
                ),
              )}
            </span>
          </div>

          <button onClick={onCleanCart}>Esvaziar Carrinho</button>
        </>
      ) : (
        <span>O carrinho está vazio</span>
      )}
    </div>
  );
}
