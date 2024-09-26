function Dashboard() {
  return (
    <>
      <div className="flex justify-between mx-auto mt-4">
        <div className="bg-white border-[#E4E4E7] rounded-md w-3/6 h-1/5 m-4 shadow-md">
          <h1 className="text-start text-lg p-4">Total API Calls</h1>
          <p className="text-start font-bold p-4 text-xl">1,457,886</p>
        </div>
        <div className="bg-white border-[#E4E4E7] rounded-md w-3/6 h-1/5 m-4 shadow-md">
          <h1 className="text-start text-lg p-4 nowrap">Avg. Response Time</h1>
          <p className="text-start font-bold p-4 text-xl">134ms</p>{" "}
        </div>
      </div>

      <div className="bg-white border-[#E4E4E7] rounded-md h-1/2 ml-4 mr-4 my-10 shadow-md">
        <h1 className="text-start text-xl p-6 font-bold">
          API Usage Over Time
        </h1>
        <h2 className="pl-6 text-lg font-light">
          Number of API calls per day over the last week
        </h2>
      </div>

      <div className="bg-white border-[#E4E4E7] rounded-md h-1/2 ml-4 mr-4 mt-10 shadow-md ">
        <h1 className="text-start text-xl p-6 font-bold">Recent API Calls</h1>
        <h2 className="pl-6 text-lg font-light">
          The most recent API calls made to your endpoints
        </h2>
      </div>
    </>
  );
}

export default Dashboard;
