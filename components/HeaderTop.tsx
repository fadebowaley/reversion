import Image from "next/image";
import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="bg-[var(--bg-1)] border-b lg:border-b-0">
      <div className="container mx-auto flex justify-between py-3 lg:py-5 gap-1">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo.png"
            className="self-center hidden xl:block"
            width={172}
            height={48}
            alt="logo"
            priority
          />
          <Image
            src="/img/favicon.png"
            className="self-center xl:hidden w-[40px] h-[40px] ml-3"
            width={56}
            height={40}
            alt="logo"
            priority
          />
        </Link>
        <div className="flex divide-x-[1px]">
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-phone-volume bg-primary text-white text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Free Call</span>
              <Link href="tel:4065550120" className="text-base">
                (234)90122177495
              </Link>
            </div>
          </div>
          {/* <span className='inline-block h-full w-[1px] bg-[var(--border)]'></span> */}
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-envelope-open bg-[var(--secondary)] text-[var(--neutral-700)] text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Online Support</span>
              <Link
                href="mailto:hello@rccghospitality.com"
                className="text-base">
                hello@rccghospitality.com
              </Link>
            </div>
          </div>
          {/* <span className='inline-block h-full w-[1px] bg-[var(--border)]'></span> */}
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-map-marker-alt bg-[var(--tertiary)] text-[var(--neutral-700)] text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Our Location</span>
              <span className="text-base">Km 46 Lagos Ibadan Expressway.</span>
            </div>
          </div>
        </div>
        <Link href="/sign-in" className="btn-primary-lg hidden md:block">
          Login/Register
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
