import image from "../../assets/notfound.svg"
const Notfound = () => {
  return (
      <>
          <div className="h-screen flex items-center justify-center">
          <div className="text-center">
              <img src={image} width={250} className="border rounded-lg p-8" alt="Not found" />
              <h1 className="mt-8 font-bold">Page not found!</h1>
          </div>
         </div>
      
      </>
  )
}

export default Notfound