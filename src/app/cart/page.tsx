import CartItem from "../../components/Cart/CartItem";
import Container from "../../components/Container";
<<<<<<< HEAD
import { useCartContext } from "../../context/useCartContext";
=======
import { useCartContext } from "../../context/CartContext";
>>>>>>> 398085c08ae3d2dbfc2cdbe44507f85042665d6a

export default function Cart() {
  const { ShowCart } = useCartContext();
  const itemsList = ShowCart();

  return (
    <div>
      <Container>
        <div className="">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-9 bg-gray-100 border-2 rounded-xl shadow-md p-10">
              {itemsList &&
                itemsList.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
            <div className="col-span-3 bg-gray-100 border-2 rounded-xl shadow-md p-10">
              <h2>جمع مبلغ : 3000 تومان</h2>
              <label className="ml-2 ">
                <span>کد تخفیف </span>
                <input type="text" className="border-2 rounded-lg" />
                <button className="bg-blue-500 rounded-lg p-1 text-white">
                  اعمال
                </button>
              </label>
              <button className="bg-green-500 rounded-lg p-2 text-white">
                پرداخت
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
