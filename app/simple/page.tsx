export default function Page() {
    return(
        <div>
            <p className="font-bold text-2xl" >TypeScript Simple Types</p>
            <p className=" text-neutral-600">TypeScript supports some simple types (primitives) you may know.</p>
            <p className=" text-neutral-600" > 
                <span className=" text-red-600 font-semibold">. boolean</span> - true or false values <br />
                <span className=" text-red-600 font-semibold">. number</span> - whole numbers and floating point values <br />
                <span className=" text-red-600 font-semibold">. string</span> - text values like "TypeScript Rocks" <br />
            </p>
            <p className="text-xl">Example:</p>
            <p className="font-bold">let maried: boolean = false</p>
            <p className="font-bold">let age: number = 19</p>
            <p className="font-bold">let name: string = "Rafane"</p>
            <p className="" >Note: <span className="text-red-500">Boolean != boolean</span> </p>
        </div>
    )
}