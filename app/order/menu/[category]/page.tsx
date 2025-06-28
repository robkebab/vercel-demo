import { Sidenav } from "@/components/order/sidenav";

interface IOrderMenuPageProps {
  params: Promise<{ category: string }>;
}

export default async function OrderMenuPage({ params }: IOrderMenuPageProps) {
  const { category } = await params;

  return (
    <>
      <div className="flex">
        <Sidenav category={category} />
      </div>
    </>
  );
}
