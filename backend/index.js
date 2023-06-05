const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username:username, secret:username, first_name:username},
        {headers:{ "private-key":"a1fd5775-90f7-4d2a-90d0-7578e6fa5d93"}}
    );
    return res.status(r.status).json(r.data);
  }catch(r){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);