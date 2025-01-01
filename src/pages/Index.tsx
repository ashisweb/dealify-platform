import { Gift, ShoppingBag, Utensils, Car, Plane, Laptop, Sparkles, Clock, Tag } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { DealCard } from "@/components/DealCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const categories = [
  { icon: ShoppingBag, name: "Fashion", dealCount: 156 },
  { icon: Utensils, name: "Food", dealCount: 89 },
  { icon: Car, name: "Automotive", dealCount: 45 },
  { icon: Plane, name: "Travel", dealCount: 78 },
  { icon: Laptop, name: "Electronics", dealCount: 123 },
  { icon: Gift, name: "Gifts", dealCount: 67 },
];

const featuredDeals = [
  {
    store: "Amazon",
    discount: "20% OFF",
    description: "Save on selected electronics and accessories",
    code: "TECH20",
    expiryDate: "May 30, 2024",
  },
  {
    store: "Nike",
    discount: "15% OFF",
    description: "Extra discount on sale items",
    code: "SPRING15",
    expiryDate: "May 25, 2024",
  },
  {
    store: "Uber Eats",
    discount: "$10 OFF",
    description: "First order discount for new customers",
    expiryDate: "June 1, 2024",
  },
];

const trendingDeals = [
  {
    store: "Apple Store",
    discount: "10% OFF",
    description: "Student discount on MacBooks",
    code: "STUDENT10",
    expiryDate: "June 15, 2024",
  },
  {
    store: "Adidas",
    discount: "25% OFF",
    description: "Seasonal clearance on sportswear",
    code: "SPORT25",
    expiryDate: "May 28, 2024",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with Dancing Logo */}
      <header className="bg-white py-6 px-4 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/80">
        <div className="container max-w-6xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary group">
            <span className="inline-block animate-bounce hover:animate-none transition-all duration-300 cursor-pointer">
              deals
            </span>
            <span className="inline-block text-gray-600">and</span>
            <span className="inline-block text-primary animate-bounce hover:animate-none transition-all duration-300 cursor-pointer">
              offers
            </span>
            <span className="text-gray-600">.site</span>
          </h2>
          <div className="hidden md:flex gap-4">
            <Tag className="text-primary animate-pulse" />
            <Clock className="text-primary animate-spin-slow" />
            <Sparkles className="text-primary animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero Section with Enhanced Animation */}
      <section className="bg-gradient-to-r from-primary-light via-white to-primary-light py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="mb-8 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600 animate-fade-in">
              Save More with Latest
              <br /> Deals & Coupons
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto animate-fade-in">
              Discover the best promo codes and deals from your favorite stores
            </p>
          </div>
          <div className="animate-fade-in">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-12 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-gray-600">Active Coupons</p>
            </div>
            <div className="space-y-2 animate-fade-in">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-gray-600">Partner Stores</p>
            </div>
            <div className="space-y-2 animate-fade-in">
              <p className="text-3xl font-bold text-primary">50K+</p>
              <p className="text-gray-600">Happy Users</p>
            </div>
            <div className="space-y-2 animate-fade-in">
              <p className="text-3xl font-bold text-primary">100K+</p>
              <p className="text-gray-600">Deals Claimed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals with Enhanced Animation */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="text-primary" />
            Featured Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDeals.map((deal, index) => (
              <DealCard key={index} {...deal} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Deals - New Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-light via-white to-primary-light">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Tag className="text-primary" />
            Trending Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingDeals.map((deal, index) => (
              <DealCard key={index} {...deal} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories with Enhanced Animation */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter with Enhanced Design */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;