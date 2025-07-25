import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import img1 from '@/public/quill pen photo  (1).png'
import img2 from '@/public/confrancepad.png'
import img3 from '@/public/toothbrush.png'
import img4 from '@/public/handbag.png'
import img6 from '@/public/quote.png'
import img7 from '@/public/Gemini_Generated_Image_2g7hx82g7hx82g7h.png'
import img8 from '@/public/notebook.png'
import img9 from '@/public/pot.jpg'

export function Brands() {
  const brands = [
    {
      id: 3,
      name: "Quills",
      description: "WORD THAT FLOW\nWITH A PEN THAT GROW",
      image: img1,
      tags: ["#Quills Stroke", "#Eco pens", "#Quills pen"],
      isLocal: true
    },
    {
      id: 1,
      name: "Confrance Pad",
      description: "Eco-friendly conference pads made from recycled materials for sustainable note-taking.",
      image: img2,
      tags: ["#EcoFriendly", "#Sustainable", "#ConfrancePad"],
      isLocal: true
    },
    {
      id: 2,
      name: "Toothbrush",
      description: "Biodegradable toothbrushes with bamboo handles for a greener oral care routine.",
      image: img3,
      tags: ["#EcoFriendly", "#Bamboo", "#Toothbrush"],
      isLocal: true
    },
    {
      id: 7,
      name: "Handbag",
      description: "Stylish and sustainable handbags crafted from recycled materials.",
      image: img4,
      tags: ["#EcoFriendly", "#SustainableFashion", "#Handbag"],
      isLocal: true
    },
    {
      id: 4,
      name: "Photo Frame",
      description: "Eco-friendly photo frames made from reclaimed wood and recycled materials.",
      image: img6,
      tags: ["#EcoFriendly", "#PhotoFrame", "#SustainableLiving"],
      isLocal: true
    },
    {
      id: 5,
      name: "Jute Bag",
      description: "Durable and reusable jute bags for eco-conscious shopping and storage.",
      image: img7,
      tags: ["#EcoFriendly", "#JuteBag", "#Reusable"],
      isLocal: true
    },
    {
      id: 6,
      name: "Notebook",
      description: "Eco-friendly notebooks made from recycled paper for sustainable writing and note-taking.",
      image: img8,
      tags: ["#EcoFriendly", "#Notebook", "#RecycledPaper"],
      isLocal: true
    },
    {
      id: 8,
      name: "Coco Pot",
      description: "EcoFriendly pot made from decompose into organic matter ",
      image: img9,

      tags: ["#EcoFriendly", "#Pot", "#Recycled"],
      isLocal: true
    }
  ];

  return (
    <>
      <h2 className='text-center text-4xl font-bold my-12'>Our Products</h2>
      <div className='flex flex-wrap gap-10 items-center justify-center my-14'>
        {brands.map((brand) => (
          <div key={brand.id} className="w-[300px] h-[400px] rounded-md border flex flex-col">
            <Image
              src={brand.image}
              alt={brand.name}
              className="h-[200px] w-full rounded-t-md object-cover object-top flex-shrink-0"
            />

            <div className="p-4 flex-1 flex flex-col">
              <h1 className="text-lg font-semibold mb-3">
                {brand.name}
              </h1>
              <p className="text-sm text-gray-600 whitespace-pre-line flex-1 mb-4 line-clamp-3 overflow-hidden">
                {brand.description}
              </p>
              <div className="mt-auto">
                {brand.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
