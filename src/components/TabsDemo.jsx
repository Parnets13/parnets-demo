// "use client";

// import React from "react";
// import { Tabs } from "./ui/tabs";
// import web from './../assets/web.jpg';



// export function TabsDemo() {
//   const tabs = [
//     {
//       title: "Web Development",
//       value: "Web Development",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Web Development</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Mobile App Development",
//       value: "Mobile App Development",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Mobile App Development</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Digital Marketing",
//       value: "Digital Marketing",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Digital Marketing</p>
//           <DummyContent />
//         </div>
//       ),
//     }
//   ];

//   return (
//     <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
//       <Tabs tabs={tabs} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <img
//       src={web}
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };


"use client";

import React from "react";
import { Tabs } from "./ui/tabs";
import web from "./../assets/web.jpg";
import mobile from "./../assets/app.jpg";
import marketing from "./../assets/marketing.jpg";

export function TabsDemo() {
  const tabs = [
    {
      title: "Web Development",
      value: "web-development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h3>Web Development</h3>
          <p className="text-md">Create stunning and responsive websites tailored to your needs.</p>
          <DummyContent image={web} alt="Web Development Image" />
        </div>
      ),
    },
    {
      title: "Mobile App Development",
      value: "mobile-app-development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#8FBC8F]">
          <h3>Mobile App Development</h3>
          <p className="text-md">Develop intuitive and feature-rich mobile applications for all platforms.</p>
          <DummyContent image={mobile} alt="Mobile App Development Image" />
        </div>
      ),
    },
    {
      title: "Digital Marketing",
      value: "digital-marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#363090]">
          <h3>Digital Marketing</h3>
          <p className="text-md">Boost your online presence with our comprehensive digital marketing strategies.</p>
          <DummyContent image={marketing} alt="Digital Marketing Image" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
