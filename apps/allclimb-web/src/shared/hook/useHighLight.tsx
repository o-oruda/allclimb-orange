import { ReactNode, useMemo } from 'react';

interface IHighLight {
	text: string;
	keyword: string;
}

export const useHighLight = ({ text, keyword }: IHighLight): ReactNode[] => {
	return useMemo(() => {
		if (!keyword) return [text];

		const parts = text.split(new RegExp(`(${keyword})`, 'gi'));

		return parts.map((part, i) =>
			part.toLowerCase() === keyword.toLowerCase() ? (
				<em key={i}>{part}</em>
			) : (
				part
			),
		);
	}, [text, keyword]);
};
