import { Button } from "@/components/ui/button";
import { Icon } from "../../../../components/ui/icon";
import Image from "next/image";
import { YourOrderButton } from "./your-order-button";
import Link from "next/link";
import { AccountButton } from "./account-button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-2 md:px-4 py-3 bg-background mb-4 md:mb-6 border-b border-border">
      <div className="flex items-center gap-2 flex-shrink-0">
        <Button className="md:hidden p-2" aria-label="Open menu">
          <Icon.Menu className="w-6 h-6 text-primary" />
        </Button>
        <span className="hidden md:inline-flex">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Tommy Want Wingy"
              width={48}
              height={48}
            />
          </Link>
        </span>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Link
          href="/order/menu/combos"
          className="hidden md:inline text-primary font-semibold hover:text-orange-500"
        >
          Menu
        </Link>
        <span className="md:hidden">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Tommy Want Wingy"
              width={32}
              height={32}
            />
          </Link>
        </span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <AccountButton />
        <YourOrderButton />
      </div>
    </nav>
  );
}
