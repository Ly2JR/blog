# 自定义键盘

开发一个自定义键盘，比如有省份、字母、数字组合的模拟键盘，样式如下:

``` txt
| 京 | 沪 | 浙 | 苏 | 粤 | 鲁 | 晋 | 冀 | 豫 | 川 |
| 渝 | 辽 | 吉 | 黑 | 皖 | 鄂 | 津 | 贵 | 云 | 桂 |
| 琼 | 青 | 新 | 藏 | 蒙 | 宁 | 甘 | 陕 | 闽 | 赣 |
| 湘 |   
| A | B | C | D | E | F | G | H | I | J |
| K | L | M | N | O | P | Q | R | S | T |
| U | V | W | X | Y | Z |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
```

## 插件

- jQuery.fn.extend()

  语法：jQuery.fn.extend( object )

  简介：为JQuery添加扩展方法，并返回本身。

  [官方传送门](https://api.jquery.com/jQuery.fn.extend/)

- 设计思路

  - 定义一个数组用于存在键盘按键的内容

    第一行用于存储省份;

    第二行用于存储大写字母;

    第三行用于存储数字;

    ...

    ``` js
    /*
    * 键盘内容
    */
    function getKeyBoardData() {
        let keyBoard = [, []];
        //省份
        let provinces = new Array("京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀",
            "豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂",
            "津", "贵", "云", "桂", "琼", "青", "新", "藏",
            "蒙", "宁", "甘", "陕", "闽", "赣", "湘");
        //字母65-90
        let letters = [];
        for (let i = 65; i <= 90; i++) {
            letters.push(String.fromCharCode(i));
        }
        //字母
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        //其他
        let others = ["后退", "清除", "关闭"]

        keyBoard[0] = provinces;
        keyBoard[1] = letters;
        keyBoard[2] = numbers;
        keyBoard[3] = others;
        return keyBoard;
    }
    ```

  - 设计单独一个按键的形状

    ``` js
    /**
    * 单独一个小按键
    * x:按键的X轴
    * y:按键的Y轴
    * heigh:按键的高度
    * width:按键的宽度
    * value:按键的内容
    * callback:按键回调事件
    **/
    function keyCard(x, y, width, height, value, callback) {
        height = height || 48;
        width = width || 48;
        let addHtml = "<div style='position:absolute;left:" + x + "px;top:" + y + "px;width:" + width + "px;height:" + height + "px;line-height:" + height + "px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; '>";
        addHtml += "<span class='keyCard'";
        if (callback && callback instanceof Function) {
            addHtml += "onclick = '" + callback.name + "(\"" + value + "\")'";
        }
        addHtml += ">" + value + "</span></div>";
        return addHtml;
    }
    ```

  - 整体键盘生成

    ``` js
    /** 整体键盘生成
    *id: 容器
    *opt：配置参数
    *callback:按钮回调
    **/
    function generateKeyBoard(id, opt, callback) {
        //按键数据
        let keyBoard = getKeyBoardData();
        //行
        let maxRows = 0;
        keyBoard.forEach((data, index) => {
            maxRows += Math.ceil(data.length / opt.maxColumns)
        });
        //按键背景高度
        let key_bg_height = maxRows * (opt.keyHeigh + opt.space) + opt.space;
        let key_bg_wight = opt.maxColumns * (opt.keyWidth + opt.space) + opt.space;

        $(id).empty();
        $(id).css({
            "background-color": "transpant",
            "width": key_bg_wight + 'px',
            "position": "fixed",
            "right": opt.right + 'px',
            "top": opt.top + 'px',
            "height": key_bg_height + 'px',
            "display": "block",
        });

        let lastRow = 0;
        keyBoard.forEach((data, index, arr) => {
            let startY = -1;
            lastRow += index == 0 ? 0 : Math.ceil(arr[index - 1].length / opt.maxColumns);
            data.forEach((value, i) => {
                let x = 0;
                let y = 0;
                let startX = i % opt.maxColumns;;
                if (startX == 0) {
                    ++startY;
                }
                x = startX * opt.keyWidth + (startX + 1) * opt.space;
                y = (lastRow + startY) * opt.keyHeigh + (lastRow + startY + 1) * opt.space;
                $(id).append(keyCard(x, y, opt.keyWidth, opt.keyHeigh, value, callback));
            });
        });
    }
    ```

  - 集成一个自定义插件

  ``` js
    $.fn.extend({
        //默认设置
        defaults: {
            //最大列
            maxColumns: 10,
            //默认大小
            keyWidth: 48,
            keyHeigh: 48,
            //按钮间距
            space: 10,
            //顶部距离
            top: 20,
            //右边距
            right: 20
        },

        plateKeyBoard: function(opts, callback) {
            let containId = this;
            let opt = $.extend(this.defaults, opts);
            generateKeyBoard(containId, opt, callback);
            return this;
        },
    });
  ```

- Html页面使用

  - 定义三个标签

    一个文本框用于接收

    ``` html
    <input id="keyBoardContent" type="text" />
    ```

    一个按钮用于点击显示模拟键盘

    ``` html
    <input type="button" value="显示" onclick="bindKeyBoard();" />
    ```

    一个空的容器用于生成键盘

    ``` html
    <div id="keyboard"></div>
    ```

  - 自定义按钮绑定生成键盘事件及按键点击处理事件

    ``` js
    <script type="text/javascript">
        //与按钮绑定
        function bindKeyBoard() {
            $('#keyboard').plateKeyBoard({
                top: 60
            }, chooseKeyCard);
        }
        //自定义处于按键内容
        function chooseKeyCard(value) {
            let currentValue = $("#keyBoardContent").val();
            switch (value) {
                case "后退":
                    if (currentValue == "") return;
                    currentValue = currentValue.slice(0, -1);
                    break;
                case "清除":
                    currentValue = "";
                    break;
                case "关闭":
                    $("#keyboard").hide();
                    break;
                default:
                    currentValue += value;
                    break;
            }
            $("#keyBoardContent").val(currentValue);
        }
    </script>
    ```

- 自定义按钮样式

``` css
.keyCard {
    font-size: 17px;
    width: 100%;
    font-family: 微软雅黑;
    cursor: pointer;
    display:inline-block;
    text-align: center;
}

.keyCard:hover {
    color: royalblue;
    font-size: 20px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
```
