import './App.css';
import { useState } from 'react';

function App() {

  const [getList, setList] = useState([{
    stage: "Request submitted",
    city: "New york",
    code: "completed"
  },
  {
    stage: "Package received",
    city: "New york",
    code: "progress"
  },
  {
    stage: "Transit",
    city: "New york",
    code: "backlog"
  }

  ]);

  return (
    <div className="container">
      {getList.map((obj, index) => {
        return (<div className="box" keys={index}>

          {obj.code == "completed" && <div className="wrapper">

            <div>
              <div className='full-circle'>

              </div>
              <div className='vertical-line-blue'>

              </div>
            </div>
            <div>
              <h1>{obj.stage}</h1>
              <h3>{obj.city}</h3>
            </div>
          </div>}

          {obj.code == "progress" && <div className="wrapper">

            <div>
              <div className='outer-circle-blue'>

              </div>
              <div className='vertical-line-grey'>

              </div>
            </div>
            <div>
              <h1>{obj.stage}</h1>
              <h3>{obj.city}</h3>
            </div>
          </div>}


          {obj.code == "backlog" && <div className="wrapper">

            <div>
              <div className='outer-circle-grey'>

              </div>
              <div className='vertical-line-grey'>

              </div>
            </div>
            <div>
              <h1>{obj.stage}</h1>
              <h3>{obj.city}</h3>
            </div>
          </div>}
        </div>)
      })}


    </div>
  )
}

export default App;
