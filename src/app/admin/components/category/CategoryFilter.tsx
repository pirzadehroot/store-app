import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { useState } from "react"

export default function CategoryFilter() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filters = [
    { value: "all", label: "همه" },
    { value: "parents", label: "پدر ها" },
    { value: "active", label: "فعال در منو" }
  ]

  return (
    <form className="flex items-center gap-2 p-1 text-low">
      <HiOutlineAdjustmentsHorizontal size={22} className="text-gray-500" />

      <div className="flex gap-2">
        {filters.map((filter) => (
          <label
            key={filter.value}
            className={`flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer 
              ${selectedFilter === filter.value ? "text-blue-500" : ""}`}
          >
            <input
              type="radio"
              name="filter"
              value={filter.value}
              checked={selectedFilter === filter.value}
              onChange={() => setSelectedFilter(filter.value)}
              className="peer hidden"
            />
            <span className="active:scale-90 duration-150">
              {filter.label}
            </span>
          </label>
        ))}
      </div>
    </form>
  )
}