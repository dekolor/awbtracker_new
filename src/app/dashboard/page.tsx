import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AwbForm from "./awb-form";
import AwbList from "./awb-list";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AWB Tracking Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New AWB</h2>
          <AwbForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your AWBs</h2>
          <AwbList />
        </div>
      </div>
    </div>
  );
}
