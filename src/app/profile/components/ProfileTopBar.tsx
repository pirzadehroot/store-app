import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { IoWalletOutline } from 'react-icons/io5';

export default function ProfileTopBar() {
  return (
    <div className="p-5 flex justify-between gap-5 items-center mb-6 bg-bg_low  rounded-md">
      <div>
        <h2 className="text-2xl">خوش آمدید.</h2>
      </div>
      <div className="flex gap-4 items-center">
        <span className="flex items-center ml-5 text-sm">
          <IoWalletOutline size={27} />
        </span>
        <span className="flex items-center ml-5 text-sm">
          <HiOutlineBellAlert size={27} />
        </span>
        <span>سینا پیرزاده</span>
        <span className="">
          <AiOutlineUser size={30} />
        </span>
      </div>
    </div>
  );
}
