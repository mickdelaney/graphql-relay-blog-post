import * as React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

import { ShipsListQuery } from "./__generated__/ShipsListQuery.graphql";

export const ShipsList = () => {
  const data = useLazyLoadQuery<ShipsListQuery>(
      graphql`
        query ShipsListQuery {
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

          <ul aria-labelledby="m-2">
            {data.ships?.map((ship: any) => (
                <li className="p-2" key={ship?.id}>{ship?.name}</li>
            ))}
          </ul>

        </header>
      </div>
  );
};
