import Image from "next/image";
import React from "react";
import namad from "../../../public/images/Permission/namad.png";

export default function FooterPermission() {
  return (
    <div className="flex justify-end max-sm:justify-center">
      <div className="flex justify-end gap-5 border p-2 rounded-lg">
        <Image src={namad} alt="نماد" width={100} height={80} />
        <Image src={namad} alt="نماد" width={100} height={80} />
        <Image src={namad} alt="نماد" width={100} height={80} />
      </div>
    </div>
  );
}
