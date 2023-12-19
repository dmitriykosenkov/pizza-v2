import React from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/PizzaSkeleton";
import Sort from "../components/Sort/Sort";

const MainPage = () => {
   const { loading, items: pizzas } = useSelector((state) => state.allPizzas);
   return (
      <>
         <div className="content__top">
            <Categories />
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {loading
               ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
               : pizzas.map((pizza) => (
                    <PizzaBlock
                       key={pizza.id}
                       loading={loading}
                       pizza={pizza}
                    />
                 ))}
         </div>
      </>
   );
};

export default MainPage;
