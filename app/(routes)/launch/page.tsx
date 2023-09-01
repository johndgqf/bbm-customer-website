"use client";
import Container from "@/components/ui/container";
import Image from "next/image";
import { useEffect, useState } from "react";

const LaunchPage = () => {
  const features = [
    {
      name: "Step 1",
      title: "Pay at the parking box",
      instructions: [
        "24/7 Access",
        "$10 per launch",
        "Display the receipt on your dashboard",
      ],
    },
    {
      name: "Step 2",
      title: "The gate will automatically lift up and keep open for 90 seconds",
      instructions: [
        "Get through the gate",
        "Follow the road and make a right turn at the T-intersection",
        "See the map below if you need more help to locate the launch ramp",
      ],
    },
    {
      name: "Step 3",
      title: "Launch your vessel",
      instructions: [
        "The launch ramp can accommodate two boats launching at the same time",
        "Park your vehicle at the designated parking in front of the ramp",
      ],
    },
  ];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Container>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-4 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Launch Ramp
            </h2>
            <p className="mt-4 text-gray-900 text-lg">
              Set sail effortlessly with Big Break Marina boat launch ramp. Our
              well-maintained ramp provides seamless access to the water,
              allowing you to embark on your boating adventures with ease.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <h3 className="text-md font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {feature.name}
                  </h3>
                  <dd className="mt-2 text-xl text-gray-800">
                    {feature.title}
                  </dd>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {feature.instructions.map((instruction) => (
                        <li key={instruction} className="text-gray-700 text-lg">
                          <span className="text-gray-600">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-3 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src="/images/parkingboxx.jpg"
              width={400}
              height={400}
              alt="Uncovered boat slip."
              className="rounded-lg bg-gray-100"
            />
            <Image
              src="/images/marina-map.png"
              width={400}
              height={400}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <Image
              src="/images/launchramp.jpeg"
              width={600}
              height={600}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default LaunchPage;
