
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
export default function Home() {
return (
  <>
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
  
  
  
  ]}></HeroParallax>
  <ProductMain></ProductMain>
    
  </>  
  );
}
