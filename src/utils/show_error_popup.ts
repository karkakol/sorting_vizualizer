import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showErrorPopup = (errorMessage: string) => {
    toast.error(errorMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default showErrorPopup;