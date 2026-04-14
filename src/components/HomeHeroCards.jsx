import data from "@/data/data.json";
import CardUi from "@/components/CardUi";

const HomeHeroCards = () => {
  const friends = data.dashboard.friends;

  return (
    <div className="max-w-11/12 md:max-w-10/12 lg:max-w-8/12 mx-auto mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {friends.map((friend) => (
          <CardUi key={friend.id} friend={friend}></CardUi>
        ))}
      </div>
    </div>
  );
};

export default HomeHeroCards;
