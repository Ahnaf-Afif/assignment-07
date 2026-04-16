import data from "@/data/data.json";
import Leftside from "@/components/Details/Leftside";

const Page = async ({ params }) => {
  const { id } = await params;

  const friend = data.dashboard.friends.find((item) => String(item.id) === id);

  if (!friend) {
    return <div>Friend not found</div>;
  }

  return <Leftside friend={friend} />;
};

export default Page;
