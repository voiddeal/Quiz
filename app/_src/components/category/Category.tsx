"use client"

import { useAppDispatch } from "@/app/_src/redux/hooks"
import { mapActions } from "@/app/_src/redux/features/quiz/map/mapSlice"
import { settingsActions } from "@/app/_src/redux/features/quiz/settings/settingsSlice"
import categories from "@/app/_src/db/categories.json"
import "./category.css"

const Category: React.FC = () => {
  const dispatch = useAppDispatch()

  const selectCategory = (key: string) => {
    dispatch(settingsActions.setCategory(key))
    dispatch(mapActions.change("settings"))
  }

  const categoryItems = categories.map((category) => (
    <li
      key={category.id}
      className="category__item w-48 h-28 transition-colors duration-75 flex items-center justify-center px-3 text-white cursor-pointer text-center text-xl backdrop-blur-[2px]"
      onClick={() => selectCategory(category.id)}
    >
      {category.value}
    </li>
  ))

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-white text-center py-5 border-b-2 border-opacity-35 border-white sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-md text-xl z-10">
        :: Select Category ::
      </h2>
      <ul className="category grid justify-center">{categoryItems}</ul>
    </div>
  )
}

export default Category
