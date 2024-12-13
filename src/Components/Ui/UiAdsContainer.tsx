import Image from 'next/image'

type propsType={
    image?:string
}

const UiAdsContainer = ({image}:propsType) => {
  return (
    <div className='md:w-[750px] w-auto h-[100px] bg-section rounded-lg mx-auto'>
        {image ? 
        <a href="">
            <Image src={image} alt=''  width={750} height={100} />
        </a>
        :
        <div className='h-full flex flex-col items-center justify-center text-gray'>
            <p>Advertisement</p>
            <p className='text-xl'>You can place ads</p>
            <p>750x100</p>
        </div>
        }
    </div>
  )
}

export default UiAdsContainer