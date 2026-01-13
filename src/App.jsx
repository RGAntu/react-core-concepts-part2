import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Players from './Players';
import './App.css'
import { Suspense } from 'react';

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json()
// }

// const fetchPosts = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }


function App() {
  // const friendsPromise = fetchFriends()
  // const postsPromise = fetchPosts()

  function handleClick(){
    alert("I am clicked.")
  }

  const handleClick3 = () => {
    alert("clicked 3")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }


  const handleAdd10 = (num) => {
    const num1 = num + 10;
    alert(num1)

  }
 
  return (
    <>
      <h3>Vite + React</h3>

      {/* <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Post are coming.....</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}




      

      <Players></Players>

      <Counter></Counter>
      <Batsman></Batsman>

      


      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("Clicked 2")
      }
      }>Click Me2</button>

      <button onClick={handleClick3}>Clicked Me 3</button>

      <button onClick={() => alert("click 4")}>Click Me 4</button>
      <button onClick={() => handleAdd5(7)}>Click Add 5</button>

      <button onClick={() => handleAdd10(10)}>click add 10</button>

     
    </>
  )
}

export default App
