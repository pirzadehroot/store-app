import { ProductDto } from '@/Dto/Product.dto';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileFavorites() {
  const products: ProductDto[] = [
    {
      id: '3231-3214123-c21312-6vv34',
      image: '/src/app/profile/favorites/product.png',
      title: 'محصول ۱',
      slug: '432432',
      rating: 5,
      price: 20000,
      description: '',
    },
    {
      id: '3231-3214123-c21312-vv434',
      image: '/product.png',
      title: 'محصول ۱',
      slug: '432432',
      rating: 5,
      price: 20000,
      description: '',
    },
    {
      id: '3231-3214123-c21312-vv234',
      image: '/product.png',
      title: 'محصول ۱',
      rating: 5,
      slug: '432432',
      price: 20000,
      description: '',
    },
    {
      id: '3231-3214123-c21312-vv3434',
      image: '/product.png',
      title: 'محصول ۱',
      slug: '432432',
      rating: 5,
      price: 20000,
      description: '',
    },
    {
      id: '3231-3214123-c21312-vv334',
      image: '/product.png',
      title: 'محصول ۱',
      slug: '432432',
      rating: 5,
      price: 20000,
      description: '',
    },
  ];

  return (
    <div className="bg-bg_low rounded-md col-span-4 p-5 grid grid-cols-12 gap-5">
      {products.map((product) => (
        <div className="col-span-4 bg-bg p-3 flex flex-col gap-1 rounded-md">
          <div className="h-48 bg-gray-700 rounded-xl">
            <Image width={100} height={100} alt="image" src={product.image} />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold">{product.title}</span>
                <p className="text-xs text-yellow-600">{product.rating}</p>
              </div>
              <span className="font-bold  text-red-600">${product.price}</span>
            </div>
              <Link
                href={`/product/${product.slug}`}
                className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"
              >
                Add to cart
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
