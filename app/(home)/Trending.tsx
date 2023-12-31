import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}

    >
      <div className="z-0 relative w-full h-full bg-wh-500">
        <Image
        alt="Tech"
        src={post?.image}
        sizes="(max-width: 480px) 100vw,
        (max-width: 748px) 75vw
        (max-width: 1060px) 50vw
        33vw
        "
        placeholder="blur"
        fill
        style={{objectFit: "cover"}}
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  )
}


type Props = {
  trendingPosts: Array<Post>
}

const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-accent-orange py-2 px-8 text-wh-10 text-sm font-bold">
          Trending
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          reprehenderit suscipit eum quis molestias aut corporis cumque minima
          eligendi mollitia?
        </p>
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard className="col-span-2 row-span-2 bg-wh-500" post={trendingPosts[0]} />
        <TrendingCard className="col-span-2 row-span-1 bg-wh-500" post={trendingPosts[1]} />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" post={trendingPosts[2]} />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" post={trendingPosts[3]} />
      </div>

      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel beatae impedit quia quisquam eius! Illo velit delectus voluptatibus tenetur modi similique perferendis alias amet!
      </p>
    </section>
  );
};

export default Trending;
