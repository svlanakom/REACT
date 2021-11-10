const baseUrl = "https://618b82a3ded7fb0017bb901f.mockapi.io/City";

export const GetWeatherData = () =>
  fetch(baseUrl).then((response) => response.json());
