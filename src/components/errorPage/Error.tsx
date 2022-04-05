import { useNavigate } from "react-router-dom"; 
import './error.scss'


export default function Error() {
const navigate = useNavigate()

  const redirect = () => {
    navigate("/")
  }


  return (
    <>
      <div className="container errorContainer">
        <img src="assets/images/error.svg" alt="404" style={{ width: "600px", }} />
        <h1>404</h1>
        <h2>We are sorry, Page not Found!</h2>
        <p>
          The Page your are looking for might have been removed had its name
          changed and its temporarly unavailable
        </p>
        <button className="btn button" onClick={() => redirect()}>
          Home
        </button>
      </div>
    </>
  );
}