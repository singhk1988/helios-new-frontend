import Link from 'next/link';
import React from 'react'
interface props {
  pdfText: string;
  pdfLinkText1: string;
  pdf2?: boolean;
  pdflink?: string;
  pdfLocalLink?: string;
  mdaLink?: string;
  openFile?: () => void;
  openMda?: () => void;
  route?: string
}
const Informationpdf = ({ pdfText, pdf2, pdfLinkText1, pdflink, mdaLink, pdfLocalLink, openFile, route, openMda }: props) => {
  return (
    <div className='border-b border-[#efefef] pb-2 mb-3 cursor-pointer'>
      <div className='flex gap-4 md:gap-0 justify-between items-center'>
        {
          route && (
            <Link href={route}>
              <a target="_blank" rel="noopener noreferrer">
                <p className='text-white w-2/3 md:w-fit md:text-pdfText hover:text-primaryColor'>{pdfText}</p>
              </a>
            </Link>
          )
        }
        <div className='flex flex-col justify-end md:flex-row gap-5'>
          {
            pdfLocalLink ? (
              <a href={pdfLocalLink} target="_blank" rel="noopener noreferrer">
                <div className='flex gap-2 items-center w-1/3 md:w-fit md:justify-start'>
                  <img src="/pdf.png" className='w-6 h-6 md:h-8' />
                  <p className='text-primaryColor'>{pdfLinkText1}</p>
                </div>
              </a>
            ) : null
          }
          {
            route ? (
              <Link href={route}>
                <a target="_blank" rel="noopener noreferrer">
                  <div className='flex gap-2 items-center w-1/3 md:w-fit md:justify-start'>
                    <img src="/pdf.png" className='w-6 h-6 md:h-8' />
                    <p className='text-primaryColor'>{pdfLinkText1}</p>
                  </div>
                </a>
              </Link>
            ) : null
          }
          {
            mdaLink ?
              <Link href={mdaLink}>
                <a target="_blank" rel="noopener noreferrer">
                  <div className='flex gap-2 items-center w-1/3 md:w-fit md:justify-start'>
                    <img src="/pdf.png" className='w-6 h-6 md:h-8' />
                    <p className='text-primaryColor'>MD&A</p>
                  </div>
                </a>
              </Link>
              :
              null
          }

        </div>

      </div>
    </div>
  )
}

export default Informationpdf