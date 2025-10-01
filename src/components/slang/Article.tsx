


export default function Article({  }) {

    const Slangs = [
        {
            id:1,
            titolo: "omg",
            significato: "oh my god",
            isVisited: false,
           
        },

        {
            id:2,
            titolo: "tbh",
            significato: "to be honest",
            isVisited: false,
        },

        {
            id:3,
            titolo: "afk",
            significato: "away from keyboard",
            isVisited: false,
        },

        {
            id:4,
            titolo: "fomo",
            significato: "fear of missing out",
            isVisited: false,
          
        }


    ]



    return (
        <div className="article">
           
            {Slangs.map((slang) => {
                return (
                <div key={slang.id} className="card">
                     <a href="">{slang.titolo}</a>
                    <p>{slang.significato}</p>
                </div>
                );
            })}

        </div>
    )
}