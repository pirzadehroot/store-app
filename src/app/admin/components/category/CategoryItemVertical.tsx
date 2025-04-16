import { CategoryDto } from '../../../../Dto/category.dto';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import DelCategory from './DelCategory';
import Link from 'next/link';
import SetModeCategory from './SetModeCategory';

export default function CategoryItemVertical(category: CategoryDto) {
  return (
    <>
      <div className="w-[40%] my-4 flex justify-between items-center rounded-xl bg-bg border-2 border-border p-2">
        <div>{category.title}</div>
        <div className="flex gap-1">
          <SetModeCategory id={category.id} isShowing={category.isShowing} />
          <Link
            href={`/admin/categories/edit/${category.id}`}
            className="bg-bg border border-border rounded-lg active:scale-95"
          >
            <HiOutlinePencilSquare
              size={30}
              className="bg-yellow-500 rounded-lg p-1 text-white"
            />
          </Link>
          <DelCategory id={category.id} />
        </div>
      </div>
      {category.subcategories && (
        category.subcategories.map((subCategory) => (
          <div key={subCategory.id} className="mr-10 -my-3">
            <CategoryItemVertical  {...subCategory} />
          </div>
        ))
      )}
    </>
  );
}

export const EditCategoryModal = () => {

}
