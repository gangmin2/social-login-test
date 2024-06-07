import { Link, useNavigate } from 'react-router-dom';
import './signin.css';

const SignIn = () => {
    const nav = useNavigate();

    const onClickSocialButton = (path:string) => {
        nav('authorized' + path);
    } 
    return (
        <>
            <div className='container'>
                <div className='signin-container'>
                    <div className='logo'>3Ever</div>
                    <form className='form-container' action="">
                        <input type="text" placeholder='아이디' />
                        <input type="password" placeholder='비밀번호' />
                        <button type="submit">로그인</button>
                    </form>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;