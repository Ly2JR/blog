# XAML概览

## XAML是什么

XAML的全称是Extensible Application Markup Language,即可扩展应用呈祥标记语言。它在桌面开发及富媒体网络程序的开发中扮演了HTML+CSS+JavaScript的角色、成为设计师与程序员之间沟通的枢纽。

在WPF出现之前，以往的开发模式中，程序员很难保证用来实现UI的代码完全不与用来实现程序逻辑的代码纠缠在一起。UI代码与逻辑代码纠缠在一起成为UI与逻辑的紧耦合，它往往带来以下的后果。

1. 无论是软件的功能还是UI设计有所变化或者是出现了BUG,都将导致大量代码的修改。
2. 会让逻辑代码更加难以理解---修改往往比重写更困难，因为在修改之前必须现读懂。
3. 重用逻辑代码变成了Mission Impossible。

## XAML的优点

1. XAML可以设计出专业的UI和动画---好用。
2. XAML不需要专业的编程知识，它简单易懂、结构清晰---易学。
3. XAML使设计师能直接参与软件开发，随时沟通、无需二次转化---高效。
4. XAML真正实现了UI与逻辑的剥离。

XAML是一种单纯的申明型语言，它只能用来声明一些UI元素、绘制UI和动画(在XAML里实现动画是不需要编程的),根本无法在其中家入程序逻辑，这就强制地把逻辑代码从UI代码中赶走了。这样，与UI相关的元素统统集中在程序的UI层、与逻辑相关的代码统统集中在程序逻辑层，形成一种"高内聚-低耦合"的结构。
