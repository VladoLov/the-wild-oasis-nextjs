import CabinView from "@/app/_components/CabinView";
import { getCabin, getCabins } from "@/app/_lib/data-service";

/* export const metadata = {
  title: "Cabin",
}; */

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <CabinView cabin={cabin} />
    </div>
  );
}