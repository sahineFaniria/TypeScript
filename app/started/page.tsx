

export default function Page(){
    return(
        <div className="">
            <p className="font-bold text-2xl" >TypeScript Getting Started</p>
            <p className=" text-xl" >TypeScript Compiler</p>
            <p className=" text-neutral-600">
            TypeScript is transpiled into JavaScript using a compiler. <br />
            TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!
            </p>
            <p className="text-xl">Installing the Compiler</p>
            <p className="text-neutral-600" > 
                TypeScript has an official compiler which can be installed through npm.
                Learn more about npm, and how to get started here: What is npm?
                Within your npm project, run the following command to install the compiler: <br />
                <span className=" bg-cyan-200 px-2 rounded text-black" >npm install typescript --save-dev</span> <br />
                Which should give you an output similar to:
                added 1 package, and audited 2 packages in 2s
                found 0 vulnerabilities
                The compiler is installed in the node_modules directory and can be run with: npx tsc. <br />
                <span className="bg-cyan-200 px-2 rounded text-black">npx tsc</span> <br />
                Which should give you an output similar to:
                Version 4.5.5
                tsc: The TypeScript Compiler - Version 4.5.5
                Followed by a list of all the Commmon Commands.
            </p>
        </div>
    )
}