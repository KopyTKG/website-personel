export default function Docs() {
 return (
  <div className="flex justify-center min-w-full h-11 md:grid md:grid-cols-2 xl:grid-cols-3 pt-5">
   <div className="text-justify flex flex-col gap-3 bg-black/65 px-3 py-4 max-w-md h-max border rounded-xl">
    <h1 className="text-3xl font-bold">KI/GUI Docs</h1>
    <p className="text-lg">Documentation for subject KI/GUI in UJEP.</p>
    <a href="/docs/gui" className="text-lg text-blue-400 hover:cursor-pointer hover:text-blue-500">
     read more...
    </a>
   </div>
  </div>
 )
}
