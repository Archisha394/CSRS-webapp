import { SensorsOutlined } from "@mui/icons-material";
import { useState } from "react";

const InputModal = ({ id }) => {
    console.log('id:', id);
    const [value , setValue] = useState('Low');
    function handleInput(value) {
        console.log('value:', value);
        setValue(value);
    }
    async function handleSubmit(e) {
        console.log(value);
        e.preventDefault();
        var response = await fetch('http://localhost:5000/emergency/update/sensitivity', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                sensitivity: value
            })

        });
        response = await response.json();
        if(response.status === 'success'){
            alert('Sensitivity updated successfully');
            window.location.href = '/';
        }

        console.log('response:', response.status);
    }
    return (
        <>

            <div className={`${id ? 'fixed' : 'hidden'} z-10 inset-0 overflow-y-auto  m-1 p-2`}>
                <div className="flex items-center justify-center min-h-screen p-4 m-auto">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all p-5" >
                        <form method="post" onSubmit={handleSubmit} className="flex flex-col" >
                            <div className="p-2 m-2 flex gap-2">

                                <label className="p-2"> Sensitivity of Case </label>
                                <select className="px-4 py-2 " onChange={(e) => handleInput(e.target.value)}>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                            <button type="submit" className="text-white bg-blue-400 rounded-sm font-semibold p-1.5 m-1">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default InputModal;
