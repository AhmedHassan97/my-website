const Layout = (props) => {
  return (
    <div
      className={`px-4 sm:px-6 lg:px-8 mx-auto mt-11 pt-20 text-base-200-content flex flex-col text-base-content font-medium text-xl ${props.backgroundColor} transition  ease-linear md:min-h-screen pb-8`}
      style={{ fontFamily: "poppins" }}
      id={props.sectionId.toString()}
    >
      {props.children}
    </div>
  );
};
export default Layout;
