export interface ProductItem {
  id: string
  name: string
  info: string
  price: string
}

/** Category default images (Unsplash) for product cards */
const CATEGORY_IMAGES: Record<string, string> = {
  switches: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  'led-lights': 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=80',
  multimeters: 'https://images.unsplash.com/photo-1581092160607-ee22621ddc0f?w=400&q=80',
  'plugs-sockets': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
  'wires-cables': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
  industrial: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
  'panel-automation': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
  'fans-fixtures': 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=80',
  general: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
}

/** Extended product for listing/filtering: includes categoryId, tags, brand, image, and numeric price for sort */
export interface ProductItemFull extends ProductItem {
  categoryId: string
  tags: string[]
  brand: string
  priceValue: number
  image?: string
}

type ProductRow = Omit<ProductItemFull, 'categoryId'> & { categoryId: string }

const productRowsRaw: ProductRow[] = [
  { id: 's1', categoryId: 'switches', name: 'Modular 1-Gang Switch', info: '6A, 250V, white', price: 'From ₹45', tags: ['Modular', 'Residential'], brand: 'Havells', priceValue: 45 },
  { id: 's2', categoryId: 'switches', name: 'Modular 2-Gang Switch', info: '6A, 250V, white', price: 'From ₹65', tags: ['Modular', 'Residential'], brand: 'Havells', priceValue: 65 },
  { id: 's3', categoryId: 'switches', name: 'Modular 3-Gang Switch', info: '6A, 250V, white', price: 'From ₹85', tags: ['Modular', 'Residential'], brand: 'Panasonic', priceValue: 85 },
  { id: 's4', categoryId: 'switches', name: 'Bell Push Switch', info: '6A, 250V', price: 'From ₹35', tags: ['Bell', 'Residential'], brand: 'Philips', priceValue: 35 },
  { id: 's5', categoryId: 'switches', name: 'Industrial Toggle Switch', info: '16A, 440V, heavy duty', price: 'From ₹120', tags: ['Industrial', 'Heavy Duty'], brand: 'Panasonic', priceValue: 120 },
  { id: 'l1', categoryId: 'led-lights', name: 'LED Panel Light 12W', info: '2x2 ft, 1200 lm', price: 'From ₹280', tags: ['Panel', 'Commercial'], brand: 'Philips', priceValue: 280 },
  { id: 'l2', categoryId: 'led-lights', name: 'LED Panel Light 18W', info: '2x2 ft, 1800 lm', price: 'From ₹350', tags: ['Panel', 'Commercial'], brand: 'Philips', priceValue: 350 },
  { id: 'l3', categoryId: 'led-lights', name: 'LED Bulb 9W', info: 'B22, cool white', price: 'From ₹80', tags: ['Bulb', 'Residential'], brand: 'Havells', priceValue: 80 },
  { id: 'l4', categoryId: 'led-lights', name: 'LED Bulb 15W', info: 'B22, cool white', price: 'From ₹110', tags: ['Bulb', 'Residential'], brand: 'Panasonic', priceValue: 110 },
  { id: 'l5', categoryId: 'led-lights', name: 'LED Strip 5m', info: '12V, 5050 SMD', price: 'From ₹250', tags: ['Strip', 'Decorative'], brand: 'Philips', priceValue: 250 },
  { id: 'm1', categoryId: 'multimeters', name: 'Digital Multimeter Basic', info: 'DC/AC voltage, current, resistance', price: 'From ₹180', tags: ['Digital', 'Testing'], brand: 'Panasonic', priceValue: 180 },
  { id: 'm2', categoryId: 'multimeters', name: 'Digital Multimeter Pro', info: 'True RMS, capacitance, temp', price: 'From ₹450', tags: ['Digital', 'Professional'], brand: 'Panasonic', priceValue: 450 },
  { id: 'm3', categoryId: 'multimeters', name: 'Clamp Meter 400A', info: 'AC current, voltage', price: 'From ₹1,200', tags: ['Clamp', 'Industrial'], brand: 'Havells', priceValue: 1200 },
  { id: 'm4', categoryId: 'multimeters', name: 'Voltage Tester Pen', info: 'Non-contact, 12–1000V', price: 'From ₹150', tags: ['Tester', 'Safety'], brand: 'Philips', priceValue: 150 },
  { id: 'p1', categoryId: 'plugs-sockets', name: '6A Modular Socket', info: '2-pin, 250V', price: 'From ₹55', tags: ['Modular', 'Residential'], brand: 'Havells', priceValue: 55 },
  { id: 'p2', categoryId: 'plugs-sockets', name: '16A Modular Socket', info: '3-pin, 250V', price: 'From ₹75', tags: ['Modular', 'Commercial'], brand: 'Panasonic', priceValue: 75 },
  { id: 'p3', categoryId: 'plugs-sockets', name: 'Universal Plug 6A', info: 'Multi-country', price: 'From ₹40', tags: ['Plug', 'Travel'], brand: 'Philips', priceValue: 40 },
  { id: 'p4', categoryId: 'plugs-sockets', name: 'Extension Board 6A 3m', info: '3 sockets, with switch', price: 'From ₹180', tags: ['Extension', 'Power'], brand: 'Havells', priceValue: 180 },
  { id: 'w1', categoryId: 'wires-cables', name: 'FR Wire 1.5 sq mm', info: '90m roll, 1.1kV', price: 'From ₹1,800/roll', tags: ['Wire', 'FR'], brand: 'Havells', priceValue: 1800 },
  { id: 'w2', categoryId: 'wires-cables', name: 'FR Wire 2.5 sq mm', info: '90m roll, 1.1kV', price: 'From ₹2,800/roll', tags: ['Wire', 'FR'], brand: 'Panasonic', priceValue: 2800 },
  { id: 'w3', categoryId: 'wires-cables', name: 'Flexible Cable 2x1.5', info: 'Per metre', price: 'From ₹35/m', tags: ['Cable', 'Flexible'], brand: 'Havells', priceValue: 35 },
  { id: 'w4', categoryId: 'wires-cables', name: 'Coaxial Cable', info: 'RG6, per metre', price: 'From ₹25/m', tags: ['Cable', 'Coaxial'], brand: 'Philips', priceValue: 25 },
  { id: 'i1', categoryId: 'industrial', name: 'MCB 16A Single Pole', info: '6kA, C-curve', price: 'From ₹95', tags: ['MCB', 'Protection'], brand: 'Havells', priceValue: 95 },
  { id: 'i2', categoryId: 'industrial', name: 'MCB 32A Triple Pole', info: '10kA, C-curve', price: 'From ₹380', tags: ['MCB', 'Industrial'], brand: 'Panasonic', priceValue: 380 },
  { id: 'i3', categoryId: 'industrial', name: 'Contactor 25A', info: '24V coil, 4 pole', price: 'From ₹450', tags: ['Contactor', 'Automation'], brand: 'Panasonic', priceValue: 450 },
  { id: 'i4', categoryId: 'industrial', name: 'Overload Relay', info: '9–13A range', price: 'From ₹320', tags: ['Relay', 'Protection'], brand: 'Havells', priceValue: 320 },
  { id: 'pa1', categoryId: 'panel-automation', name: 'PLC Enclosure 400x300', info: 'Wall mount, IP54', price: 'From ₹1,200', tags: ['Enclosure', 'Panel'], brand: 'Panasonic', priceValue: 1200 },
  { id: 'pa2', categoryId: 'panel-automation', name: 'DIN Rail 35mm', info: '1m length', price: 'From ₹80', tags: ['DIN Rail', 'Panel'], brand: 'Havells', priceValue: 80 },
  { id: 'pa3', categoryId: 'panel-automation', name: 'Terminal Block 12-way', info: 'Screw type', price: 'From ₹45', tags: ['Terminal', 'Panel'], brand: 'Philips', priceValue: 45 },
  { id: 'pa4', categoryId: 'panel-automation', name: 'Selector Switch 2-position', info: '22mm, 10A', price: 'From ₹85', tags: ['Switch', 'Panel'], brand: 'Panasonic', priceValue: 85 },
  { id: 'pa5', categoryId: 'panel-automation', name: 'Indicator Light 22mm', info: '220V, red/green/yellow', price: 'From ₹55', tags: ['Indicator', 'Panel'], brand: 'Philips', priceValue: 55 },
  { id: 'f1', categoryId: 'fans-fixtures', name: 'Ceiling Fan 1200mm', info: 'Decorative, 75W', price: 'From ₹1,400', tags: ['Fan', 'Ceiling'], brand: 'Havells', priceValue: 1400 },
  { id: 'f2', categoryId: 'fans-fixtures', name: 'Exhaust Fan 6"', info: '240 CMM', price: 'From ₹650', tags: ['Fan', 'Exhaust'], brand: 'Panasonic', priceValue: 650 },
  { id: 'f3', categoryId: 'fans-fixtures', name: 'LED Batten 20W', info: '4 ft, IP20', price: 'From ₹220', tags: ['LED', 'Batten'], brand: 'Philips', priceValue: 220 },
  { id: 'f4', categoryId: 'fans-fixtures', name: 'Panel Holder', info: 'For 2x2 LED panel', price: 'From ₹120', tags: ['Holder', 'Fixture'], brand: 'Havells', priceValue: 120 },
  { id: 'g1', categoryId: 'general', name: 'Insulation Tape 19mm', info: 'PVC, 20m roll', price: 'From ₹25', tags: ['Tape', 'Consumable'], brand: 'Panasonic', priceValue: 25 },
  { id: 'g2', categoryId: 'general', name: 'Cable Tie Assortment', info: '100 pcs mixed', price: 'From ₹80', tags: ['Cable Tie', 'Consumable'], brand: 'Philips', priceValue: 80 },
  { id: 'g3', categoryId: 'general', name: 'Wire Connectors', info: 'Strip type, 100 pcs', price: 'From ₹60', tags: ['Connector', 'Consumable'], brand: 'Havells', priceValue: 60 },
  { id: 'g4', categoryId: 'general', name: 'Fuse 5A Ceramic', info: '250V', price: 'From ₹15', tags: ['Fuse', 'Protection'], brand: 'Panasonic', priceValue: 15 },
]

const productRows: ProductItemFull[] = productRowsRaw.map((p) => ({
  ...p,
  image: CATEGORY_IMAGES[p.categoryId],
}))

export const ALL_PRODUCTS: ProductItemFull[] = productRows

/** Products by category id (for category detail page) */
export const PRODUCTS_BY_CATEGORY: Record<string, ProductItem[]> = (() => {
  const map: Record<string, ProductItem[]> = {}
  for (const p of productRows) {
    const { categoryId, tags, brand, priceValue, image, ...rest } = p
    if (!map[categoryId]) map[categoryId] = []
    map[categoryId].push(rest)
  }
  return map
})()

/** Unique tags across all products (for filter) */
export const ALL_TAGS = [...new Set(productRowsRaw.flatMap((p) => p.tags))].sort()

/** Unique brands across all products (for filter) */
export const ALL_BRANDS = [...new Set(productRowsRaw.map((p) => p.brand))].sort()
