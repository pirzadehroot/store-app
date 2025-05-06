import { useSetModeCategory } from '../../../../hooks/admin/category/useCategoryHooks';
import { useQueryClient } from '@tanstack/react-query';
import { BiHide, BiShowAlt } from 'react-icons/bi';

interface DelCategoryProps {
  id: string;
  isShowing: boolean;
}

export default function CategoryVisible({ id, isShowing }: DelCategoryProps) {
  const queryClient = useQueryClient();
  const { mutate } = useSetModeCategory();

  const delHandler = async () => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
      },
    });
  };

  return (
    <button
      onClick={delHandler}
      className="bg-emerald-500 dark:bg-emerald-900 dark:border-emerald-500 border-2 border-border rounded-lg active:scale-95"
    >
      {isShowing ? (
        <BiHide size={30} className="p-1 text-white" />
      ) : (
        <BiShowAlt size={30} className=" p-1 text-white" />
      )}
    </button>
  );
}
