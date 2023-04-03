type RequestProps<D = {}> = {
  url: string;
  method?: string;
  /**
   * Some request requires `?` and others `&` at the end of the url and the
   * beginning of `API_KEY`, so we should be aware. The deault is `&`
   */
  append?: "?" | "&";
  data?: D;
};

const API_KEY = "api_key=ZSTYF0GBSSF0l3Ou6DTPE";
const BASE_URL = `https://apis.slstice.com/mock`;

/**
 * Simplest request service based on Web Fetch API
 */
async function request<R>({
  url,
  method = "get",
  append = "&",
  data,
}: RequestProps<R>): Promise<R> {
  const response = await fetch(`${BASE_URL + url + append + API_KEY}`, {
    method,
    headers: new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
    ...(data ? { body: JSON.stringify(data) } : {}),
  });

  return response.json();
}

export default request;
