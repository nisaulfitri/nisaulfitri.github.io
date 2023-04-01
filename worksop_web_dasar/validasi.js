function cekfrorm (){
    nama = document.getElementById('txtnama');
    olahraga = document.getElementById('olahraga');

    if (nama.value == ''){
        alert('nisaul fitri');
        nama.focus();
        return false;
    }
    else if (nama.value,length < 3) {
        alert('nama minimal 3 karakter');
        nama.focus();
        return false;
    }
    else if (olahraga.value == ''){
        alert ('BULU tangkis');
        olahraga.fokus();
        return false;
    }
    else{
        alert('terimaksih telah mengisi form');
        return true;
    }