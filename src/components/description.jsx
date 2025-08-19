export const Description = (text) => {
  return (
    <div className="w-80 h-80 bg-white text-black ">
      <p className="opacity hover:opacity-100 mt-10 text-2xl font-bold ml-20">
        {text.title}
      </p>
      <p className="hover:-translate-y-3 mt-10">{text.lines}</p>
    </div>
  );
};
