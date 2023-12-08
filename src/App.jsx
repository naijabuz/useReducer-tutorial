import { useState, useEffect, useReducer } from "react";
import { initialState, appReducer } from "./reducer/reducer";
import actionConditions from "./reducer/actionTypes";
import "./App.css";

function App() {
  // const [loading, setLoading] = useState(false);
  // const [post, setPost] = useState([]);
  // const [error, setError] = useState(false);

  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleClick = () => {
    // setLoading(true);
    dispatch({ type: "fetch-start" });
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setPost(data);
        // setLoading(false);
        //   {
        //  type: 'fetch-success',
        //  payload: 'data'
        // }
        dispatch({ type: "fetch-success", payload: data });
      })
      .catch((error) => {
        // setError(true);
        // setLoading(false);
        //    {
        //  type: 'fetch-error',
        //  payload: error
        // }
        dispatch({ type: "fetch-error" });
      });
  };

  useEffect(() => {
    return console.log(state.post);
  }, []);

  return (
    <main>
      <div>
        <button onClick={handleClick}>
          {state.loading ? "Loading..." : "Fetch Post Title"}
        </button>

        {state.post.map((info) => (
          <div key={`${info.userId}-${info.title}`}>
            <h2>{info.title}</h2>
            <p>{info.body}</p>
          </div>
        ))}

        <p>{state.error && "oops! something went wrong"}</p>
      </div>
    </main>
  );
}

export default App;
