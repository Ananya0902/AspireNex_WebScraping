import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    url: {type: String, required: true },
    currency: { type: String, required: true},
    image: { type: String, required: true},
    title: {type: String, required: true},
    currentPrice: {type: String, required: true},
    originalPrice: { type: String, required: true},
    priceHistory: [
        {
            prices: {type: Number, required: true},
            date: {type: Date, default: Date.now}
        },
    ],
    lowestPrice: {type: Number},
    highestPrice: {type: Number},
    averagePrice: {type: Number},
    discountRate: {type: Number},
    category: {type: String},
    reviewsCount: {type: Number},
    isOutOfStock: {type: Boolean, default: false},
}, {timestamps: true});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;