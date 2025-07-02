import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}

export function SignInLink() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
      className="inline-block"
    >
      <button className="underline text-primary cursor-pointer hover:text-primary/80 p-0">
        Sign In
      </button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant="ghost" {...props}>
        Sign Out
      </Button>
    </form>
  );
}
