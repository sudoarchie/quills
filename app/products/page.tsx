import { FooterOne } from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar";
import Link from "next/link";
import img1 from "@/public/quill pen photo  (1).png"
import Image from "next/image";


export default function ProductPage() {
   
    const products = [{
        title: 'Quills',
        about: 'WORD THAT FLOW WITH A PEN THAT GROW',
        href: '#',
        image: img1,
        Blue: true,
        black: true,
        red: true,
        green: true
    },
   
];

    return (
        <>
            <Navbar />
            <h2 className="text-center font-bold text-5xl m-5">Our Products</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {products.map((product, index) => (
                    <div key={index} className="w-[300px] rounded-md border">
                        <Image
                            src={product.image}
                            alt={product.title}
                            className="h-[200px] w-full rounded-t-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="inline-flex items-center text-lg font-semibold">
                                {product.title}
                            </h1>
                            <p className="mt-3 text-sm text-gray-600">
                                {product.about}
                            </p>
                            <div className="mt-4">
                              {product.Blue ? <span  className={`mb-2 mr-2 inline-block rounded-full bg-blue-800 px-3 py-1 text-[10px] font-semibold text-white`}>
                                        Blue
                                    </span> : <span className="hidden"></span> }
                              {product.black ? <span  className={`mb-2 mr-2 inline-block rounded-full bg-black px-3 py-1 text-[10px] font-semibold text-white`}>
                                        Black
                                    </span> : <span className="hidden"></span> }
                              {product.red ? <span  className={`mb-2 mr-2 inline-block rounded-full bg-red-800 px-3 py-1 text-[10px] font-semibold text-white`}>
                                        Red
                                    </span> : <span className="hidden"></span> }
                              {product.green ? <span  className={`mb-2 mr-2 inline-block rounded-full bg-green-800 px-3 py-1 text-[10px] font-semibold text-white`}>
                                        Green
                                    </span> : <span className="hidden"></span> }
                                    
                           
                            </div>
                            <Link href='/buy'>

                            <button
                                type="button"
                                className="mt-4 w-full rounded-sm bg-black dark:bg-white px-2 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-black/80 dark:hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                
                                >
                                Buy
                            </button>
                                </Link>
                        </div>
                    </div>
                ))}
            </div>
            <FooterOne />
        </>
    );
}
