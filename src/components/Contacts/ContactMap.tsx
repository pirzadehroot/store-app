import ContactInformations from "./ContactInformations";
import NeshanMap from "../../utils/maps/NeshanMap";

export default function ContactMap() {
  return (
    <div className="container mx-auto">
      <div className="grid -mt-16 grid-cols-12 gap-5 p-5 bg-bg_low rounded-lg border border-border">
        <div className="col-span-4 max-lg:col-span-12">
          <ContactInformations />
        </div>
        <div className="col-span-8 max-lg:col-span-12">
          <NeshanMap />
        </div>
      </div>
    </div>
  );
}
