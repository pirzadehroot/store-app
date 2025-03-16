'use client';
import CartItems from '../../../components/Cart/CartItems';
import Checkout from '../../../components/Cart/Checkout';

export default function Cart() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-10 py-10">
          <div className="col-span-9 bg-bg_low border border-border rounded-lg">
            <CartItems />
          </div>
          <div className="col-span-3 space-y-3 bg-bg_low border border-border rounded-lg ">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
}
