export default function Checkout() {
  return (
    <div className="p-5">
      <h4 className={""}>
        هزینه پست : <span className={"text-red-500"}>33,000</span>
      </h4>
      <h4 className={""}>
        هزینه پست : <span className={"text-red-500"}>33,000</span>
      </h4>
      <h2 className={" mb-2"}>جمع مبلغ : 344,000 تومان</h2>
      <label className="rounded-md bg-bg border border-border text-sm py-2 flex my-5 px-2 relative">
        <input
          type="text"
          placeholder="کد تخفیف"
          className="outline-none bg-transparent"
        />
        <button className="absolute active:bg-opacity-35 transition-opacity text-white bottom-0 left-0 top-0 rounded-l-md px-1.5 bg-red-500 ">
          اعمال
        </button>
      </label>
      <button className="bg-green-500 rounded-lg p-2 text-white">پرداخت</button>
    </div>
  );
}
