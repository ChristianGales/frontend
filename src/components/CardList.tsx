import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const latestTransactions = [
  {
    id: 1,
    title: "Payment",
    badge: "John Doe",
    image: "/images/blank-user.png",
    count: 2000,
  },
  {
    id: 2,
    title: "Subscription",
    badge: "Jane Smith",
    image: "/images/blank-user.png",
    count: 3500,
  },
  {
    id: 3,
    title: "Refund",
    badge: "Michael Lee",
    image: "/images/blank-user.png",
    count: 1200,
  },
  {
    id: 4,
    title: "Invoice",
    badge: "Sarah Johnson",
    image: "/images/blank-user.png",
    count: 4500,
  },
  {
    id: 5,
    title: "Transfer",
    badge: "Chris Evans",
    image: "/images/blank-user.png",
    count: 2800,
  },
]

export const popularItems = [
  {
    id: 1,
    title: "MacBook Pro",
    badge: "Electronics",
    image: "/images/blank-user.png",
    count: 15,
  },
  {
    id: 2,
    title: "Gaming Chair",
    badge: "Furniture",
    image: "/images/blank-user.png",
    count: 9,
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    badge: "Accessories",
    image: "/images/blank-user.png",
    count: 20,
  },
  {
    id: 4,
    title: "Wireless Mouse",
    badge: "Accessories",
    image: "/images/blank-user.png",
    count: 13,
  },
  {
    id: 5,
    title: "Monitor",
    badge: "Electronics",
    image: "/images/blank-user.png",
    count: 7,
  },
]

const CardList  = ({title}:{title:string}) => {

    const list = Array.isArray(title === "Popular Items" ? popularItems : latestTransactions)
        ? (title === "Popular Items" ? popularItems : latestTransactions)
        : []

    return (
        <div className="">
            <h1 className="text-lg font-meduim mb-6">Recent Hires</h1>
                <div className="flex flex-col gap-2">
                    {list.map(item=>
                        <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                                <Image src={item.image} alt={item.title} fill className="object-cover"/> 
                            </div>
                            <CardContent className="flex-1 p-0">
                                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                <Badge variant="outline">{item.badge}</Badge>
                            </CardContent>
                            <CardFooter className="p-0">{item.count/1000}K</CardFooter>
                        </Card>
                    )}
                </div>
        </div>
    );
};

export default CardList;