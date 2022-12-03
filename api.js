const BASE_URL = 'http://127.0.0.1:5000/';
const RES_URL = `${BASE_URL}/hotels`;
const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
      const reqParams = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      if (body) {
        reqParams.body = JSON.stringify(body);
        
      }
  
      return await fetch(`${RES_URL}${urlPath}`, reqParams);
    } catch (error) {
      console.error("HTTP ERROR: ", error);
    }
  };

export const getRequest = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
  
    return await rawResponse?.json();
  };
  
  export const postRequest = (body) => {baseRequest({ method: "POST", body }); console.log("hghg");};
  
  export const patchRequest = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PATCH", body });
  
  export const deleteRequest = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });