"use client";

import { useAccount } from "wagmi";

export default function Home() {
  const {} = useAccount();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="min-h-screen px-8 py-0 pb-12 flex-1 flex flex-col items-center bg-white">
        <div className="w-full py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="hidden sm:inline text-xl font-bold">
              Connect to your wallet
            </div>
          </div>
          <div className="flex items-center">
            <w3m-button />
          </div>
        </div>
      </main>
    </div>
  );
}
