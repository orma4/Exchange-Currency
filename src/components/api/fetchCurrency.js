const url = "https://www.swapi.tech/api";

export async function fetchCurrency() {
  try {
    const response = await fetch(`${url}/films`);

    if (response.ok) {
      const body = await response.json();
      console.log(body);
      return body.result;
    }
    return { error: `error code ${response.status}` };
  } catch (error) {
    console.log("error", error.message);
    return { error: "Server internal error" };
  }
}
