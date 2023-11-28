import SideMenu from "./SideMenu";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <header className="w-full bg-white p-2 rounded-lg flex items-center justify-between">
      <section className="flex-1 flex items-center justify-start space-x-3">
        <div className="relative w-12 h-12">
          <img
            className="absolute w-full h-full object-cover"
            src="/logo.png"
            alt="TeachMe Logo"
          />
        </div>
        <h1 className="font-bold text-xl">Teach Me.Inc</h1>
      </section>
      <p className="flex-1 text-2xl font-cairo font-black">Home Page</p>
      <SideMenu />
    </header>
  );
};

export default Header;
