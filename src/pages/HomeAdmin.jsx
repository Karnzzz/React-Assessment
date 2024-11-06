
import Button from '../components/Button'
import { useState } from 'react';
import { useMembers ,useSetMembers } from './Context';

const HomeAdmin = () => {
//   const [sector,setSector] = useState("")
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

//   members = ข้อมูลที่จะแสดงบน website
  const members = useMembers()
  const setMembers = useSetMembers()

  const handleCreateData = ()=>{
    if (name.trim() === "" || lastname.trim() === "" || position.trim() === "") {
        alert("กรอกข้อมูลให้ครบทุกช่อง!");
        return;
      }
    const newMember = {
        id:members.length +1,
        name:name ,
        lastname:lastname,
        position:position
    }
    setMembers((m)=>[...m ,newMember])

    setName("");
    setLastname("");
    setPosition("");
  }
  const handleDelete = (id) => {
    const updatedMembers = members.filter((m) => m.id !== id);
    setMembers(updatedMembers);
};
  return (
    <>
    <div className="text-center font-bold text-5xl pt-16">
        <h1>Generation Thailand <br />
        Home - Admin Sector
        </h1>
    </div>
    <Button />
    <div>
        <h4 className='mt-8 font-bold text-2xl pl-8'>Create User Here</h4>

        <div className='flex flex-row '>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}  
            className='border p-2 rounded-md w-[400px] h-[50px] px-4 mx-8'
            />
            <div>
            <input type="text" placeholder='Lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)}  
            className='border p-2 rounded-md w-[400px] h-[50px] px-4 mx-8'
            />
            </div>
            <div>
            <input type="text" placeholder='Position' value={position} onChange={(e)=>setPosition(e.target.value)}  
            className='border p-2 rounded-md w-[400px] h-[50px] px-4 mr-16 mx-8'
            />
            </div>
            <button 
            className='p-4 bg-blue-600 text-white rounded-md mb-2'
            onClick={handleCreateData}
            >Save</button>
        </div>
    </div>
    <div className='flex justify-center'>
        <table className='mt-16 w-[35%] h-[35%] border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='py-2 px-4 border border-gray-300'>Name</th>
              <th className='py-2 px-4 border border-gray-300'>Last Name</th>
              <th className='py-2 px-4 border border-gray-300'>Position</th>
              <th className='py-2 px-4 border border-gray-300'>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => {
              return (
                <tr key={index}>
                  <td className='py-4 px-4 border border-gray-300'>{member.name}</td>
                  <td className='py-4 px-4 border border-gray-300'>{member.lastname}</td>
                  <td className='py-4 px-4 border border-gray-300'>{member.position}</td>
                  <td className='py-4 px-4 border border-gray-300'>
                    <button onClick={()=>handleDelete(member.id)}
                    className='text-red-700'
                    >Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default HomeAdmin