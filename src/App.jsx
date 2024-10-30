function App() {
  return (
    <>
      <div className="bg-[#30694B] h-screen w-screen">
        <div className="w-full h-[40%] flex justify-center items-center">
          <div className="w-64 h-64 overflow-hidden rounded-4xl">
            <img
              src="./src/Megan.jpg"
              alt=""
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-[60%] flex justify-center text-justify p-4 text-2xl text-gray-900">
          <p className="leading-snug ">
            Step into a world that s just for you a place to capture all the
            little things that make you so extraordinary. This page is a tribute
            to your smile, your kindness, and the joy you bring into my life
            every day. Every detail here reflects just a piece of the love and
            admiration I have for you, creating a little reminder of how
            grateful I am for you, today and always.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
