import { useEffect, useState } from 'react';
import Warning from '../warning/Warning';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../redux/features/userSlice';

const Form = ({ show, onClose, onSubmit, setShowpopup, idNumber }) => {
  const currentYear = new Date().getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthIndex = new Date().getMonth(); // getMonth() returns 0 for January, 1 for February, and so on
  const currentMonthName = monthNames[currentMonthIndex];
  const [isFormValid, setIsFormValid] = useState(false);
  const [warning, setWarning] = useState(false);
  const [checkwarning, setCheckwarning] = useState(false);
  const dispatch=useDispatch();
  const { responseData } = useSelector((state) => ({ ...state.user }));
  const [id, setID] = useState(0);

  //initialising the formData
  const [formData, setFormData] = useState({
    id: id,
    quantity: '',
    amount: '',
    postingYear: currentYear,
    postingMonth: currentMonthName,
    actionType: 'Type1',
    actionNumber: '',
    actionName: 'Action1',
    status: 'Pending',
    impact: 'Low',
  });

  //to retrieve the id number
  useEffect(() => {
    setID(responseData.length + 1);
    console.log(id, "ID FROM FORM COMPONENT");
  }, [responseData, id])


  //resetting the id number once the id actually changes
  useEffect(() => {
    setFormData({
      id: id,
      quantity: '',
      amount: '',
      postingYear: currentYear,
      postingMonth: currentMonthName,
      actionType: 'Type1',
      actionNumber: '',
      actionName: ' Action1',
      status: 'Pending',
      Impact: 'Low',
    })
  }, [id])


  useEffect(() => {
    const isValid = Object.values(formData).every(field => field !== '');
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e,field) => {
    const { name, value } = e.target;
     // Check if the value is a number if field is amount, quantity or actionNumber
     if (field === 'amount' || 'quantity' || 'actionNumber' ) {
      console.log("reached lin59 in table");
      if (!/^\d*$/.test(value)) {
        // If the value is not a number, do not update the state
        setCheckwarning(true);
        return;
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleNormalChange=(e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (isFormValid) {
      let payloadData={
         data:formData
      }
      onSubmit(dispatch(addData(payloadData)));
      setShowpopup(false);
    }
    else {
      setWarning(true)
    }
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
        {warning && <Warning message="All fields are required" onClose={() => setWarning(false)} />
        }
        {checkwarning && <Warning message="Must Be A Number" onClose={() => setCheckwarning(false)} />
        }
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full max-h-full overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={(e)=>handleChange(e,'quantity')}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={(e)=>handleChange(e,'amount')}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Posting Year</label>
              <input
                type="text"
                name="postingYear"
                value={formData.postingYear}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Posting Month</label>
              <input
                type="text"
                name="postingMonth"
                value={formData.postingMonth}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Action Type</label>
              <select
                name="actionType"
                value={formData.actionType}
                onChange={handleNormalChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Type1">Type1</option>
                <option value="Type2">Type2</option>
                <option value="Type3">Type3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Action Number</label>
              <input
                type="text"
                name="actionNumber"
                value={formData.actionNumber}
                onChange={(e)=>handleChange(e,'actionNumber')}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Action Name</label>
              <select
                name="actionName"
                value={formData.actionName}
                onChange={handleNormalChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Action1">Action1</option>
                <option value="Action2">Action2</option>
                <option value="Action3">Action3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Status</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Impact</label>
              <select
                name="impact"
                value={formData.impact}
                onChange={handleNormalChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Mid">Mid</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
