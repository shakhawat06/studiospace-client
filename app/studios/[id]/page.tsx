import StudioDetails from "@/components/studio/StudioDetail";
import { getTokenFromServer } from "@/lib/getTokenFromServer";
import { notFound } from "next/navigation";


type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const StudioDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const token  = await getTokenFromServer()
  const res = await fetch(`http://localhost:8000/studio/${id}`, {
    headers: { authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) notFound()

  const studio = await res.json();

  return (
    <div>
      <StudioDetails studio={studio} />
    </div>
  );
};

export default StudioDetailPage;
