var sum = 0;

async function presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');

    const alert = await alertController.create({
        header: 'Terjadi Kesalahan',
        message: 'Mohon masukkan nama dan jumlah pengeluaran.',
        buttons: ['Tutup']
    });

    return await alert.present();
}

function addData() {
    var nama = document.getElementById('txtval').value,
        jml = document.getElementById('txtjml').value;

    if (nama == "" || jml == "") {
        presentAlert();
    } else {
        var list = document.getElementById('list'),
            linode = document.createElement('ion-item'),
            txtnode = document.createTextNode(nama + ":" + " Rp." + jml);

        linode.appendChild(txtnode);
        list.appendChild(linode);

        sum += parseInt(jml);
        document.getElementById("sum").innerHTML = "Total Pengeluaran : Rp. " + sum + ",00";
        document.getElementById("txtval").value = "";
        document.getElementById("txtjml").value = "";
    }
}

function clearData() {
    var list = document.getElementById('list').innerHTML;

    if (list == "") {
        presentAlert();
    } else {
        document.getElementById('list').innerHTML = "";
        document.getElementById('sum').innerHTML = "Total Pengeluaran : Rp. 0,00";
        sum = 0;
    }
}
