"use client";
import { Alert, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  addToCart,
  removeFromCart,
  selectProducts,
  setProductsItem
} from "@/redux/features/cart/cartSlice";
import { ProductType } from "@/lib/definitions";

export default function Shop() {
  const [cartItemsFromStore, setCartItemsFromStore] = useState<ProductType[]>(
    []
  );
  const [showDiscountField, setShowDiscountField] = useState(false);
  const [expandMoreActive, setExpandMoreActive] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [invalidDiscount, setInvalidDiscount] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const dispatch = useDispatch();
  const productsState = useSelector(selectProducts);
  const totalPrice = cartItemsFromStore.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setCartItemsFromStore(productsState);
  }, [productsState]);

  const deleteItem = (id: number) => {
    console.log("Item deleted:", id);
    const remainingProducts = cartItemsFromStore.filter(
      (item) => item.id !== id
    );
    dispatch(setProductsItem(remainingProducts));
  };

  const handleAddToCart = (product: ProductType) => {
    const existingItemIndex = cartItemsFromStore.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItemsFromStore];
      const updatedItem = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity - 1
      };
      updatedCartItems[existingItemIndex] = updatedItem;
      dispatch(addToCart(updatedItem));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const toggleDiscountField = () => {
    setShowDiscountField((prev) => !prev);
    setExpandMoreActive((prev) => !prev);
  };

  const applyDiscount = () => {
    if (discountCode === "DISCOUNT10") { // Can you take the code "DISCOUNT10"
      setDiscountAmount(10);
      setInvalidDiscount(false);
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 3000);
    } else {
      setDiscountAmount(0);
      setInvalidDiscount(true);
      setSuccessAlert(false);

      setTimeout(() => {
        setInvalidDiscount(false);
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid gap-5 font-Staatliches my-6">
        <h1 className="text-3xl tracking-wider">Your Shopping Cart</h1>
        <div className="flex gap-5 lg:flex-col">
          <div className="flex items-center justify-between flex-col w-full gap-5 ">
            {productsState.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between w-full gap-5 border-[1px] p-5 border-slate-600"
              >
                <img src={product.image} alt="" className="w-[10rem]" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-5 w-full">
                    <div>
                      <h1 className="tracking-wider text-lg">{product.name}</h1>
                      <p>{product.category}</p>
                    </div>
                    <div className="flex flex-col">
                      <Tooltip title="Delete">
                        <IconButton onClick={() => deleteItem(product.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Favorite">
                        <IconButton>
                          <FavoriteIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="flex place-items-center justify-between gap-5">
                    <p className="tracking-wider">Price: $ {product.price}</p>
                    <div className="flex items-center justify-center">
                      <span
                        onClick={() => handleRemoveFromCart(product.id)}
                        className="p-[5px] cursor-pointer border border-r-0 w-7 h-full flex items-center justify-center"
                      >
                        -
                      </span>
                      <span className="border p-[5px] border-gray-300 h-full text-center w-12 ">
                        {product.quantity}
                      </span>
                      <span
                        onClick={() => handleAddToCart(product)}
                        className="p-[5px] cursor-pointer border border-gray-300 border-l-0 w-7 h-full flex items-center justify-center"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-5 grid gap-4 w-full h-max border-[1px] p-5 border-slate-600">
            <div className="flex items-center justify-between">
              <h1>Order Amout: </h1>
              <h1>$250</h1>
            </div>
            <div className="flex items-center justify-between">
              <h1>Delivery: </h1>
              <h1>$50</h1>
            </div>
            <div className="flex items-start flex-col w-full">
              <button
                onClick={toggleDiscountField}
                className="flex items-center justify-between w-full"
              >
                <span>Do you have discount code?</span>
                <ExpandMoreIcon />
              </button>
              <div className="w-full">
                {showDiscountField && (
                  <div className="grid gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Enter discount code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full"
                    />
                    <button
                      onClick={applyDiscount}
                      className="bg-black text-white py-2"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute top-16 right-5">
              {invalidDiscount && (
                <Alert variant="filled" severity="info">
                  Invalid discount code. Please try again.
                </Alert>
              )}
              {successAlert && (
                <Alert variant="filled" severity="success">
                  Discount applied successfully.
                </Alert>
              )}
            </div>
            <div className="flex items-center justify-between text-xl border-y-2 py-3 border-slate-600">
              <h1>Total Price:</h1>
              <h1>$ {totalPrice}</h1>
            </div>
            <button className="w-full bg-black text-white py-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
