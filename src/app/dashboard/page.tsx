import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AwbForm from "./awb-form";
import AwbList from "./awb-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New AWB</CardTitle>
          </CardHeader>
          <CardContent>
            <AwbForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your AWBs</CardTitle>
          </CardHeader>
          <CardContent>
            <AwbList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
