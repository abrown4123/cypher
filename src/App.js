import React, { useState } from "react";

const App = () => {

  const [ cypherTerm, setCypherTerm ] = useState("");

  const handleCypherInput = (event) => setCypherTerm(event.target.value); 

  const codeBreaker = (code) => {
    let cypher = {
        a: "z",
        b: "y",
        c: "x",
        d: "w",
        e: "v",
        f: "u",
        g: "t",
        h: "s",
        i: "r",
        j: "q",
        k: "p",
        l: "o",
        m: "n",
        n: "m",
        o: "l",
        p: "k",
        q: "j",
        r: "i",
        s: "h",
        t: "g",
        u: "f",
        v: "e",
        w: "d",
        x: "c",
        y: "b",
        z: "a"
    }
    let string = cypherTerm.split(" ");
    let cracked = [];
  
    string.forEach(word => {
        let newWord = [];
        word.split("").forEach(letter => newWord.push(cypher[letter]));
        cracked.push(newWord.join(""));
    });
    return cracked.join(" ");
  }

  return (
    <div className="App">
      <h1>Hunt-A-Killer Cypher</h1>
      input cypher: <input value={cypherTerm} onChange={handleCypherInput} />
      <p>{codeBreaker(cypherTerm)}</p>
    </div>
  );
}

export default App;
