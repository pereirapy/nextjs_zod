
import { getProperties } from "@/lib/services/property";
import ListPageContainer from "./list-property/list-container";

export default async function Home() {
  const {data, error} = await getProperties();

  return (
    <ListPageContainer data={data || []} error={error} />
  );
}
