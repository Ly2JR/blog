<template><h1 id="反射加载自定义dll" tabindex="-1"><a class="header-anchor" href="#反射加载自定义dll" aria-hidden="true">#</a> 反射加载自定义DLL</h1>
<ol>
<li>
<p>WPF类库项目<code>UserDll</code>,新建<code>Modules</code>、<code>Views</code>、<code>ViewModels</code>三个文件夹</p>
</li>
<li>
<p>Modules新建类<code>ModuleA.cs</code>继承<code>IModule</code>,Views新建用户控件<code>ViewsA.xaml</code>,ViewModels新建类<code>ViewAViewModel.cs</code>继承<code>BindableBase</code>, <code>INavigationAware</code></p>
</li>
<li>
<p><code>ModuleA</code>类<code>ResiterTypes</code>方法注册</p>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">RegisterTypes</span><span class="token punctuation">(</span><span class="token class-name">IContainerRegistry</span> containerRegistry<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//001对应的点击菜单的ID号</span>
    containerRegistry<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterForNavigation</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ViewsA<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token string">"001"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>将UserDll项目编译，生成文件<code>UserDll.dll</code></p>
</li>
<li>
<p>主页面<code>MainWindowViewModel</code>构造函数里加上<code>IModuleManager</code>、<code>IRegionManager</code>、<code>IContainerProvider</code></p>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IModuleManager</span> _moduleManager<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IRegionManager</span> _regionManager<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IContainerProvider</span> _container<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token function">MainWindowViewModel</span><span class="token punctuation">(</span><span class="token class-name">IContainerProvider</span> container<span class="token punctuation">,</span><span class="token class-name">IRegionManager</span> regionManager<span class="token punctuation">,</span><span class="token class-name">IModuleManager</span> moduleManager<span class="token punctuation">)</span><span class="token punctuation">{</span>
    _container <span class="token operator">=</span> container<span class="token punctuation">;</span>
    _regionManager <span class="token operator">=</span> regionManager<span class="token punctuation">;</span>
    _moduleManager <span class="token operator">=</span> moduleManager<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p>当点击主页面<code>MainWindow</code>上的菜单按钮时(通过菜单ID与注册的ID关联)，加载<code>UserDll.dll</code>文件,通过<code>TabControl</code>控件<code>prism:RegionManager.RegionName=&quot;TabRegion&quot;</code>加载显示</p>
</li>
</ol>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code>   <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadModule</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name"><span class="token keyword">var</span></span> hasModule<span class="token operator">=</span>_moduleManager<span class="token punctuation">.</span><span class="token function">ModuleExists</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>hasModule<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token function">LoadComponent</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
           <span class="token function">ShowView</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token comment">//DLL和类名可以通过数据库配置,加载DLL的文件位置指定，比如统一放在runtime文件夹下</span>
   <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadComponent</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name"><span class="token keyword">var</span></span> asm <span class="token operator">=</span> Assembly<span class="token punctuation">.</span><span class="token function">LoadFrom</span><span class="token punctuation">(</span>AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span>BaseDirectory <span class="token operator">+</span> <span class="token string">"UserDll.dll"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name"><span class="token keyword">var</span></span> type <span class="token operator">=</span> asm<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token string">"UserDll.ModuleA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
       <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token keyword">return</span><span class="token punctuation">;</span>
       <span class="token class-name"><span class="token keyword">var</span></span> moduleCatalog<span class="token operator">=</span>_container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IModuleCatalog<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       moduleCatalog<span class="token punctuation">.</span><span class="token function">AddModule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ModuleInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           ModuleName<span class="token operator">=</span>id<span class="token punctuation">;</span>
           ModuleType<span class="token operator">=</span>type<span class="token punctuation">.</span>AssemblyQualifiedName<span class="token punctuation">,</span>
           InitializationMode <span class="token operator">=</span> InitializationMode<span class="token punctuation">.</span>WhenAvailable<span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token function">ShowView</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ShowView</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
       _moduleManager<span class="token punctuation">.</span><span class="token function">LoadModule</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name"><span class="token keyword">var</span></span> otherParams<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">NavigationParameters</span><span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
       _regionManager<span class="token punctuation">.</span><span class="token function">RequestNavigate</span><span class="token punctuation">(</span><span class="token string">"TabRegion"</span>，menuId<span class="token punctuation">,</span>NavigationComplete<span class="token punctuation">,</span> otherParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   ```
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></template>
