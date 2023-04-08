import Image from "next/image";
import {Rufina,Inter} from "next/font/google";
import Link from "next/link";

const rufina = Rufina({weight: ['400', '700'], subsets: ['latin']})
const inter = Inter({subsets: ['latin']})


interface CardArtProps {
    id: string,
    title: string,
    description: string,
    image: string,
    author: string,
    size: string,
    type: string
}

export default function CardArt({id, description, image, title, size, type,author}: CardArtProps) {
    return (
        <Link href={'/artwork/' + id}>
            <div className="flex group flex-col bg-white h-min overflow-hidden
        mx-4
        w-[296px] max-w-[296px]
         p-8
         hover:drop-shadow-xl">
                <Image height={'232'} width={'232'} src={image}/>
                <h4 className={`${rufina.className} text-base text-gray-800 font-semibold mt-4`}>{title}</h4>
                <p className={`${inter.className} text-sm text-gray-500 font-normal mt-1`}>{author}</p>
                <p className={`${inter.className} hidden text-sm text-gray-400 font-light mt-1 group-hover:block`}>{type}</p>
                <p className={`${inter.className} hidden text-sm text-gray-400 font-light mt-1 group-hover:block`}>{size}</p>
                <p className={"hidden mt-[8px] text-sm group-hover:block"}>{description}</p>

            </div>
        </Link>
    )
}
