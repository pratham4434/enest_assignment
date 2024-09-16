import Blogs from "./_containers/Blogs";
import Contact from "./_containers/Contact";
import Explore from "./_containers/Explore";
import Header from "./_containers/Header";
import Service from "./_containers/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Explore />
      <Service />
      <Blogs />
      <Contact />
    </>
  );
}
