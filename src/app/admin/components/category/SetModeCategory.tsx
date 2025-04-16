import { HiOutlineTrash } from 'react-icons/hi2';
import { useSetModeCategory } from '../../../../hooks/admin/category/useCategoryHooks';
import { useQueryClient } from '@tanstack/react-query';
import { BiHide, BiShowAlt } from 'react-icons/bi';

interface DelCategoryProps {
  id: string;
  isShowing: boolean
}


export default function SetModeCategory({ id, isShowing }: DelCategoryProps) {
  const queryClient = useQueryClient();
  const { mutate } = useSetModeCategory();

  const delHandler = async () => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['categories']);
      },
    });
  };

  return (
    <button
      onClick={delHandler}
      className="bg-bg border border-border rounded-lg active:scale-95"
    >

      {isShowing ? (
        <BiHide
          size={30}
          className="bg-blue-400 rounded-lg p-1 text-white"
        />
      ) : (
        <BiShowAlt
          size={30}
          className="bg-blue-400 rounded-lg p-1 text-white"
        />
      )}
    </button>
  );
}
