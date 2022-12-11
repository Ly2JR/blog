# [快速参考](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expression-language-quick-reference)

## 字符转义

正则表达式中的反斜杠字符(\)指示其后跟的字符是特殊字符(如下表所示),或应按原义解析该字符。

|转义字符|描述|模式|匹配|
|:-|:-|:-|:-|
|`\a`|与报警(bell)符\u0007匹配|`\a`|`"Error!"+'\u0007'`中的`"\u0007"`|
|`\b`|在字符类中,与退格键\u0008匹配|`[\b]{3,}`|`"\b\b\b\b"`中的`"\b\b\b\b"`|
|`\t`|与制表符\u0009匹配|`(\w+)\t`|`"item1\titem2\t"`中的`"item1\t"`和`"item2\t"`|
|`\r`|与回车符\u000D匹配。(`\r`与换行符`\n`不是等效的。)|\r\n(\w+)|`"\r\nThese are\ntwo lines."`中的`"\r\nThere"`|
|`\v`|与垂直制表符\u000B匹配|`[\v]{2,}`|`"\v\v\v"`中的`"\v\v\v"`|
|`\f`|与换页符\u000C匹配|`[\f]{2,}`|`"\f\f\f"`中的`"\f\f\f"`|
|`\n`|与换行符\u000A匹配。|`\r\n(\w+)`|`"\r\nThese are\ntwo lines."`中的`"\r\nThere"`|
|`\e`|与转义符\u001B匹配|`\e`|`"\x001B"`中的`"\x001B"`|
|`\` nnn|使用八进制表示形式指定字符(nnn由二位或三位数字组成)|`\w\040\w`|`"a bc d"`中的`"a b"`和`"c d"`|
|`\x` nn|使用十六进制表示形式指定字符(nn恰好由两位数字组成)|`\w\x20\w`|`"a bc d"`中的`"a b"`和`"c d"`|
|`\c` X `\c`x|匹配X或x指定的ASCII控制字符,其中X或x是控制字符的字母|`\cC`|`"\x0003"`中的`"\x0003"`(Ctrl-C)|
|`\u` nnnn|使用十六进制表示形式匹配Unicode字符(由nnnn正确表示的四位数)。|`\w\u0020\w`|`"a bc d"`中的`"a b"`和`"c d"`|
|`\`|在后面带有不识别2位本主题的此表和其他表中的转义符的字符时,与该字符匹配.例如,`\*`与`\x2A`相同,而`\.`与`\x2E`相同。这郧西正则表达式引擎区分语言元素(如*或?)和字符(用`\*`或`\?`表示)。|`\d+[\+-x\*]\d+`|`"(2+2)*3*9"`中的`"2+2"`和`"3*9"`|

## 字符类

字符类与一组字符中的任何一个字符匹配。字符类包括下表中列出的语言元素。

|字符类|描述|模式|匹配|
|:-|:-|:-|:-|
|`[`character_group`]`|匹配character_group中的任何单个字符。默认情况下,匹配区分大小写|`[ae]`|`"gray"`中的`"a"`|
|`[^`character_group`]`|求反:与不在character_group中的任何单个字符匹配。默认情况下,character_group中的字符区分大小写。|`[^aei]`|`"reign"`中的`"r"`、`"g"`和`"n"`|
|`[`first`-`last`]`|字符范围:与从第一个至最后一个的范围内的任何单个字符匹配。|`[A-Z]`|`"AB123"`中的`"A"`和`"B"`|
|`.`|通配符:与除\n之外的任何单个字符匹配。 若要匹配文本句点字符(.或`\u002E`),你必须在该字符前面加上转义字符(`\.`)。|`a.e`|`"nave"`中的`"ave"` `"water"`中的`"ate"`|
|`\p{`name`}\p{`|与name指定的Unicode通用类别或命名块中的任何单个字符匹配|`\p{Lu}` `\p{IsCyrillic}`|`"City Lights"`中的`"C"`和`"L"` `"ДЖem"`中的`"Д"`和`"Ж"`|
|`\P{`name`}\P{`|与不在name指定的Unicode通用类别或命名块中的任何单个字符匹配|`\P{Lu}` `\P{IsCyrillic}`|`"City"`中的`"i"`、`"t"`、`"y"` `"ДЖem"`中的`"e"`和`"m"`|
|`\w`|与任何单词字符匹配。|`\w`|`"ID A1.3"`中的`"I"`、`"D"`、`"A"`、`"1"`、`"3"`|
|`\W`|与任何非单词字符匹配。|`\W`|`"ID A1.3"`中的`" "`、`"."`|
|`\s`|与任何空白字符匹配。|`\w\s`|`"ID A1.3"`中的`"D "`|
|`\S`|与任何非空白字符匹配。|`\s\S`|`"INT __ctr"`中的`" _"`|
|`\d`|与任何十进制数字匹配。|`\d`|`"4 = IV"`中的`"4"`|
|`\D`|与任何不是十进制数字匹配。|`\D`|`"4 = IV"`中的`" "`、`"="`、`" "`、`"I"`和`"V"`|

## 定位点

定位点或原子零宽度断言会使匹配成功或失败,具体取决与字符串中的当前位置，但它们不会使引擎在字符串中前进或使用字符。下表中列出的元字符是定位点。

|断言|说明|模式|匹配|
|:-|:-|:-|:-|
|`^`|默认情况下,必须从字符串的开头开始匹配;在多行模式中，必须从该行的开头开始。|`^\d{3}`|`"901-333-"`中的`"901"`|
|`$`|默认情况下,匹配必须出现在字符串的末尾，或在字符串末尾的`\n`之前;在多行模式中,必须在改行的末尾之前，或者该行末尾的`\n`之前。|`-\d{3}$`|`"901-333-"`中的`"-333"`|
|`\A`|匹配必须出现在字符串的开头|`\A\d{3}`|`"901-33-"`中的`"901"`|
|`\Z`|匹配必须出现在字符串的末尾或出现在字符串末尾的`\n`之前。|`-\d{3}\Z`|`"901-33-"`中的`"-333"`|
|`\z`|匹配必须出现在字符串的末尾|`-\d{3}\z`|`"901-33-"`中的`"-333"`|
|`\G`|匹配必须在上一个匹配结束的位置进行;如果以前没有匹配想，则从开始进行匹配的字符串中的位置开始。|`\G(\d\)`|`"(1)(3)(5)[7](9)"`中的`"(1)"`、`"(3)"`、`"(5)"`|
|`\b`|匹配必须出现在`\w`(字母数字)和`\W`(非字母数字)字符之间的边界上。|`\b\w+\s\w+\b`|`"them theme them them"`中的`"them theme"`和`"them them"`|
|`\B`|匹配不得出现在`\b`边界上。|`\Bend\w*\b`|`"end sends endure lender"`中的`"ends"`和`"ender"`|

## 分组构造

分组构造描述了正则表达式的子表达式,通常用于捕获输入字符串的子字符串。分组构造包括下表中列出的语言元素。

|分组构造|描述|模式|匹配|
|:-|:-|:-|:-|
|`(`subexpression`)`|捕获匹配的子表达式并将其分配到一个从1开始的序号中。|`(\w)\1`|`deep`中的`"ee"`|
|`(?<`name`>`subexpression`)` 或`(?'`name`'`subexpression`)`|将匹配的子表达式捕获到一个命名组中|`(?<double>\w)\k<double>`|`"deep"`中的`ee`|
|`(?<`name1`-`name2`>`subexpression`)` 或`(?'`name1`-`name2`'`subexpression`)`|定义平衡组定义|`(((?'Open'\()[^\(\)]*)+((?'Close-open'\))[^\(\)]*)+)*(?(open)(?!))$`|`"3+2^((1-3)*(3-1))"`中的`"((1-3))*(3-1)"`|
|`(?:`subexpression`)`|定义非捕获组。|`Write(?:Line)?`|`"Console.WirteLine()"`中的`"WriteLine"` `"Console.Write(value)"`中的`"Write"`|
|`(?imnsx-imnsx:`subexpression`)`|应用或禁用*子表达式*中指定的选项。|`A\d{2}(?:\w+)\b`|`"A12x1 A12XL a12x1"`中的`"A12x1"`和`"A12XL"`|
|`(?!)`subexpression`)`|零宽度正预测先行断言。|`\b\w+\b(?=.+and.+)`|`"cats"`,`"dogs"` in `"cates,dogs and some mice"`|
|`(?!)`subexpression`)`|零宽度负预测先行断言。|`\b\w+\b(?!=.+and.+)`|`"and"`,`"some"`,`"mice"` in `"cats,dogs and some mice."`|
|`(?<=`subexpression`)`|零宽度正回顾后发断言。|`\b\w+\b(?<=.+and.+)` `\b\w+\b(?<=.+and.*)`|`"some"`,`"mice"` in `"cats,dogs and some mice."` `"and"`,`"some"`,`"mice"`in`"cats,dogs and some mice."`|
|`(?!`subexpression`)`|零宽度负回顾后发断言。|`\b\w+\b(?!.+and.+)` `\b\w+\b(?!.+and.*)`|`"cats"`,`"dogs"`,`"and"` in `"cats,dogs and some mice."`   `"cats"`,`"dogs"`in`"cats,dogs and some mice."`|
|`(?>`subexpression`)`|原子组|`(?a\|ab)c)`|`"ac"`中的`"ac"`;`"abc"`中无匹配|

## Lookaround概览

当正则表达式引擎命中Lookaround表达式时,其需要一个子字符串从当前位置到达原始字符串的开始(后行)或结束(先行),然后使用Lookaround模式在该子字符串上运行Regex.IsMatch。然后，根据此子表达式的结果是正断言还是负断言，可判断其结果是否成功。

|Lookaround|名称|函数|
|:-|:-|:-|
|`(?=check)`|正预测先行|断言字符串中紧随当前位置之后的内容是"check"|
|`(?<=check)`|正预测先行|断言字符串中紧随当前位置之前的内容是"check"|
|`(?!check)`|负预测先行|断言字符串中紧随当前位置之后的内容并非"check"|
|`(?<!check)`|负预测先行|断言字符串中紧随当前位置之前的内容并非"check"|

结果匹配后，不会再次重新计算原子组，即使该模式的其余部分由于匹配而失败。当限定符出现在原子组内或模式的其他部分时，可显著提高性能。

## 数量词

限定符指定在输入字符串中必须存在上一个元素(可以是字符、组或字符类)的多少个实例才能出现匹配项。限定符包括下表中列出 语言元素。

|限定符|描述|模式|匹配|
|:-|:-|:-|:-|
|`*`|匹配上一个元素零次或多次。|`a.*c`|`"abcbc"`中的`"abcbc"`|
|`+`|匹配上一个元素一次或多次。|`be+`|`"been"`中的`"bee"`、`"bent"`中的`"be"`|
|`?`|匹配上一个元素零次或一次。|`rai?`|`"rain"`中的`"rai"`|
|`{`n`}`|匹配上一个元素恰好n次。|`,\d{3}`|`"1,043.6"`中的`",043"`、`"9,876,432,210"`中的`",876"`、`",543"`、`",210"`|
|`{`n`,}`|匹配上一个元素至少n次|`"\d{2,}"`|`"166"`,`"29"`,`"1930"`|
|`{`n`,`m`}`|匹配上一个元素至少n次，但不多于m次。|`\d{3,5}`|`"166"`,`"17668"`,`"193024"`中的`"166"`、`"17668"`和`"19302"`|
|`*?`|匹配上一个元素零次或多次，但次数尽可能少。|`a.*?c`|`"abcbc"`中的`"abc"`|
|`+?`|匹配上一个元素一次或多次，但次数尽可能少。|`be+?`|`"been"`中的`"be"`、`"bent"`中的`"be"`|
|`??`|匹配上一个元素零次或一次，但次数尽可能少。|`rai?`|`"rain"`中的`"ra"`|
|`{`n`}?`|匹配前面的元素恰好n次|`,\d{3}?`|`"1,043.6"`中的`"0,43"`、`"9,876,543,210"`中的`",876"`、`",543"`、`",210"`|
|`{`n`,}?`|匹配前面的元素至少n次,但次数尽可能少|`,\d{2,}?`|`"166"`中的`"16"`,`"29"`中的`"29"`,`"1930"`中的`"19"`和`"30"`|
|`{`n`,`m`}?`|匹配前面的元素的次数介于n和m之间,但次数尽可能少|`,\d{3,5}?`|`"166"`中的`"166"`,`"17668"`中的`"176"`,`"193024"`中的`"193"`和`"024"`|

## 反向引用构造

反向引用允许在同一正则表达式中随后标识以前匹配的子表达式。下表列出了.NET正则表达式支持的反向应用构造。

|反向引用构造|描述|模式|匹配|
|:-|:-|:-|:-|
|`\`number`\`|后向引用。匹配编号子表达式的值。|`(\w)\1`|`"seek"`中的`"ee"`|
|`\k<`name`>\k<`|命名向后引用。匹配命名表达式的值。|`(?<char)\w)\k<char`|`"seek"`中的`"ee"`|

## 替换构造

替换构造用于修改正则表达式以启用either/or匹配。这些构造包括下表中列出的语言元素。

|替换构造|描述|模式|匹配|
|:-|:-|:-|:-|
|`\|`|匹配以竖线(`\|`)字符分隔的任何一个元素。|`th(e\|is\|at)`|`"this is the day."`中的`"the"`和`"this"`|
|`(?(`expression`)`yes`\|`no`)` 或`(?(`expression`)`yes`)`|如果由expression指定的正则表达式模式匹配，则匹配yes;否则，匹配no部分。expression解释位零宽度的断言。 为了避免已命名或已编号的捕获组出现歧义，可选择使用显式断言,如下所示:`(?((?=`expression`))`yes`\|`no`)`|`(?(A)A\d{2}\b\|\b\d{3}\b)`|`"A10 C103 910"`中的`"A10"`和`"910"`|
|`(?(`name`)`yes`\|`no`)` 或`(?(`name`)`yes`)`|如何name(已命名或已编号的捕获组)具有匹项,则匹配yes;否则,匹配no。|`(?<quoted>")?(?(quoted).+?"\|\S+\s)`|`"Dogs.jpg \"Yiska playing.jpg\""`中的`"Dogs.jpg"`和`"\"Yiska playing.jpg\""`|

## 替代

替换是替换模式中支持的正则表达式语言元素。下表列出的元字符是原子零宽度断言。

|字符|说明|模式|替换模式|输入字符串|结果字符串|
|:-|:-|:-|:-|:-|:-|
|`$`number`$`|替换按组number匹配的子字符串。|`\b(\w+)(\s)(\w+)\b`|`$3$2$1$`|`"one two"`|`"two one"`|
|`${`name`>${`|替换按命名组name匹配的子字符串。|`\b(?<word1>\w+)(\s)(?<word2>\w+)\b`|`${word2}` `${word1}$`|`"one two"`|`"two one"`|
|`$$`|替换字符"\$"。|`\b(\d+)\s?USD`|`$$$1`|`"103 USD"`|`"$103"`|
|`$&`|替换整个匹配项的一个副本。|`\$?\d*\.?\d+`|`**%&**`|`"$1.30"`|`"**$1.30**"`|
|`$ˋ`|替换匹配前的输入字符串的所有文本。|`B+`|`$ˋ`|`"AABBCC"`|`"AAAACC"`|
|`$'`|替换匹配后的输入字符串的所有文本。|`B+`|`$'`|`"AABBCC"`|`"AACCCC"`|
|`$+`|替换最后捕获的组。|`B+(C+)`|`$+`|`"AABBCCDD"`|`"AACCDD"`|
|`$_`|替换整个输入字符串。|`B+`|`$_`|`"AABBCC"`|`"AAAABBCCCC"`|

## 正则表达式选项

可以指定控制正则表达式引擎如何解释正则表达式模式的选项。其中的许多选项可以指定为内联(在正则表达式模式中)或指定为一个或多个RegexOptions常量.本快速参考仅列出内联选项。

可通过两种方式指定内联选项:

- 通过使用其他构造`(?imnsx-imnsx)`,可用选项或选项组前的减号(-)关闭这些选项。例如,`(?imn)`启用不区分大小写的匹配(`i`),关闭多行模式(`m`)并关闭未命名的组捕获(`n`)。该选项自定义选项的点开始应用于此正则表达式，且持续有效直到模式结束或者到另一构造反转此选项的点。
- 通过使用分组构造`(?imnsx-imnsx:`子表达式`)`(只定义指定组的选项)。

.NET正则表达式引擎支持一下内联选项:

|选项|说明|模式|匹配|
|:-|:-|:-|:-|
|`i`|使用不区分大小写的匹配。|`\b(?i)a(?-i)a\w+\b`|`"aardvard AAAuto aaaAuto Adambreakfast"`中的`"aardvark"`和`"aaaAuto"`|
|`m`|使用多行模式。`^`和`$`匹配行的开头和结尾,但不匹配字符串的开头和结尾。|
|`n`|不捕获未命名的组。|
|`s`|使用单行模式。|
|`x`|忽略正则表达式模式中的非转义空白。|`\b(?x) \d+ \s \w+`|`"1 aardvark 2 cats IV centurions"`中的`"1 aardvark"`和`"2 cats"`|

## 其他构造

其他构造可修改某个正则表达式模式或提供有关该模式的信息。下表列出了.NET支持的其他构造。

|构造|定义|示例|
|:-|:-|:-|
|`(?imnsx-imnsx)`|在模式中间对诸如不区分大小写这样的选项进行设置或禁用。|`\bA(?i)b\w+\b`匹配`"ABA Able Act"`中的`"ABA"`和`"Able"`|
|`(?#`comment`)`|内联注释。该注释在第一个右括号处终止。|`\bA(?#Matches words starting with A)\w+\b`|
|`#`[至行尾]|X模式注释。该注释以非转义的`#`开头,并继续到行的结尾。|`(?x)\bA\w+\b#Matches words starting with A`|