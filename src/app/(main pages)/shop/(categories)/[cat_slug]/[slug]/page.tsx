import Image from 'next/image';
import React from 'react';
import type { Metadata } from 'next';
import axios from 'axios';
import AddRemoveProduct from '../../../../components/Cart/AddRemoveProduct';
import static_img from '@/assets/images/product/static-product-image.png';
import { ProductDetailDto } from '../../../../components/Product/dto/product.dto';

interface PropsDto {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<ProductDetailDto> {
  const { data } = await axios.get(`http://localhost:8000/shop/${slug}`);
  return data;
}

export async function generateMetadata({
  params,
}: PropsDto): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product?.title,
    description: product?.description,
  };
}

export default async function ProductDetail({ params }: PropsDto) {
  const product = await getProduct(params.slug);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4 shadow-xl border-2 p-2 rounded-lg">
          <Image
            src={product?.imageUrl || static_img}
            alt={product?.title || 'product Image'}
            width={400}
            height={600}
            quality={100}
            priority
          />
        </div>
        <div className="col-span-8 shadow-xl border-2 p-2 rounded-lg">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="my-5 text-gray-700">{product?.description}</p>
          <span className="text-lg font-bold">
            تومان
            <div className="font-bold text-red-500">
              {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </span>
          <AddRemoveProduct item={product} />
        </div>
      </div>
    </div>
  );
}
