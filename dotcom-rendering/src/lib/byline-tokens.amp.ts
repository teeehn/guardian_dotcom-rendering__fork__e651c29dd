import type { TagType } from '../types/tag';

export const bylineTokens = (
	byline: string,
	contributorTags: TagType[],
): string[] => {
	const titles = contributorTags.map((c) => c.title).filter(Boolean);

	if (titles.length === 0) {
		return [byline];
	}

	const regex = new RegExp(`(${titles.join('|')})`);

	return byline.split(regex).filter((token) => token !== undefined);
};
