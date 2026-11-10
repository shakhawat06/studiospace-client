import StudioDetails from "@/components/studio/StudioDetail";


type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const StudioDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/studio/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch studio details");
  }

  const studio = await res.json();

  return (
    <div>
      <StudioDetails studio={studio} />
    </div>
  );
};

export default StudioDetailPage;
