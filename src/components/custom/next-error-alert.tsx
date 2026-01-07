import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function NextErrorAlert({
  title,
  description,
}: {
  title?: string;
  description: string | React.ReactNode;
}) {
  return (
    <Alert className="bg-destructive/5 text-destructive border-destructive/20">
      <AlertCircleIcon />
      <AlertTitle>{title || "Error"}</AlertTitle>
      <AlertDescription className="text-destructive/80">
        {description}
      </AlertDescription>
    </Alert>
  );
}
