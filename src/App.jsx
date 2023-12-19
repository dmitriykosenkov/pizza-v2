import "./scss/app.scss";
import { useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { fetchAllPizzas } from "./store/reducers/allPizzasReducer";
import { fetchAllOrderedPizzas } from "./store/reducers/cartReducer";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

function App() {
   const { category, sort, term } = useSelector((state) => state.filter);
   const dispatch = useDispatch();
   const [searchParams, setSearchParams] = useSearchParams();

  
   useEffect(() => {
      dispatch(fetchAllPizzas({ category, sort, term }));
   }, [category, sort, term]);
   useEffect(() => {
      dispatch(fetchAllOrderedPizzas());
   }, []);

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <div className="container">
               <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/cart" element={<CartPage />} />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
