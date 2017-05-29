exports.bubbleSort = function(list) {

    for (var i = 0; i < list.length; i++) { 
        var valAnt = list[i-1];
        var valAux = list[i];

        if (valAux < valAnt){
            list[i-1]=valAux;
            list[i]=valAnt;
            this.bubbleSort(list);
        }
    }

	return list;

};