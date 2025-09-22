import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";

type DemoProps = {
  handleFeatureClick?: (feature: string) => void;
};

const Demo = ({ handleFeatureClick }: DemoProps) => {
  return (
    <section id="demo" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Watch How Career Path Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See a quick demo of how our platform guides students step by step towards their future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-secondary/20 rounded-2xl flex items-center justify-center">
            <Button size="lg" variant="outline" className="bg-background/80">
              <PlayCircle className="h-8 w-8 mr-2" />
              Play Demo Video
            </Button>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              onClick={() => handleFeatureClick?.("Try the Demo Now")}
            >
              Try the Demo Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
