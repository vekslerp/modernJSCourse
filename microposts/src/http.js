/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Vekslerp
 * @license MIT
 *
 **/

 class EasyHTTP {

  // Make HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

   // Make HTTP POST Request
   async post(url, data) {
     const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = await response.json();
      return resData;
  }

  // Make HTTP PUT Request
  async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = await response.json();
      return resData;
  }

  async delete(url){
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      const resData = await 'Resource deleted...';
      return resData;
  }
}

export const http = new EasyHTTP(); 