import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header/Header"
import Meals from "./Component/Meals/Meals";
import CartRrovider, { Layprovider } from "./Store/Cart-provider";
import { useContext } from "react";
import {cartlay} from "./Store/Card-Context"



function App() {
  const isOpen = useContext(cartlay);
  return (
    <frameElement>
      
      <CartRrovider >

          { isOpen.isOpen && <Cart /> }
          <Header />
          <main >
            <Meals />
          </main>

      </CartRrovider>

    </frameElement>
  );
}

export default App;
