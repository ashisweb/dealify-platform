import { Copyright, Check } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 mt-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Copyright size={16} />
          <span>2024</span>
          <Check size={16} className="text-primary" />
          <p>The website is currently for testing purposes and is undergoing testing.</p>
        </div>
      </div>
    </footer>
  );
};