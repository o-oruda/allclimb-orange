import useSearchStore from '@/components/Search/features/useSearchStore';
import { useEffect, useState } from 'react';

const useSearchAutoComplete = () => {
	const { searchValue } = useSearchStore();

	// 자동완성 검색 결과
	const [matchResult, setMatchResult] = useState<string[]>([]);

	useEffect(() => {
		searchValue && fnMatchGround();
	}, [searchValue]);

	// 전체 클라이밍장 임시
	const climbingGround = [
		'어웨이크',
		'웨이브락',
		'더클라임클라이밍',
		'서울숲클라이밍',
	];

	/**
	 * 검색 결과 자동완성
	 */
	const fnMatchGround = () => {
		searchValue
			? setMatchResult(
					climbingGround.filter((ground) =>
						ground.includes(searchValue),
					),
				)
			: setMatchResult([]);
	};

	return { fnMatchGround, matchResult };
};

export default useSearchAutoComplete;
