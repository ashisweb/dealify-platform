import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface DealCardProps {
  store: string;
  discount: string;
  description: string;
  code?: string;
  expiryDate: string;
}

export const DealCard = ({ store, discount, description, code, expiryDate }: DealCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold">{store}</CardTitle>
          <Badge variant="secondary" className="text-primary font-bold">
            {discount}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-500">
          Expires: {expiryDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {code ? (
          <code className="bg-primary-light px-3 py-1 rounded text-primary font-mono">
            {code}
          </code>
        ) : (
          <span className="text-sm text-gray-500">No code needed</span>
        )}
        <Button variant="default">Get Deal</Button>
      </CardFooter>
    </Card>
  );
};