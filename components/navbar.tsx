// import Link from "next/link";

// import MainNav from "@/components/main-nav";
// import Container from "@/components/ui/container";
// import NavbarActions from "@/components/navbar-actions";
// import getCategories from "@/actions/get-categories";
// import { MainNavStatic } from "@/components/main-nav-static";
// import Logo from "./logo";
// import UserMenu from "./user-menu";

// const Navbar = async () => {
//   const categories = await getCategories();

//   return (
//     <div className="border-b">
//       <Container>
//         {/* Use flex-col and sm:flex-row to break the elements into multiple row when the screen size is small */}
//         {/* Adjust h-auto to dynamically adjust the nav-bar height based on the number of cols required */}
//         <div className="relative flex-col items-center justify-between w-full px-4 sm:px-6 lg:px-8 flex sm:flex-row sm:col-auto h-auto">
//           <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
//             {/* <p className="font-bold text-xl">Home</p> */}
//             <Logo />
//           </Link>
//           <MainNavStatic className="mx-6" />
//           <MainNav data={categories}/>
//           <UserMenu />
//           {/* <NavbarActions /> */}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;

// import Link from "next/link";

// import MainNav from "@/components/main-nav";
// import Container from "@/components/ui/container";
// import NavbarActions from "@/components/navbar-actions";
// import getCategories from "@/actions/get-categories";
// import { MainNavStatic } from "@/components/main-nav-static";
// import Logo from "./logo";
// import UserMenu from "./user-menu";

// const Navbar = async () => {
//   const categories = await getCategories();

//   return (
//     <div className="border-b fixed w-full bg-white z-10 shadow-sm">
//       <div className="
//       py-1
//       border-b-[1px]"
//       >
//         <Container>
//           {/* Use flex-col and sm:flex-row to break the elements into multiple row when the screen size is small */}
//           {/* Adjust h-auto to dynamically adjust the nav-bar height based on the number of cols required */}
//           <div className="flex flex-col sm:flex-row h-auto items-center justify-between gap-3 md:gap-0">
//             <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
//               {/* <p className="font-bold text-xl">Home</p> */}
//               <Logo />
//             </Link>
//             <MainNavStatic className="" />
//             <MainNav data={categories} />
//             <UserMenu />
//             {/* <NavbarActions /> */}
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// V3


import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import { MainNavStatic } from "@/components/main-nav-static";
import Logo from "./logo";
import UserMenu from "./user-menu";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        {/* Use flex-col and sm:flex-row to break the elements into multiple rows when the screen size is small */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-8 h-auto">
          <div className="sm:flex items-center">
            <Link href="/" className="ml-4 sm:ml-0 flex gap-x-2 items-center">
              <Logo />
            </Link>
            <MainNavStatic className="mx-6" />
          </div>
          <MainNav data={categories} />
          <UserMenu />
          {/* <NavbarActions /> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
