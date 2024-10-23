import styles from './Loading.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Loading = () => {
	return (
		<div className={cx('loading-wrap')}>
			<div className={cx('loading-spinner')}></div>
		</div>
	);
};

export default Loading;
