import Image from "next/image";
import React from "react";
import Container from "../../../components/Container";
import { HiStar } from "react-icons/hi2";
import axios from "axios";
import AddRemoveProduct from "../../../components/Cart/AddRemoveProduct";

interface IPropsType {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: IPropsType) {
  const { id } = await params;
  const { data } = await axios.get(`http://localhost:3001/products/${id}`);
  const product = data;

  return (
    <Container>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4 shadow-xl border-2 p-2 rounded-lg">
          <Image
            src={product?.image}
            alt="image"
            width={400}
            height={600}
            quality={2}
          />
        </div>
        <div className="col-span-8 shadow-xl border-2 p-2 rounded-lg">
          <h1>{product?.title}</h1>
          <p className="my-5">{product?.description}</p>
          <span className="text-lg font-bold">تومان {product?.price}</span>
          <span className="flex">
            {Array.from({ length: product?.rating || 0 }, (_, index) => (
              <span key={index}>
                <HiStar size={20} className="text-yellow-500" />
              </span>
            ))}
          </span>
          <AddRemoveProduct id={id as string} />
        </div>
      </div>
    </Container>
  );
}
