import { FooterOne } from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import img1 from "@/public/4511.jpg";
import img2 from "@/public/Designer (1).jpeg";
import img3 from "@/public/Designer (14).jpeg";
import img4 from "@/public/Designer (11).jpeg";
import img5 from "@/public/Designer (15).jpeg";
import img6 from "@/public/Designer (16).jpeg";
import img7 from "@/public/Designer (17).jpeg";
import img8 from "@/public/Designer (18).jpeg";
import img9 from "@/public/Designer (19).jpeg";
import img10 from "@/public/open1.jpg";
import img11 from "@/public/open2.jpg";
import img12 from "@/public/open3.png";
import img13 from "@/public/open4.jpg";

export default function Media() {
  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-5xl font-bold text-center my-8">Media</h2>
      <ParallaxScroll
        images={[
          img10,
          img13,
          img7,
          img1,
          img2,
          img11,
          img3,
          img4,
          img5,
          img6,
          img12,

          img8,
          img9,
        ]}
      ></ParallaxScroll>
      <FooterOne></FooterOne>
    </>
  );
}
