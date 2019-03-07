import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  
export function makeToast(title : string , type){
    Toast.fire({
        type: type,
        title: title
    })
}

export function getToken(){
    let user = JSON.parse(localStorage.getItem("currentUser"))
    return user.token
}