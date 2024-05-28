import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ExamplesPage() {
  return (
    <div className="flex flex-col mx-auto md:w-[60%] md:max-w-[1200px] mt-24">
      <div className="flex items-center gap-2">
        {/* back button */}
        <Link href="/">
          <LucideArrowLeft size={32} />
        </Link>

        <h1 className="font-medium text-[32px]">Design Principle Examples</h1>
      </div>

      {/* Example template */}
      <Accordion type="multiple">
        <AccordionItem value="example-1">
          <AccordionTrigger>Trigger</AccordionTrigger>

          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
