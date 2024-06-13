import "../App.css"
import DrawerAppBar from "../material/material";
function Homepage ( ) {

    return (
      <div>
        <DrawerAppBar />
        <header>
          <div>
            <h1 className="text">HOMEPAGE</h1>
          </div>
        </header>

        <p className="text">
          This is an Unsplash-API demo to fetch random images and normal
          images...
        </p>
      </div>
    );
};


export default Homepage;

