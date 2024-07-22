"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Link from "next/link";

export default function Home() {
  const [baseUrl, setBaseUrl] = useState("amazon.de");
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onClick = () => {
    const link = `https://${baseUrl}/s?k=${search}&s=review-count-rank&tag=msortbyreview-21`;
    router.push(link);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between items-center px-4 py-4 md:px-16">
      <header className=""></header>
      <div className="w-full flex flex-col justify-center items-center gap-2 max-w-96">
        <Image src="/logo.png" alt="logo" width="300" height="300"></Image>
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
        <div className="flex flex-col"></div>
      </div>
      <footer>
        <p>
          Created with 🫕 by <Link href="https://willhausmarc.xyz">MW</Link>
        </p>
      </footer>
    </main>
  );
}
