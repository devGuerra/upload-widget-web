import { UploadCloud } from "lucide-react";

export function UploadWidgetitle() {
	return (
		<div className="flex items-center gap-1.5 text-sm font-medium">
			<UploadCloud className="size-4 text-zinc-400" />
			<span className="">Upload files</span>
		</div>
	);
}
