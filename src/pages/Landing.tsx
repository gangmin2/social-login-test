import { useNavigate } from 'react-router-dom';
import './landing.css';

const Landing = () => {
    const nav = useNavigate();

    const onClickButton = (path:string) => {
        nav(path);
    }
    return (
        <div>
            <header>
                <div className='header-logo'>3Ever</div>
                <div className='header-buttons'>
                    <button onClick={() => onClickButton('/signup')} className='primary-button'>Sign Up</button>
                    <button onClick={() => onClickButton('/signin')} className='secondary-button'>Login</button>
                </div>
            </header>
            <main>
                <div className='main-container'>
                    <div className='main-box f-1'>
                        whoEver<br/>
                        whenEver<br/>
                        wherEver<br/>
                    </div>
                    <div className='main-box f-3'>
                        누구든<br/>
                        언제든<br/>
                        어디서든<br/>
                        <br/>
                        실력을 기르고 지식을 나눠보세요
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    )
}

export default Landing;