const Header = (props) => {
  return (
    <div className="lg:text-center">
      <p
        className=" mt-2 leading-8 font-extrabold tracking-tight text-6xl"
        style={{ fontFamily: "IBM Plex Mono,monospace" }}
      >
        {props.sectionName}
      </p>
      <p className="mt-4 max-w-2xl text-xl lg:mx-auto font-semibold text-primary">
        {props.quote}
      </p>
      <p className="mt-4 max-w-2xl text-xl lg:mx-auto font-semibold text-primary">
        {props.author}
      </p>
    </div>
  );
};

export default Header;
