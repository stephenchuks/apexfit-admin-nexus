
import { cn } from "@/lib/utils";

interface ChartPlaceholderProps {
  label: string;
  className?: string;
  height?: string;
}

export function ChartPlaceholder({ 
  label, 
  className,
  height = "h-64" 
}: ChartPlaceholderProps) {
  return (
    <div className={cn(
      "bg-gray-100 rounded-xl flex items-center justify-center", 
      height,
      className
    )}>
      <span className="text-gray-400">{label}</span>
    </div>
  );
}
