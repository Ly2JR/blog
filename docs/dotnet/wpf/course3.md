# 系统学习XAML语法

我们已经知道XAML是一种专门用于绘制UI的语言，借助它可以把UI定义于运行逻辑分离开来。XAML使用标签定义UI元素(UI Element)，每个标签对应.NET Framework类库中的一个控件类。通过设置标签的Attribute，不但可以对标签所对应的控件的Property进行赋值，还可以做一些额外的事件(如声明控件、指定类名等)。

## XAML文档的树形结构

UI在用户眼里是个平面结构。

在传统的Visual C++、Delphi、Visual Basic 6和Windows Form程序员的思维里，UI也是一个平面的结构。因此，程序员要做的事情就是按照设计师给定的UI布局把控件安置在窗体表面，并使用长度、宽度和间距把控件对齐。

与传统设计思维不同，XAML使用树形逻辑结构来描述UI。

```xml
<Window x:Class="Head.First.Window1"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:Head.First"
        mc:Ignorable="d"
        Title="Window1" Height="173" Width="296">
    <StackPanel Background="LightBlue">
        <TextBox x:Name="textBox1" Margin="5"/>
        <TextBox x:Name="textBox2" Margin="5"/>
        <StackPanel Orientation="Horizontal">
            <TextBox x:Name="textBox3" Margin="5" Width="140"/>
            <TextBox x:Name="textBox4" Margin="5" Width="120"/>
        </StackPanel>
        <Button x:Name="button1" Margin="5">
            <Image Source="Images/p0009.png" Width="23" Height="23"/>
        </Button>
    </StackPanel>
</Window>
```

如果我们把对Attribute的赋值都去掉，那么上面这段代码就显露出了它的树形框架结构。

```xml
<Window >
    <StackPanel>
        <TextBox/>
        <TextBox/>
        <StackPanel>
            <TextBox/>
            <TextBox/>
        </StackPanel>
        <Button>
            <Image/>
        </Button>
    </StackPanel>
</Window>
```

有意思的是，针对同一个"看上去一样"的UI布局，XAML代码不一定是唯一的。那上面的UI布局来说，还可以使用不同的XAML代码来描述它。

```xml
<Window x:Class="Head.First.Window2"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:Head.First"
        mc:Ignorable="d"
        Title="Window2" Height="175" Width="300">
    <Grid Background="LightSlateGray">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="7*"></ColumnDefinition>
            <ColumnDefinition Width="3*"></ColumnDefinition>
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition Height="33"/>
            <RowDefinition Height="33"/>
            <RowDefinition Height="33"/>
            <RowDefinition Height="40"/>
        </Grid.RowDefinitions>
        <TextBox x:Name="textBox1" Grid.Column="0" Grid.Row="0" Grid.ColumnSpan="2" Margin="5"/>
        <TextBox x:Name="textBox2" Grid.Column="0" Grid.Row="1" Grid.ColumnSpan="2" Margin="5"/>
        <TextBox x:Name="textBox3" Grid.Column="0" Grid.Row="2" Grid.ColumnSpan="1" Margin="5"/>
        <TextBox x:Name="textBox4" Grid.Column="1" Grid.Row="2" Grid.ColumnSpan="1" Margin="5"/>
        <Button x:Name="button" Grid.Column="0" Grid.Row="3" Grid.ColumnSpan="2" Margin="5">
            <Image Source="Images/p0009.png" Width="23" Height="23"></Image>
        </Button>
    </Grid>
</Window>
```

精简后的代码

```xml
<Window>
    <Grid>
        <Grid.ColumnDefinitions>
            <ColumnDefinition/>
            <ColumnDefinition/>
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition/>
            <RowDefinition/>
            <RowDefinition/>
            <RowDefinition/>
        </Grid.RowDefinitions>
        <TextBox/>
        <TextBox/>
        <TextBox/>
        <TextBox/>
        <Button>
            <Image/>
        </Button>
    </Grid>
</Window>

```

尽管两段代码对UI的实现方式不同(实际上还有很多方法)，但框架都是树状的，以`<Windows>`对象为根结点，一层一层向下包含。这种树形结构对于WPF整个体系都具有非常重要的意义，它不但影响着UI的布局设计，还深刻地影响着WPF的属性(Property)子系统和事件(Event)子系统等方方面面。在实践编程中，我们经常要在这颗树上进行按名称查找元素、获取父/子节点等操作，为了方便操作这颗树，WPF基本类库里为程序员准备了`VisualTreeHelper`和`LogicalTreeHelper`两个助手类(`Helper Class`)，同时还在一些重要的基类里封装了一些专门用于操作这颗树的方法。

如果你期望用户在改变窗体尺寸后控件能够成比例缩放自己的尺寸，那么应该选用第二段代码；如果只期望控件在纵向上做一个简单排列，第一段代码就已足够。

## XAML中为对象属性赋值的语法
