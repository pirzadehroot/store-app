'use client';
import Link from 'next/link';
import DataLoading from '../components/DataLoading';
import { HiMiniPlus } from 'react-icons/hi2';
import { useGetCategories } from '../../../hooks/admin/category/useCategoryHooks';
import CategoryItemVertical from '../components/category/CategoryItemVertical';
import { useState } from 'react';
import Modal from '../components/modal';

export default function Categories() {
  const { data: categories, isLoading } = useGetCategories();

  return (
    <div className="space-y-5">
      <AddNewCategory />

      <div>
        {isLoading ? (
          <DataLoading />
        ) : (
          <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories?.map((category) => (
              category.parentCategory === null &&
              (
                <CategoryItemVertical key={category.id} {...category} />
              )
            ))}
          </div>
        )}
      </div>
    </div >
  );
}
// for آینده :(((())))
// export const AddNewCategory = () => {
//   const [openModel, setOpenModel] = useState<boolean>(false)
//   return (
//     <Modal  >

//       <div className="flex">

//         <Link
//           href="/admin/categories/add"
//           className="flex items-center  active:scale-95 bg-green-500 p-2 text-white rounded-lg"
//         >
//           <HiMiniPlus size="22" />
//           دسته بندی جدید
//         </Link>
//       </div>
//     </Modal>

//   )
// }
