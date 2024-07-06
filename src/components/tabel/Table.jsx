import React, { useEffect, useState } from 'react';
import Theader from './tabelHeader/Theader';
import Trow from './tabelRows/Trow';
import ButtonT1 from '../buttons/ButtonT1';
import Warning from '../warning/Warning';
import Popup from '../popups/Popup';
import Form from '../popups/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getData, updateData } from '../../redux/features/userSlice';
import Loading from '../loader/Loading';
import ChartComponent from '../chart/ChartComponent';


const Table = ({ userType }) => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [warning, setWarning] = useState(false);
  const [showPopup, setShowpopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const dispatch = useDispatch();
  const { responseData, loading, updateResponse } = useSelector((state) => ({ ...state.user }))

  //use effect to load data initially
  useEffect(() => {
    dispatch(getData());
  }, [])

 //on recieving the response updating the data here 
  useEffect(() => {
    setData(responseData);
  }, [responseData])

//on updating data calling to fetch the data again
useEffect(()=>{
dispatch(getData());
},[updateResponse])

  const handleChange = (e, id, field) => {
    const { value } = e.target;
    // Check if the value is a number if field is amount
    if (field === 'amount') {
      console.log("reached lin41 in table");
      if (!/^\d*$/.test(value)) {
        // If the value is not a number, do not update the state
        setWarning(true);
        return;
      }
    }
    setData(prevData =>
      prevData?.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };
  const onWarningClose = () => {
    setWarning(false);
  }
  const handleSave = () => {
    //  sending the updated data to a server
    let formData={
      data
    }
    console.log(data);
    dispatch(updateData(formData));
    setShowpopup(false);
    setIsEditing(false);
  };

  const handleAddingRecord = () => {
    console.log('Saved data:', data);
  };

  return (
    <>
      {warning && <Warning message="Must be a number" onClose={onWarningClose} />
      }
      {
        setShowpopup && <Popup onClose={() => setShowpopup(false)} onConfirm={handleSave} show={showPopup} />
      }
      {
        setShowFormPopup && <Form onClose={() => setShowFormPopup(false)} show={showFormPopup} onSubmit={handleAddingRecord} setShowpopup={setShowFormPopup}
        />
      }
     {
      loading ? <Loading/> :
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="buttons-section flex items-center gap-x-2 justify-center">
        {!isEditing &&
          <>
            <ButtonT1 buttonName={"Edit"} onclick={() => (setIsEditing(true))} mainBg="blue-500" hoverBg="blue-600" />
            <ButtonT1 buttonName={"Add New Record"} onclick={()=>setShowFormPopup(true)} mainBg="black" hoverBg="blue-300" />
          </>
        }
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <Theader />
          <tbody>
            {data?.length && data?.map((item, index) => (
              <Trow isEditing={isEditing} item={item} key={index} index={index} handleChange={handleChange} warning={warning} userType={userType}/>
            ))}
          </tbody>
        </table>
      </div>
      {isEditing && (
        <ButtonT1 buttonName={"Save Changes"} onclick={()=>setShowpopup(true)} mainBg={"black"} hoverBg={"blue-300"} />
      )}
    </div>
     }
  { loading ? <Loading/> : <ChartComponent data={data} />}
    </>
  );
};

export default Table;
