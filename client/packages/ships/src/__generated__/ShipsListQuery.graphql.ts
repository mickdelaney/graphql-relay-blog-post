/**
 * @generated SignedSource<<6996e6c03c24e109b3e52dda2999a943>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ShipsListQuery$variables = {};
export type ShipsListQueryVariables = ShipsListQuery$variables;
export type ShipsListQuery$data = {
  readonly ships: ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
  } | null> | null;
};
export type ShipsListQueryResponse = ShipsListQuery$data;
export type ShipsListQuery = {
  variables: ShipsListQueryVariables;
  response: ShipsListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Ship",
    "kind": "LinkedField",
    "name": "ships",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShipsListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShipsListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "41b273f7a273739638828c67ddc7e3dd",
    "id": null,
    "metadata": {},
    "name": "ShipsListQuery",
    "operationKind": "query",
    "text": "query ShipsListQuery {\n  ships {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "584c36b4781e5a6a74717f640baa8d7f";

export default node;
