import { Quotes } from "deco-sites/decocxecomerce/loaders/zenquotes.ts";
import ListItens from "../components/ui/ListItens.tsx";
import Rating from "../components/daisy/Rating.tsx";
import { Chart } from "https://deno.land/x/fresh_charts@0.3.1/mod.ts"
import { Section } from "deco/blocks/section.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  img: ImageWidget;
  html: HTMLWidget;

  section: Section;
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
      {props.section && <props.section.Component {...props.section.props}/> }
      <Rating maxRating={5} />
      <Chart
        type="line"
        data={{
          labels: ["1", "2", "3"],
          datasets: [{
            label:"Sessions",
            data: [346, 233, 123],
          },{
            label:"Users",
            data:[123, 234, 234]
          }],
        }}
      />
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {props.description && <p className="text-gray-600">{props.description}
      </p>}
      <ListItens items={props.items} />
      {props.quote && <p>{props.quote.data[0]}</p>}
    </div>
  );
}
