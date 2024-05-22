export default function Overview() {
    return (
        <div className="gap-3 p-1 flex-col md:flex-row">
            <div className="py-2 gap-2 grid grid-flow-col auto-cols-max">
                <section className="h-[300px] w-[400px] gap-3 border-solid border-2 rounded shadow-lg flex justify-center items-center">
                    1st
                </section>
                <section className="h-[300px] w-[500px] gap-3 border-solid border-2 rounded shadow-lg flex justify-center items-center">
                    2st
                </section>
            </div>
            <div className="py-2 gap-2 grid grid-flow-col auto-cols-max">
                <section className="h-[300px] w-[700px] border-solid border-2 rounded-md shadow-lg flex justify-center items-center">
                    3rd
                </section>
                <div className="h-[300px] w-[200px] border-solid border-2 rounded-md shadow-lg flex justify-center items-center ">
                    4th
                </div>
            </div>
        
        </div>
    );
}