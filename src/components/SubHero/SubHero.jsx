function SubHero() {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between bg-transparent p-10 rounded-lg shadow-lg w-screen max-w-6xl mx-auto">
        {/* Left Section - Images */}
        <div className="relative flex w-full lg:w-1/2 h-96 justify-center">
          {/* Large Image */}
          <img
            src="https://imgs.search.brave.com/dofW4pSwBI5GX9t6vUa-copD-Fjb4vqSTdt_FqcnYcM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstYmVhY2gt/bzg1MHpqMmEwZDd0/YjV5OC5qcGc"
            alt="Hiking"
            className="w-60 h-96 rounded-[40px] object-cover"
          />
          {/* Overlapping Images */}
          <img
            src="https://imgs.search.brave.com/dofW4pSwBI5GX9t6vUa-copD-Fjb4vqSTdt_FqcnYcM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstYmVhY2gt/bzg1MHpqMmEwZDd0/YjV5OC5qcGc"
            alt="Bridge"
            className="absolute w-44 h-56 rounded-[35px] object-cover top-10 left-40 lg:left-32 shadow-lg border-4 border-white"
          />
          <img
            src="https://imgs.search.brave.com/dofW4pSwBI5GX9t6vUa-copD-Fjb4vqSTdt_FqcnYcM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstYmVhY2gt/bzg1MHpqMmEwZDd0/YjV5OC5qcGc"
            alt="Venice"
            className="absolute w-40 h-48 rounded-[30px] object-cover bottom-0 left-20 lg:left-14 shadow-lg border-4 border-white"
          />
        </div>
  
        {/* Right Section - Text Content */}
        <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left mt-10 lg:mt-0">
          <h4 className="text-green-600 font-semibold text-lg">Travelers Point</h4>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2 leading-tight">
            We help to find your dream place
          </h2>
          <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
          </p>
  
          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 mt-6 text-center">
            <div>
              <span className="text-green-700 font-bold text-xl lg:text-2xl">100+</span>
              <p className="text-gray-500 text-sm lg:text-lg">Holiday Package</p>
            </div>
            <div>
              <span className="text-green-700 font-bold text-xl lg:text-2xl">172</span>
              <p className="text-gray-500 text-sm lg:text-lg">Hotels</p>
            </div>
            <div>
              <span className="text-green-700 font-bold text-xl lg:text-2xl">68</span>
              <p className="text-gray-500 text-sm lg:text-lg">Elite Transportation</p>
            </div>
            <div>
              <span className="text-green-700 font-bold text-xl lg:text-2xl">32M+</span>
              <p className="text-gray-500 text-sm lg:text-lg">we help to find your dream place</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default SubHero;