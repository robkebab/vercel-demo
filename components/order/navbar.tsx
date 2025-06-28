import { Button } from "@/components/ui/button";
import { Icon } from "../ui/icon";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-2 md:px-4 py-2 border-b border-gray-100 bg-background">
      <div className="flex items-center gap-2 flex-shrink-0">
        <button className="md:hidden p-2" aria-label="Open menu">
          <Icon.Menu className="w-6 h-6 text-primary" />
        </button>
        <span className="hidden md:inline-flex">
          <Icon.Drumstick className="w-8 h-8 text-primary" />
        </span>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-xs text-gray-400">Carry-out</span>
          <span className="text-sm font-semibold text-primary">
            6th & Congress In-Line
          </span>
        </div>
        <Button
          variant="ghost"
          className="hidden md:inline-flex ml-1 text-xs text-primary px-1 py-0 h-auto"
        >
          Change
        </Button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <span className="hidden md:inline text-primary font-semibold">
          Menu
        </span>
        <span className="md:hidden">
          <Icon.Drumstick className="w-8 h-8 text-primary" />
        </span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Button className="hidden md:inline-flex rounded-full px-6">
          Sign In
        </Button>
        <Button
          variant="default"
          className="rounded-full px-4 md:px-6 flex items-center gap-2 bg-primary text-white"
          aria-label="Your Order"
        >
          <Icon.ShoppingBag />
          <span className="hidden md:inline">Your Order</span>
        </Button>
      </div>
    </nav>
  );
}
