
import { HeroParallax } from "@/components/ui/hero-parallax";
import box from "@/public/4511.jpg"
import pensWithRoundedBox from "@/public/8bd8ca9a-9a64-412b-9ab4-010ee945f909.png"
import penWithLeaves from "@/public/Img_7.png"
import careEnv from "@/public/care-environment-vector-male-character-adjusts-solar-panel-woman-waters-planet-greenery-use-solar-wind-energy-getting-electricity-from-natural-resources_776652-2254.jpg"
import avaWoman from "@/public/avatar-woman_24640-52441.jpg"
import zeroWaste from "@/public/zero-waste-wooden-utensils.jpg"
import leafEcoWord from "@/public/leaf-eco-word.jpg"
import EcoPaper from "@/public/il_1140xN.3001108197_2s4u.jpg"
import ProductMain from "@/components/ProductsMain";
import asthatic1 from "@/public/c57e19bb-2d00-4a95-aa49-e991efad4622.jpeg"
import asthatic2 from "@/public/Designer (7).jpeg"
import asthatic3 from "@/public/Designer (21).jpeg"
import asthatic4 from "@/public/4fb64872-2711-4321-b3ae-feb466a4920f.jpeg"
import asthatic5 from "@/public/Designer (11).jpeg"
import { Navbar } from "@/components/ui/navbar";
import { Globe } from "@/components/ui/globe";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
export default function Home() {
return (
  <>
  <Navbar></Navbar>
  <HeroParallax products={[
    {
      title: "",
      link: "",
      thumbnail: avaWoman
    },
    {
    title: '',
    link: "",
    thumbnail: box
  },{
    title: "",
    link: "",
    thumbnail: pensWithRoundedBox 
  },
  {
    title: "",
    link: "",
    thumbnail: penWithLeaves
  },
  {
    title: "",
    link: "",
    thumbnail: careEnv
  },
   
  {
    title: "",
    link: "",
    thumbnail: careEnv
  },
  
  {
    title: "",
    link: "",
    thumbnail: zeroWaste
  },
  
  {
    title: "",
    link: "",
    thumbnail: leafEcoWord
  },
  
  {
    title: "",
    link: "",
    thumbnail: EcoPaper
  },
 
  {
    title: "",
    link: "",
    thumbnail: careEnv
  },
  {
    title: "",
    link: "",
    thumbnail: asthatic4
  },
  {
    title: "",
    link: "",
    thumbnail: asthatic2
  },
  {
    title: "",
    link: "",
    thumbnail: asthatic3
  },
  {
    title: "",
    link: "",
    thumbnail: asthatic1
  },
  {
    title: "",
    link: "",
    thumbnail: asthatic5
  },
  
  
  
  ]}></HeroParallax>
  <div>
    <h2 className="text-5xl text-center font-extrabold text-black dark:text-white ">Crafting a Sustainable
     <div className="ransition delay-150 duration-300 ease-in-out active:bg-green-400 hover:text-white">
      Future
      </div>
     </h2>
  </div>
  <ProductMain></ProductMain>
    
  </>  
  );
}
