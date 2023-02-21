import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import useGetElementCoords from "../../hooks/useGetElementCoords";
import mainLogo from "../../assets/img/logo.png";
import AvatarModal from "../Modal/AvatarModal";
import { getStoreJson, USER_LOGIN } from "../../util/setting";
import { UserLoginType } from "../../types/global";

const Header = () => {
  // Admin
  const admin: UserLoginType = getStoreJson(USER_LOGIN);

  // variable ClickOutSide
  const {
    show: isShowDropdown,
    setShow: setIsShowDropdown,
    nodeRef,
  } = useClickOutside();

  // variable Get Coords
  const { coords, handleGetElementCoords, elmRef } = useGetElementCoords();

  const handleToggleSettings = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsShowDropdown((s) => !s);
    handleGetElementCoords(e);
  };

  return (
    <div
      id="header "
      className="flex items-center justify-between mb-5 border-b pb-2"
    >
      <div className=" max-w-[300px] w-full">
        <Link
          to="/"
          className="flex items-center justify-center-5 gap-x-5 text-2xl text-primary font-bold "
        >
          <img src={mainLogo} alt="..." className="w-full max-w-[70px]" />
          <span className="hidden lg:inline-block">Monkey Jira</span>
        </Link>
        <div className=" max-w-[458px] w-full"></div>
      </div>
      <div className="flex items-center flex-1 gap-x-4 justify-end">
        <div className="indicator ">
          <span className="indicator-item indicator-top badge badge-xs badge-error text-white p-2 ">
            9
          </span>
          <span className="text-blue-500 p-1 bg-blue-500 bg-opacity-20 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </span>
        </div>
        <div className="relative" ref={nodeRef}>
          <div
            ref={elmRef}
            className="w-10 h-10 select-none cursor-pointer "
            onClick={handleToggleSettings}
          >
            <img
              src={admin?.avatar || ""}
              alt="avatar"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          {isShowDropdown && <AvatarModal coords={coords} />}
        </div>
        <div className="flex items-center">
          <p className="text-text5 font-semibold">{admin?.name || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
