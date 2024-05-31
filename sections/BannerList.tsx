import { Quotes } from "deco-sites/decocxecomerce/loaders/zenquotes.ts";
import ListItens from "../components/ui/ListItens.tsx";
import Rating from "../components/daisy/Rating.tsx";
import { Chart } from "https://deno.land/x/fresh_charts@0.3.1/mod.ts";
import { Section } from "deco/blocks/section.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { AppContext } from "deco/mod.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

//anotations para definir algo como tamanho do texto e etc na documentação
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

export function Errorfalback({ error }: { error?: Error }) {
  return <div className="text-red-800">Error: {error?.message}</div>;
}

// export const loader = (props: Props, req: Request, ctx: AppContext) => {
//   if (!props.quote || props.quote.data.length === 0) {
//     ctx.response.status = 404;
//   }
//   return props
// }

export default function BannerList(props: Props) {
  return (
    <div className="bg-primary p-4">
      <Image src={props.img} width={600} height={500} />
      {props.section && <props.section.Component {...props.section.props} />}
      <Rating maxRating={5} />
      <button
        {...usePartialSection({ props: { title: "Partial" }, mode: "append" })}
      >
        me click
      </button>
      <Chart
        type="line"
        data={{
          labels: ["1", "2", "3"],
          datasets: [{
            label: "Sessions",
            data: [346, 233, 123],
          }, {
            label: "Users",
            data: [123, 234, 234],
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
