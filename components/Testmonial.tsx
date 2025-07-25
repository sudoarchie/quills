import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testmonials = [
  {
    quote: "The Confrance Pad from Quills Stroke has completely transformed the way I take notes during meetings. It's not only eco-friendly but also incredibly durable and stylish.",
    name: "Priya Sharma",
    title: "Environmental Consultant"
  },
  {
    quote: "I've been using the bamboo toothbrush from Quills Stroke for months now, and I couldn't be happier. It's a small change that makes a big difference for the planet.",
    name: "Rahul Verma",
    title: "Dental Hygienist"
  },
  {
    quote: "The handbag from Quills Stroke is my go-to accessory. It's spacious, fashionable, and I love knowing that it's made from recycled materials.",
    name: "Ananya Kapoor",
    title: "Fashion Blogger"
  },
  {
    quote: "Quills Stroke's photo frames add a touch of elegance to my home. The fact that they are eco-friendly makes them even more special.",
    name: "Vikram Singh",
    title: "Interior Designer"
  },
  {
    quote: "I use my Quills Stroke jute bag every day. It's sturdy, spacious, and I feel good knowing I'm reducing my plastic usage.",
    name: "Neha Patel",
    title: "Eco-conscious Shopper"
  },
  {
    quote: "The notebook from Quills Stroke is perfect for my daily journaling. The recycled paper is high-quality, and I love supporting a sustainable brand.",
    name: "Arjun Mehta",
    title: "Writer"
  }
]
export function Testmonial() {
  return (
    <>
      <h2 className='text-center text-4xl font-bold my-12'>Our Products</h2>
      <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={Testmonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  )
}
