import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container mx-auto">
        <Header />
      </div>
      <div className="container mx-auto">{children}</div>
      {/* <div className="container mx-auto">
            <h2>Footer</h2>
        </div> */}
    </div>
  );
};

export default Layout;
