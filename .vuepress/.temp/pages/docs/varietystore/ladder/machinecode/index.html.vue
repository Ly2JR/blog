<template><h1 id="机器码" tabindex="-1"><a class="header-anchor" href="#机器码" aria-hidden="true">#</a> 机器码</h1>
<p><a href="https://stackoverflow.com/questions/99880/generating-a-unique-machine-id" target="_blank" rel="noopener noreferrer">Stackoverflow<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>注册表</p>
<p><code>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Cryptography</code></p>
</li>
<li>
<p>PowerShell</p>
<p><code>get-wmiobject Win32_ComputerSystemProduct |  select-Object -expandProperty UUID</code></p>
<ul>
<li>代码</li>
</ul>
<CodeGroup>
<CodeGroupItem title="Donet PowerShell">
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">GetUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token class-name"><span class="token keyword">var</span></span> getDiskUUID <span class="token operator">=</span> <span class="token string">"get-wmiobject Win32_ComputerSystemProduct  | Select-Object -ExpandProperty UUID"</span><span class="token punctuation">;</span>
  <span class="token class-name"><span class="token keyword">var</span></span> oProcess <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name"><span class="token keyword">var</span></span> oStartInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProcessStartInfo</span><span class="token punctuation">(</span><span class="token string">"powershell.exe"</span><span class="token punctuation">,</span> getDiskUUID<span class="token punctuation">)</span><span class="token punctuation">;</span>
  oStartInfo<span class="token punctuation">.</span>UseShellExecute <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  oStartInfo<span class="token punctuation">.</span>RedirectStandardInput <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  oStartInfo<span class="token punctuation">.</span>RedirectStandardOutput <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  oStartInfo<span class="token punctuation">.</span>CreateNoWindow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  oProcess<span class="token punctuation">.</span>StartInfo<span class="token operator">=</span> oStartInfo<span class="token punctuation">;</span>
  oProcess<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  oProcess<span class="token punctuation">.</span><span class="token function">WaitForExit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name"><span class="token keyword">var</span></span> uuid<span class="token operator">=</span>oProcess<span class="token punctuation">.</span>StandardOutput<span class="token punctuation">.</span><span class="token function">ReadToEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> uuid<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="VB PowerShell">
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Function</span> GetUUID<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
  <span class="token keyword">Dim</span> GetDiskUUID <span class="token keyword">As</span> <span class="token keyword">String</span> <span class="token operator">=</span> <span class="token string">"get-wmiobject Win32_ComputerSystemProduct  | Select-Object -ExpandProperty UUID"</span>
  <span class="token keyword">Dim</span> X <span class="token keyword">As</span> <span class="token keyword">String</span> <span class="token operator">=</span> <span class="token string">""</span>
  <span class="token keyword">Dim</span> oProcess <span class="token keyword">As</span> <span class="token keyword">New</span> Process<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">Dim</span> oStartInfo <span class="token keyword">As</span> <span class="token keyword">New</span> ProcessStartInfo<span class="token punctuation">(</span><span class="token string">"powershell.exe"</span><span class="token punctuation">,</span> GetDiskUUID<span class="token punctuation">)</span>
  oStartInfo<span class="token punctuation">.</span>UseShellExecute <span class="token operator">=</span> <span class="token boolean">False</span>
  oStartInfo<span class="token punctuation">.</span>RedirectStandardInput <span class="token operator">=</span> <span class="token boolean">True</span>
  oStartInfo<span class="token punctuation">.</span>RedirectStandardOutput <span class="token operator">=</span> <span class="token boolean">True</span>
  oStartInfo<span class="token punctuation">.</span>CreateNoWindow <span class="token operator">=</span> <span class="token boolean">True</span>
  oProcess<span class="token punctuation">.</span>StartInfo <span class="token operator">=</span> oStartInfo
  oProcess<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span>
  oProcess<span class="token punctuation">.</span>WaitForExit<span class="token punctuation">(</span><span class="token punctuation">)</span>
  X <span class="token operator">=</span> oProcess<span class="token punctuation">.</span>StandardOutput<span class="token punctuation">.</span>ReadToEnd
  <span class="token keyword">Return</span> X<span class="token punctuation">.</span>Trim<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
</li>
</ul>
</template>
