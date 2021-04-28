var $select = $('#pessoas');//isso é do html o select do html

$.getJSON('data.JSON',function(data){
    //console.log(data);
    $select.html('');

    for(var i = 0; i < data['people'].length;i++){//o 'people' daqui é do json
        $select.append('<option id="'+data['people'][i]['id']+'">'+data['people'][i]['name']+'</option>')
    }
});
