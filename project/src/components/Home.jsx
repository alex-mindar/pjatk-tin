import React from "react";

const Home = () => {
    fetch('http://localhost:3000/test-fetch')
    .then(res => console.log(res))
    return <div>Oleksii Myndar, s21068, 16c</div>
}

export default Home;