/**
 * ✏️ 주석은 상위 카테고리와 해당 URL 설명으로 분류했습니다.
 *   상위 카테고리는 필수이고 현재는 하단바 기준으로 나눴습니다.
 *   애매한 페이지들은 🎸 기타 상위 카테고리에 모아주세요 🙇🏼‍♀️!
 *
 * 📝 형식
 * ====================
 * {{ 상위 카테고리 명 }}
 * ====================
 * // 페이지 설명
 * URL_NAME: 'url'
 *
 */

// 페이지 URL
export const ROUTE = {
	// ====================
	// 메인
	// ====================
	// 메인
	MAIN: '/',

	// ====================
	// 이용권
	// ====================
	// 이용권 메인
	TICKET_MAIN: '/tickets',

	// ====================
	// 올페이 (이용권 사용)
	// ====================
	// 이용권 사용하기 QR
	MARKET_QR: '/pay',

	// ====================
	// 기록
	// ====================
	// 기록하기
	DAILY_RECORD: '/record',

	// ====================
	// 마이페이지
	// ====================
	// 마이페이지 메인
	MY_PAGE_MAIN: '/my',

	// ====================
	// 🎸 기타 ㅋㄷ
	// ====================
	// 회원가입
	SIGN_UP: '/signup',

	// 로그인
	LOGIN: '/login',

	// Google OAuth2
	GOOGLE_LOGIN: '/all-climb/api/oauth2/authorization/google',
} as const;
