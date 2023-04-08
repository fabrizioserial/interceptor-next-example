import Image from 'next/image'
import { Rufina } from 'next/font/google'
import CardArt from "~/components/CardArt";
import {transformDescription} from "~/utils/utils";
import {artworks} from "~/utils/consts";

const rufina = Rufina({weight: ['400','700'], subsets: ['latin'] })

const getArtworks = () => {
    return artworks
}

export default function Artworks() {
    const artworks = getArtworks()
    return (
        <main className="flex min-h-screen flex-col items-start py-24">
            <div className={'px-[72px] flex flex-row justify-between w-full items-center'}>
                <h1 className={`${rufina.className} text-3xl text-gray-800`} >Featured Paitings</h1>
                <svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.3264 19.8046L31.886 20.248L30.9991 19.3671L31.4396 18.9237L37.8118 12.5082L4.49412 12.25L3.74414 12.2442L3.75577 10.7442L4.50574 10.75L37.8755 11.0086L31.8684 4.53952L31.4431 4.08152L32.3591 3.23096L32.7844 3.68895L39.8888 11.3398L40.2972 11.7797L39.8742 12.2056L32.3264 19.8046Z" fill="#161412"/>
                </svg>

            </div>
            <div className="flex flex-row w-full mt-3 px-6 overflow-scroll pb-3	">
                {
                    artworks.map((artwork, index) => {
                        return (
                            <CardArt
                                id={artwork.id}
                                key={'art-'+ index}
                                title={artwork.title}
                                description={transformDescription(artwork.description)}
                                image={artwork.image}
                                size={artwork.sizes}
                                type={artwork.type}
                                author={artwork.author}
                            />
                        )
                    })

                }
            </div>
        </main>
    )
}
