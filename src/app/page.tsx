import MainBander from '../components/Home/Slider/MainBander';
import ProductDiscount from '../components/Home/Slider/ProductDiscount';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <section>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9 max-lg:col-span-12">
            <MainBander />
          </div>
          <div className="col-span-3 max-lg:col-span-12">
            <ProductDiscount />
          </div>
        </div>
      </section>
    </div>
  );
}
