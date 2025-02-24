
export default function Collection() {
    return (
        <div className="w-full flex flex-col h-auto mt-2 px-4">
            <p className="font-prosto text-center text-xl font-semibold">Our Collections</p>
            <div id="image" className="w-full h-auto flex justify-around flex-wrap ">
                {imageArray.map((items, index) => (
                    <span key={index} className="flex flex-col w-3/12 h-auto mx-1 my-4">
                        <img className="w-full h-full object-fit mx-1" src={items.src} />
                        <p className="font-montserrat uppercase text-center mt-1">{items.name}</p>
                    </span>
                ))}
            </div>
            
        </div>
    )
}

const imageArray = [
    { src: "blacktea.png", name: "Black tea" },
    { src: "/greentea.png", name: "Green tea" },
    { src: "/whitetea.png", name: "white tea" },
    { src: "/browntea.png", name: "matcha" },
    { src: "/herbaltea.png", name: "herbal tea" },
    { src: "/chai.png", name: "chai" },
    { src: "/oolong.png", name: "oolong" },
    { src: "/rooibos.png", name: "rooibos" },
    { src: "/teahere.png", name: "TEAWARE" },

]