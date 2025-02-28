import { FaUsers, FaShoppingCart, FaBox } from "react-icons/fa";

const Counter = () => {
  const counters = [
    { icon: <FaUsers size={24} />, title: "Users", subtitle: "1.2K" },
    { icon: <FaShoppingCart size={24} />, title: "Orders", subtitle: "320" },
    { icon: <FaBox size={24} />, title: "Products", subtitle: "58" },
  ];

  return (
    <div className="py-8 -mt-16 shadow  max-w-screen-lg mx-auto bg-blue-500 text-white p-6 rounded-2xl flex sm:flex-row flex-col">
      <div className="bg-[#ffffff37] -ms-6 px-4 py-8 uppercase font-semibold">Always happy!</div>

      {/* Right Counter Section */}
      <div className="flex flex-col md:flex-row justify-evenly  sm:items-center gap-4 w-full ">
        {counters.map((item, index) => (
          <div
            key={index}
            className=" text-black p-4 flex items-center rounded-xl  w-32"
          >
            <div className="mr-3 text-blue-500 p-4 bg-white rounded">{item.icon}</div>
            <div>
              <div className="text-xl font-bold text-white">{item.title}</div>
              <div className="text-lg text-gray-200">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
