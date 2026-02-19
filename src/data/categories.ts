export interface CategoryItem {
  id: string
  title: string
  description: string
  icon: string
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'switches',
    title: 'Switches',
    description: 'Quality switches for residential and commercial use.',
    icon: '⚡',
  },
  {
    id: 'led-lights',
    title: 'LED Lights',
    description: 'Energy-efficient LED lighting solutions for every need.',
    icon: '💡',
  },
  {
    id: 'multimeters',
    title: 'Multimeters & Testers',
    description: 'Precision multimeters and electrical testing equipment.',
    icon: '🔧',
  },
  {
    id: 'plugs-sockets',
    title: 'Plugs & Sockets',
    description: 'Durable plugs, sockets and connection solutions.',
    icon: '🔌',
  },
  {
    id: 'wires-cables',
    title: 'Wires & Cables',
    description: 'Heavy-duty wires and cables for industrial and home use.',
    icon: '📿',
  },
  {
    id: 'industrial',
    title: 'Heavy Duty Industrial',
    description: 'Industrial-grade electrical equipment and components.',
    icon: '🏭',
  },
  {
    id: 'panel-automation',
    title: 'Panel & Industrial Automation',
    description: 'Panel manufacturing components and industrial automation products.',
    icon: '⚙️',
  },
  {
    id: 'fans-fixtures',
    title: 'Fans & Fixtures',
    description: 'Ceiling fans, exhaust fans and lighting fixtures.',
    icon: '🌀',
  },
  {
    id: 'general',
    title: 'General Electronics',
    description: 'Broad range of electronic components and accessories.',
    icon: '📦',
  },
]
