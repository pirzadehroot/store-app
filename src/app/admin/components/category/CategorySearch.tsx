import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

export default function CategorySearch() {
  return (
    <form className="flex bg-bg rounded-lg items-center p-1 border border-border">
      <input type="search" className="bg-bg rounded-lg outline-none p-1 " placeholder={'جست و جو'} />
      <RiSearch2Line size={20} />
    </form>
  );
}
