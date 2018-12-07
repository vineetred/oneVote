var my_data;

$.get('dataset/csvjson.json', function(data) {

    my_data = data;

    for (var i = 0; i < data.length; i++) {

        var cname = data[i]['Constituency_Name'];
        $('#my-c1').append('<option value="' + cname + '">' + cname + '</option>');
        $('#my-c2').append('<option value="' + cname + '">' + cname + '</option>');
    }
});

$('#cform').on('submit', function(e) {
    e.preventDefault();

    var c1 = $(this).find('#my-c1').val();
    var c2 = $(this).find('#my-c2').val();

    var v1 = 0;
    var v2 = 0;

    for (var i = 0; i < my_data.length; i++) {
        if (my_data[i]['Constituency_Name'] === c1) {
            v1 = my_data[i]['V1'];
        }

        if (my_data[i]['Constituency_Name'] === c2) {
            v2 = my_data[i]['V1'];
        }
    }

    console.log(v1, v2, v1/v2);

    $('div#answer').html(c1 + ' is<b> '+ (v1/v2).toFixed(2)+ ' </b>times that of a vote in '+ c2);
});