import shipmentsData from "../mocks/shipments.json";

export const loadShipments = async () => {
  if (sessionStorage.getItem("shipmentsData")) {
    return JSON.parse(sessionStorage.getItem("shipmentsData") ?? "[]");
  }

  // const shipmentsRequest = await fetch(
  //   "https://raw.githubusercontent.com/vivek-kachhadiya13/microfrontend-vue-and-vite/main/pigeon-shipments/src/mocks/shipments.json",
  //   {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       // Authorization: `Basic ${Buffer.from(
  //       //   `${import.meta.env.VITE_GITHUB_USERNAME}:
  //       //   ${import.meta.env.VITE_GITHUB_PERSONAL_TOKEN}`
  //       // ).toString("base64")}`,
  //       authorization: `Basic ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
  //     },
  //   }
  // );

  // const shipmentsData = await shipmentsRequest.json();

  sessionStorage.setItem("shipmentsData", JSON.stringify(shipmentsData));

  return shipmentsData;
};
