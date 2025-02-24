
export default function Hero() {
    return (
        <div className="w-full flex md:flex-row flex-col h-max mt-2">
            <div id="image" className="sm:w-6/12 w-full h-8/12 ">
             <img className="w-full h-full object-fit" src="/landing.png" />
            </div>
            <div id="write up" className="sm:w-6/12 w-full h-8/12 flex justify-center items-center">
            <div className="w-[456px] h-auto">
                <span className="text-[36px] font-prosto">
                    Every day is unique,
                    <br/>
                    just like our tea
                </span>
                <p className="font-montserrat mt-5">
                Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                </p>
                <button className="w-6/12 h-14 bg-black text-white mt-5">
                    BROWSE TEAS
                </button>

            </div>
            </div>
        </div>
    )
}
