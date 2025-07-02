function Button({ variant = 'primary', children, ...props }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };
  return (
    <button {...props} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
<<<<<<< HEAD
export default Button;
=======
export default Button;
>>>>>>> 747a97dc626f52151b859af3011a0cbbbf7d0fb0
