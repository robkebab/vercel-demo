import Link from "next/link";
import { menuCategories } from "@/lib/data/menu-categories";

const categories = menuCategories;

interface IProps {
  category: string;
}

export async function Sidenav({ category }: IProps) {
  const activeCategory = categories.find((cat) => cat.path === category);
  return (
    <aside className="hidden md:block w-72 bg-background rounded-xl border border-border p-6 mr-6">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <nav className="flex flex-col gap-2">
        {categories.map((cat) => (
          <Link
            href={`/order/menu/${cat.path}`}
            key={cat.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors
              ${cat.id === activeCategory?.id ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"}`}
            aria-current={cat.id === activeCategory?.id ? "page" : undefined}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
