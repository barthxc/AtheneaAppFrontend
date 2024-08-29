import { useCallback, useState } from "react";

export const useImagePreview = () => {
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	const readImageFile = useCallback((file: File) => {
		if (!file.type.startsWith("image/")) {
			setImagePreview(null);
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			if (typeof reader.result === "string") {
				setImagePreview(reader.result);
				return;
			}
		};
		reader.readAsDataURL(file);
	}, []);

	return { imagePreview, setImagePreview, readImageFile };
};
