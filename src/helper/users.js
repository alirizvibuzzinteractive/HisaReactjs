import axios from "axios";

const getUsers = (msg) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: "http://localhost:3030/web/get-user/",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjMzAwYTM5NDE5NDczNjlkZGNkMDgiLCJpYXQiOjE2NTY1MDAyNDV9.IiLFwUfbbRdtFPMXERSwxlpVkW-qdopw5dQUOs-FTmE",
      },
    }).then((resp) => {
      if(resp.data.status=="success"){
        resolve({
            data:resp.data.data,
        })
      }else{
        reject({
            msg:"Somethig went wrong in get-user API"
        })
      }
    });
  });
};

export { getUsers };
