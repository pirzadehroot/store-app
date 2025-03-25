import React from 'react';
import { CategoryDto } from '../../../../Dto/category.dto';
import { HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2';

export default function CategoryItem(category: CategoryDto) {
  return (
    <div className="rounded-lg bg-bg_low border-2 border-border p-3 space-y-2">
      <div className="flex justify-between gap-2">
        <div>{category.title}</div>
        <div>
          {category.childrenCategory ? category.childrenCategory?.title : '-'}
        </div>
      </div>
      <div className="flex gap-1">
        <button className="bg-bg border border-border rounded-lg">
          <HiOutlinePencilSquare
            size={30}
            className="bg-yellow-500 rounded-lg p-1 text-white"
          />
        </button>
        <button className="bg-bg border border-border rounded-lg">
          <HiOutlineTrash
            size={30}
            className="bg-red-500 rounded-lg p-1 text-white"
          />
        </button>
      </div>
    </div>
  );
}
