const puppeteer = require("puppeteer");
const mongoose = require("mongoose");

const Data = mongoose.model(
  "Data",
  new mongoose.Schema({
    title: String,
    price: String,
  })
);

const connect = async () => {
  try {
    const URI =
      "mongodb+srv://fidhone:Mongodbfran19@cluster0.qdiqj9n.mongodb.net/nameProject?retryWrites=true&w=majority";
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado con DB 🚀");
  } catch (error) {
    console.error("No conectado con DB ❌");
  }
};

const scrapeCards = async () => {
  await connect();

  const url = "https://www.cardmarket.com/es/Magic/Products/Singles";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  await page.waitForTimeout(6000);

  const title = await page.$$eval("div.table-body", (nodes) =>
    nodes.map((n) => n.innerText)
  );
};
