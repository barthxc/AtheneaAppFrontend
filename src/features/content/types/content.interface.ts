export interface ContentImageResponse {
	id: string;
	url: string;
	public_id: string;
}

export interface ContentResponse extends Content {
	id: string;
}

export interface Content {
	title: string;
	description: string;
	date: Date;
	position: number;
	typeContent: string;
	images: ContentImageResponse[];
}

// TODO: Check if this is still valid
export interface CreateContent extends Content {
	image: File[];
}
