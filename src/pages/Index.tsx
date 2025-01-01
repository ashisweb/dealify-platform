import { Gift, ShoppingBag, Utensils, Car, Plane, Laptop } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { DealCard } from "@/components/DealCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Newsletter } from "@/components/Newsletter";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Save More with Latest Deals & Coupons
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Discover the best promo codes and deals from your favorite stores
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDeals.map((deal, index) => (
              <DealCard key={index} {...deal} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Index;