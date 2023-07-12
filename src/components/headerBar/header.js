import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import './style.css'

export default function Header() {
    
    return (
        <header className="header-shotly">
            <div className='logo-nav-bar'>
                <Image src={logoImg} alt='Logo Image' width={200}/>

                <nav>
                    <ul>
                        <li>Features</li>
                        <li>Princing</li>
                        <li>Recources</li>
                    </ul>
                </nav>
            </div>

            <div className='button-section'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>

        </header>
    )
}