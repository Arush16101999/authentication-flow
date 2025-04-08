export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="w-full bg-[#5C53BC] text-white py-2 px-4 rounded hover:bg-[#7A70E6] transition"
  >
    {children}
  </button>
);
