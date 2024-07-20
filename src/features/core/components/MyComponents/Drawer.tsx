import { Outlet } from "react-router-dom";
import Login from "./Login";
const Drawer = () => {
  const isAuth = false;
  return (
    <>
      <div
        className={`fixed ${
          isAuth ? "left-0" : "right-0"
        } top-0 w-72 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform`}>
        <a
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-800">
          <h2 className="font-bold text-black text-2xl bg-[#3ba6ff] px-2">
            ATHENEA
          </h2>
        </a>
        <ul className="mt-4">
          {!isAuth ? (
            <Login />
          ) : (
            <>
              <span className="text-gray-400 font-bold">GESTIÓN DE SOCIOS</span>
              <li className="mb-1 group">
                <a
                  href=""
                  className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                  <i className="ri-home-2-line mr-3 text-lg"></i>
                  <span className="text-sm">CREAR SOCIO</span>
                </a>
              </li>
              <li className="mb-1 group">
                <a
                  href=""
                  className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                  <i className="bx bx-user mr-3 text-lg"></i>
                  <span className="text-sm">BUSCAR SOCIO</span>
                  <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                </a>
                {/* <ul className="pl-7 mt-2 group-[.selected]:block">
              <li className="mb-4">
              <a
              href=""
              className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">
              All
              </a>
              </li>
              <li className="mb-4">
              <a
              href=""
              className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">
              Roles
              </a>
              </li>
              </ul> */}
              </li>
              <li className="mb-1 group">
                <a
                  href=""
                  className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                  <i className="bx bx-list-ul mr-3 text-lg"></i>
                  <span className="text-sm">SOCIOS SIN PAGAR</span>
                </a>
              </li>
              <span className="text-gray-400 font-bold">PDFs</span>
              <li className="mb-1 group">
                <a
                  href=""
                  className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                  <i className="bx bx-archive mr-3 text-lg"></i>
                  <span className="text-sm">SOCIOS BANCO</span>
                </a>
              </li>
              <span className="text-gray-400 font-bold">CONFIGURAR</span>
              <li className="mb-1 group">
                <a
                  href=""
                  className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                  <i className="bx bx-archive mr-3 text-lg"></i>
                  <span className="text-sm">FECHAS DE EVENTOS</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
      <Outlet />
    </>
  );
};

export default Drawer;
