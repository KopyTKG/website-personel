import { Button } from '@/components/ui/button'

export default function Footer() {
 return (
  <footer className="fixed bottom-3 flex flex-col w-svw items-center gap-3 z-20">
   <div className="flex items-center gap-3 font-bold text-lime-500">
    <span>created by</span>
    <a href="https://github.com/kopytkg" target="_blank" rel="noreferrer">
     <Button className="text-white bg-lime-500 hover:bg-lime-300 rounded-full font-bold hover:text-black">
      KopyTKG
     </Button>
    </a>
   </div>
   <div className="text-lime-500">
    <span>©</span> &nbsp;
    {new Date(Date.now()).getFullYear()} thekrew.app
   </div>
  </footer>
 )
}
