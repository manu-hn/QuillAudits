import React from 'react';
import CarpeDiem from "../../images/carpe-diem-pension.png";


const Home = () => {
  return (
    <div className='w-full h-[100vh] flex items-start justify-center text-white bg-[#061448]'>

      <div className='mt-[8rem] flex w-[80%]  justify-center '>
        <div className='w-[30rem] rounded-md h-[27rem]   mx-4 bg-gradient-to-r flex flex-col justify-end  from-black to-[#033F02]'>
          <div className='w-full flex justify-center  '>
           
              <img src={CarpeDiem} alt="CarpeDiem" className='h-48 w-[80%]' />
            
          </div>
          <p className='w-[62%]  mx-12 text-white mb-6'>

            Carpe Diem Pension, a blockchain-based retirement fund, offers permanent payouts through CDP deposits, with a 4.32% annual inflation claimable by depositors.
          </p>
        </div>
        <div className='w-[24rem] h-96  mx-4 flex flex-col justify-end'>
          <p className='text-3xl my-10'>
            Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem Pension
          </p>
          <p className='mb-10 '>
            QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Home