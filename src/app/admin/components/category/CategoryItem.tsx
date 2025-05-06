import { CategoryDto } from '../../../../Dto/category.dto';
import {
  HiArrowTopRightOnSquare,
  HiOutlinePencilSquare,
} from 'react-icons/hi2';
import DelCategory from './DelCategory';
import Link from 'next/link';
import SetModeCategory from './CategoryVisible';

export default function CategoryItem(category: CategoryDto) {
  return (
    <>
      <div className="w-[40%] my-4 flex justify-between items-center rounded-xl bg-bg border-2 border-border p-2">
        <Link className='hover:text-blue-600 hover:' href={`/categories/${category.slug}`}>{category.title}</Link>
        <div className="flex gap-1">
          <SetModeCategory id={category.id} isShowing={category.isShowing} />
          <Link
            href={`/admin/categories/${category.id}`}
            className="bg-yellow-500 dark:bg-yellow-900 dark:border-yellow-500 border-2 border-border rounded-lg active:scale-95"
          >
            <HiOutlinePencilSquare size={30} className="p-1 text-white" />
          </Link>
          <DelCategory id={category.id} />
        </div>
      </div>
      {category.subcategories &&
        category.subcategories.map((subCategory) => (
          <div key={subCategory.id} className="mr-10 mb-3 -mt-3">
            <CategoryItem {...subCategory} />
          </div>
        ))}
    </>
  );
}
