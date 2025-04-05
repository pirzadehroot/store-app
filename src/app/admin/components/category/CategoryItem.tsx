import { CategoryDto } from '../../../../Dto/category.dto';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import DelCategory from './DelCategory';
import Link from 'next/link';

export default function CategoryItem(category: CategoryDto) {
  return (
    <div className="rounded-xl bg-bg_low border-2 border-border p-3 space-y-2">
      <div className="flex justify-between gap-2">
        <div>{category.title}</div>
        <div>
          {category.parentCategory ? category.parentCategory?.title : '-'}
        </div>
      </div>
      <div className="flex gap-1">
        <Link
          href="/admin/categories/edit"
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
  );
}
