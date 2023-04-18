import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  retrieveHelloWorldBean,
  retrieveHelloWorldPathVariable,
} from "./api/HelloWorldApiService";

function WelcomeComponent() {
  const { username } = useParams();
  console.log(username);

  const [message, setMessage] = useState(null);

  function callHelloWorldRestApi() {
    console.log("Called Hello World");

    /*  axios
      .get("http://localhost:8080/hello-world")
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
    */

    /*  retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
    */

    retrieveHelloWorldPathVariable(username)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }

  function successfulResponse(response) {
    console.log(response);
    // setMessage(response.data);
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="WelcomeComponent text-center">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <button className="btn btn-success m-1" onClick={callHelloWorldRestApi}>
        Call Hello World
      </button>
      <div className="text-info">{message}</div>
    </div>
  );
}

export default WelcomeComponent;
