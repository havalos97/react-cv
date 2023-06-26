function Toast ({ text }: any) {
  return (
    <div id="toast-default" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div className="ml-3 text-sm font-normal">{ text }</div>
    </div>
  );
};

Toast.displayName = 'Toast';
export default Toast;
