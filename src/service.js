import axios from 'axios';

const apiUrl = "http://localhost:5219"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/todos`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`${apiUrl}/todos`,{name})  
    debugger  
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`${apiUrl}/todos/${id}?isComplete=${isComplete}`);
    return result.data;
  },

  deleteTask:async(id)=>{
    const result = await axios.delete(`${apiUrl}/todos/${id}`)    
    return result.data;
  }
};
