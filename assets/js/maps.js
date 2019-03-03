var content = {

    stavanger : "<img src='/content/images/2018/10/DSCN3656-1.JPG'>\
    <p><a href='/preikestolen'>Preikestolen</a></p>",
    
    barcelona : "<img src='/content/images/2018/10/IMG_20180819_125726_HHT.jpg'>\
    <p><a href='/tag/barcelona'>Barcelona</a></p>",

    sofia : "<p>Sofia</p>",

    utrecht : "<p>Utrecht</p>",

    bermuda : "<p>Bermuda</p>",

    canggu : "<img src='http://46.101.50.146/content/images/2018/10/sekumpul.jpg'>\
    <p><a href='/tag/bali'>Bali</a></p>",

    singapore : "<p>Singapore</p>",

    chiangmai : "<p>Chiang Mai</p>",

    guatemala : "<img src='/content/images/2018/10/IMG_6518.JPG'>\
    <p><a href='/guatemala-belize'>Guatemala</a></p>",

    prague : "<p>Prague</p>",

    dublin : "<p>Dublin</p>",
        
    bahia : "<img src='/content/images/2018/11/15-2.jpg'>\
    <p><a href='/tag/bahia'>Bahia</a></p>",
        
    floripa : "<img src='/content/images/2018/12/PSX_20181219_131211-1.jpg'>\
    <p><a href='/living-in-florianopolis-brazil-as-a-nomad'>Florianopolis</a></p>",

    rio : "<img src='/content/images/2019/01/PSX_20190111_145217.jpg'>\
    <p><a href='/tag/rio-de-janeiro'>Rio de Janeiro</a></p>",

    patagonia : "<img src='/content/images/2019/01/PSX_20190123_122208.jpg'>\
    <p><a href='/tag/patagonia'>Patagonia</a></p>"

}


$(".container").mapael({
    map : {
        name : "world_countries"
    },
    plots : {
        barcelona : {
            "latitude": 41.385064,
            "longitude": 2.173403,
        },
        sofia : {
            "latitude": 42.697708,
            "longitude": 23.321868,
        },
        utrecht : {
            "latitude": 52.090737,
            "longitude": 5.12142,
        },
        //enschede : {
        //    "latitude": 52.221537,
        //    "longitude": 6.893662,
        //},
        bermuda : {
            "latitude": 32.3078,
            "longitude": -64.7505,
        },
        canggu : {
            "latitude": -8.6478175,
            "longitude": 115.1385192,
        },
        singapore : {
            "latitude": 1.352083,
            "longitude": 103.819836,
        },
        chiangmai : {
            "latitude": 18.7060641,
            "longitude": 98.9817163,
        },
        guatemala : {
            "latitude": 14.6906713,
            "longitude": -91.2025207,
        },
        stavanger : {
            "latitude": 58.9699756,
            "longitude": 5.73310739,
        },
        prague : {
            "latitude": 50.0755381,
            "longitude": 14.4378005,
        },
        dublin : {
            "latitude": 53.3498053,
            "longitude": -6.2603097,
        },
        bahia : {
            "latitude": -12.9777,
            "longitude": -38.5016,
        },
        floripa : {
            "latitude": -27.5713143,
            "longitude": -48.7504785,
        },
        rio : {
            "latitude": -22.9132525,
            "longitude": -43.7261797,
        },
        patagonia : {
            "latitude": -49.3294885,
            "longitude": -72.8894098,
        }
    }
});


var cities = [
    {
        name : "stavanger", 
        content : content.stavanger
    },
    {
        name : "barcelona",
        content : content.barcelona
    },
    {
        name : "sofia",
        content : content.sofia
    },
    {
        name : "utrecht",
        content : content.utrecht
    },
    {
        name : "bermuda",
        content : content.bermuda
    },
    {
        name : "canggu",
        content : content.canggu
    },
    {
        name : "singapore",
        content : content.singapore
    },
    {
        name : "chiangmai",
        content : content.chiangmai
    },
    {
        name : "guatemala",
        content : content.guatemala
    },
    {
        name : "prague",
        content : content.prague
    },
    {
        name : "dublin",
        content : content.dublin
    },
    {
        name : "bahia",
        content : content.bahia
    },
    {
        name : "floripa",
        content : content.floripa
    },
    {
        name : "rio",
        content : content.rio
    },
    {
        name : "patagonia",
        content : content.patagonia
    }
]

var test;

$(function() {
    $('.map circle').each(function() {
        var cityName = $(this).attr('data-id');
        var self = $(this);
        var currentCity = cities.find( function(city) { return city.name === cityName; });
        if (currentCity) {
            var target = '[data-id=' + self.attr('data-id') +']';
            tippy(target, { 
                content: currentCity.content,
                interactive : 'true',
                //trigger : 'click',
                arrow : 'true'
            });
        }
    });
})

