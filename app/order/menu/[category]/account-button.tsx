import { SignIn, SignOut } from "@/components/auth/auth-buttons";
import { auth } from "@/auth";

const CLS =
  "text-primary hover:text-primary/80 bg-foreground/30 rounded-full px-4 py-2";

export async function AccountButton() {
  const session = await auth();
  if (session) {
    return <SignOut variant="ghost" className={CLS} />;
  }
  return <SignIn variant="ghost" className={CLS} />;
}
