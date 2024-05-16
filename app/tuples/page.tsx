export default function Page(){
    return(
        <div className="">
            <p className="font-bold text-2xl">TypeScript Tuples</p>
            <p className="text-xl">Typed arrays</p>
            <p className="text-neutral-600">
                A tuple is a typed array with a pre-defined length and types for each index.
                Tuples are great because they allow each element in the array to be a known type of value.
                To define a tuple, specify the type of each element in the array:
            </p>
            <p className="text-lg">Example:</p>
            <p className="font-bold">
                let ourtuple: [string, number, boolean]; <br />
                ourtuple = ["Rakoto", 34, false];
            </p>
            <p className=" text-neutral-600"><span className="text-red-500">Note: </span>Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.</p>
            <p className="text-xl">Named tuples</p>
            <p className=" text-neutral-600">Named tuples allow us to provide context for our values at each index.</p>
            <p className="font-bold">
                const graph = [x: number, y: number] = [23.6, 10.4];   
            </p>
            <p className="text-xl">Destructuring Tuples</p>
            <p className=" text-neutral-600">Since tuples are arrays we can also destructor them.</p>
            <p className="font-bold">
                const graph: [number, number] = [23.6, 10.4]; <br />
                const [x, y] = graph;
            </p>
        </div>
    )
}