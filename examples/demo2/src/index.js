import D3Relation from './d3-relation'


$.getJSON('./data.json', function (data) {
    // let data = data;
    console.log(data);
    // return;
    new D3Relation({
        nodes: data.nodes,
        links: data.links,
    })
})

