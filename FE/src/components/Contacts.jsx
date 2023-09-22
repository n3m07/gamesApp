function Contacts() {
    return (
        <div className="w-full h-[90vh] bg-pink-400 border border-black p-4 flex flex-col justify-start items-center gap-4">
            <div className="mt-4 text-2xl font-bold italic">Contacts</div>
            <div className="w-1/3 h-4/6 flex  flex-col justify-start items-center border border-purple-700 rounded-lg p-4 overflow-y-auto  bg-purple-400 italic gap-4">
                <span className="font-bold w-full flex justify-start">Our Infos:</span> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis debitis explicabo, ipsum blanditiis accusantium nobis iure distinctio impedit facilis magni porro enim expedita sed ad aut veritatis qui voluptatem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cupiditate beatae dolores reprehenderit! Animi vitae quis iste excepturi blanditiis alias cum, officia a eaque doloremque libero natus illo aliquid inventore?
            </div>
        </div>
    )
}

export default Contacts