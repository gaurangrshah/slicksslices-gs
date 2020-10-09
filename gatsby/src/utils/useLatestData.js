import { useState, useEffect } from "react";

const gql = String.raw; // fakes GQL in vscode providing syntax highlighting

const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();
  // Use a side effect to fetch he data from the graphql endpoint
  useEffect(function () {
    // console.log('FETCHING DATA');
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    }) // opted for chaining .then() vs using async/await
      .then((res) => res.json())
      .then((res) => {
        // console.log('⭕️res', res.data);
        // set the data to state
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => {
        // check for errors
        console.log("err", err);
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
