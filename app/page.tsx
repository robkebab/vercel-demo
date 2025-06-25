import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation Header */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">
                Wing Bada Bing
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#menu"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Menu
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#order"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Order
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Typography variant="h1" className="text-gray-900 leading-tight">
                The Best Wings in
                <span className="text-orange-600 block">Town!</span>
              </Typography>
              <Typography
                variant="primary"
                className="text-xl text-gray-600 leading-relaxed"
              >
                Crispy, juicy, and packed with flavor. Our wings are made fresh
                daily with the finest ingredients and our signature spice
                blends.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Order Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  View Menu
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 z-20"></div>
                <div className="relative h-full w-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🍗</div>
                    <Typography variant="h4" className="text-gray-700">
                      Delicious Wings
                    </Typography>
                    <Typography variant="secondary" className="text-gray-600">
                      Fresh • Crispy • Flavorful
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wing Flavors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-gray-900 mb-4">
              Our Signature Flavors
            </Typography>
            <Typography
              variant="primary"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From classic buffalo to our unique house specials, we have a
              flavor for every wing lover.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                description:
                  "Our traditional buffalo sauce with the perfect heat",
                emoji: "🔥",
                name: "Classic Buffalo",
              },
              {
                description: "Sweet and smoky barbecue with a honey glaze",
                emoji: "🍯",
                name: "Honey BBQ",
              },
              {
                description: "Creamy parmesan with roasted garlic",
                emoji: "🧄",
                name: "Garlic Parmesan",
              },
              {
                description: "Gochujang glaze with sesame seeds",
                emoji: "🌶️",
                name: "Spicy Korean",
              },
              {
                description: "Zesty lemon with cracked black pepper",
                emoji: "🍋",
                name: "Lemon Pepper",
              },
              {
                description: "Island spices with a tropical kick",
                emoji: "🌴",
                name: "Caribbean Jerk",
              },
            ].map((flavor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{flavor.emoji}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {flavor.name}
                </h4>
                <p className="text-gray-600">{flavor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section
        id="menu"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              More Than Just Wings
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your meal with our delicious sides and appetizers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "🍟", name: "Crispy Fries", price: "$4.99" },
              { emoji: "🥔", name: "Tater Tots", price: "$5.99" },
              { emoji: "🥒", name: "Fried Pickles", price: "$6.99" },
              { emoji: "🧅", name: "Onion Rings", price: "$7.99" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.name}
                </h4>
                <p className="text-orange-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                About Wing Bada Bing
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a passion for perfect wings, Wing Bada Bing has
                been serving the community with the crispiest, juiciest wings
                since day one. Our secret? Fresh ingredients, perfect cooking
                techniques, and sauces made from scratch.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every wing is cooked to order, ensuring that perfect crunch and
                tenderness that keeps our customers coming back for more.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">12</div>
                  <div className="text-sm text-gray-600">Wing Flavors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">5⭐</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 z-10"></div>
                <div className="relative h-full w-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🏆</div>
                    <p className="text-lg font-semibold text-gray-700">
                      Award Winning
                    </p>
                    <p className="text-sm text-gray-600">
                      Best Wings in the City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section
        id="order"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-red-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            Get your wings delivered hot and fresh to your door, or come visit
            us for the full experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Order Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Call Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-orange-400 mb-4">
                Wing Bada Bing
              </h4>
              <p className="text-gray-300">
                The best wings in town, made fresh daily with love and the
                finest ingredients.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Hours</h5>
              <p className="text-gray-300">Mon-Sun: 11AM - 10PM</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
              <p className="text-gray-300">Email: info@wingbadabing.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wing Bada Bing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
