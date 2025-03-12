import Image from 'next/image';
import React from 'react';
import namad from '@/assets/images/Permission/namad.png';

export default function FooterPermission() {
  return (
    <div className="flex justify-end max-sm:justify-center">
      <div className="flex justify-end gap-5">
        <Image src={namad} alt="نماد"  className={"w-[100px] h-[80px]"} />
        <Image src={namad} alt="نماد"  className={"w-[100px] h-[80px]"} />
        <Image src={namad} alt="نماد"  className={"w-[100px] h-[80px]"} />
      </div>
    </div>
  );
}
