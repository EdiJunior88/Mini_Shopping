export interface Product {
  id: number;
  nameProduct: string;
  price: number;
  urlImage: string;
  quantity: number;
}

export interface InterfaceHeader {
  allProducts: Product[]
  setAllProducts: (newProducts: Product[]) => void;
  total?: number;
  setTotal?: (newTotal: number) => void;
  countProducts?: number;
  setCountProducts?: (newCountProducts: number) => void;
}

export interface InterfaceHeaderWallet extends InterfaceHeader {
  active?: boolean;
  price?: number;
}

export interface InterfaceButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}