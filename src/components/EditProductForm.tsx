// components/EditProductForm.tsx

import React, { useState, useEffect } from "react";
import messageStore from "@/mobx/messageStore";
import { updateProductApi } from "@/api/product/update";
import { Product } from "@/api/product/interfaces";
import productStore from "@/mobx/ProductStore";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

interface EditProductFormProps {
  product: Product;
  onClose: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  onClose,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  useEffect(() => {
    setUpdatedProduct(product);
    console.log({ product: toJS(product) });
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(toJS(updatedProduct));
      const updatedProd = await updateProductApi(updatedProduct);
      if (!updatedProd) throw new Error("product updated is null");
      productStore.updateProduct(updatedProd);
      messageStore.setMessage("Product updated successfully!", "success");
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        messageStore.setMessage(
          "Error updating product: " + error.message,
          "error"
        );
      } else {
        messageStore.setMessage("An unknown error occurred", "error");
      }
    }
  };

  const handleChangeSize = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    console.log({ name, value });
    setUpdatedProduct({
      ...updatedProduct,
      size: { ...updatedProduct.size, [name]: value },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={updatedProduct.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-white">
          Image
        </label>
        <input
          disabled
          type="text"
          id="imageUrl"
          name="imageUrl"
          // onChange={handleChange}
          value={product.imageUrl}
          className="w-full px-3 py-2 border rounded-md"
        />
        <Image
          alt="product image1"
          // layout="fill"
          width={100}
          height={100}
          className=" bg-center object-cover "
          src={product?.imageUrl || ""}
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="currency" className="block text-gray-700">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          value={updatedProduct.currency}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="ILS">ILS</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={updatedProduct.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="size" className="block text-gray-700 font-bold mb-2">
          size - w - h
        </label>
        <div className="flex items-center gap-4">
          {/* <span>widht X height</span> */}
          <input
            type="number"
            id="width"
            name="width"
            max={200}
            min={10}
            value={updatedProduct.size.width}
            onChange={handleChangeSize}
            className="w-14 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          X
          <input
            type="number"
            id="height"
            name="height"
            max={200}
            min={10}
            value={updatedProduct.size.height}
            onChange={handleChangeSize}
            className=" w-14 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Update Product
        </button>
      </div>
    </form>
  );
};

export default observer(EditProductForm);
