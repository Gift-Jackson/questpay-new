import { Link } from "react-router-dom"

const Cta = () => {
  return (
      <>
          <div className="flex flex-col-reverse sm:flex-row gap-y-2 gap-x-4 justify-center mt-8">
              <Link to="/login" className="btn px-8 bg-mediumbg">
              <span className="material-symbols-outlined text-maintext">system_update_alt</span>
                  <span className="text-maintext">
                      Quick Top-up
                  </span>
              </Link>
              <Link to="/register" className="btn px-8 btn-primary">
                  <span>
                      Get Started
                  </span>
                  <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
      </div>
      </>
  )
}

export default Cta