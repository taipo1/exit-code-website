const Container = ({ children, className }) => (
  <div className="flex w-full justify-center">
    <div
      className={`${className} container grid max-w-[1240px] grid-cols-12 gap-5`}
    >
      {children}
    </div>
  </div>
);

export default Container;
