const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div
      className="hidden lg:flex flex-col justify-center items-center w-full h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/images/signup.jpg')" }} // optional background image
    >
      {/* Dark bluish overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B1120]/90 via-[#111827]/90 to-[#0B1120]/90" />

      {/* 3x3 grid with bluish glowing tiles */}
      <div className="absolute top-1/4 grid grid-cols-3 gap-4 w-80">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-2xl bg-indigo-900/40 backdrop-blur-sm border border-indigo-700/20 shadow-lg shadow-indigo-900/30 ${
              i % 2 === 0 ? "animate-pulse" : "opacity-70"
            }`}
          />
        ))}
      </div>

      {/* Text overlay */}
      <div className="relative z-10 text-center text-gray-200 max-w-md px-6">
        <h2 className="text-3xl font-bold mb-3 drop-shadow-md">
          {title}
        </h2>
        <p className="text-gray-400 leading-relaxed text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
