import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import resumePdf from "@/assets/Soso_Pkhakadze_Resume.pdf";
import { ReactNode } from "react";

interface ResumeViewerProps {
  triggerType?: "icon" | "button";
  children?: ReactNode;
}

export const ResumeViewer = ({ triggerType = "button", children }: ResumeViewerProps) => {
  const triggerContent = {
    icon: (
      <Button variant="outline" size="icon" aria-label="View Resume">
        <Download className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    ),
    button: (
      <Button
        variant="outline"
        size="lg"
        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-bounce hover:scale-105"
      >
        View Resume
      </Button>
    ),
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? children : triggerContent[triggerType]}
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>My Resume</DialogTitle>
        </DialogHeader>

        <div className="px-6">
          <embed
            src={resumePdf}
            type="application/pdf"
            className="w-full rounded-md border"
            style={{ height: "65vh" }}
          />
        </div>

        <DialogFooter className="p-6 bg-muted/50 rounded-b-lg">
          <Button
            asChild
            className="bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            <a href={resumePdf} download="Soso_Pkhakadze_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
