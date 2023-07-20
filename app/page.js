import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>

    <section className="text-gray-600 body-font">
    <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
      <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
        <Image className="object-cover object-center rounded" alt="hero" height={720}  width={600} src={'/im.jpg'} />
      </div>
      <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Meet an host</h1>
        
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Get Guided</h1>
        
        <p className="mb-8 leading-relaxed">Wanna Try ? New Place, Search for locals from that place, get in touch and get Guidance from them😎</p>
        <div className="flex justify-center">
          <Link href="/becomeAnHost" >
          <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Become an host</button></Link>
        <Link href="/meetAnHost" >
          <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Meet an host</button></Link>
        </div>
      </div>
    </div>
  </section>
  <section className="text-gray-600 body-font">
  <div className="container flex flex-wrap px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0">Don'T Know</h1>
      <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">Where To Go ? And How To Plan! We are Here For You, We offer Contact Informatio Of Numerous People From Various States Across The Nation.Feel Free To Contact Them!😁 </p>
    </div>
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
        <Image className="block object-cover object-center w-full h-full" alt="gallery" height={500}  width={300} src={'/Taj.jpg'} />
          {/* <Image  className="block object-cover object-center w-full h-full" width={300} height={500} alt="gallery" src={"/Taj.jpg"}> */}
        </div>
        <div className="w-1/2 p-1 md:p-2">
          {/* <Image alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/501x301"> */}
          <Image alt="gallery" className="block object-cover object-center w-full h-full" height={501}  width={301} src={'/Goa.jpg'} />
        </div>
        <div className="w-full p-1 md:p-2">
          {/* <Image alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/600x360"> */}
          <Image alt="gallery" className="block object-cover object-center w-full h-full" height={600}  width={360} src={'/Ma.jpg'} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          {/* <Image alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/601x361"> */}
          <Image alt="gallery" className="block object-cover object-center w-full h-full" height={601}  width={361} src={'/Oo.jpg'} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          {/* <Image alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/502x302"> */}
          <Image alt="gallery" className="block object-cover object-center w-full h-full" height={502}  width={302} src={'/De.jpg'} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          {/* <Image alt="gallery" className="block object-cover object-center w-full h-full" src="https://dummyimage.com/503x303"> */}
          <Image alt="gallery" className="block object-cover object-center w-full h-full" height={503}  width={303} src={'/Jajpg.jpg'} />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col w-full mb-20 text-center">
      <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">LOCALAAVAAZ FEATURES</h2>
      <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">Get Guidance From Locals</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 title-font">Shifting To New Place</h2>
          </div>
          <div className="flex-grow">
            <p className="text-base leading-relaxed">No Problem, Search for locals from that place, Get complete idea of that place directly from locals.</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 title-font">Visiting New Place ?</h2>
          </div>
          <div className="flex-grow">
            <p className="text-base leading-relaxed">No Worries, Feel Free To Contact Locals, Get Absolute Guidance AnyTime To AnyWhere!</p>
            <a className="inline-flex items-center mt-3 text-indigo-500">
            
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-indigo-500 rounded-full">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 title-font">Wanna Have A Guest?</h2>
          </div>
          <div className="flex-grow">
            <p className="text-base leading-relaxed">There Are So Many People, Looking For Help In Your Areas, Register Now As A Host And Guide Them😎</p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}
