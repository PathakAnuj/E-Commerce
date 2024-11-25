import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi, } from 'openai';

dotenv.config();


const router = express.Router();

const config = new Configuration({
  
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });
    console.log("Received prompt:", prompt);

    const image = response.data.data[0].b64_json;
    console.log("Generated Image Data:", image);
    

    res.status(200).json({ photo: image });
  } 
  // catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Something went wrong" })
  // }
  catch (error) {
    console.error("Error with OpenAI API:", error.response ? error.response.data : error.message);
    res.status(500).json({ message: "Something went wrong", error: error.response ? error.response.data : error.message });
  }
  
})

export default router;