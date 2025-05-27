type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => (
  <div className="flex w-full justify-center">
    <div
      className={`${className} container grid max-w-[1440px] grid-cols-6 gap-x-5 max-md:px-4 md:grid-cols-12`}
    >
      {children}
    </div>
  </div>
);

export default Container;
