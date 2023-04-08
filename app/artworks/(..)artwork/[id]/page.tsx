import Artworks from "~/app/artworks/artworks";
import Image from "next/image";
import Link from "next/link";
import {Rufina} from "next/font/google";
import {artworks} from "~/utils/consts";
const rufina = Rufina({weight: ['400', '700'], subsets: ['latin']})

interface PageProps {
    params: {
        id: string
    }
}

const getArtworkById = (id: string) => {
    return artworks.find(artwork => artwork.id === id)
}

export default async function Page({params: {id}}:PageProps){
    const artwork =  getArtworkById(id);

    return(
        <>
            <Artworks/>
            <div aria-labelledby="modal-title" aria-modal="true" className="relative z-10" role="dialog">
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative flex-row flex transform overflow-hidden bg-white text-left shadow-xl transition-all max-h-[420px] my-8">
                            <div className="bg-white">
                                <div className="sm:flex sm:items-start">
                                    <div key={artwork!.id} className="group relative">
                                        <div className="min-h-80 aspect-h-1 aspect-w-1 overflow-hidden bg-gray-200 lg:aspect-none">
                                            <Image
                                                alt={artwork!.title}
                                                height={400}
                                                className={'h-[500px] aspect-auto w-full'}
                                                src={artwork!.image}
                                                width={500}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'w-[250px] p-4 flex flex-col'}>
                                <div className={'overflow-y-auto max-h-full grow'}>
                                    <h4 className={`${rufina.className} text-base text-gray-800 font-semibold mt-4`}>{artwork!.title}</h4>
                                    <p className={`${rufina.className} text-sm text-gray-500 font-normal mt-1`}>{artwork!.author}</p>
                                    <p className={`${rufina.className}  text-sm text-gray-400 font-light mt-1`}>{artwork!.type}</p>
                                    <p className={`${rufina.className}  text-sm text-gray-400 font-light mt-1`}>{artwork!.sizes}</p>
                                    <p className={" mt-[8px] text-sm"}>{artwork!.description}</p>
                                </div>
                                <div className={'w-full flex flex-row justify-end pt-2'}>
                                    <Link href="/artworks">
                                        <button
                                            className="inline-flex w-full justify-center  px-3 py-2 text-sm
                                                       font-semibold text-gray-900 bg-gray-200
                                                       w-auto"
                                            type="button"
                                        >
                                            Close
                                        </button>
                                    </Link>
                                    <a href={`/artwork/${artwork!.id}`}>
                                        <button
                                            className="inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-white bg-gray-900 ml-3 w-auto"
                                            type="button"
                                        >
                                            See more
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
