import * as React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

import { CounterButton } from "ui";

import { AppQuery } from "./__generated__/AppQuery.graphql";
import logo from "./logo.svg";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        ships {
          id
          name
        }
      }
    `,
    {},
  );

  return (
    <div className="container">
      <header className="p-8">

        <img src={logo} className="m-2 h-12" alt="logo" />
        
        <h1 className="text-blue-900">Admin</h1>
        
        <CounterButton />
       
        <ul aria-labelledby="m-2">
          {data.ships?.map((ship) => (
            <li className="p-2" key={ship?.id}>{ship?.name}</li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
