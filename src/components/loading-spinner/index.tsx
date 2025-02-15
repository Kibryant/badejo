export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7E4108]" />
      <p className="mt-4 text-lg text-[#7E4108] font-semibold">Carregando cardápio...</p>
    </div>
  );
};
