import Link from 'next/link';
import ProductItem from '../Product/ProductItem';

const products = [
  {
    id: '1',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '2',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '3',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '4',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '5',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '6',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '7',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '8',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
];

export default function HomeNewProducts() {
  return (
    <div className="grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/shop/${product.slug}`}
          className={'flex gap-5'}
        >
          <ProductItem {...product} />
        </Link>
      ))}
    </div>
  );
}
