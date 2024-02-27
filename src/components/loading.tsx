export const Loading = () => (
  <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
    <div className="flex justify-center items-center mt-[50vh]">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
    </div>
  </div>
);
