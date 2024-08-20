const Button = ({ label, iconURL }) => {
    return (
      <button className="flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:scale-110 transform transition duration-300">
        {label}
        {iconURL && <img 
          src={iconURL} 
          alt="icon" 
          className="ml-2 rounded-full w-5 h-5"
        />}
      </button>
    );
  }
  
  export default Button;
  