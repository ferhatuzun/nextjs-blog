import BlogPost from "@/Components/BlogPost";
import BlogTop from "@/Components/BlogTop";
import UiAdsContainer from "@/Components/Ui/UiAdsContainer";
import UiTitle from "@/Components/Ui/UiTitle";

export default function Home() {
  return (
    <div className="bg-primary text-white px-5 sm:px-0">
      <div className="container mx-auto">
        <BlogTop />
        <div className="my-24">
          <UiAdsContainer />
        </div>
      <UiTitle className="font-semibold text-2xl mb-5" >Latest Post</UiTitle>

        <BlogPost />
        <div className="flex justify-center mt-5">
        <button className="border border-section text-gray px-4 py-3 bg-none rounded-lg">View All Post</button>
      </div>
        <div className="mt-24 pb-24">
          <UiAdsContainer />
        </div>
      </div>
    </div>
  );
}
