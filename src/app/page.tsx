import BennerPage from "@/components/HomePage/benner";
import BooksPage from "@/components/HomePage/books";
import Image from "next/image";

export default function Home() {
  return (<div>
<BennerPage></BennerPage>
<BooksPage></BooksPage>
  </div>
  );
}
