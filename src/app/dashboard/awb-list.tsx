import Link from "next/link";
import { getAwbs } from "./actions";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

export default async function AwbList() {
  const awbs = await getAwbs();

  if (awbs.length === 0) {
    return (
      <div className="text-center py-6">
        <Package className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No AWBs</h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by adding a new AWB number.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {awbs.map((awb) => (
        <li
          key={awb}
          className="flex items-center justify-between p-2 bg-muted rounded-md"
        >
          <span className="font-medium">{awb}</span>
          <Link href={`/tracking/${awb}`}>
            <Button variant="outline" size="sm">
              Track
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
