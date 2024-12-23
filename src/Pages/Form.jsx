import SignUp from '../Components/SignUp'
import PersonalInfo from '../Components/PersonalInfo'
import MoreInfo from '../Components/MoreInfo'
import logo from '../assets/logo.png';
import  {useState}  from "react";
import axios from 'axios'
function Form() {
   const [page, setPage] = useState(0)
   const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    fristname: '',
    lastname: '',
    address: '',
    phone: '',
    techstck: ''

   })
   const registerUser = async(e) =>{
    const {username, email, password, fristname, lastname, address, phone, techstck} = data
    e.preventDefault()
    try {
      await axios.post('/register', {
        username,
        email, 
        password, 
        fristname,
        lastname,
        address,
        phone,
        techstck
       }) 
       alert("Registration Sucessfull")
    } catch (error) {
        alert("Registration Failed")
        console.log(error);
        
    }
 

   }

    const titles = ["User Info", "Personal Info", "More Info"]

    const pageDisplay = () =>{
        if(page == 0){
            return <SignUp data={data} setData={setData} />
        }
        else if(page == 1){
            return <PersonalInfo data={data} setData={setData} />
        }else{
            return <MoreInfo data={data} setData={setData} />
        }
    }

  return (
    <div className="bg-gradient-to-r from-slate-100 to-red-600 w-full h-screen min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 mf:h-screen">
        <div>
            <div>
                progress Bar
            </div>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto h-24 w-auto" src={logo} alt="/"/>
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                {titles[page]}
            </h1>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>{pageDisplay()}</div>
            <div className="flex flex-row gap-3 pt-8">
                <button
                disabled = {page == 0}
                onClick={() =>{
                    setPage((currPage)=> currPage - 1)
                }}
                
                
                className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Prev</button>
                <button 
                onClick={(e)=>{
                    if(page === titles.length - 1){
                        alert('Form Submitted')
                        registerUser(e);
                        // console.log(data);
                        
                    }else{
                        setPage((currPage)=> currPage + 1)

                    }

                }}
                
                
                
                className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">{page === titles.length - 1 ? "Submit" : "Next"}</button>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default Form
