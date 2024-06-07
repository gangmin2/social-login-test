import './signup.css';

const SignUp = () => {
    return (
        <>
            <div className='container'>
                <div className='signup-container'>
                    <div className='logo'>3Ever</div>
                    <form className='form-container' action="">
                        <label htmlFor="">아이디</label>
                        <input type="text" placeholder='아이디' />

                        <label htmlFor="">닉네임</label>
                        <input type="text" placeholder='닉네임' />

                        <label htmlFor="">비밀번호</label>
                        <input type="password" placeholder='비밀번호' />
                        <input type="password" placeholder='비밀번호 확인' />

                        <button className='signup-button' type="submit">회원가입</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;