import { defineStore } from 'pinia'

interface Product {
  id: number,
  amount: number,
  price: number,
}

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      products: JSON.parse(localStorage.getItem('products') || '[]') as Product[],
    }
  },
  getters: {
    totalPrice() {
      let amount = 0;
      for (let p of this.products) {
        amount += p.amount * p.price;
      }
      return Math.round(amount * 100) / 100.0;
    },
    totalAmount() {
      let amount = 0;
      for (let p of this.products) {
        amount += p.amount;
      }
      return amount;
    },
    getAmount() {
      return (id: number): number => {
        const product = this.products.find(p => p.id === id);
        if (product) {
          return product.amount;
        }
        return 0;
      }
    },
  },
  actions: {
    addProduct(id: number, amount: number, price: number) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        product.amount += amount;
      } else {
        this.products.push({ id, amount, price });
        localStorage.setItem('products', JSON.stringify(this.products));
      }
    },
    removeProduct(id: number) {
      this.products = this.products.filter(p => p.id !== id);
      localStorage.setItem('products', JSON.stringify(this.products));
    },
    clear() {
      this.products = [];
      localStorage.removeItem('products');
    },
    setAmount(id: number, amount: number) {
      const product = this.products.find(p => p.id === id)
      if (product) {
        product.amount = amount;
        localStorage.setItem('products', JSON.stringify(this.products));
      }
    },
  }
})