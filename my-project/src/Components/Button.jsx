const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${backgroundColor || "bg-coral-red"} 
        ${textColor || "text-white"} 
        ${borderColor || "border-coral-red"} 
        rounded-full hover:scale-110 transform transition duration-300`}
    >
      {label}
      {iconURL && (
        <img 
          src={iconURL} 
          alt="icon" 
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button;
