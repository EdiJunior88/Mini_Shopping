import { useState } from "react";
import IconWallet from "@/app/assets/svg/IconWallet.svg";
import Image from "next/image";
import HeaderWallet from "./HeaderWallet";
import { InterfaceHeader } from "../interface/Interface";

export default function Header({
  allProducts,
  setAllProducts,
}: InterfaceHeader) {
  const [active, setActive] = useState(false);

  return (
    <header className="relative flex w-full items-center justify-between py-10">
      <h1>Mini Shopping</h1>

      <div
        className="relative z-10 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <Image src={IconWallet} width={40} height={40} alt="ícone compras" />

        <div className="absolute right-0 top-6 rounded-full bg-black p-1 text-xs text-white">
          <span>
            {/* o método "reduce" soma a quantidade de todos os produtos em um array chamado
             allProducts. O valor inicial da soma é 0. O método "reduce" itera sobre cada 
             elemento do array e acumula a quantidade de produtos. */}
            {allProducts.reduce(
              (accumulator, product) => accumulator + product.quantity,
              0,
            )}
          </span>
        </div>
      </div>

      <HeaderWallet
        active={active}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
      />
    </header>
  );
}
