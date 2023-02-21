import { RequiredToastProps, ToastPositionType } from "../../types/global";

// RequiredToastProps prevents Type Error
export const wrapperClasses: Record<RequiredToastProps["type"], string> = {
  info: "bg-white dark:bg-blue-800 dark:text-blue-100",
  success: "bg-white dark:bg-green-800 dark:text-green-100",
  warning: "bg-white dark:bg-orange-800 dark:text-orange-100",
  error: "bg-white dark:bg-red-700 dark:text-red-100",
};
// RequiredToastProps prevents Type Error
export const iconClasses: Record<RequiredToastProps["type"], string> = {
  info: "dark:bg-blue-100 bg-blue-500 text-white dark:text-blue-500",
  success: "dark:bg-green-100 bg-green-500 text-white dark:text-green-500",
  warning: "dark:bg-orange-100 bg-orange-500 text-white dark:text-orange-500",
  error: "dark:bg-red-100 bg-red-500 text-white dark:text-red-500",
};

export const closeButtonClasses =
  "w-4 h-4 mx-3 items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-900 rounded-md focus:ring-2 focus:ring-gray-300 inline-flex dark:hover:text-white";

export const closeIcon = (
  <svg aria-hidden="true" viewBox="64 64 896 896" fill="currentColor">
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
  </svg>
);

// return toast icon based on the toast type
export const getIcon = (type: RequiredToastProps["type"]) => {
  // This code is equivalent to Switch
  return {
    info: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    error: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
    warning: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }[type];
};

export const positionClasses: Record<ToastPositionType, string> = {
  topRight: "top-0 right-1",
  topCenter: "top-0 right-1/2 translate-x-1/2",
  topLeft: "top-0 left-1",
  bottomLeft: "bottom-0 left-1",
  bottomCenter: "bottom-0 right-1/2 translate-x-1/2",
  bottomRight: "bottom-0 right-1",
};

export const animationVariables: Record<ToastPositionType, string> = {
  topRight: "translateX(2000px)",
  topCenter: "translateY(-1300px)",
  topLeft: "translateX(-2000px)",
  bottomLeft: "translateX(-2000px)",
  bottomCenter: "translateY(1300px)",
  bottomRight: "translateX(2000px)",
};
