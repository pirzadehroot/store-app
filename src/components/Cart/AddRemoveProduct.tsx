// 'use client';
// import { HiOutlineTrash } from 'react-icons/hi2';
// import { ProductDto } from '../Product/dto/product.dto';
// import { useCounterStore } from '@/store/useCounterStore';

// export default function AddRemoveProduct(item: ProductDto) {
//   const { count, increase, decrease, reset } = useCounterStore();

//   return (
//     <div className="flex gap-2 items-center my-5">
//       <button
//         onClick={() => increase()}
//         className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white"
//       >
//         +
//       </button>
//       <span className="mx-2">{count}</span>
//       <button
//         onClick={() => decrease()}
//         className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white"
//       >
//         -
//       </button>
//       <button
//         onClick={() => reset()}
//         className="bg-red-500 p-2 rounded-lg shadow-lg text-white transition-transform active:scale-90"
//       >
//         <HiOutlineTrash size={25} />
//       </button>
//     </div>
//   );
// }
