export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-red-500 animate-spin shadow-md" />
        <div className="absolute inset-2 rounded-full bg-white dark:bg-zinc-900" />
      </div>
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white animate-pulse">
        در حال بارگذاری...
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        لطفا کمی صبور باشید 
      </p>
    </div>
  );
}
