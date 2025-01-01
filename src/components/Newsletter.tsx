import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  return (
    <div className="bg-primary-light p-8 rounded-2xl text-center">
      <h2 className="text-2xl font-bold mb-2">Never Miss a Deal</h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter and get the best deals delivered to your inbox.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
        />
        <Button className="whitespace-nowrap">Subscribe Now</Button>
      </div>
    </div>
  );
};