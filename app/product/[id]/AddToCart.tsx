
"use client";

import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
};

type CartItem = Product & {
  quantity: number;
};

export default function AddToCart({ product }: { product: Product }) {
  const [message, setMessage] = useState("");

  function addToCart() {
    try {
      const saved = localStorage.getItem("hampers-heaven-cart");
      const cart: CartItem[] = saved ? JSON.parse(saved) : [];

      const existing = cart.find((item) => item.id === product.id);

      const updated = existing
        ? cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cart, { ...product, quantity: 1 }];

      localStorage.setItem("hampers-heaven-cart", JSON.stringify(updated));
      setMessage("Added to your bag successfully!");
    } catch {
      setMessage("Could not update your bag. Please try again.");
    }
  }

  function addToWishlist() {
    try {
      const saved = localStorage.getItem("hampers-heaven-wishlist");
      const wishlist: Product[] = saved ? JSON.parse(saved) : [];

      if (wishlist.some((item) => item.id === product.id)) {
        setMessage("This hamper is already in your wishlist.");
        return;
      }

      localStorage.setItem(
        "hampers-heaven-wishlist",
        JSON.stringify([...wishlist, product])
      );

      setMessage("Saved to your wishlist!");
    } catch {
      setMessage("Could not update your wishlist. Please try again.");
    }
  }

  return (
    <div className="product-actions">
      <button className="button" onClick={addToCart} type="button">
        Add to Bag
      </button>

      <button
        className="button button-outline"
        onClick={addToWishlist}
        type="button"
      >
        ♡ Add to Wishlist
      </button>

      {message && (
        <p className="notice" role="status" aria-live="polite">
          {message}
        </p>
      )}
    </div>
  );
}
