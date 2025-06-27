const axios = require("axios");
const register = async () => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/register", {
      email: "kunal.22SCSE1180152@galgotiasuniversity.edu.in",
      name: "Kunal Arora",
      mobileNo: "8755819732",
      githubUsername: "arora-kunal",
      rollNo: "22131180136",
      accessCode: "Muagvq"
    });
    console.log("Registered successfully:\n", response.data);
  }
  catch (error)
  {
    console.error("Registration failed:", error.response?.data || error.message);
  }
};
register();