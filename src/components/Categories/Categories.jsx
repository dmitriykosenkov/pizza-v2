import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/reducers/filterSlice";

const Categories = () => {
   const categories = [
      "Усі",
      "М'ясні",
      "Вегетаріанські",
      "Гриль",
      "Гострі",
      "Закриті",
   ];
   const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
   const dispatch = useDispatch()
   const onClickCategory = (index) => {
      dispatch(setCategory(index));
      setActiveCategoryIndex(index);
   };
   return (
      <div className="categories">
         <ul>
            {categories.map((category, i) => (
               <li
                  key={category}
                  onClick={() => onClickCategory(i)}
                  className={activeCategoryIndex === i ? "active" : ""}
               >
                  {category}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;
