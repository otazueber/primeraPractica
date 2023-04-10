const Carts = require('./models/carts.model');

class CartManager {
    constructor() {}

    async addCart() {
        const newCart = await Carts.create({products: []});
        if (newCart){
            return newCart._id;
        } else {
            return null;
        }
    }

    async getCarts() {
        return await Carts.find();
        try {
            return await Carts.find();
        } catch {
            return [];
        }
    }

    async getCartById(id) {
        return await Carts.findById(id);
    }

    async deleteCart(id) {
        return await Carts.deleteOne({ _id: id });
    }

    async updateCart(id, product) {
        const cartToUpdate = await this.getCartById(id);
        if (cartToUpdate) {
            const productToUpdate = cartToUpdate.products.find(p => p.id == product.id);
            if (productToUpdate) {
                productToUpdate.quantity = productToUpdate.quantity + product.quantity;
            } else {
                cartToUpdate.products.push(product);
            }
            return await Carts.updateOne({ _id: id }, cartToUpdate);
        }
        return false;
    }
}

module.exports = CartManager;
