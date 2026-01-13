import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'Essential cotton t-shirt with a relaxed fit. Perfect for everyday wear with premium quality fabric that feels soft against your skin.',
    price: 29.99,
    category: 'men',
    subcategory: 't-shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Gray', hex: '#6B7280' },
    ],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800',
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'Slim Fit Denim Jeans',
    description: 'Modern slim fit jeans crafted from premium stretch denim. Features a classic five-pocket design with subtle fading.',
    price: 89.99,
    originalPrice: 120.00,
    category: 'men',
    subcategory: 'jeans',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Indigo', hex: '#3F51B5' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Light Blue', hex: '#90CAF9' },
    ],
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'Oversized Blazer',
    description: 'Contemporary oversized blazer with structured shoulders. Perfect for creating a polished, fashion-forward look.',
    price: 189.99,
    category: 'women',
    subcategory: 'jackets',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Navy', hex: '#1E3A5F' },
    ],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
    ],
    featured: true,
    new: true,
  },
  {
    id: '4',
    name: 'Floral Midi Dress',
    description: 'Elegant midi dress with delicate floral print. Features a flattering A-line silhouette and adjustable waist tie.',
    price: 129.99,
    category: 'women',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Floral Print', hex: '#F8BBD9' },
      { name: 'Navy Floral', hex: '#1E3A5F' },
    ],
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    ],
    featured: true,
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    description: 'Minimalist leather crossbody bag with adjustable strap. Features multiple compartments for organized storage.',
    price: 149.99,
    category: 'accessories',
    subcategory: 'bags',
    sizes: ['One Size'],
    colors: [
      { name: 'Tan', hex: '#D2691E' },
      { name: 'Black', hex: '#000000' },
      { name: 'Burgundy', hex: '#800020' },
    ],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    ],
    new: true,
  },
  {
    id: '6',
    name: 'Cashmere Sweater',
    description: 'Luxuriously soft cashmere sweater with ribbed trim. A timeless piece that offers both comfort and elegance.',
    price: 199.99,
    originalPrice: 249.99,
    category: 'women',
    subcategory: 'sweaters',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Cream', hex: '#FFFDD0' },
      { name: 'Blush', hex: '#DE5D83' },
      { name: 'Gray', hex: '#9E9E9E' },
    ],
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
    ],
  },
  {
    id: '7',
    name: 'Cotton Chino Pants',
    description: 'Classic chino pants in premium cotton twill. Features a comfortable straight leg fit with subtle stretch.',
    price: 79.99,
    category: 'men',
    subcategory: 'pants',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'Navy', hex: '#1E3A5F' },
      { name: 'Olive', hex: '#808000' },
    ],
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
    ],
  },
  {
    id: '8',
    name: 'Wool Overcoat',
    description: 'Timeless wool-blend overcoat with notched lapels. Perfect for layering during cooler months.',
    price: 299.99,
    category: 'men',
    subcategory: 'jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Black', hex: '#000000' },
    ],
    images: [
      'https://images.unsplash.com/photo-1544923246-77307dd628b5?w=800',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
    ],
    new: true,
  },
  {
    id: '9',
    name: 'Silk Blouse',
    description: 'Elegant silk blouse with a relaxed fit. Features delicate button detailing and a subtle sheen.',
    price: 159.99,
    category: 'women',
    subcategory: 'tops',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Blush', hex: '#FFB6C1' },
      { name: 'Black', hex: '#000000' },
    ],
    images: [
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800',
      'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800',
    ],
  },
  {
    id: '10',
    name: 'Minimalist Watch',
    description: 'Clean and modern timepiece with a leather strap. Features a simple dial design with elegant markers.',
    price: 179.99,
    category: 'accessories',
    subcategory: 'watches',
    sizes: ['One Size'],
    colors: [
      { name: 'Silver/Black', hex: '#C0C0C0' },
      { name: 'Gold/Brown', hex: '#FFD700' },
      { name: 'Rose Gold', hex: '#B76E79' },
    ],
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    ],
    featured: true,
  },
  {
    id: '11',
    name: 'High-Waisted Trousers',
    description: 'Sophisticated high-waisted trousers with a wide leg silhouette. Perfect for both office and evening wear.',
    price: 109.99,
    category: 'women',
    subcategory: 'pants',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Beige', hex: '#F5F5DC' },
      { name: 'Forest Green', hex: '#228B22' },
    ],
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
    ],
  },
  {
    id: '12',
    name: 'Leather Belt',
    description: 'Classic leather belt with brushed metal buckle. Handcrafted from premium full-grain leather.',
    price: 59.99,
    category: 'accessories',
    subcategory: 'belts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Brown', hex: '#8B4513' },
      { name: 'Black', hex: '#000000' },
      { name: 'Tan', hex: '#D2B48C' },
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800',
    ],
  },
];

export const categories = [
  { id: 'men', name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800' },
  { id: 'women', name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800' },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.new);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.subcategory.toLowerCase().includes(lowerQuery)
  );
};
