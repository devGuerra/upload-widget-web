import * as Collapsible from "@radix-ui/react-collapsible";
import { Minimize2 } from "lucide-react";

export function UploadWidgetMinimizedButton() {
	return (
		<Collapsible.Trigger className="group w-full bg-white/2 py-3 px-5 flex items-center justify-between">
			<span className="text-small font-medium">Upload files</span>
			<Minimize2
				className="size-4 text-zinc-400 group-hover:text-zinc-100"
				strokeWidth={1.5}
			/>
		</Collapsible.Trigger>
	);
}
