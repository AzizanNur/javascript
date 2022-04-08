var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot=1; noAngkot<=jmlAngkot; noAngkot++){
    if((noAngkot === angkotBeroperasi) || (noAngkot === 9)){
        console.log('angkot no '+angkotBeroperasi+' sedang lembur');
    }else if(noAngkot >= 7){
        console.log('angkot no '+noAngkot+' masih dalam perbaikan');
    }else if((noAngkot === 2) || (noAngkot === 4)){
        console.log('angkot no '+noAngkot+' masih dicat');
    }else{
        console.log('angkot no '+noAngkot+' siap dipakai');
    }

}