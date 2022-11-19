import axios from 'axios'

export default function Home() {
    const API_ROOT = import.meta.env.VITE_API_URL

    async function testLogin() {
        const response = await axios.post(`${API_ROOT}/auth/login`)
        console.log('response: ', response);
    }

    async function testCareerPaths() {
        const response = await axios.get(`${API_ROOT}/careerPaths`)
        console.log('response: ', response);
    }

    const testTasks = (careerPathId) => async () => {
        const response = await axios.get(`${API_ROOT}/tasks/${careerPathId}`)
        console.log('response: ', response);
    }

  return (
    <div>
        <button onClick={testLogin}>Probar login</button>
        <button onClick={testCareerPaths}>Probar carreras</button>
        <button onClick={testTasks(1)}>Probar tareas</button>
        <div>Home</div>
    </div>
  )
}
