import ButtonT1 from "../buttons/ButtonT1";

const Popup = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
        <div className="flex justify-end space-x-4">
         <ButtonT1 buttonName="Okay" mainBg="blue-500" hoverBg="blue-600" onclick={onConfirm} />
         <ButtonT1 buttonName="Cancel" mainBg="gray-300" hoverBg="gray-400" onclick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
