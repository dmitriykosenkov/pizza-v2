import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../store/reducers/filterSlice";

const Sort = () => {
   const sortedCategory = [
      { rating: "популярністю" },
      { price: "ціною" },
      { title: "алфавітом" },
   ];
   const searchRef = useRef();
   const [popupOpen, setPopupOpen] = useState(false);
   const [activeFilter, setActiveFilter] = useState("популярністю");
   const dispatch = useDispatch();

   useEffect(() => {
      const handlerPopupOpen = (event) => {
         if (!event.path.includes(searchRef.current)) {
            setPopupOpen(false);
         }
      };
      document.body.addEventListener("click", handlerPopupOpen);
      return () => {
         document.body.removeEventListener("click", handlerPopupOpen);
      };
   }, []);

   const changeFilter = (filter, index) => {
      const sortKey = Object.keys(sortedCategory[index])[0];
      setActiveFilter(filter[0]);
      dispatch(setSort(sortKey));
      setPopupOpen((prev) => !prev);
   };
   return (
      <div ref={searchRef} className="sort">
         <div
            className="sort__label"
            onClick={() => setPopupOpen((prev) => !prev)}
         >
            <svg
               style={!popupOpen ? { transform: "rotate(180deg)" } : {}}
               width="10"
               height="6"
               viewBox="0 0 10 6"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
               />
            </svg>
            <b>Сортування за:</b>
            <span>{activeFilter}</span>
         </div>
         {popupOpen && (
            <div className="sort__popup">
               <ul>
                  {sortedCategory.map((item, i) => {
                     const value = Object.values(item);
                     return (
                        <li
                           key={item}
                           className={value[0] === activeFilter ? "active" : ""}
                           onClick={() => changeFilter(value, i)}
                        >
                           {value}
                        </li>
                     );
                  })}
               </ul>
            </div>
         )}
      </div>
   );
};

export default Sort;
