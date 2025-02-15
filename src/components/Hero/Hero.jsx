function Hero() {
  return (
    <section class="bg-center bg-no-repeat bg-[url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/bf/5d/0c/pushkar-lake.jpg')] bg-gray-600 bg-blend-multiply w-full max-w-full">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Better Trips, a new
          </span>{" "}
          (Experience)
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 p-4">
          Here at Vistaraft we focus on making the most memorable trip for You.
        </p>

        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Start Booking
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Discover 
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
