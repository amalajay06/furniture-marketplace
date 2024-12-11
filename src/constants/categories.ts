import { Sofa, BedDouble, UtensilsCrossed, Lamp, Briefcase, BookOpen } from 'lucide-react';

export const categories = [
  { id: '1', name: 'Living Room', icon: Sofa },
  { id: '2', name: 'Bedroom', icon: BedDouble },
  { id: '3', name: 'Dining', icon: UtensilsCrossed },
  { id: '4', name: 'Lighting', icon: Lamp },
  { id: '5', name: 'Office', icon: Briefcase },
  { id: '6', name: 'Storage', icon: BookOpen },
] as const;