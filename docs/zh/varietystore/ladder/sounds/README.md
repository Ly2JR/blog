# 播放声音

[官方传送门](https://docs.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=netframework-4.8)

::: tip
using System.Speech.Synthesis;
:::

:::: code-group

::: code-group-item cs

``` cs
using (SpeechSynthesizer speech = new SpeechSynthesizer())
{
    speech.Rate = 0;
    speech.Volume = 10;
    speech.Speak("HelloWorld");
}
```

:::

::::
