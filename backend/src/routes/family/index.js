const familyTree = require("../../mocks/familyTree");

const router = require("express").Router();

router.get("/", getFamilyTree);

function getFamilyTree(req, res, next) {
  res.status(200).json(familyTree);
}

module.exports = router;
