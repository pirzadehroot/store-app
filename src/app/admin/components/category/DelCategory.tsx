import { HiOutlineTrash } from 'react-icons/hi2';
import { useDeleteCategory } from '../../../../hooks/admin/category/useCategoryHooks';
import { useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';

interface DelCategoryProps {
  id: string;
}

const MySwal = withReactContent(Swal);

export default function DelCategory({ id }: DelCategoryProps) {
  const queryClient = useQueryClient();
  const { mutate } = useDeleteCategory();

  const delHandler = async () => {
    const result = await MySwal.fire({
      title: 'آیا مطمئنی؟',
      text: 'این دسته‌بندی حذف خواهد شد!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله، حذفش کن!',
      cancelButtonText: 'نه، بیخیال',
      customClass: {
        popup: 'rounded-lg shadow-xl bg-bg_low text-low',
        title: 'text-lg font-bold',
        confirmButton:
          'bg-red-600 text-white px-4 mx-2 py-2 rounded hover:bg-red-700',
        cancelButton:
          'bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300',
      },
      buttonsStyling: false,
    });

    if (result.isConfirmed) {
      mutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(['categories']);
          toast.success('دسته‌بندی با موفقیت حذف شد');
        },
      });
    }
  };

  return (
    <button
      onClick={delHandler}
      className="bg-bg border border-border rounded-lg active:scale-95"
    >
      <HiOutlineTrash
        size={30}
        className="bg-red-500 rounded-lg p-1 text-white"
      />
    </button>
  );
}
