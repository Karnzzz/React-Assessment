
import Button from '../components/Button'
import { useMembers } from './Context';

const HomeUser = () => {
 const members = useMembers()
  return (
    <>
      <div className="text-center font-bold text-5xl pt-16">
        <h1>Generation Thailand <br />
        Home - User Sector
        </h1>
      </div>
      <Button />
      <div className='flex justify-center'>
        <table className='mt-16 w-[35%] h-[35%] border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='py-2 px-4 border border-gray-300'>Name</th>
              <th className='py-2 px-4 border border-gray-300'>Last Name</th>
              <th className='py-2 px-4 border border-gray-300'>Position</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => {
              return (
                <tr key={index}>
                  <td className='py-4 px-4 border border-gray-300'>{member.name}</td>
                  <td className='py-4 px-4 border border-gray-300'>{member.lastname}</td>
                  <td className='py-4 px-4 border border-gray-300'>{member.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default HomeUser