import './Header.css';


export default function Header() {



    return (
            <div className="header">
                <div className="container"></div>
                <h1>Welcome to APPost</h1>
                <h2>scopri il dizionario degli slag</h2>
                <input type="text" placeholder="Cerca uno slang..." />
                <button>Cerca</button>


            </div>
    );
}
