const HomeHero = () => {
  return (
    <div>
      <div className="grid grid-col justify-items-center mt-10 gap-3 max-w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-center">
          Friends to keep close in your life
        </h1>
        <p className="text-center text-base opacity-80 md:max-w-2xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn">+Add Friend</button>
      </div>

      <div className="mt-10 max-w-10/12 mx-auto flex gap-10 justify-center items-center flex-wrap">
        <div className="card w-35 bg-base-100 card-xs shadow-sm flex flex-col justify-center items-center text-center">
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">10</h2>
            <p className="">Total Friends</p>
          </div>
        </div>
        <div className="card w-35 bg-base-100 card-xs shadow-sm flex flex-col justify-center items-center text-center">
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">3</h2>
            <p className="">On Track</p>
          </div>
        </div>
        <div className="card w-35 bg-base-100 card-xs shadow-sm flex flex-col justify-center items-center text-center">
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">6</h2>
            <p className="">Need Attention</p>
          </div>
        </div>
        <div className="card w-35 bg-base-100 card-xs shadow-sm flex flex-col justify-center items-center text-center">
          <div className="card-body">
            <h2 className=" text-center text-2xl font-bold">12</h2>
            <p className="">Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
