import React from 'react';
import { useCallback, useEffect } from 'react';

import styles from './SignUpPage.module.scss';
import classNames from 'classnames/bind';
import PreferGround from './PreferGround';
import ActivityArea from './ActivityArea';
import CareerDuration from './CareerDuration';
import useSignUpStore from '@/store/useSignupStore';
import StepBar from '@/components/StepBar/StepBar';
import NavBar from '@/components/NavBar/NavBar';
import { useFunnel } from '@/hooks/useFunnel';
import { SIGNUP_STEP } from './models/const';

const cx = classNames.bind(styles);

const SignUpPage = () => {
	const { activityArea } = useSignUpStore();
	const signupStep = Object.values(SIGNUP_STEP);

	const { Funnel, Step, setStep, currentStep, prevStep, nextStep } =
		useFunnel(signupStep);

	useEffect(() => {
		if (currentStep === SIGNUP_STEP.COMPLETE) {
			// TODO 회원가입 API
			console.log(activityArea);
		}
	}, [currentStep]);

	return (
		<>
			<div className={cx('sign-up')}>
				{currentStep !== SIGNUP_STEP.COMPLETE && (
					<>
						<NavBar goBack={prevStep} />
						<button
							type="button"
							className={cx('sign-up__skip-button')}
							onClick={nextStep}
						>
							건너뛰기
						</button>
						<StepBar
							hiddenTitle="질문 단계"
							step={signupStep.indexOf(currentStep) + 1}
							totalStep={signupStep.length - 1}
						/>
					</>
				)}
				<Funnel>
					<Step name={SIGNUP_STEP.PREFER}>
						<PreferGround
							onNext={() => setStep(SIGNUP_STEP.ACTIVITY)}
						/>
					</Step>

					<Step name={SIGNUP_STEP.ACTIVITY}>
						<ActivityArea
							onNext={() => setStep(SIGNUP_STEP.DURATION)}
						/>
					</Step>

					<Step name={SIGNUP_STEP.DURATION}>
						<CareerDuration />
					</Step>

					<Step name={SIGNUP_STEP.COMPLETE}>
						{/* TODO 완료화면이 필요할 거 같음~? */}
						<p
							style={{
								color: 'red',
								fontSize: '30px',
								padding: '15px',
							}}
						>
							회원가입 완료
						</p>
					</Step>
				</Funnel>
			</div>
		</>
	);
};

export default SignUpPage;
