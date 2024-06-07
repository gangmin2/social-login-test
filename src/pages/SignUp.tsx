import React, { useState, ChangeEvent, FormEvent } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [id, setId] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [confirmPw, setConfirmPw] = useState<string>('');
    const [error, setError] = useState<string>('');
    const nav = useNavigate();

    const onIdChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    }

    const onNicknameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }

    const onPwChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    }

    const onConfirmPwChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPw(e.target.value);
    }

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!id || !nickname || !pw || !confirmPw) {
            setError('모든 필드를 입력해 주세요.');
            return;
        }
        if (pw !== confirmPw) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }
        console.log('회원가입 정보:', { id, nickname, pw });
        setError('');
        nav('/');
    }

    return (
        <>
            <div className='container'>
                <div className='signup-container'>
                    <div className='logo'>3Ever</div>
                    <form className='form-container' onSubmit={onSubmitHandler}>
                        <label htmlFor="id">아이디</label>
                        <input onChange={onIdChangeHandler} value={id} type="text" placeholder='아이디' />

                        <label htmlFor="nickname">닉네임</label>
                        <input onChange={onNicknameChangeHandler} value={nickname} type="text" placeholder='닉네임' />

                        <label htmlFor="pw">비밀번호</label>
                        <input onChange={onPwChangeHandler} value={pw} type="password" placeholder='비밀번호' />
                        <input onChange={onConfirmPwChangeHandler} value={confirmPw} type="password" placeholder='비밀번호 확인' />

                        {error && <div className='error'>{error}</div>}

                        <button className='signup-button' type="submit">회원가입</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;