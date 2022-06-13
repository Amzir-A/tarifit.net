///// tarifit.net dict to my dict
let fic = {
        "no-root": []
    }
    
    for (k=0; k<dic2.length; k++) {
        let x = dic2[k]

        if (x[0] === "" && x[1] === ""){
            let exmp_dic = {"rif": [], "nl": []} 

            for (p=2; p<8; p++){
                if (x[p] != ""){
                    exmp_dic["rif"].push(x[p])
                }
            }
            for (p=9; p<14; p++){
                if (x[p] != ""){
                    exmp_dic["nl"].push(x[p])
                }
            }

            fic["no-root"].push(exmp_dic)
        } else{
            for (i = 0; i<2; i++){
                if (x[i] != ""){
                    if (!(x[i] in fic)){
                        fic[x[i]] = []
                    }

                    let exmp_dic = {"rif": [], "nl": []} 

                    for (p=2; p<8; p++){
                        if (x[p] != ""){
                            exmp_dic["rif"].push(x[p])
                        }
                    }
                    for (p=9; p<14; p++){
                        if (x[p] != ""){
                            exmp_dic["nl"].push(x[p])
                        }
                    }
                    fic[x[i]].push(exmp_dic)
                }
            }
        }
    }
    console.log(fic)
////////


///////// Search bar
function add(table, input, j){
    for (k=0; k<dic.length; k++) {
        if (input == dic[k][j]){
            let duplicate = true;

            for (var i = 0, row; row = table.rows[i]; i++) {
                for (var p = 0, col; col = row.cells[p]; p++) {
                    if (col.innerHTML == dic[k][7] || col.innerHTML == dic[k][8] + " (" + dic[k][14] + ")"){
                        duplicate = false;
                    }
                }
            }
            duplicate = true;

            if (duplicate){
                var row = table.insertRow();
                var cell = row.insertCell();
                var cell2 = row.insertCell();

                cell.innerHTML = dic[k][7];
                cell2.innerHTML =  dic[k][8] + " (" + dic[k][14] + ")";
            }
        }
    }
}


function tableSearch(option) {
    // in tableSearch
    let input = document.getElementById("myInput");
    input = input.value.toLowerCase(input)

    let table = document.getElementById("myTable");
    table.innerHTML = "";
    
    if (option == "rif") {
        // Tarifit Nederlands
        for (j=2; j<7; j++){
            add(table, input, j)
        }
    }
    else if (option == "nl"){
        // Nederlands Tarifit
        for (j=9; j<14; j++){
            add(table, input, j)
        }
    } else if (option == "root"){
        // root
        for (j=0; j<2; j++){
            add(table, input, j)
        }
    }
}
////////////////////////////////////////////////////
