import { Quotes } from "deco-sites/decocxecomerce/loaders/zenquotes.ts"
import ListItens from "../components/ui/ListItens.tsx";
import Rating from "../components/daisy/Rating.tsx"

export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  title: string;
  subtitler: string;
  description?: string; 
  items: ListItem[];
  quote?: Quotes;
}

export default function BannerList(props: Props) {
  return (
    <div className="bg-primary p-4">
      <h1 className="text-2xl font-bold">{props.subtitler}</h1>
      <Rating maxRating={5}/>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {props.description && <p className="text-gray-600">{props.description}
      </p>}
      <ListItens items={props.items}/>
      {props.quote && <p>{props.quote.data[0]}</p>}
    </div>
  );
}
