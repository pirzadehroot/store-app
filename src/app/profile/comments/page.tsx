import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';

const comments = [
  {
    id: '3423-432-43d-4',
    title: 'موضوع کامت',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderi velit dolores sint tenetur ducimus. Delectus quidem laboriosam ',
    is_active: true,
  },
  {
    id: '3423-432-43d-455',
    title: '1 موضوع کامت',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderi velit dolores sint tenetur ducimus. Delectus quidem laboriosam ',
    is_active: false,
  },
  {
    id: '3423-432-43d-455',
    title: '1 موضوع کامت',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderi velit dolores sint tenetur ducimus. Delectus quidem laboriosam ',
    is_active: false,
  },
  {
    id: '3423-432-43d-455',
    title: '1 موضوع کامت',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderi velit dolores sint tenetur ducimus. Delectus quidem laboriosam ',
    is_active: false,
  },
  {
    id: '3423-432-43d-455',
    title: '1 موضوع کامت',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderi velit dolores sint tenetur ducimus. Delectus quidem laboriosam ',
    is_active: false,
  },
  {
    id: '3423-432-43d-455',
    title: '1 موضوع کامت',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderi velit dolores sint tenetur ducimus. Delectus quidem laboriosam ',
    is_active: false,
  },
  {
    id: '3423-432-43d-455',
    title: '1 موضوع کامت',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderi velit dolores sint tenetur ducimus. Delectus quidem laboriosam ',
    is_active: false,
  },
];

export default function ProfileComments() {
  return (
    <div className="bg-bg_low rounded-md col-span-4 p-5 grid grid-cols-12 gap-5">
      {comments.map((comment) => (
        <div
          className={`col-span-4 rounded-md p-3 bg-bg grid gap-5 ${!comment.is_active ? 'opacity-60' : ''}`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3>{comment.title}</h3>
            </div>
            <div className="flex gap-2">
              <button className="bg-red-500 dark:bg-red-900 dark:border-red-500 border-2 border-border rounded-lg active:scale-95">
                <HiOutlineTrash size={30} className="p-1 text-white" />
              </button>
            </div>
          </div>
          <hr />
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
