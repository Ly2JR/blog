<template><h1 id="播放声音" tabindex="-1"><a class="header-anchor" href="#播放声音" aria-hidden="true">#</a> 播放声音</h1>
<p><a href="https://docs.microsoft.com/zh-cn/dotnet/api/system.speech.synthesis.speechsynthesizer?view=netframework-4.8" target="_blank" rel="noopener noreferrer">官方传送门<ExternalLinkIcon/></a></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>using System.Speech.Synthesis;</p>
</div>
<CodeGroup>
<CodeGroupItem title="cs">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">SpeechSynthesizer</span> speech <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SpeechSynthesizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    speech<span class="token punctuation">.</span>Rate <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    speech<span class="token punctuation">.</span>Volume <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    speech<span class="token punctuation">.</span><span class="token function">Speak</span><span class="token punctuation">(</span><span class="token string">"HelloWorld"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
