const Item = require("../models/Account");
const path = require("path");
const asyncWrapper = require("../middlware/asyncWrapper");

const imagefile = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const item = await Item.findById(id);
  if (!item) {
    return next(new Error("No item found"));
  }

  const file = item.file;
  if (!file) {
    return res.status(404).json({ message: "File not found" });
  }

  const filePath = path.join(__dirname, `../${file}`);
  res.download(filePath);
});

module.exports = {imagefile};