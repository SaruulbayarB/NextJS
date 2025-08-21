import { Task } from "@/components";
const Home = () => {
  return (
    <div className="gap-3 mt-7">
      <div className="w-500 h-30 flex gap-5">
        <div className="flex justify-start">Simple Blog</div>
        <span
          className="ml-175
        "
        >
          Home
        </span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <header className="w-200 h-20 ml-100 text-5xl">
        <h3>Welcome to Simple Blog</h3>
      </header>
      <div className="flex gap-3">
        <Header img="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_484,c_limit/64265cce-0cfc-4309-aa45-33835124eeaa/the-best-nike-high-top-sneakers-you-can-buy-right-now-articles-ogc.jpg"></Header>

        <Header img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZWgrazZ4zTD_hZdTv7HKlgigAp2saUZFQg&s"></Header>
        <Header img="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/34490c6e-0488-4eb3-ad65-28d3d3dbd866/W+NIKE+AIR+MAX+INTRLK+LITE.png"></Header>
      </div>
      <div className="flex gap-3 mt-5">
        <Description
          lines="Why Beads?
        They’re soft, they’re bouncy, and they form the core of an innovative new cushioning system designed to help make all the ways you move feel easy—even running."
          title="Nike Running 69N"
        ></Description>

        <Description
          lines="Cooler 99u5?
        new cushioning system designed to help make all the ways you move feel easy—even running."
          title="Nike Gym Killer"
        ></Description>

        <Description
          lines="Athelete 888
        new cushioning system designed to help make all the ways you move feel easy—even running."
          title="Basketball 34S"
        ></Description>
      </div>
      <div>
        <button className="w-50 h-10 bg-indigo-500 rounded-full mt-3 ml-5 hover:bg-indigo-300">
          Read more
        </button>
        <button className="w-50 h-10 bg-indigo-500 rounded-full mt-3 ml-40  hover:bg-indigo-300">
          Read more
        </button>
        <button className="w-50 h-10 bg-indigo-500 rounded-full mt-3 ml-30  hover:bg-indigo-300">
          Read more
        </button>
      </div>
    </div>
    //     <div className="flex flex-col justify-center w-120 h-150 bg-gray-800 rounded-3xl p-8 ring-1 ring-white/30 gap-4 ml-200 mt-70">
    //       <p class="text-indigo-400 font-semibold text-1xl">Enterprice</p>
    //       <div>
    //         <span class="text-white text-5xl">$99</span>
    //         <span class="text-gray-300">/month</span>
    //       </div>
    //       <p class="text-gray-300">Dedicated support and infrastructure for your</p>
    //       <p class="text-gray-300">company.</p>
    //       <div className="flex flex-col gap-4">
    //         {[
    //           "Unlimited Products",
    //           "Unlimited Subscribers",
    //           "Marketing automations",
    //           "Custom Integrations",
    //           "Advanced Technology",
    //         ].map((el, index) => (
    //           <div className="flex gap-4 items-center" key={index}>
    //             <svg
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //               aria-hidden="true"
    //               className="h-6 w-5 flex-none text-indigo-400"
    //             >
    //               <path
    //                 d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
    //                 clipRule="evenodd"
    //                 fillRule="evenodd"
    //               />
    //             </svg>
    //             <p className="text-gray-700">{el}</p>
    //           </div>
    //         ))}
    //       </div>

    //       <button
    //         class="bg-indigo-500 hover:bg-indigo-400 w-100 h-10 rounded-[8px] font-semibold mt-8"
    //         rounded-sm
    //       >
    //         Get started today
    //       </button>
    //       {["Name", "Site"].map((el, index) => {
    //         return (
    //           <div
    //             key={index}
    //             className="border-dashed border-6 w-100 h-10 bg-amber-400"
    //           >
    //             {el}
    //           </div>

    //           //this one is quite useful to print multiple times using the key and index
    //         );
    //       })}
    //     </div>
  );
};

export default Home;
