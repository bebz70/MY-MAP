var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poblacion_1 = new ol.format.GeoJSON();
var features_poblacion_1 = format_poblacion_1.readFeatures(json_poblacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poblacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_1.addFeatures(features_poblacion_1);
var lyr_poblacion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_1, 
                style: style_poblacion_1,
                popuplayertitle: 'poblacion',
                interactive: true,
                title: '<img src="styles/legend/poblacion_1.png" /> poblacion'
            });

lyr_OSMStandard_0.setVisible(true);lyr_poblacion_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poblacion_1];
lyr_poblacion_1.set('fieldAliases', {'id': 'id', });
lyr_poblacion_1.set('fieldImages', {'id': 'TextEdit', });
lyr_poblacion_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_poblacion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});