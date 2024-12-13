import Link from 'next/link'
import React from 'react'

type propsType={
    title:string,
    theme?:string
}
const replaceTurkishChars = (str: string): string => {
  const charMap: { [key: string]: string } = {
    'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
    'Ç': 'C', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U',
  };

  return [...str].map(char => charMap[char] || char).join('');
};

const UiCategory = ({title,theme}:propsType) => {
  const url:string = replaceTurkishChars(title)
  return (
    <div className={`w-fit px-2 py-3 h-7 ${theme=="light" ? 'bg-secondary text-white':'bg-category text-secondary'} font-main text-md rounded-md flex items-center justify-center`}> 
    <Link href={`/category/${url.toLocaleLowerCase()}`}>{title}</Link>
    </div>
  )
}

export default UiCategory