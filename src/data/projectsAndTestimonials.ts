export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags?: string[]
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Industrial Control Panel Installation',
    description: 'Complete panel design, assembly and installation for a manufacturing unit in NIT Faridabad.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    tags: ['Panel', 'Automation'],
  },
  {
    id: '2',
    title: 'Warehouse LED Lighting',
    description: 'LED high-bay and strip lighting for a 10,000 sq ft warehouse with energy-efficient fixtures.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
    tags: ['LED', 'Lighting'],
  },
  {
    id: '3',
    title: 'Electrical Distribution Upgrade',
    description: 'MCBs, contactors and wiring upgrade for a commercial building in Faridabad.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    tags: ['Wiring', 'Distribution'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Abhishek Enterprises supplied all electrical components for our new factory. Quality products, on-time delivery and fair rates. Highly recommended.',
    author: 'Rajesh Kumar',
    role: 'Proprietor, K.R. Industries',
  },
  {
    id: '2',
    quote: 'We have been sourcing switches, wires and panel components from them for over two years. Reliable and professional.',
    author: 'Amit Sharma',
    role: 'Electrical Contractor, Faridabad',
  },
  {
    id: '3',
    quote: 'Good range of industrial automation products. They understood our requirements and delivered as promised.',
    author: 'Vikram Singh',
    role: 'Project Manager, NCR',
  },
]
