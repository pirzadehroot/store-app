import { MdError } from 'react-icons/md';

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <span className="text-sm flex gap-2 text-red-500">
      <MdError size={20} />
      {message}
    </span>
  );
}
