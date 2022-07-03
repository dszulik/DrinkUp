const express = require("express");
const router = express.Router();

const {
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getOrders).post(protect, setOrder);
router.route("/:id").delete(protect, deleteOrder).put(protect, updateOrder);

module.exports = router;
