export const metadata = {
  title: 'Anna Pazyuk',
  description: 'A brand designer and art-director currently based in Istanbul',
}

export default function Home() {
  return (
    <>
      {<div className='flex flex-col w-full h-full absolute px-24 top-0 left-0 justify-center items-center text-center'>
        <p className="text-6xl font-black bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-200">Anna Pazyuk</p>
        <p className="text-xl mt-6 font-light">Brand Designer and <span className="whitespace-nowrap">Art Director</span></p>
      </div>}
    </>
  )
}
