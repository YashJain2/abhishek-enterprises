export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  image?: string
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'industrial-automation-trends-2025',
    title: 'Industrial Automation Trends in 2025',
    excerpt: 'How panel manufacturing and automation are evolving for smarter factories and better efficiency.',
    date: '2025-02-15',
    author: 'Abhishek Enterprises',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    content: 'Industrial automation continues to drive efficiency and quality across manufacturing. From control panels to PLCs and HMIs, businesses in Faridabad and the NCR are adopting smarter solutions. We support this with quality panel manufacturing components and industrial automation products tailored for local industry needs.',
  },
  {
    slug: 'choosing-right-electrical-switches',
    title: 'Choosing the Right Electrical Switches for Your Project',
    excerpt: 'A quick guide to selecting switches for residential, commercial, and industrial applications.',
    date: '2025-02-10',
    author: 'Abhishek Enterprises',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    content: 'Switches form the backbone of any electrical installation. Whether you need modular switches for homes, heavy-duty switches for panels, or industrial-grade units, choosing the right rating, brand, and type ensures safety and longevity. We stock a wide range to suit every application.',
  },
  {
    slug: 'led-lighting-for-industry',
    title: 'LED Lighting for Industry: Benefits and Options',
    excerpt: 'Why industries are switching to LED and what to look for in industrial lighting.',
    date: '2025-02-05',
    author: 'Abhishek Enterprises',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
    content: 'LED lighting reduces power costs and improves visibility in warehouses and factories. From high-bay lights to panel lights and emergency lighting, the right choice depends on ceiling height, area, and duty cycle. We help businesses in New Industrial Township and beyond with the right products.',
  },
]
