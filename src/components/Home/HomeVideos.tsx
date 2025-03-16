import Link from 'next/link';
import { FaRegCirclePlay } from 'react-icons/fa6';

const videos = [
  {
    id: '1',
    title: 'برسی گوشی های جدید 1',
  },
  {
    id: '1',
    title: 'برسی گوشی های جدید 1',
  },
  {
    id: '1',
    title: 'برسی گوشی های جدید 1',
  },
];

export default function HomeVideos() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <video
        src="https://digikala.arvanvod.ir/yPe610dO49/Rv6EpXEQW1/origin_40J5p6njRMh2tdRuhgV27Ns2LbrKJoHovWEZiJAU.mp4"
        className="rounded-xl w-full shadow-lg border-2 border-gray-300"
        controls
        aria-label="Video Player"
        style={{
          maxHeight: '500px',
          objectFit: 'cover',
          backgroundColor: '#000',
        }}
      ></video>

      <div className="bg-bg_low border-2 border-border rounded-xl p-4">
        {videos.map((video) => (
          <div key={video.id} className="mb-4 last:mb-0">
            <Link
              href={'/'}
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <FaRegCirclePlay size={16} />
              <span>{video.title}</span>
            </Link>
            <hr className="my-2 border-border" />
          </div>
        ))}
      </div>
    </div>
  );
}
