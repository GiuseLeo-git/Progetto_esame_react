import './Header.css';


export default function Header() {



    return (
            <div className="header">
                <div className="container"></div>
                <h1>Benvenuto nella pagina degli slang</h1>
                <h2>scopri il dizionario degli slag</h2>
                <div className='search'>
                <input type="text" className='input' placeholder="Cerca uno slang..." />
                <button>Cerca</button>
                </div>
                


            </div>
    );
}
