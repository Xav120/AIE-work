var level1 = 

{ "height":15,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 44, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 58, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 0, 58, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 0, 0, 0, 0, 0, 0, 0, 58, 0, 58, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 44, 0, 44, 0, 44, 0, 44, 0, 44, 0, 45, 0, 0, 0, 0, 0, 43, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 58, 0, 0, 0, 0, 0, 58, 0, 154, 0, 154, 0, 154, 0, 154, 0, 154, 0, 154, 0, 154, 0, 154, 0, 154, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 167, 0, 167, 0, 167, 0, 167, 0, 167, 0, 167, 0, 167, 0, 167, 0, 167, 0, 167, 0],
         "height":15,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":35,
 "tilesets":[
        {
         "firstgid":1,
         "image":"tileset.png",
         "imageheight":1024,
         "imagewidth":1024,
         "margin":2,
         "name":"tileset",
         "properties":
            {

            },
         "spacing":2,
         "tilecount":196,
         "tileheight":70,
         "tilewidth":70
        }],
 "tilewidth":35,
 "version":1,
 "width":20
}

var LAYER_COUNT = level1.layers,length;

var MAP = {
	tw: level1.width,
	th: level1.height
};

var TILE = 15; 

var TILESET_TILE = 2;
var TILESET_PADDING = 2;
var TILESET_MARGIN = 2;

var tileset = document.createElement ("img");
tileset.src = "tileset.png";

function drawMap()
{
	for (var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++)
	{
		var Idx = 0;
	for (var y = 0; y < level1.layers [layerIdx].height; y++)
	{
		for (var x = 0; x < level1.layers [layerIdx].width; x++)
		{
			var tileIndex = level1.layers[layerIdx].data[idx] - 1;
			
			var sx = TILESET_PADDING + (tileIndex & TILESET_COUNT_X) * (TILESET_TILE + TILESET_PADDING);
			var sy = TILESET_PADDING +(Math.floor(tilesIndex / TILESET_COUNT_Y))*(TILESET_TILE + TILESET_PADDING);
			
			context.drawImage(tileset, sx, sy, TILESET, TILESET_TILE, x*(TITLE), (y - 1) * (TILE), TILESET_TILE, TILESET_TILE);
		}
		idx++;
		}
	}
}