import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  dealCount: number;
}

export const CategoryCard = ({ icon: Icon, name, dealCount }: CategoryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Icon className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
        <h3 className="font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{dealCount} deals</p>
      </CardContent>
    </Card>
  );
};