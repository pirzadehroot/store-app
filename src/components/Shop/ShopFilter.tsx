export default function ShopFilter() {
  return (
    <div className="my-5 p-5 border-2 rounded-md bg-white shadow-lg flex justify-between items-center">
      <form className="items-center">
        <label className="">
          <input type="checkbox" name="price" className="ml-2" />
          پیشترین قیمت
        </label>
        <label className="mr-2">
          <input type="checkbox" name="price" className="ml-2" />
          کمترین قیمت
        </label>
      </form>
      <form className="rounded-lg border">
        <input
          type="text"
          placeholder="نام محصول مورد نظر"
          className="outline-none px-3 py-2 rounded-r-lg bg-slate-100"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2  rounded-l-lg"
        >
          جست و جو
        </button>
      </form>
    </div>
  );
}
