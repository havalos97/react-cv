function Toast({text}: {text: string}) {
  return (
    <div
      className="flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
      id="toast-default"
      role="alert">
      <div className="ml-3 text-sm font-normal">{text}</div>
    </div>
  );
}

Toast.displayName = 'Toast';
export default Toast;
