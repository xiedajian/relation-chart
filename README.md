

# relation

效果预览：https://xiedajian.github.io/relation-chart/example/demo1/index.html

![预览](https://github.com/xiedajian/relation-chart/blob/master/demo.jpg)
![高亮选中](https://github.com/xiedajian/relation-chart/blob/master/demo2.jpg)


# install

```
npm install relation-chart
```


# 使用

html 有个承载 svg 图的容器
```html
<div id="map" style="width: 1000px;height: 800px">
</div>
```

ES6 用法：
```javascript
import RelationChart from 'relation-chart'

// 容器
let element = document.querySelector('#map');

// 关系图数据
let data = {
               nodes:[
                   {
                       "name": "路人甲",
                       "avatar": "./img/140646844806.jpg"
                   },
                   {
                       "name": "路人乙",
                       "avatar": "./img/141611471224.jpg"
                   },
                   {
                       "name": "路人丙",
                       "avatar": "./img/140848800133.jpg"
                   },
               ],
               links:[
                   {
                       "source": 0,
                       "target": 1,
                       "relation": "朋友",
                       "color": "734646"
                   },
                   {
                       "source": 1,
                       "target": 2,
                       "relation": "女朋友",
                       "color": "734646"
                   },
               ],
           }
 
// 创建人物关系图 svg
new RelationChart(element, data)
```


# 数据格式
```
{
    nodes:[
        {
            "name": "路人甲",
            "avatar": "./img/140646844806.jpg"
        },
        {
            "name": "路人乙",
            "avatar": "./img/141611471224.jpg"
        },
        {
            "name": "路人丙",
            "avatar": "./img/140848800133.jpg"
        },
    ],
    links:[
        {
            "source": 0,
            "target": 1,
            "relation": "朋友",
            "color": "734646"
        },
        {
            "source": 1,
            "target": 2,
            "relation": "女朋友",
            "color": "734646"
        },
    ],
}
```


