import Facts from "../../api_call/facts";
import "./left.css"

const Leftdown = () => {
  

  return (
    <div>
      <strong className="dropdown-label">
        RANDOM FACT
      </strong>
     
        <p className="dropdown-content">
          <p>
            <Facts />
          </p>
        </p>
    </div>
  );
};

export default Leftdown;


//later i will add a api https://api.api-ninjas.com/v1/facts which will display random facts here