
const name: string = "Name" 

const tripleNine: number = 111

const exFunction = (a:number, b:number) => {
  return a+ b;
}

const result = exFunction(2,7)

const concatTwoStrings = (a:string,b:string) => {
  return  [a,b].join(" , ")
}

const resultTwo = concatTwoStrings("Hello", "World")

//Optional function parameters

const takingTwoNames = (first:string, last = "default") => {
  if(!last){
    return first
  }

  return `${first} ${last}`
}

const concatedNames = takingTwoNames("Fasal","Mhd")
const concatedOptional = takingTwoNames("jhon")

//Object literal types solution

const userDetails = (user:{first:string, last:string, isAdmin:boolean}) => {
  return `${user.first} ${user.last} ${user.isAdmin}`
}

const userDetailPrint = userDetails({
  first:"Fasal",
  last:"Muhammed",
  isAdmin:true
})


function App() {
  
  

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="text-red-600 text-9xl">{name}</h1>
      <h2 className="text-blue-500 text-7xl">{tripleNine}</h2>
      <h3 className="text-8xl font-bold text-teal-500">{result}</h3>
      <h3>{resultTwo}</h3>
      <h2 className="text-8xl font-bold text-teal-500">{concatedNames}</h2>
      <h2 className="text-8xl font-bold text-teal-500">{concatedOptional}</h2>
      <h2 className="text-8xl font-bold text-cyan-600">{userDetailPrint}</h2>
    </div>
  )
}

export default App
