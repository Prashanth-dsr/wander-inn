import NavigationHub from "@/components/nav-hub/navigation-hub";
import SearchPanel from "@/components/search-hub/search-panel";
import WanderContextComponent from "@/context/wander-context";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <WanderContextComponent>
      <NavigationHub session={session} />
      <SearchPanel />
    </WanderContextComponent>
  );
}
