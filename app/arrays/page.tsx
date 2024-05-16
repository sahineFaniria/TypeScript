export default function Page()  {
    return(
        <div className="">
            <p className="font-bold text-2xl" >TypeScript Arrays</p>
            <p className="text-neutral-600">
                TypeScript has a specific syntax for typing arrays.
            </p>
            <p className="font-bold">
                const names: string[] = ["Rakoto", "Rabe", "Rasoa"];
            </p>
            <p className="text-xl">Readonly</p>
            <p className="text-neutral-600">
            The <span className="text-red-500">readonly</span> keyword can prevent arrays from being changed.
            </p>
            <p className="font-bold">
                const names: readonly string = ["Jean"]; <br />
                names.push["Eric"]; <span className="text-neutral-600 text-xs">// Error: Property 'push' does not exist on type 'readonly string[]'.</span>
            </p>  
        </div>
    )
}

