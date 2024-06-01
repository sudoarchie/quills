import { FooterOne } from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import img1 from '@/public/4511.jpg'
import img2 from '@/public/Designer (1).jpeg'
import img3 from '@/public/Designer (14).jpeg'
import img4 from '@/public/Designer (11).jpeg'
import img5 from '@/public/Designer (15).jpeg'
import img6 from '@/public/Designer (16).jpeg'
import img7 from '@/public/Designer (17).jpeg'
import img8 from '@/public/Designer (18).jpeg'
import img9 from '@/public/Designer (19).jpeg'

export default function Media(){
    
    return(
        <>
        <Navbar>
        </Navbar>
        <h2 className="text-5xl font-bold text-center my-8">Media</h2>
        <ParallaxScroll images={[img1,img2,img3,img4,img5,img6,img7,img8,img9]}></ParallaxScroll>
        <FooterOne></FooterOne>
        </>
    )
}