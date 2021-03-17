import logo from './logo.svg';


import './index.css';

export default function home() {
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    React子应用
                </p>
                
            </header>
        </div>
    )

}