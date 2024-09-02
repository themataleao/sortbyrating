"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function PlaceholderInput() {
  const [baseUrl, setBaseUrl] = useState("amazon.com");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onClick = () => {
    const link = `https://${baseUrl}/s?k=${search}&s=review-count-rank&tag=sortbyrating-20`;
    router.push(link);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between items-center px-4 py-4 md:px-16">
      <div className="w-full flex flex-col justify-center items-center gap-2 max-w-96">
        <div className="flex">
          <Label>Sort by ratings on</Label>
          <Input
            type="text"
            defaultValue={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            className="focus:outline-none focus:border-none focus-visible:ring-orange-400"
          ></Input>
        </div>
        <PlaceholdersAndVanishInput
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={onClick}
          placeholders={[
            "What are you searching for?",
            "smartphone",
            "laptop",
            "tablet",
            "vacuum cleaner",
            "air purifier",
            "refrigerator",
            "running shoes",
            "jeans",
            "watches",
            "moisturizer",
            "shampoo",
            "makeup kit",
            "vitamins",
            "protein powder",
            "yoga mat",
            "lego sets",
            "action figures",
            "board games",
            "fiction novels",
            "self-help books",
            "cookbooks",
          ]}
        ></PlaceholdersAndVanishInput>
        <div className="font-semibold text-sm">
          After opening the page select
        </div>
        <Image
          src="/plus_four_customer_reviews.png"
          width={150}
          height={150}
          alt="4star+ rating"
        ></Image>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
