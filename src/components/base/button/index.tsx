type Props ={
  title: string;
  onClick? (): void;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  className?: string;
  hiarchy: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}


const Button = ({title, onClick, disabled, type, hiarchy}: Props) => {

  const btnStyle = {
    primary: "bg-primary-300 hover:bg-primary-400 text-white",
    secondary: "bg-secondary-300 hover:bg-secondary-400 text-white",
    tertiary: "bg-tertiary-300 hover:bg-tertiary-400 text-white",
  }

  return (
        <button className={`${btnStyle[hiarchy]} font-bold py-2 px-4 rounded`} onClick={onClick} disabled={disabled} type={type}>
          {title}
        </button>
      )
}

export default Button;