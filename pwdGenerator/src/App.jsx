import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`|}{"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select( );
    window.navigator.clipboard.writeText(password)
    }, [password],
  )
  

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='bg-amber-50 rounded-lg outline-none w-full py-1 px-3 mt-3 mb-3' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='text-white bg-blue-600 font-bold rounded-lg outline-none py-0.5 px-3 mt-3 mb-3'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} 
             className='cursor-pointer'
             onChange={(e) => setLength(e.target.value)} />
             <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id="numberInput" 
             onChange={() => setNumAllowed((prev) => !prev)} />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput"
             onChange={() => setCharAllowed((prev) => !prev)} />
             <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
