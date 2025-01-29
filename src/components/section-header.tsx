import Image from 'next/image'
import React, { FC } from 'react'

interface IProps {
    highlightTitle: string
    normalTitle: string
    description: string,
    image?: string
}

const SectionHeader: FC<IProps> = ({ highlightTitle, normalTitle, description, image }) => {
    return (
        <>
            <div className="lg:mt-[8em]  mt-[6em] h-60 md:h-[60vh] overflow-hidden  ">
                <div className="h-full  rotate-0 w-full">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={image ? image : "/assets/membership.jpg"}
                        alt="bg"
                        className="object-cover brightness-[30%]"
                    />
                    <div className="text-white h-full w-full top-0 flex flex-col items-center justify-center gap-2 md:gap-4  absolute px-4">
                        <div className="text-3xl text-center lg:text-5xl text-blue-400 font-medium">
                            {highlightTitle}<span className="text-white ml-2">{normalTitle}</span>
                        </div>
                        <div className="text-xs lg:text-lg  text-center max-w-2xl">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionHeader