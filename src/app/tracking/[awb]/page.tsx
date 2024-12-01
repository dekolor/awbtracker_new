import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getTrackingInfo(awb: string) {
  // In a real-world scenario, you'd call an actual shipping API here
  // This is a mock implementation
  const statuses = [
    { date: "2023-05-01", status: "Order Placed", location: "Online" },
    {
      date: "2023-05-02",
      status: "Package Received",
      location: "Sorting Facility, New York",
    },
    { date: "2023-05-03", status: "In Transit", location: "Chicago" },
    { date: "2023-05-04", status: "Out for Delivery", location: "Los Angeles" },
    { date: "2023-05-05", status: "Delivered", location: "Los Angeles" },
  ];

  return {
    awb,
    statuses: statuses.slice(
      0,
      Math.floor(Math.random() * statuses.length) + 1
    ),
  };
}

export default async function TrackingPage({
  params,
}: {
  params: { awb: string };
}) {
  const trackingInfo = await getTrackingInfo(params.awb);

  if (!trackingInfo) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tracking Information</h1>
      <Card>
        <CardHeader>
          <CardTitle>AWB: {trackingInfo.awb}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {trackingInfo.statuses.map((status, index) => (
              <li key={index} className="border-l-2 border-primary pl-4 pb-4">
                <div className="font-semibold">{status.status}</div>
                <div className="text-sm text-muted-foreground">
                  {status.date}
                </div>
                <div className="text-sm text-muted-foreground">
                  {status.location}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
