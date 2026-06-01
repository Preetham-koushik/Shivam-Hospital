import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import BlogItems from "@/components/Pages/Blogs/BlogItems/BlogItems";
import React from "react";

export default function page() {
  return (
    <main>
      <BannerTitle
        title="Our Blogs"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <BlogItems />
    </main>
  );
}
