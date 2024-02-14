import React from "react";
import IconWallet from "@/app/assets/svg/IconWallet.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full justify-between py-10">
      <h1>Mini Shopping</h1>

      <div className="rounded-xl bg-white">
        <Image src={IconWallet} alt="ícone compras" />
      </div>
    </header>
  );
}
