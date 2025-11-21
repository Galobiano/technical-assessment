import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LatestUpdatesSection = () => {
  return (
    <div className="w-full justify-center ">
      <Card className="max-w-lg mb-4">
        <CardHeader>
          <CardTitle>2026 Admission Virtual Information Sessions</CardTitle>
          <CardDescription>
            Registration Now Open for Virtual Visit 1
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="max-w-lg mb-4">
        <CardHeader>
          <CardTitle>
            See the Fall 2025 Visiting Artist lecture schedule here (in
            progress)
          </CardTitle>
          <CardDescription>
            Fall 2025 exhibitions + schedule here
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default LatestUpdatesSection;
