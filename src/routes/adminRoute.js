const express = require("express");
const upload = require("../middlewares/upload");
const withdrawController = require("../controller/withdrawController");

const router = express.Router();

router.route("/withdraw").get(withdrawController.getAllRequests);

router
  .route("/withdraw/:requestId/accept")
  .patch(withdrawController.acceptRequest);

router.patch(
  "/withdraw/:requestId/complete",
  upload.single("proofImage"),
  withdrawController.completeRequest
);

router.patch("/withdraw/:requestId/reject", withdrawController.rejectRequest);

module.exports = router;
