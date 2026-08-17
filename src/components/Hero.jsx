//create the hero section of portfolio with terminal reveal
const Hero = ()=>{
    return(
        <div className="w-full py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
                James William Irving
            </h1>
            <p className="mt-2 text-lg text-gray-500">
                Computer Science (Cyber Security) Graduate<br></br>
                Project Management Student <br></br>
                Based in Edinburgh
            </p>
            {/*terminal reveal will fo here*/}
            <div className="mt-8">
                {/* terminal reveal */}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-base text-gray-700 indent-0">
                I'm a Computer Science (Cyber Security) graduate based in Edinburgh, currently studying Project Management. I build tools that span both worlds, from cipher and cryptography utilities to small interactive projects. I aim to focus on clean engineering and genuinely useful design.
            </p>
        </div>
    )

}

export default Hero;