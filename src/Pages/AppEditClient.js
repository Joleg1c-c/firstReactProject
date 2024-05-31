import { useNavigate } from "react-router-dom";

function AppEditClient() {
    const navigate = useNavigate();
    
    const editInformation = () =>{
        navigate("/profile")
    }

    const makePost = () =>{
        
    }

    return (
    <main>
        <div className="AppEditClient">
            <div className='editClientInfo'>
                <div className='editClientInfoBlock'>
                    <p>Имя</p>
                    <input name="firstName" onChange={makePost} type='name' required></input>
                </div>
                
                <div className='editClientInfoBlock'>
                    <p>Фамилия</p>
                    <input name="lastName" onChange={makePost} type='lastname' required></input>
                </div>
                
                <div className='editClientInfoBlock'>
                    <p>Отчество</p>
                    <input name="patronymic" onChange={makePost} type='patronymic' required></input>
                </div>
            </div>
            
            <br/>
            <form onSubmit={editInformation}>
                <button id ="editInformation">Назад</button>
            </form>
        </div>
    </main>
)
}

export default AppEditClient