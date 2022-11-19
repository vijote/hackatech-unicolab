import axios from 'axios'
import React from 'react'

export default function Home() {
    async function testApi() {
        const response = await axios.post('http://localhost:5000/api/auth/login')
        console.log('response: ', response);
    }

    async function testCareerPaths() {
        const response = await axios.get('http://localhost:5000/api/careerPaths')
        console.log('response: ', response);
    }

    async function testTasks() {
        const response = await axios.get('http://localhost:5000/api/tasks/1')
        console.log('response: ', response);
    }

  return (
    <div>
        <button onClick={testApi}>Probar login</button>
        <button onClick={testCareerPaths}>Probar carreras</button>
        <button onClick={testTasks}>Probar tareas</button>
        <div>Home</div>
    </div>
  )
}
