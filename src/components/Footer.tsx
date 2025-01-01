import { Copyright, Award, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 mt-16 border-t border-gray-200">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Award size={24} className="text-primary" />
            <h3 className="text-xl font-semibold text-gray-800">dealsandoffers.site</h3>
            <Award size={24} className="text-primary" />
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <Copyright size={18} />
            <span className="font-medium">2025</span>
            <Star size={18} className="text-primary" />
            <p className="text-gray-600">The website is currently for testing purposes and is undergoing testing.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};