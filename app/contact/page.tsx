
export default function Contact(){
  

        return(
        <>
      <h2>Contact</h2>
 
 

<div className="max-w-md mx-auto mt-10">
  <form className="grid grid-cols-1 gap-6" onSubmit={sendMail}>
    <div>
      <label className="block text-gray-700">Name</label>
      <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" />
    </div>
    <div>
      <label className="block text-gray-700">Email</label>
      <input type="email" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" />
    </div>
    <div>
      <label className="block text-gray-700">Message</label>
      <textarea className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></textarea>
    </div>
    <div className="text-right">
      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-gray-800 hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150">
        Send
      </button>
    </div>
  </form>
</div>

</>
        )
  
}