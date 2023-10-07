import Head from "next/head";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/suresh.premprakashi.5",
    icon: "facebook",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@suresh47720",
    icon: "youtube",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/chotudib",
    icon: "instagram",
  },
  {
    name: "Snapchat",
    url: "https://www.snapchat.com/add/chotusuresh",
    icon: "snapchat",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Suresh Premprakashi`}</title>
        <link
          rel="canonical"
          href={`https://suresh-premprakashi.vercel.app/`}
        />
        <meta
          name="description"
          content="Suresh Premprakashi | ॐ श्री सतनाम साक्षी"
        />
        <meta
          name="keywords"
          content="Suresh Premprakashi, Satnam sakhi, ॐ श्री सतनाम साक्षी"
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center main-bg-wrapper pb-10 xl:pb-0`}
      >
        <div className="grid grid-cols-2 px-6 md:px-10 xl:px-24 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col gap-4 md:gap-6 justify-center xl:col-span-1 col-span-full xl:order-0 order-1 xl:items-start items-center">
            <h1 className="text-xl md:text-4xl xl:text-6xl font-semibold text-[#F0F0F0] xl:block hidden">
              ॐ श्री सतनाम साक्षी
            </h1>

            <h3 className="text-lg md:text-xl xl:text-3xl font-semibold text-[#E5D283] xl:text-left text-center xl:block hidden">
              Connect with us on social media <br />{" "}
              <span className="text-[#F0F0F0]">(Suresh Premprakashi)</span>
            </h3>

            <div className="flex flex-col gap-4 xl:gap-6 xl:max-w-xl w-full">
              {socialLinks.map((link) => (
                <div
                  className="flex border-1 border-[#12486B] shadow-xl bg-white p-4 rounded-lg gap-4 items-center cursor-pointer"
                  onClick={() => {
                    window.open(link.url, "_blank");
                  }}
                >
                  <img
                    src={`${link.icon}.png`}
                    className="w-8 shadow-xl"
                    alt={link.name}
                  />
                  <div className="flex flex-col w-full">
                    <h5 className="border-b pb-2 text-base">{link.name}</h5>
                    <p className="pt-2 text-gray-500 text-sm break-all	">
                      {link.url}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col py-6 md:p-10 items-center justify-center xl:col-span-1 col-span-full xl:order-1 order-0">
            <img
              src="/profile-picture.jpeg"
              className="xl:w-full rounded-full shadow-xl w-4/5 max-w-lg border-2 border-[#E5D283]"
            />

            <h1 className="text-xl md:text-4xl xl:text-6xl font-semibold text-[#F0F0F0] xl:hidden block mt-4">
              ॐ श्री सतनाम साक्षी
            </h1>

            <h3 className="text-lg md:text-xl xl:text-3xl font-semibold text-[#E5D283] xl:text-left text-center xl:hidden block">
              Connect with us on social media <br />{" "}
              <span className="text-[#F0F0F0]">(Suresh Premprakashi)</span>
            </h3>

            <div className="flex mt-6 gap-4 w-full flex-wrap md:flex-nowrap">
              <div
                className="bg-[#F0F0F0] px-4 py-4 cursor-pointer flex items-center rounded-lg gap-2 w-full md:text-lg text-xs"
                onClick={() => {
                  window.location.href = `tel:+919314024850`;
                }}
              >
                <img
                  src={`/telephone.png`}
                  className="w-6 shadow-xl"
                  alt="phone"
                />
                Call
              </div>
              <div
                className="bg-[#F0F0F0] px-4 py-4 cursor-pointer flex items-center rounded-lg gap-2 w-full md:text-lg text-xs"
                onClick={() => {
                  window.open("https://wa.link/jlezy3", "_blank");
                }}
              >
                <img
                  src={`/whatsapp.png`}
                  className="w-6 shadow-xl"
                  alt="whatsapp"
                />
                Whatsapp
              </div>
              <div
                className="bg-[#F0F0F0] px-4 py-4 cursor-pointer flex items-center rounded-lg gap-2 w-full md:text-lg text-xs"
                onClick={() => {
                  window.location.href = `mailto:Chotudib@gmail.com`;
                }}
              >
                <img src={`/gmail.png`} className="w-6 shadow-xl" alt="email" />
                Email
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
