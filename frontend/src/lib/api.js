const API_BASE_URL = 'http://localhost:8080/api';

export const api = {
  products: {
    getAll: async () => {
      const res = await fetch(`${API_BASE_URL}/products`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    },
    getById: async (id) => {
      const res = await fetch(`${API_BASE_URL}/products/${id}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch product');
      return res.json();
    },
    getByCategory: async (category) => {
      const res = await fetch(`${API_BASE_URL}/products/category/${category}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    }
  },
  cart: {
    get: async (sessionId) => {
      const res = await fetch(`${API_BASE_URL}/cart/${sessionId}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch cart');
      return res.json();
    },
    add: async (sessionId, productId, quantity) => {
      const res = await fetch(`${API_BASE_URL}/cart/${sessionId}/add?productId=${productId}&quantity=${quantity}`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to add to cart');
      return res.json();
    },
    remove: async (sessionId, productId) => {
        const res = await fetch(`${API_BASE_URL}/cart/${sessionId}/remove?productId=${productId}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to remove from cart');
        return res.json();
    }
  }
};
