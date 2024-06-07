import { Link, useNavigate } from 'react-router-dom';
import './signin.css';
import { ChangeEvent, FormEvent, useState } from 'react';

const SignIn = () => {
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [error, setError] = useState<string>('');
    const nav = useNavigate();

    const onIdChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setId(e.target.value);
    const onPwChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setPw(e.target.value);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!id || !pw) {
            setError('모든 필드를 입력해 주세요.');
            return;
        }
        console.log('로그인 정보:', { id, pw });
        setError('');
        nav('/');
    }

    const onClickSocialButton = (path:string) => {
        nav('/api/oauth2/authorization' + path);
    } 
    return (
        <>
            <div className='container'>
                <div className='signin-container'>
                    <div className='logo'>3Ever</div>
                    <form className='form-container' onSubmit={onSubmitHandler}>
                        <input onChange={onIdChangeHandler} value={id} type="text" placeholder='아이디' />
                        <input onChange={onPwChangeHandler} value={pw} type="password" placeholder='비밀번호' />
                        <button type="submit">로그인</button>
                    </form>
                    {error && <div className='error'>{error}</div>}
                    <div className='links-container'>
                        <Link to="/signup">회원가입 하러가기</Link>
                        <Link to=''>아이디 비밀번호 찾기</Link>
                    </div>
                    <div className='devider'>
                        <div className='devider-border'></div>
                        <span>또는</span>
                        <div className='devider-border'></div>
                    </div>
                    <div className='social-login-buttons'>
                        <button onClick={() => onClickSocialButton('/kakao')} className='bg-kakao'>카카오계정으로 로그인</button>
                        <button onClick={() => onClickSocialButton('/naver')} className='bg-naver'>네이버로 로그인</button>
                        <button onClick={() => onClickSocialButton('/google')} className='bg-google'>구글로 로그인</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;