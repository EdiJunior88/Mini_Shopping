"use client";

import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import { Product } from "./interface/Interface";

export default function Page() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="mx-auto max-w-4xl">
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Section
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </div>
  );
}
