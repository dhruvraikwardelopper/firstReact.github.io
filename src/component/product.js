import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';




const app = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/MLM')
  .then(() => console.log('MongoDB connected'))
  .catch(console.error);

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  url: String,
  discount:Number,
  inStock: Boolean,
});
const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
