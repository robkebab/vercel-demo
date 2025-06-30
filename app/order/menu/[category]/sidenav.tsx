import Link from "next/link";
import { ProductCategory } from "@db/prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

const parseCategoryPath = (categoryName: string) => {
  return categoryName.toLowerCase().replace(/\s+/g, "-");
};

interface IProps {
  categories: ProductCategory[];
  activeId: string;
}

export async function Sidenav({ categories, activeId }: IProps) {
  return (
    <aside className="hidden md:block w-72 bg-background rounded-xl border border-border p-6 mr-6">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <nav className="flex flex-col gap-2">
        {categories.map((cat) => (
          <Link
            href={`/order/menu/${parseCategoryPath(cat.name)}`}
            key={cat.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors
              ${cat.id === activeId ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"}`}
            aria-current={cat.id === activeId ? "page" : undefined}
          >
            <span>{cat.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export function SidenavSkeleton() {
  return (
    <aside className="hidden md:block w-72 bg-background rounded-xl border border-border p-6 mr-6">
      <Skeleton className="h-8 w-24 mb-6" />
      <nav className="flex flex-col gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 rounded-lg"
          >
            <Skeleton className="h-5 flex-1" />
          </div>
        ))}
      </nav>
    </aside>
  );
}
