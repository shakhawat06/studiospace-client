import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <LoaderCircle className="h-10 w-10 animate-spin text-[#E47131]" />

      <p className="text-sm font-medium text-muted-foreground">
        Preparing your creative space...
      </p>
    </div>
  );
}