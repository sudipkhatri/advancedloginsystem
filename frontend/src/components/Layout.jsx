import Menu from "./Navbar/Menu";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container mx-auto">
        <Menu />
      </div>
      <div className="">{children}</div>
      {/* <div className="container mx-auto flex justify-center items-center min-h-[20vh]">
        <span>@2024 Security</span>
      </div> */}
    </div>
  );
};

export default Layout;
