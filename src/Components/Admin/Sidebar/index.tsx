import React, { useEffect, useRef, useState } from 'react';
import { RiUserLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { BiHomeCircle,  BiUserPlus  } from "react-icons/bi";
import { PiWechatLogoLight } from "react-icons/pi";
import { IoHomeOutline, IoImageOutline, IoSettingsOutline } from "react-icons/io5";
import { TbHomePlus, TbUsersGroup,TbLogout2  } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

// import NavLink from "react-dom"

import { BsDot} from 'react-icons/bs';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  // const location = useLocation();
  // const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 border-[#e6e6e6] rounded-lg border lg:mt-5 lg:ml-5 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
       <div className="flex xl:hidden items-center justify-between gap-2  py-2 lg:py-2">
       

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div> 
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar  flex flex-col overflow-y-auto  duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className=" h-[100vh]  px-4 mt-1 lg:px-">
          {/* <!-- Menu Group --> */}
          <div>
            <div className="flex justify-center items-center gap-4 p-3 bg-[#f0f0f0] rounded-xl">
              <div className="relative">
                <img  className='w-10' alt="" />
                <BsDot className="text-[3rem] text-[green] absolute bottom-[-21px] left-2"/>
              </div>
              <div>
                <h1 className='font-bold'>Jedidiah Olaleye</h1>
                <p className='text-[0.6rem] '>Risk Manager <span className="bg-[green] text-[0.6rem] text-white px-[0.2rem]">Super Admin </span></p>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" mt-10 mb-3  font-medium text-[black] px-5">
              <NavLink to="/admin">
              <h1 className=''><span ><BiHomeCircle className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Dashboard</h1>
              </NavLink>
            </div>
            <div className="py-5 font-medium">
              <h1 className="text-[0.8rem]">REALTORS MANAGEMENT</h1>
              <div className="mt-4  text-[black] px-5">
                <NavLink to="/admin/allrealtors">
                <h1 className='mt-7'><span ><RiUserLine className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>All Realtors</h1>
                </NavLink>
                <NavLink to="/admin/addrealtor">
                <h1 className='mt-7'><span ><BiUserPlus className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Add a Realtor</h1>
                </NavLink>
                <NavLink to="/admin/inspections">
                <h1 className='mt-7'><span ><PiWechatLogoLight className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Inspections</h1>
                </NavLink>
              </div>
            </div>
            <div className="py-5 font-medium">
              <h1 className="text-[0.8rem]">PROPERTY MANAGEMENT</h1>
              <div className="mt-4  text-[black] px-5">
                <NavLink to="/admin/allproperties">
                <h1 className='mt-7'><span ><IoHomeOutline  className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>All Properties</h1>
                </NavLink>
                <NavLink to="/admin/addproperties">
                <h1 className='mt-7'><span ><TbHomePlus className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Add property</h1>
                </NavLink>
                <NavLink to="/admin/files">
                <h1 className='mt-7'><span ><IoImageOutline className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Media Files</h1>
                </NavLink>
              </div>
            </div>
            <div className="py-5 font-bold">
              <h1 className="text-[0.8rem]">USER MANAGEMENT</h1>
              <div className="mt-4  text-[black] px-5">
                <NavLink to="/ui/alerts">
                <h1 className='mt-7'><span >< TbUsersGroup  className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>All Admin</h1>

                </NavLink>
                <h1 className='mt-9'><span >< IoSettingsOutline className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Settings</h1></div>
            </div>

          </div>     
          <div className="mt-20 p-4 rounded-lg bg-[#f3f3f3]">
            <div className="flex flex-col">
              <button type="button" className="py-3 w-full border border-[#E4E7EC] rounded-lg text-black font-semibold px-5"><span ><FaChevronLeft  className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Collapse</button>
              <button type="button" className="w-full py-3 mt-3  border bg-[#FFF5F5] rounded-lg border-[#F2BCBA] text-[#D42620] font-semibold"><span ><TbLogout2  className="inline-flex items-center mr-2 mb-1 text-[1.2rem]" /></span>Logout</button>
            </div>
          </div>   
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
