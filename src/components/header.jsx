export const Header = (photo) => {
  return (
    <div
      className="w-80 h-80 bg-indigo-300 text-black bg-cover hover:opacity-50 hover:-rotate-1"
      style={{ backgroundImage: `url(${photo.img})` }}
    ></div>
  );
};
