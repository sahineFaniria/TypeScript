export default function Page(){
    return(
        <div className="">
            <p className="font-bold text-2xl" >TypeScript Special Types</p>
            <p className=" text-neutral-600">TypeScript has special types that may not refer to any specific type of data.</p>
            <p className="text-xl">Type: any</p>
            <p className=" text-neutral-600">
            <span className=" text-red-500">any</span> is a type that disables type checking and effectively allows all types to be used.
            <br />
            The example below does not use any and will throw an error:
            </p>
            <p className=" text-xl">Example without <span className="text-red-500">any</span></p>
            <p className=" font-bold">
                let u = true; <br />
                u = "string"; <br />
                Math.round(u); <span className="text-neutral-600 text-xs font-normal">// Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.</span> 
            </p>
            <p className=" text-xl">Example with <span className="text-red-500">any</span></p>
            <p className="font-bold">
                let v: any = true; <br />
                v = "string";
                Math.around(v); <span className="text-neutral-600 text-xs font-normal">// no error as it can be "any" type</span>
            </p>
            <p className="text-xl">Other special types:</p>
            <p className="text-red-500">
                . unknown, never, undefined, null
            </p>
        </div>
    )
}