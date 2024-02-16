import React from "react";
import Image from "next/image";
import IconClosed from "@/app/assets/svg/IconClosed.svg";
import { InterfaceHeaderWallet } from "../interface/Interface";
import Button from "./Button";

export default function HeaderWallet({
  active,
  allProducts,
  setAllProducts,
}: InterfaceHeaderWallet) {
  const textButton = "Limpar Compras";

  // Remove um item do carrinho
  const removeProduct = (productId: number) => {
    setAllProducts(allProducts.filter((product) => product.id !== productId));
  };

  // Formata o preço em reais (Brasil)
  const formatPriceBRL = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  // Limpa o carrinho
  const onCleanCart = () => {
    setAllProducts([]);
  };

  return (
    <div
      className={`absolute right-0 top-20 flex w-96 flex-col rounded-lg bg-white shadow-lg shadow-slate-400/50 ${active ? "fade-in-top" : "fade-out"}`}
    >
      {allProducts.length ? (
        <>
          <div className="flex flex-col gap-4 py-4">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center border-b-2 pb-4"
              >
                <div className="flex gap-4 border-slate-300">
                  <span className="w-5">{product.quantity}</span>
                  <span className="w-36 text-center text-green-700">
                    {product.nameProduct}
                  </span>
                  <span className="w-28 font-bold">
                    {formatPriceBRL(product.price)}
                  </span>
                  <Image
                    src={IconClosed}
                    alt="ícone fechar"
                    width={15}
                    height={15}
                    onClick={() => removeProduct(product.id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-center gap-3 text-lg font-bold text-blue-800">
              <h3>Total:</h3>
              <span>
                {formatPriceBRL(
                  allProducts.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0,
                  ),
                )}
              </span>
            </div>
          </div>

          <Button onClick={onCleanCart} text={textButton} />
        </>
      ) : (
        <span className="py-5 text-center text-sm font-normal text-red-600">
          O carrinho está vazio
        </span>
      )}
    </div>
  );
}
