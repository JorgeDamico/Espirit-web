import Swal from 'sweetalert2';

export function successNotification(response: any, texto: string) {
    if(response == "jwt expired"){
        Swal.fire('Su sesión expiró, loguearse nuevamente');
    }else {
        Swal.fire(response, texto, 'success');
    }
}

export function tinyAlert(texto:string) {
    Swal.fire(texto);
}

export function alertConfirmation(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Removed!',
          'Product removed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Product still in our database.)',
          'error'
        )
      }
    })
  }

