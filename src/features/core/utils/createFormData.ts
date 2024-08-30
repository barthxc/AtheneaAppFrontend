export function createFormData(data: Record<string, any>): FormData {
	const formData = new FormData();

	for (const key in data) {
		if (data[key] instanceof FileList) {
			for (const file of Array.from(data[key])) {
				formData.append(key, file);
			}
		} else if (data[key] instanceof File) {
			formData.append(key, data[key]);
		} else {
			formData.append(key, data[key]);
		}
	}

	return formData;
}
