import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
}

export default function CategoryCard({ id, name, icon: IconComponent }: CategoryCardProps) {
  return (
    <div
      key={id}
      className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <IconComponent className="h-8 w-8 text-indigo-600 mb-4" />
      <span className="text-sm font-medium text-gray-900">{name}</span>
    </div>
  );
}