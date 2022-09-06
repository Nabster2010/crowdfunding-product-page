interface StatsCardProps {
  totalBacked: number;
  totalBackers: number;
}

const StatsCard = ({ totalBacked, totalBackers }: StatsCardProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className=" bg-white rounded-lg text-center p-10 w-4/5 lg:w-3/5 -mt-24 shadow-md ">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center w-full md:divide-x  md:divide-y-0 divide-y ">
        <div className=" md:w-1/3 md:text-left pb-4 md:pb-0 ">
          <h1 className="text-4xl font-extrabold">
            {formatter.format(totalBacked)}
          </h1>
          <p className="text-Darkgray mt-2">of $100,000 backed</p>
        </div>
        <div className=" md:w-1/3 md:text-left md:pl-8 py-4 md:py-0">
          <h1 className="text-4xl font-extrabold">{totalBackers}</h1>
          <p className="text-Darkgray mt-2">total backers</p>
        </div>
        <div className=" md:w-1/3 md:text-left md:pl-8 pt-4 md:pt-0">
          <h1 className="text-4xl font-extrabold">56</h1>
          <p className="text-Darkgray mt-2">days left</p>
        </div>
      </div>
      <div className=" w-full mt-16 h-4 bg-gray-200 rounded-full ">
        <div
          className="h-4 bg-Moderatecyan rounded-full"
          style={{ width: " 45%" }}
        ></div>
      </div>
    </div>
  );
};

export default StatsCard;
