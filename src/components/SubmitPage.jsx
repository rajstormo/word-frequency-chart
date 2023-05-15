
import {Link} from "react-router-dom"

const SubmitPage = () => {

  return (
    <div className="submit-page">
      <p> 👇 Click the below button to plot a histogram 👇 </p>
      <Link to="/submit" className="btn"> Submit </Link>
    </div>
  );
};

export default SubmitPage;
