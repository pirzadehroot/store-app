export default function DataLoading() {
  return (
    <div className="text-center justify-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
      <h2 className="text-zinc-900 dark:text-white mt-4">درحال بارگزاری...</h2>
      <p className="text-zinc-600 dark:text-zinc-400">لطفا کمی صبور باشید.</p>
    </div>
  );
}
