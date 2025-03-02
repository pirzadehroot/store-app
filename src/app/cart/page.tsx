"use client";
import CartItem from "../../components/Cart/CartItem";
import useCartStore from "../../store/useCartStore";

export default function Cart() {
  const { cart } = useCartStore();

  return (
    <div>
      <div className="contianer mx-auto">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9 bg-gray-100 dark:bg-gray-800 border rounded-lg p-5">
            {cart == undefined || cart == null ? (
              <p>هیج محصولی در سبد خرید وجود ندارد.</p>
            ) : (
              cart.map((cartItem) => (
                <div key={cartItem.id}>
                  <CartItem item={cartItem} />
                </div>
              ))
            )}
          </div>
          <div className="col-span-3 bg-gray-100 dark:bg-gray-800 border rounded-lg p-5">
            <h2 className={"text-gray-600 dark:text-gray-110 mb-2"}>
              جمع مبلغ : 344,000 تومان
            </h2>
            <h4 className={"text-gray-600 dark:text-gray-110"}>
              هزینه پست : <span className={"text-red-500"}>33,000</span>
            </h4>
            <label className="rounded-md dark:bg-gray-850 bg-white border text-sm py-2 flex my-5 px-2 relative">
              <input
                type="text"
                placeholder="کد تخفیف"
                className="outline-none bg-transparent"
              />
              <button className="absolute active:bg-opacity-35 transition-opacity text-white bottom-0 left-0 top-0 rounded-l-md px-1.5 bg-green-500 ">
                اعمال
              </button>
            </label>
            <button className="bg-red-500 rounded-lg p-2 text-white">
              پرداخت با زرین پال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
