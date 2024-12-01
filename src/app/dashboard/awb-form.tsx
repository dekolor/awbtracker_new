"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addAwb } from "./actions";
import { toast } from "@/components/ui/use-toast";

export default function AwbForm() {
  const [awbNumber, setAwbNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (awbNumber) {
      setIsLoading(true);
      try {
        await addAwb(awbNumber);
        setAwbNumber("");
        router.refresh();
        toast({
          title: "AWB Added",
          description: `AWB number ${awbNumber} has been added successfully.`,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to add AWB. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        value={awbNumber}
        onChange={(e) => setAwbNumber(e.target.value)}
        placeholder="Enter AWB number"
        required
        className="flex-grow"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}
