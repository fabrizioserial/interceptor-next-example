import {artworks} from "~/utils/consts";
import {Inter, Rufina} from "next/font/google";
import Image from "next/image";
const rufina = Rufina({weight: ['400', '700'], subsets: ['latin']})
const inter = Inter({subsets: ['latin']})

interface PageProps {
    params: {
        id: string
    }
}

const getArtworkById = async (id: string) => {
    return artworks.find(artwork => artwork.id === id)
}

export default async function Page({params: {id}}:PageProps){
    const artwork = await getArtworkById(id);

    return(
        <div className={'w-[900px] m-auto pt-6 pb-6'}>
            <Image src={artwork!.image} alt={'artwork'} width={400} height={400} className={'w-[900px] aspect-auto'}/>
            <h4 className={`${rufina.className} text-4xl text-gray-800 font-semibold mt-4`}>{artwork!.title}</h4>
            <p className={`${inter.className} text-base text-gray-500 font-normal mt-4`}>{artwork!.author}</p>
            <p className={`${inter.className}  text-sm text-gray-400 font-light mt-1`}>{artwork!.type}</p>
            <p className={`${inter.className}  text-sm text-gray-400 font-light mt-1`}>{artwork!.sizes}</p>
            <p className={" mt-[8px] text-base"}>{artwork!.description}</p>
        </div>
    )
}
