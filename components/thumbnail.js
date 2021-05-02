import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react';
const Thumbnail = forwardRef(({ result }, ref) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original/'+result.backdrop_path;
    return (
        <div ref={ref} className="group cursor-pointer m-2" >
            <Image 
                layout="responsive" 
                src={baseUrl}
                height={1080}
                width={1920}
            ></Image>
            <div className="p-2">
               <p className="truncate max-w-md">{result.overview}</p> 
               <h2 className="mt-1 text-2xl text-white" >{result.title}</h2>
               <p className="flex items-center opacity-0 group-hover:opacity-100">
                   { result.media_type && `${result.media_type} ,`}{" "}
                   { result.release_date || result.first_air_date} - {" "}
                   <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
               </p>
            </div>
        </div>
    )
})

export default Thumbnail
