
export default function Page() {
    


  return (
    <div>
      <p className="font-bold text-2xl" >TypeScript Introduction</p>
      <p className=" text-neutral-600" >TypeScript is JavaScript with added syntax for types.</p>
      <p className="text-xl" >What is TypeScript?</p>
      <p className="text-neutral-600">
        TypeScript is a syntactic superset of JavaScript which adds static typing. <br />
        This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types. <br />
        TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
      </p>
      <p className="text-xl" >Why should I use TypeScript?</p>
      <p className=" text-neutral-600">
        JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
        In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
        TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
        For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
      </p>
    </div>
  );
}


