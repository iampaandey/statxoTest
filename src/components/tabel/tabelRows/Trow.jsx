
const Trow = ({ item, index, isEditing, handleChange, warning, userType }) => {
  console.log(warning);
  return (
    <> 
      <tr key={item.id} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}>
        <td className="border px-4 py-2 border-blue-600">{item.id}</td>
        <td className="border px-4 py-2 border-blue-600">
          {item.quantity}
        </td>
        <td className={`${isEditing ? "border px-4 py-2 border-blue-600 bg-yellow-100" : "border px-4 py-2 border-blue-600"}`}>
          {isEditing ? (
            <input
              type="text"
              value={item.amount}
              onChange={(e) => handleChange(e, item.id, 'amount')}
              className="w-full bg-transparent border-none outline-none"
              style={{ width: '100%' }}
            /> 
          ) : (
            item.amount
          )}
        </td>
        <td className="border px-4 py-2 border-blue-600">
          {item.postingYear}
        </td>
        <td className="border px-4 py-2 border-blue-600">
          {item.postingMonth}
        </td>
        <td className={`${isEditing ? "border px-4 py-2 border-blue-600 bg-yellow-100" : "border px-4 py-2 border-blue-600"}`}>
          {isEditing ? (
            <select
              value={item.actionType}
              onChange={(e) => handleChange(e, item.id, 'actionType')}
              className="w-full bg-transparent border-none outline-none"
              style={{ width: '100%' }}
            >
              <option value="Type1">Type1</option>
              <option value="Type2">Type2</option>
              <option value="Type3">Type3</option>
            </select>
          ) : (
            item.actionType
          )}
        </td>
        <td className="border px-4 py-2 border-blue-600">
          {item.actionNumber}
        </td>
        <td className={`${isEditing ? "border px-4 py-2 border-blue-600 bg-yellow-100" : "border px-4 py-2 border-blue-600"}`}>
        {isEditing ? (
            <select
              value={item.actionName}
              onChange={(e) => handleChange(e, item.id, 'actionName')}
              className="w-full bg-transparent border-none outline-none"
              style={{ width: '100%' }}
            >
              <option value="Action1">Action1</option>
              <option value="Action2">Action2</option>
              <option value="Action3">Action3</option>
            </select>
          ) : (
            item.actionName
          )}
        </td>
        <td className={`${isEditing && userType==='admin' ? "border px-4 py-2 border-blue-600 bg-yellow-100" : "border px-4 py-2 border-blue-600"}`}>
        {isEditing && userType==='admin' ? (
            <select
              value={item.status}
              onChange={(e) => handleChange(e, item.id, 'status')}
              className="w-full bg-transparent border-none outline-none"
              style={{ width: '100%' }}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Approved">Approved</option>
            </select>
          ) : (
            item.status
          )}
        </td>
        <td className="border px-4 py-2 border-blue-600">
          {item.Impact}
        </td>
      </tr>
    </>
  )
}

export default Trow;
