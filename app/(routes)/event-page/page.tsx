"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const posts = [
  {
    id: 3,
    title: "Liensale",
    href: "#",
    thumbnail: "/images/liensale.jpg",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Jun 07, 2023",
    datetime: "2023-06-07",
    category: { title: "Liensale", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Wild West Bass Trail",
    href: "#",
    thumbnail: "/images/wild-west-bass-trail.png",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "May 18, 2023",
    datetime: "2023-05-18",
    category: { title: "Sporting", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "FLW Toyota Series",
    href: "#",
    thumbnail: "/images/Flw_logo_edited.png",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Apr 20, 2022",
    datetime: "2022-04-20",
    category: { title: "Sporting", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

const EventPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-4 gap-y-16 px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Events
          </h2>
          <p className="mt-4 text-gray-900 text-lg">
            Welcome to Big Break Marina – Your Premier Event Destination!
            Nestled along the picturesque waters of the delta, our marina offers
            the perfect setting for hosting a wide range of events, from
            thrilling sport fishing tournaments to unforgettable social
            gatherings. With our spacious and well-equipped facilities,
            including ample dock space and event areas, we provide everything
            you need to ensure your event goes off without a hitch. Whether you
            are an angler looking to reel in the big one or planning a memorable
            social occasion, let Big Break Marina be your choice for an
            extraordinary event experience. Dive into the adventure, and book
            your event with us today by simply clicking on the chat icon located at the bottom right corner or calling us at 925 - 679 0900.
          </p>
        </div>
      </div>
      <div className="bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Past Events
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-900">
              We are proudly to hold these events
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="relative bg-white">
                  <Image
                    src={post.thumbnail}
                    width={140}
                    height={140}
                    alt="Wild West Bast Trail Event."
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-lg leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
