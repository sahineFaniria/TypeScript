export default function Page(){
    return(
        <div className="">
            <p className="font-bold text-2xl">TypeScript Object Types</p>
            <p className=" text-neutral-600">TypeScript has a specific syntax for typing objects.</p>
            <p className="text-lg">Exapmle:</p>
            <p className="font-bold">
                const car: (marque: string, model: string, years: number) = ( <br />
                    marque: 'Toyota', <br />
                    model: 'carolla',<br />
                    age: 5 <br />
                );   
            </p>
        </div>
    )
}