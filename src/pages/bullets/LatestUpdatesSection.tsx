import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LatestUpdatesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto md:gap-20 pt-15 ">
      <div>
        <Card className="max-w-2xl mb-4  transition-all duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle>2026 Admission Virtual Information Sessions</CardTitle>
            <CardDescription>
              Registration Now Open for Virtual Visit 1
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div>
        <Card className="max-w-2xl mb-4  transition-all duration-300 hover:scale-105">
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
    </div>
  );
};

export default LatestUpdatesSection;
