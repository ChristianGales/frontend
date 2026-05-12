import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const latestTransactions = [
  {
    id: 1,
    title: "Payment",
    badge: "John Doe",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    count: 2000,
  },
  {
    id: 2,
    title: "Subscription",
    badge: "Jane Smith",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    count: 3500,
  },
  {
    id: 3,
    title: "Refund",
    badge: "Michael Lee",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    count: 1200,
  },
  {
    id: 4,
    title: "Invoice",
    badge: "Sarah Johnson",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
    count: 4500,
  },
  {
    id: 5,
    title: "Transfer",
    badge: "Chris Evans",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    count: 2800,
  },
]

export const popularItems = [
  {
    id: 1,
    title: "MacBook Pro",
    badge: "Electronics",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    count: 15,
  },
  {
    id: 2,
    title: "Gaming Chair",
    badge: "Furniture",
    image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
    count: 9,
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    badge: "Accessories",
    image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
    count: 20,
  },
  {
    id: 4,
    title: "Wireless Mouse",
    badge: "Accessories",
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
    count: 13,

  },
  {
    id: 5,
    title: "Monitor",
    badge: "Electronics",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    count: 7,
  },
]

const CardList  = ({title}:{title:string}) => {

    const list = title === "Popular Items" ? popularItems : latestTransactions


    return (
        <div className="">
            <h1 className="text-lg font-meduim mb-6"></h1>
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
                    )};
                </div>
        </div>
    );
};

export default CardList;