

const HomeBanner = () => {
    return (

      
      <section
        className="relative bg-[url(https://i.ibb.co/wydCD5N/Untitled-design-12.png)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white sm:bg-transparent sm:from-white sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>
      
        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
            Elevate Your Teams 
      
              <strong className="block font-extrabold text-violet-600"> Productivity </strong>
            </h1>
      
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Streamlined task management for seamless collaboration, enhanced organization, and elevated productivity.
            </p>
      
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-violet-600 px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Let Explore
              </a>
      
           
            </div>
          </div>
        </div>
      </section>
    );
};

export default HomeBanner;