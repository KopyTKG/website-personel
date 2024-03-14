'use client'
import Modal from '@/components/modal'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function TopSplash() {
 const modalRef = useRef<HTMLDivElement>(null)

 function showModal() {
  const modal = modalRef.current
  if (modal) {
   modal.classList.remove('hide')
  }
 }

 function hideModal() {
  const modal = modalRef.current
  if (modal) {
   modal.classList.add('hide')
  }
 }

 return (
  <>
   <Modal ModalRef={modalRef} hideModal={hideModal} />
   <section className="h-screen w-svw">
    <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center">
     <div className=" bg-stone-950/75 w-svw h-[30rem] flex items-center flex-col justify-center">
      <div className="text-lime-400 font-semibold text-[4rem] lg:text-[5rem] xl:text-[6rem]">
       {'<KopyTKG/>'}
      </div>
      <div className="flex flex-col items-center ">
       <span className="text-lime-300 text-xl lg:text-2xl xl:text-3xl">Fullstack developer</span>
       <br />
       <span>
        <Button
         className="rounded-full text-xl lg:text-2xl xl:text-3xl bg-lime-500 hover:bg-lime-300 py-8 px-4 hover:text-black"
         size="lg"
         onClick={() => showModal()}>
         About me
        </Button>
       </span>
      </div>
     </div>
    </div>
    <Image
     src={'/images/background.png'}
     width={1920}
     height={1080}
     alt="mainbg"
     className="absolute top-0 left-0 z-0 min-h-screen min-w-full object-cover"
     priority
    />
   </section>
  </>
 )
}

export default TopSplash
