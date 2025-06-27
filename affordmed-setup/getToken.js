const axios = require("axios");
const getToken = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/auth", {
      email: "kunal.22scse1180152@galgotiasuniversity.edu.in",
      name: "Kunal Arora",
      rollNo: "22131180136",
      accessCode: "Muagvq",
      clientID: "7e6a0ee4-6aa4-4630-9e51-f54ad1f3bb0b",
      clientSecret: "MycPUZgmGEfkgmrw"
    });
    console.log("Access Token:\n", response.data.access_token);
  }
  catch (error) {
    console.error("Token generation failed:", error.response?.data || error.message);
  }
};
getToken();