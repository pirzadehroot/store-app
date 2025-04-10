import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

export default function CategorySearch() {
  return (
    <label className="flex gap-3">
      <input type="search" className="bg-bg_low rounded-lg p-2" />
      <button type="submit" className="rounded-lg bg-bg_low">
        <RiSearch2Line />
      </button>
    </label>
  );
}
