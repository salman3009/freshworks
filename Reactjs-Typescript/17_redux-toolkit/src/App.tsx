import React, { useEffect } from "react"
import { photosSelector, getPhotos } from "./PhotoSlice";
import { useSelector, useDispatch } from "react-redux"
import "./App.css"

function App() {
  const dispatch = useDispatch<any>();
  const { photos, loading, errors } = useSelector(photosSelector);

  console.log(photos, loading, errors);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch])

  return <div className="App">Hello world</div>
}

export default App