const Item = require("../models/Library");
const path = require("path");
const asyncWrapper = require("../middlware/asyncWrapper");



const downloadFile = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    return next(new Error("No item found"));
  }
  const file = item.file;
  const filePath = path.join(__dirname, `../${file}`);
  res.download(filePath);
});

module.exports = {downloadFile};
