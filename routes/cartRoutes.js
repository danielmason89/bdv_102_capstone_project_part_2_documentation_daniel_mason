import express from 'express';
import {
  createCart,
  getCart,
  addToCart,
  removeFromCart,
  updateCartItemQuantity
} from '../controllers/cartController.js';

const router = express.Router();

// Create a new cart
router.post('/', createCart);

// GET items in the cart
router.get('/:cartId', getCart);

// Add item to cart
router.post('/:cartId/add', addToCart);

// Remove item from cart
router.delete('/:cartId/remove/:productId', removeFromCart);

// Update quantity in cart
router.patch('/:cartId/quantity', updateCartItemQuantity);

export default router;
