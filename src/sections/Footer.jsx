// import { mySocials } from "../constants";
// const Footer = () => {
//   return (
//     <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
//       <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
//       <div className="flex gap-2">
//         <p>Terms & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>

//       </div>
//       <div className="flex gap-3">
//         {mySocials.map((social, index) => (
//           <a href={social.href} key={index}>
//             <img src={social.icon} className="w-5 h-5" alt={social.name} />
//           </a>
//         ))}
//       </div>
//       <p>© 2025 Ambar. All rights reserved.</p>
//     </section>
//   );
// };

// export default Footer;

import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-center md:justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Terms & Privacy - Hidden on mobile */}
      <div className="hidden md:flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Social Icons - Centered on mobile, middle on desktop */}
      <div className="flex gap-3 justify-center w-full md:w-auto">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>

      {/* Copyright - Hidden on mobile */}
      <p className="hidden md:block">© 2025 Ambar. All rights reserved.</p>
    </section>
  );
};

export default Footer;
