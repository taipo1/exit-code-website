const InputError = ({ error }: { error: string }) => {
  return <div className="text-sm text-red-300">{error}</div>;
};

export default InputError;
