const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    id: {
      type: String,
      required: [true, "Please fill in id value"],
    },
    name: {
      type: String,
      required: [true, "Please fill in name value"],
    },
    client: {
      type: String,
      required: [true, "Please fill in client value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
