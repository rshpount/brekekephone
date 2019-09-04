import 'sweetalert2/dist/sweetalert2.css';

import Swal from 'sweetalert2/dist/sweetalert2';

const Alert = {
  alert: (title, text, [cancelBtn, okBtn], config) => {
    Swal.fire({
      title,
      text,
      showCancelButton: true,
      confirmButtonText: okBtn.text,
      cancelButtonText: cancelBtn.text,
    }).then(res => {
      const fn = res.value ? okBtn.onPress : cancelBtn.onPress;
      return fn && fn();
    });
  },
};

export default Alert;
