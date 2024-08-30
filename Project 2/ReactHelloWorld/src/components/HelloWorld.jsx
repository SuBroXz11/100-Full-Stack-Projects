import { useState } from "react";
const HelloWorld = () => {
    const [greeting, setGreeting] = useState('"Hello, World!"');
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}
export default HelloWorld
